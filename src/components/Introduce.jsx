import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSchool, faBriefcase, faHandshake, faTv } from '@fortawesome/free-solid-svg-icons';
import introduceImg from '../assets/nghiavu2025.jpg';

function Introduce() {
  return (
    <div>
        <div className="pt-22">
            <p className="text-center text-[16px]">My intro</p>
            <div className="flex justify-center items-center">
                <p className="w-[80px] h-[2px] bg-[#ddd]"></p>
                <p className="px-6 text-[30px] text-[#65b9f8]">About Me</p>
                <p className="w-[80px] h-[2px] bg-[#ddd]"></p>
            </div>
            <div className="pt-16 px-30">
                <div className="flex justify-between items-center text-center">
                    <div className="px-6">
                        <FontAwesomeIcon icon={faSchool} style={{fontSize: '26px'}}/>
                        <p className="pt-4">Tốt nghiệp chuyên ngành Kỹ thuật phần mềm Trường Đại học Công Nghiệp Hà Nội. <b>GPA: 3.52</b></p>
                    </div>

                    <div className="px-6">
                        <FontAwesomeIcon icon={faBriefcase}  style={{fontSize: '26px'}} />
                        <p className="pt-4">1 năm kinh nghiệm thực tế Backend với PHP (Laravek, Cake Framework)</p>
                    </div>

                    <div className="px-6">
                        <FontAwesomeIcon icon={faTv}  style={{fontSize: '26px'}} />
                        <p className="pt-4">Có thể thiết kế Frontend với JS (ReactJs, NextJS Framework)</p>
                    </div>

                    <div className="px-6">
                        <FontAwesomeIcon icon={faHandshake}  style={{fontSize: '26px'}} />
                        <p className="pt-4">Tinh thần trách nhiệm cao trong công việc</p>
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
                    
                <img className="w-[50%] p-6 rounded-sm" src={introduceImg} alt="img_introduce"/>
            </div>
        </div>
    </div>
  )
}

export default Introduce