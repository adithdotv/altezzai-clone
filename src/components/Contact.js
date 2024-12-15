import React from "react";
import contact from '../assets/contact.png'
import mail from '../assets/mail.svg'

function Contact() {
  return (
    <div className="w-full flex flex-row bg-[#f3f3f3] py-16 justify-center gap-64">
        <div className="flex flex-col relative">
            <div className="text-5xl font-bold leading-[65px] text-[#191a15] h-[70px]">
                Contact Us
            </div>
            <img src={contact} alt="" className="object-cover pt-20"/>
            <div className="absolute top-1/2 left-full transfor -translate-x-1/3" > 
                <a href="" className="flex items-center justify-center rounded-[14px] bg-[#324c52] text-white text-[20px] font-bold gap-[25px] px-[25px] h-[68px] w-fit transition-all duration-400 ease-in-out hover:bg-gradient-to-r from-[#29323c] via-[#485563] to-[#4e4376] hover:shadow-[0_4px_15px_rgba(45,54,65,0.75)]">
                    <img src={mail} alt="" className="w-5"/>
                    enquiry@altezzai.com
                </a>
            </div>
        </div>
        <div className="W-[1000px] rounded-33px bg-white m-3">
            <div className="flex flex-col p-10 gap-12">
                <div className="text-sm font-medium">Fill the form below:</div>
                <form action="" className="flex flex-col gap-5  w-[520px]">
                    <input type="text" placeholder="Enter your name" required className="outline-none border-none bg-[#f3f3f3] ps-5 pe-5 rounded-2xl h-14"/>
                    <input type="text" placeholder="Phone number" required className="outline-none border-none bg-[#f3f3f3] ps-5 pe-5 rounded-2xl h-14"/>
                    <input type="email" placeholder="E-mail address" required className="outline-none border-none bg-[#f3f3f3] ps-5 pe-5 rounded-2xl h-14"/>
                    <textarea placeholder="Message" required className="outline-none border-none bg-[#f3f3f3] ps-5 pe-5 rounded-2xl h-24 p-5 resize-none"></textarea>
                    <button className="w-full bg-hover-blue text-sm font-bold text-white border-none h-14 rounded-2xl mt-5 transition-all duration-300 ease-in-out hover:bg-cyan-800">Send Message</button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Contact;
