import flagIMG from "../assets/codosaovang.png";


const Header = () => {
  return (
    <div className='relative z-9999'>
       <div className='flex justify-between items-center shadow-[0_2px_18px_0_rgba(129,162,182,0.2)]'>
          <h3 className='py-2 px-12 text-[30px] font-bold'>
            <img src={flagIMG} className="w-[120px]" />
          </h3>
          
          <nav className='py-8 px-8 text[24px] space-x-10 font-[450]'>
            <a href='' className='p-4 active'>Home</a>
            <a href='' className='p-4'>About</a>
            <a href='' className='p-4'>CV</a>
            <a href='' className='p-4'>Blog</a>
            <a href='' className='p-4'>Contact</a>
          </nav>
        </div>
    </div>
  )
}

export default Header