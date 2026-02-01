import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSchool, faBriefcase, faHandshake, faTv } from '@fortawesome/free-solid-svg-icons';
import introduceImg from '../assets/nghiavu2025.jpg';

function Introduce() {
  return (
    <div id="about">
        <div className="py-16">
            <p className="text-center text-[16px]">My intro</p>
            <div className="flex justify-center items-center">
                <p className="w-[80px] h-[2px] bg-[#ddd]"></p>
                <p className="px-6 text-[30px] text-[#65b9f8]">About Me</p>
                <p className="w-[80px] h-[2px] bg-[#ddd]"></p>
            </div>
            <div className="pt-20 md:px-30 px-4 w-[100%]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="md:px-6">
                        <FontAwesomeIcon icon={faSchool} style={{fontSize: '26px'}}/>
                        <p className="pt-4">Graduated from software engineering in Hanoi University of Industry . <b>GPA: 3.52</b></p>
                    </div>

                    <div className="md:px-6">
                        <FontAwesomeIcon icon={faBriefcase}  style={{fontSize: '26px'}} />
                        <p className="pt-4">1 year of practical experience Backend with PHP (Laravel, CakePHP Framework)</p>
                    </div>

                    <div className="md:px-6">
                        <FontAwesomeIcon icon={faTv}  style={{fontSize: '26px'}} />
                        <p className="pt-4">Can design Frontend with JS (ReactJs, NextJS Framework)</p>
                    </div>

                    <div className="md:px-6">
                        <FontAwesomeIcon icon={faHandshake}  style={{fontSize: '26px'}} />
                        <p className="pt-4">High sense of responsibility at work</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-4 md:pt-16 mx-auto px-4 md:px-30 text-[16px]">
                <p className="text-center md:text-left md:w-[50%] px-6 py-2 md:p-6 pr-6">
                    Hello! I am Duong Van Thang. I was born in 2002. I am currently living and working in Hai Duong. 
                    I am a soldier of the People's Police. Is performing the task of defending the Fatherland. 
                    I am very passionate about programming, especially websites.
                    I have more than 1 year of practical work experience with PHP (Laravel, Cake), JavaScript (Reactjs, Nextjs), Bootstrap, Tailwind, Docker, Git .....
                </p>
                    
                <img className="md:w-[50%] p-6 rounded-sm" src={introduceImg} alt="img_introduce"/>
            </div>
        </div>
    </div>
  )
}

export default Introduce
