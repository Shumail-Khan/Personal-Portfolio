import React from 'react'
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
            <div className='flex-1 mb-4 md:mb-0'>
                <h3 className='text-2xl font-bold mb-2'>Shumail</h3>
                <p className='text-gray-400'>Full-Stack Developer, specializing in Web and Software Development</p>
            </div>
            <div className='flex-1 w-full'>
                <form action="" className='flex items-center justify-center'>
                    <input type="email" placeholder='Enter Email' 
                    className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'/>
                    <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg'>Subscribe</button>
                </form>
            </div>

        </div>
      </div>
    <div>
        <p>
            &copy; {new Date().getFullYear()}
        </p>
    </div>
    <div>
        <a href="">
            <FaFacebook/>
        </a>
        <a href="">
            <FaLinkedin/>
        </a>
        <a href="">
            <FaGithub/>
        </a>
    </div>
    <div>
        <a href="">
            Privacy
        </a>
        <a href="">
            Terms of Service
        </a>
    </div>
    <div>
        <p>
            &copy; 2021 Shumail Khan. All rights reserved.
        </p>
    </div>

    </footer>
  )
}

export default Footer
