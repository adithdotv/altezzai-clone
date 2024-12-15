import React from 'react';
import logo3 from '../assets/altezzai_logo.png'
import mail from '../assets/mail.svg'
import location from '../assets/location.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-[#191a23] pt-3 text-[#c6c3c3]">
        <div className='flex justify-center w-11/12 py-5 gap-[300px] border-b-2 border-[rgb(110,109,109)] font-light'>
            <a href="" className='flex flex-col items-center justify-center gap-2.5 text-xs w-[300px] text-center'>
                <div className='flex rounded-full bg-[#2e9eb9] p-1 w-[30px] select-none transition-all duration-300 ease-in-out'>
                    <img src={mail} alt="" />
                </div>
                enquiry@altezzai.com
            </a>
            <a href="" className='flex flex-col items-center justify-center gap-3 text-sm w-80 text-center'>
              <div className='flex rounded-3xl bg-[#2e9eb9] p-1 w-[30px] select-none transition-all duration-300 ease-in-out'>
                <img src={location} alt="" />
              </div>
              Kannur University Campus Mangattparamba
            </a>
        </div>
        <div className='flex justify-center items-center w-11/12 p-5 gap-[400px]'>
          <a href="">
            <img src={logo3} alt="" className='w-20'/>
          </a>
          <div className='flex gap-16'>
            <a href="" className='flex items-center rounded-45px transition-all duration-300 ease-in-out hover:scale-[1.3] transition-transform'>
              <img src={instagram} alt="" className='w-9'/>
            </a>
            <a href="" className='flex items-center rounded-45px transition-all duration-300 ease-in-out hover:scale-[1.3] transition-transform'>
              <img src={github} alt="" className='w-9'/>
            </a>
            <a href="" className='flex items-center rounded-3xl transition-all duration-300 ease-in-out hover:scale-[1.3] transition-transform'>
              <img src={linkedin} alt="" className='w-9'/>
            </a>
          </div>
          <ul className='list-none cursor-pointer'>
            <li>
              <a href="#about" className='text-[#c6c3c3] transition-all duration-300 ease-in-out font-semibold text-sm'>About Us</a>
            </li>
            <li>
              <a href="#services" className='text-[#c6c3c3] transition-all duration-300 ease-in-out font-semibold text-sm'>Services</a>
            </li>
            <li>
              <a href="#work" className='text-[#c6c3c3] transition-all duration-300 ease-in-out font-semibold text-sm'>Our Work</a>
            </li>
            <li>
              <a href="#team" className='text-[#c6c3c3] transition-all duration-300 ease-in-out font-semibold text-sm'>Our Team</a>
            </li>
          </ul>
        </div>
        <div className='flex justify-center w-full py-1 px-7 text-xs bg-[#252630] text-[#b1b0b0]'>
          <div>
            © 2024 Altezzai LLP. All rights reserved
          </div>
        </div>
    </footer>
  );
};

export default Footer;
