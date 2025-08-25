import guitarImg from '../assets/guitar.jpg'

function Contact() {
  return (
    <div id="contact" className='py-16 bg-[#eaf6ff]'>
        <p className="text-center text-[16px]">Contact me</p>
        <div className="flex justify-center items-center">
            <p className="w-[80px] h-[2px] bg-[#ddd]"></p>
            <p className="px-6 text-[30px] text-[#65b9f8]">Contact</p>
            <p className="w-[80px] h-[2px] bg-[#ddd]"></p>
        </div>

        <div className="pt-20 px-4 md:px-30">
            <div className="flex flex-col md:flex-row items-start">
                <div className="w-full md:w-1/2 bg-white rounded-xl shadow-lg p-4 md:p-8">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-[550] text-gray-700 mb-2">Name</label>
                            <input 
                                type="text" 
                                placeholder="Your name" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#65b9f8]" 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-[550] text-gray-700 mb-2">Email</label>
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#65b9f8]" 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-[550] text-gray-700 mb-2">Message</label>
                            <textarea 
                                rows="5" 
                                placeholder="Write your message..." 
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#65b9f8]" 
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-[#65b9f8] text-white cursor-pointer py-3 rounded-xl font-semibold hover:bg-[#65b9f8] transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="hidden md:flex pt-4 md:pt-0 w-full md:w-1/2 justify-end">
                    <img 
                        src={guitarImg} 
                        alt="Contact" 
                        className="rounded-2xl h-[520px] shadow-lg object-cover" 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact