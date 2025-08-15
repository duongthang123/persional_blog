import React from 'react'
import ImgPersional from '../assets/me.jpg';

const Information = () => {
  return (
    <div className='flex'>
        <div className='relative flex items-center justify-around bg-[#eaf6ff] w-[50%] h-[744px]'>
            <img className='w-[80%] h-[90%] object-contain p-8' src={ImgPersional} alt='Anh'/>
        </div>
        <div className='flex flex-col items-center justify-center w-[50%] py-4 px-22 text-[#414141]'>
          <p className='text-[16px]'>Xin chào! Tôi là</p>
          <h1 className='text-[38px] text-[#65b9f8] font-[550]'>Dương Văn Thắng</h1>
          <p className='text-[20px] font-[450]'>
            Web Developer
          </p>

          <div className="w-[80px] h-[2px] bg-[#65b9f8] mt-12"></div>
          <div className='flex flex-row justify-between items-center text-[16px] cursor-pointer mt-8'>
            <button className='p-2 mx-2 min-w-[120px] border-[2px] rounded-[8px] border-[#65b9f8] cursor-pointer font-[450]'>Giới thiệu</button>
            <button className='p-2 mx-2 min-w-[120px] border-[2px] rounded-[8px] text-[#fff] bg-[#65b9f8] border-[#65b9f8] font-[450] cursor-pointer'>Tải CV</button>
          </div>

          <nav className=''>
            <a href=''></a>
            <a href=''></a>
            <a href=''></a>
            <a href=''></a>
          </nav>

        </div>
    </div>
  )
}

export default Information