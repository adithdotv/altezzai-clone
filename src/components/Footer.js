import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-[#191a23] pt-3 text-[#c6c3c3]">
        <div className='flex justify-center w-11/12 py-5 gap-[300px] border-b-2 border-[rgb(110,109,109)] font-light'>
            <a href="" className='flex flex-col items-center justify-center gap-2.5 text-xs w-[300px] text-center'>
                <div className='flex rounded-full bg-[#2e9eb9] p-1 w-[30px] select-none transition-all duration-300 ease-in-out'>
                    <img src="" alt="" />
                </div>
                enquiry@altezzai.com
            </a>
        </div>
    </footer>
  );
};

export default Footer;
