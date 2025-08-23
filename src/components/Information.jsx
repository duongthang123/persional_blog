import React from 'react'
import ImgPersional from '../assets/me.jpg';

const Information = () => {
  return (
    <div className='flex'>
        <div className='relative flex items-center justify-around bg-[#faf2ef] w-[50%] h-[744px]'>
            <img className='w-[80%] h-[90%] object-contain p-8' src={ImgPersional} alt='Anh'/>
        </div>
        <div className='flex flex-col items-center justify-center w-[50%]'>
          <h1 className='text-[42px]'>Hi, I'm Duong Van Thang</h1>
          <p className='text-[16px] py-4 px-22'>I’m a passionate Web Developer with a strong focus on building responsive and user-friendly websites.
            I specialize in technologies like HTML, CSS, JavaScript, and modern frameworks such as React and Laravel.
            My goal is to create digital experiences that are both visually appealing and highly functional.
            I enjoy solving complex problems and turning ideas into fully working web applications.
            Always eager to learn, I keep myself updated with the latest trends in web development.
          </p>
        </div>
    </div>
  )
}

export default Information