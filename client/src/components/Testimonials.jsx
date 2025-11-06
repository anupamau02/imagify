import React from 'react'
import { testimonialsData, assets } from '../assets/assets'
import {motion} from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div 
    initial={{ opacoty: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
    
    className='flex flex-col items-center justify-center my-20 py-12 '>
      
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'> Customer Testimonials</h1>
      <p className='text-gray-500 mb-12'>what our users are saying</p>
    
    <div className='w-full max-w-6xl'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='bg-white/80 p-4 rounded-lg shadow-md flex gap-4 items-start'>
            <img src={testimonial.image} alt={testimonial.name} className='w-14 h-14 rounded-full object-cover' />
            <div>
              <h3 className='font-medium'>{testimonial.name}</h3>
              <p className='text-sm text-gray-500'>{testimonial.role}</p>
              <div className='flex items-center mt-1'>
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <img
                    key={i}
                    src={assets.rating_star}
                    alt={`${i + 1} star`}
                    className='w-4 h-4 mr-1'
                  />
                ))}
              </div>
              <p className='text-sm text-gray-600 mt-2'>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </motion.div>




  )
}

export default Testimonials
