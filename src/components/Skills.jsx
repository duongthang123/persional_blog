import laravelImg from '../assets/laravel.jpg';


function Skills() {
  return (
    <div className="pt-16 bg-[#eaf6ff]">
                <p className="text-center text-[16px]">My skills</p>
                <div className="flex justify-center items-center">
                    <p className="w-[80px] h-[2px] bg-[#ddd]"></p>
                    <p className="px-6 text-[30px] text-[#65b9f8]">Skills</p>
                    <p className="w-[80px] h-[2px] bg-[#ddd]"></p>
                </div>
                <div className="pt-16 px-30">
                    <div className="flex items-center justify-between flex-wrap text-center">
                        <div className="px-6 p-4">
                            <img 
                                className='object-cover'
                                src={laravelImg}
                                style={{maxWidth: '270px'}}
                                alt="ImgLaravel"
                            />
                            <p className="pt-4 font-[550]">Laravel Framework</p>
                        </div>
    
                        <div className="px-6 p-4">
                            <img 
                                className='object-cover'
                                src={laravelImg}
                                style={{maxWidth: '270px'}}
                                alt="ImgLaravel"
                            />
                            <p className="pt-4 font-[550]">Laravel Framework</p>
                        </div>
    
                        <div className="px-6 p-4">
                            <img 
                                className='object-cover'
                                src={laravelImg}
                                style={{maxWidth: '270px'}}
                                alt="ImgLaravel"
                            />
                            <p className="pt-4 font-[550]">Laravel Framework</p>
                        </div>
    
                        <div className="px-6 p-4">
                            <img 
                                className='object-cover'
                                src={laravelImg}
                                style={{maxWidth: '270px'}}
                                alt="ImgLaravel"
                            />
                            <p className="pt-4 font-[550]">Laravel Framework</p>
                        </div>

                        <div className="px-6 p-4">
                            <img 
                                className='object-cover'
                                src={laravelImg}
                                style={{maxWidth: '270px'}}
                                alt="ImgLaravel"
                            />
                            <p className="pt-4 font-[550]">Laravel Framework</p>
                        </div>
                    </div>
                </div>
    
                <div className="flex justify-between items-center pt-16 mx-auto px-30 text-[16px]">
                    <p className="w-[50%] p-6 pr-6px">
                        Xin chào! Tôi là Dương Văn Thắng. Sinh năm 2002. Hiện tại đang sinh sống và làm việc tại Hải Dương. 
                        Tôi đang là một chiến sĩ nghĩa vụ Công an nhân dân. Đang thực hiện nhiệm vụ bảo vệ Tổ quốc. 
                        Tôi rất đam mê lập trình đặc biệt là lập trình websites
                        Tôi có hơn 1 năm kinh nghiệm làm việc thực tế với PHP (Laravel, Cake), JavaScript (ReactJs, NextJs), BootStrap, Tailwind, Docker, Git.....
                    </p>
                        
                </div>
            </div>
  )
}

export default Skills