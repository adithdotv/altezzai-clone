import React from 'react';
import app from "../assets/app.png";
import web from "../assets/web.png";
import redirect_fill from '../assets/redirect_fill.svg'
import redirect from '../assets/redirect.svg'

function Services() {
  return (
    <section className='py-16'>
      <div className="flex flex-col pb-[60px]">
        <h2 className="text-5xl font-bold text-[#191a15] mb-7 text-center pr-[900px]">Our Services</h2>
        <div className="flex justify-center gap-20 w-full">
  
          <div className="flex items-center justify-around w-[550px] h-72 rounded-45px bg-black border border-gray-950 p-6 shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out">
            <div className='flex flex-col gap-20'>
              <div className='bg-black flex flex-col text-4xl font-medium'>
                <div className="text-2xl font-semibold bg-white w-fit rounded-lg px-[10px]">App</div>
                <div className="text-2xl font-semibold bg-white w-fit rounded-lg px-[10px]">Development</div>
              </div>
              <button className="bg-transparent">
                <div className='text-white flex items-center gap-5 text-lg font-normal'>
                  <div className='bg-white flex items-center justify-center rounded-full w-10 h-10 transition-all duration-300 ease-in-out'>
                    <img src={redirect_fill} alt='' className='max-w-full h-auto'/>
                  </div>
                  Learn More
                </div>
              </button>
            </div>
              <div>
                <img src={app} alt="App Development" className="object-cover" />
              </div>
          </div>

          <div className="flex items-center justify-around w-[550px] h-72 rounded-45px bg-hover-blue border border-b-4 border-[#191a23] p-6 shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out">
            <div className='flex flex-col gap-20'>
              <div className='flex flex-col text-4xl font-medium'>
                <div className="text-2xl font-semibold bg-white w-fit rounded-lg px-[10px]">Web</div>
                <div className="text-2xl font-semibold bg-white w-fit rounded-lg px-[10px]">Development</div>
              </div>
              <button className="bg-transparent">
                <div className='text-white flex items-center gap-5 text-lg font-normal'>
                  <div className='bg-white flex items-center justify-center rounded-full w-10 h-10 transition-all duration-300 ease-in-out'>
                    <img src={redirect_fill} alt='' className='max-w-full h-auto'/>
                  </div>
                  Learn More
                </div>
              </button>
            </div>
              <div>
                <img src={web} alt="Web Development" className="object-cover" />
              </div>
            </div>
          </div>
          <div className='flex justify-center pt-10'>
            <a href="#services" className='flex items-center justify-center bg-black text-[#f0f8ff] rounded-[25px] h-[45px] w-[160px] text-base font-normal gap-2 transition-all duration-300 ease-in-out select-none cursor-pointer hover:text-hover-blue hover:scale-110'>
              View More
              <img src={redirect} alt="" className='w-[26px]'/>
            </a>
          </div>
      </div>
    </section>
  );
}

export default Services;
