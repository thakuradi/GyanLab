import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../AuthContext'; 

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAuthClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      navigate("/");
    } else {
      navigate("/signin");
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="/src/assets/gyaanlab_logo.png"
            alt="GyaanLab Logo"
            className="h-10 w-10"
          />
          <span className="font-poller text-custom-25 font-normal leading-custom-36">
            GyaanLab
          </span>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={toggleSidebar}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <a onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-blue-400">Home</a>
          <a onClick={() => scrollToSection("courses")} className="cursor-pointer hover:text-blue-400">Courses</a>
          <a onClick={() => scrollToSection("exams")} className="cursor-pointer hover:text-blue-400">Entrance Exams</a>
          <a onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-blue-400">About us</a>
          {/* {isLoggedIn && (
            <Link to="/qnans" className="cursor-pointer hover:text-blue-400">Q&A</Link>
          )} */}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex flex-col items-end">
            <span>Contact us:</span>
            <span>+91 84 84 84 9658</span>
          </div>

          <button className="px-4 py-2 border border-orange-500 rounded-lg text-white bg-transparent hover:bg-gray-800">
            Fee Structure
          </button>

          <button
            onClick={handleAuthClick}
            className="px-4 py-2 border border-transparent rounded-lg text-white bg-orange-500 hover:bg-orange-600"
          >
            {isLoggedIn ? "Sign Out" : "Sign In"}
          </button>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-gray-900 text-white p-6 transition duration-300 ease-in-out md:hidden`}>
        <button
          className="absolute top-4 right-4"
          onClick={toggleSidebar}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col space-y-4 mt-8">
          <a onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-blue-400">Home</a>
          <a onClick={() => scrollToSection("courses")} className="cursor-pointer hover:text-blue-400">Courses</a>
          <a onClick={() => scrollToSection("exams")} className="cursor-pointer hover:text-blue-400">Entrance Exams</a>
          <a onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-blue-400">About us</a>
          {/* {isLoggedIn && (
            <Link to="/qnans" className="cursor-pointer hover:text-blue-400">Q&A</Link>
          )} */}
          <div className="flex flex-col items-start mt-4">
            <span>Contact us:</span>
            <span>+91 84 84 84 9658</span>
          </div>
          <button className="px-4 py-2 border border-orange-500 rounded-lg text-white bg-transparent hover:bg-gray-800">
            Fee Structure
          </button>
          <button
            onClick={handleAuthClick}
            className="px-4 py-2 border border-transparent rounded-lg text-white bg-orange-500 hover:bg-orange-600">
            {isLoggedIn ? "Sign Out" : "Sign In"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;