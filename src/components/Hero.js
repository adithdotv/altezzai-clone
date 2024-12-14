import React from 'react';
import redirect from '../assets/redirect.svg';
import coverImage from '../assets/cover.png'; // Replace with your actual image path

function Hero() {
  return (
    <section className="flex items-start bg-gray-50  py-4 pl-24">
      {/* Left Content Section */}
      <div className="flex-1 text-left max-w-lg leading-10 font-medium">
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          Empowering Businesses with Innovative Digital Solutions
        </h1>
        <p className="text-xl mb-8 text-gray-900">
          Our digital solutions help businesses grow and succeed online through a range of services including web development, mobile app development, and desktop software development.
        </p>
        <button className="flex items-center w-56 h-16 justify-center gap-5 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform ease-in duration-500">
          <span className='text-xl '>Let's Talk</span>
          <img src={redirect} alt="arrow" className="w-8" />
        </button>
      </div>

      <div className="flex-1 flex justify-center items-center w-[600px]">
        <img
          src={coverImage}
          alt="Cover"
          className="object-contain max-w-max"
        />
      </div>
    </section>
  );
}

export default Hero;
