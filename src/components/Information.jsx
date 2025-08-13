import React from 'react'
import ImgPersional from '../assets/me.jpg';

const Information = () => {
  return (
    <div className='flex'>
        <div className='relative flex items-center justify-around bg-[#faf2ef] w-[50%] h-[744px]'>
            <img className='w-[80%] h-[90%] object-contain p-8' src={ImgPersional} alt='Anh'/>
        </div>
        <div className='flex flex-col justify-center w-[50%] py-4 px-22 text-[#414141]'>
          <h1 className='text-[42px]'>Hi, I'm Duong Van Thang</h1>
          <p className='text-[20px] pt-4' >
            A mental health blogger. Passionate about sharing thoughts and information on everything that makes my days better.
          </p>
          <p className='text-[16px] pt-4'>
            I’m a passionate Web Developer with a strong focus on building responsive and user-friendly websites.
            I specialize in technologies like HTML, CSS, JavaScript, and modern frameworks such as React and Laravel.
            My goal is to create digital experiences that are both visually appealing and highly functional.
            I enjoy solving complex problems and turning ideas into fully working web applications.
            Always eager to learn, I keep myself updated with the latest trends in web development.
          </p>

          <button className='text-[16px] max-w-[176px] outline mt-[56px] px-6 py-3 cursor-pointer'>Read more</button>
        </div>
    </div>
  )
}

export default Information