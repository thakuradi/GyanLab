import React from "react";

import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import Navbar from "@/components/ui/navbar";
import AboutSection from "@/components/ui/Testimonialcards";
export function HomePage() {
  

  return (
    <div className="font-sans">
      {/* Navigation Bar */}
      <Navbar></Navbar>
      {/* Home Section */}
      <section
  id="home"
  className="mt-8 flex flex-col lg:flex-row justify-start items-start relative min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: "url('/src/assets/home_background.png')",
  }}
>
  <div className="absolute inset-0 bg-beige bg-opacity-50 z-1 pointer-events-none" />
  
  <div className="container mx-auto px-4 z-2 relative">
    <div className="flex flex-col items-start lg:items-start pt-20 lg:pt-32">
      <div className="flex items-center mb-8">
        <img
          src="/src/assets/logo_home.png"
          alt="GyaanLab Logo"
          className="h-16 w-16 lg:h-20 lg:w-20"
        />
        <span className="font-architect text-2xl lg:text-custom-25 font-normal leading-custom-36 ml-4 text-orange-500">
          GyaanLab Academy
        </span>
      </div>
      
      <h1 className="text-3xl lg:text-5xl font-bold mb-8 max-w-lg">
        Nurturing Young Minds..
      </h1>
      
      <button
        onClick={() => scrollToSection("contact_us")}
        className="w-44 h-11 p-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
      >
        Contact Us
      </button>
    </div>
  </div>
  
  <img
    src="/src/assets/home_picture.png"
    alt="Illustration"
    className="hidden lg:block absolute right-0 top-20 w-1/2 max-w-2xl"
  />
  
  <div className="hidden lg:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl bg-white shadow-lg rounded-t-lg p-4">
    <img
      src="/src/assets/card.png"
      alt="Information"
      className="w-full h-auto"
    />
  </div>
</section>
      {/* Courses Section */}
      {/* Courses Section */}
      <section id="courses" className="py-20 px-4 relative">
  {/* Course Rectangles Section */}
  <div className="max-w-6xl mx-auto mb-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        { title: "FOUNDATION", subtitle: "IX - X" },
        { title: "JEE(MAINS & ADV) MHC-CET/NEET", subtitle: "XI - XII" },
        { title: "PRE-FOUNDATION", subtitle: "VI - VII - VIII" },
      ].map((course, index) => (
        <div
          key={index}
          className="bg-[#010e40] p-4 rounded-lg shadow-md transform -translate-y-8"
        >
          <h3 className="text-center font-bold text-white">{course.title}</h3>
          <h3 className="text-center font-bold text-orange-500">{course.subtitle}</h3>
        </div>
      ))}
    </div>
  </div>

  {/* Overlay Section */}
  <div className="bg-[#F9F7F7] p-6 mx-auto rounded-lg relative z-0 max-w-6xl">
    <div className="flex flex-col lg:flex-row items-center">
      <img
        src="/src/assets/course_picture.png"
        alt="Overlay Illustration"
        className="w-full max-w-md lg:w-1/3 mb-8 lg:mb-0"
      />
      <div className="lg:ml-8 w-full lg:w-2/3">
        <h4 className="text-left font-poppins font-bold text-lg mb-4">
          GyaanLab Academy has been established to provide quality education to students of Class 11th and 12th for JEE (Mains and Advanced), NEET and MHT-CET.
          <br /><br />
          We also prepare students of Pre Foundation (VI - VIII) and Foundation (IX - X) of ICSE/CBSE/SSC Boards by strengthening their conceptual base to get good grades in school and Board Exam.
        </h4>
        <button
          className="px-4 py-2 border border-transparent rounded-lg text-white bg-orange-500 hover:bg-orange-600"
          onClick={() => scrollToSection("enquire")}
        >
          Enquire Now!
        </button>
      </div>
    </div>
  </div>
</section>

      {/* About Us Section */}
      <section id="about" className="py-12 md:py-18 bg-slate-700">
        <AboutSection></AboutSection>
     {/* Contact section */}
<div className="bg-white py-12">
  <div className="container mx-auto px-4">
    {/* Contact Details Box */}
    <div className="flex flex-col md:flex-row justify-between items-center bg-white-100 p-6 rounded-lg shadow-lg">
      {/* Contact Image */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src="/src/assets/About_us_contact.png"
          alt="Contact Us"
          className="w-full rounded-lg"
        />
      </div>

      {/* Contact Details */}
      <div id="contact_us" className="w-full md:w-1/2 md:pl-12">
        <div className="flex items-center mb-6">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-600 mr-3">
            Our Contact
          </h3>
          <img
            src="/src/assets/logo_home.png"
            alt="GyaanLab Logo"
            className="h-16 w-16 md:h-20 md:w-20"
          />
        </div>

        <p className="text-base md:text-lg mb-4">
          <span className="font-bold">GyaanLab Academy,</span>
          <br />
          Opposite Dutt Hotel, Above KOTAK ATM,
          <br />
          Yashwant Nagar, Kharadi Road, Pune - 14
        </p>
        <p className="text-orange-600 text-base md:text-lg mb-3">
          gyaanlabacademy@gmail.com
        </p>
        <p className="text-base md:text-lg">
          +91 84848 49658 <br /> +91 85510 66450
        </p>
      </div>
    </div>
  </div>
</div>

        {/* Footer Section */}
<footer className="bg-black text-white py-6">
  <div className="container mx-auto px-4">
    {/* Top Section: Logo, Social Media, and Links */}
    <div className="flex flex-col md:flex-row justify-between items-center mb-7">
      {/* Logo and Social Icons */}
      <div className="flex flex-col items-center mb-6 md:mb-0">
        <img
          src="/src/assets/gyaanlab_logo.png"
          alt="GyaanLab Logo"
          className="mb-5 h-16 w-16 md:h-20 md:w-20"
        />
        <div className="flex space-x-4 md:space-x-6 mb-4">
          <a href="#" className="text-orange-500 hover:text-white text-2xl md:text-3xl">
            <AiFillInstagram />
          </a>
          <a href="#" className="text-orange-500 hover:text-white text-2xl md:text-3xl">
            <AiFillFacebook />
          </a>
          <a href="#" className="text-orange-500 hover:text-white text-2xl md:text-3xl">
            <AiFillTwitterCircle />
          </a>
          <a href="#" className="text-orange-500 hover:text-white text-2xl md:text-3xl">
            <AiFillLinkedin />
          </a>
          <a href="#" className="text-orange-500 hover:text-white text-2xl md:text-3xl">
            <AiFillYoutube />
          </a>
        </div>
      </div>

      {/* GyaanLab and Help Sections */}
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">GyaanLab</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">About</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Features</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Works</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Careers</a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">Help</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Customer Support</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Delivery Details</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Terms and Conditions</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom Section: Privacy Policy and Terms */}
    <div className="flex justify-center w-full">
      <a href="#" className="text-sm text-orange-500 hover:text-white">
        Privacy Policy
      </a>
      <span className="mx-2">|</span>
      <a href="#" className="text-sm text-orange-500 hover:text-white">
        Terms and Conditions
      </a>
    </div>
  </div>
</footer>
      </section>
    </div>
  );
}
