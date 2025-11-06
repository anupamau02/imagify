import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use(cors())

await connectDB()

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
app.get('/', (req, res) => res.send("API  working"))

// debug: list all registered routes
const listRoutes = () => {
	console.log('Registered routes:')
	const stack = app._router && app._router.stack
	if (!stack) return
	stack.forEach((layer) => {
		if (layer.route && layer.route.path) {
			const methods = Object.keys(layer.route.methods).join(',').toUpperCase()
			console.log(methods, layer.route.path)
		} else if (layer.name === 'router' && layer.handle && layer.handle.stack) {
			layer.handle.stack.forEach((l) => {
				if (l.route && l.route.path) {
					const methods = Object.keys(l.route.methods).join(',').toUpperCase()
					// prefix with parent path if available
					const parent = layer.regexp && layer.regexp.source ? (layer.regexp.source.replace('^\\/', '/').replace('\\/?(?=\/|$)', '')) : ''
					console.log(methods, (parent || '') + l.route.path)
				}
			})
		}
	})
}


app.listen(PORT, () => console.log("Server running on port " + PORT))