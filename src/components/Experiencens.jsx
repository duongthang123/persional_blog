import Project1Img from "../assets/project1.png"
import Project2Img from "../assets/project2.png"


function Experiencens() {
  return (
    <div className="py-16">
            <p className="text-center text-[16px]">My experiences</p>
            <div className="flex justify-center items-center">
                <p className="w-[80px] h-[2px] bg-[#ddd]"></p>
                <p className="px-6 text-[30px] text-[#65b9f8]">Projects</p>
                <p className="w-[80px] h-[2px] bg-[#ddd]"></p>
            </div>
            <div className="pt-16 px-4 md:px-30">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="px-2 p-2 md:px-6 md:p-4">
                        <img 
                            className='w-[200px] h-[82px] md:w-[270px] md:h-[135px] object-cover'
                            src={Project1Img}
                            style={{}}
                            alt="ImgLaravel"
                        />
                        <p className="pt-4 font-[550]">DT SportShop</p>
                    </div>
    
                    <div className="px-2 p-2 md:px-6 md:p-4">
                        <img 
                            className='w-[200px] h-[82px] md:w-[270px] md:h-[135px] object-cover'
                            src={Project2Img}
                            style={{}}
                            alt="ImgLaravel"
                        />
                        <p className="pt-4 font-[550]">Shoppet</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Experiencens