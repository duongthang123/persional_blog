import laravelImg from '../assets/laravel.jpg';
import cakePHPImg from '../assets/cake.png';
import reactjsImg from '../assets/reactjs.webp';
import nextjsImg from '../assets/nextjs.webp';
import dockerImg from '../assets/docker.avif';
import bootstrapImg from '../assets/bootstrap.jpg';
import tailwindImg from '../assets/tailwind.webp';
import gitImg from '../assets/git.png';


function Skills() {
  return (
    <div className="py-16 bg-[#eaf6ff]">
        <p className="text-center text-[16px]">My skills</p>
        <div className="flex justify-center items-center">
            <p className="w-[80px] h-[2px] bg-[#ddd]"></p>
            <p className="px-6 text-[30px] text-[#65b9f8]">Skills</p>
            <p className="w-[80px] h-[2px] bg-[#ddd]"></p>
        </div>
        <div className="pt-16 px-4 md:px-30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="px-2 p-2 md:px-6 md:p-4">
                    <img 
                        className='w-[200px] h-[82px] md:w-[270px] md:h-[135px] object-cover'
                        src={laravelImg}
                        style={{}}
                        alt="ImgLaravel"
                    />
                    <p className="pt-4 font-[550]">Laravel Framework</p>
                </div>

                <div className="px-2 p-2 md:px-6 md:p-4">
                    <img 
                        className='w-[200px] h-[82px] md:w-[270px] md:h-[135px] object-cover'
                        src={cakePHPImg}
                        style={{}}
                        alt="ImgLaravel"
                    />
                    <p className="pt-4 font-[550]">CakePHP Framework</p>
                </div>

                <div className="px-2 p-2 md:px-6 md:p-4">
                    <img 
                        className='w-[200px] h-[82px] md:w-[270px] md:h-[135px] object-cover'
                        src={reactjsImg}
                        style={{}}
                        alt="ImgLaravel"
                    />
                    <p className="pt-4 font-[550]">ReactJs Framework</p>
                </div>

                <div className="px-2 p-2 md:px-6 md:p-4">
                    <img 
                        className='w-[200px] h-[82px] md:w-[270px] md:h-[135px] object-cover'
                        src={nextjsImg}
                        style={{}}
                        alt="ImgLaravel"
                    />
                    <p className="pt-4 font-[550]">NextJs Framework</p>
                </div>

                <div className="px-2 p-2 md:px-6 md:p-4">
                    <img 
                        className='w-[200px] h-[82px] md:w-[270px] md:h-[135px] object-cover'
                        src={dockerImg}
                        style={{}}
                        alt="ImgLaravel"
                    />
                    <p className="pt-4 font-[550]">Docker</p>
                </div>

                <div className="px-2 p-2 md:px-6 md:p-4">
                    <img 
                        className='w-[200px] h-[82px] md:w-[270px] md:h-[135px] object-cover'
                        src={bootstrapImg}
                        style={{}}
                        alt="ImgLaravel"
                    />
                    <p className="pt-4 font-[550]">BootStrap Framework</p>
                </div>

                <div className="px-2 p-2 md:px-6 md:p-4">
                    <img 
                        className='w-[200px] h-[82px] md:w-[270px] md:h-[135px] object-cover'
                        src={tailwindImg}
                        style={{}}
                        alt="ImgLaravel"
                    />
                    <p className="pt-4 font-[550]">Tailwind Framework</p>
                </div>

                <div className="px-2 p-2 md:px-6 md:p-4">
                    <img 
                        className='w-[200px] h-[82px] md:w-[270px] md:h-[135px] object-cover'
                        src={gitImg}
                        style={{}}
                        alt="ImgLaravel"
                    />
                    <p className="pt-4 font-[550]">Git</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills