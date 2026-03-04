import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
          <div className='container mx-auto px-8 mg:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
            <div  className='flex flex-col md:flex-row items-center md:space-x-12'>
                <div className='flex-1'>
                    <h3>Contact Me</h3>
                    <p>I'm open to discussing web development projects or patnership opportunities</p>
                    <div className='mb-4 mt-8'>
                        <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                        <a href="mailto:shumailkhan7878@gmail.com">
                            Shumail Khan
                        </a>
                    </div>
                    <div className='mb-4 mt-8'>
                        <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                        <span>+923318500836</span>
                    </div>
                    <div className='mb-4 mt-8'>
                        <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                        <span>Street, City, Province, Country</span>
                    </div>
                </div>
                <div className='flex-1 w-full'>
                    <form action="" className='space-y-4'>
                        <div>
                            <label htmlFor="name" className='block mb-2'>Your name</label>
                            <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter Your Name'/>
                        </div>
                        <div>
                            <label htmlFor="email" className='block mb-2'>Email</label>
                            <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter Your Name'/>
                        </div>
                        <div>
                            <label htmlFor="message" className='block mb-2'>Message</label>
                            <textarea type="text" 
                            className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' 
                            rows='5'
                            placeholder='Enter Your Name'/>
                        </div>
                        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
                    </form>
                </div>
                
    
                
            </div>
          </div>
        </div>
  )
}

export default Contact
