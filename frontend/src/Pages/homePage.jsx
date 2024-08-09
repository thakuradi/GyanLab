import React from "react";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/signin");
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans">
      {/* Navigation Bar */}
      <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="/src/assets/gyaanlab_logo.png"
            alt="GyaanLab Logo"
            className="h-8 w-8"
          />
          <span className="font-poller text-custom-25 font-normal leading-custom-36">
            GyaanLab
          </span>
        </div>

        <div className="flex space-x-8">
          <a
            onClick={() => scrollToSection("home")}
            className="cursor-pointer hover:text-blue-400"
          >
            Home
          </a>
          <a
            onClick={() => scrollToSection("courses")}
            className="cursor-pointer hover:text-blue-400"
          >
            Courses
          </a>
          <a
            onClick={() => scrollToSection("exams")}
            className="cursor-pointer hover:text-blue-400"
          >
            Entrance Exams
          </a>
          <a
            onClick={() => scrollToSection("about")}
            className="cursor-pointer hover:text-blue-400"
          >
            About us
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-end">
            <span>Contact us:</span>
            <span>+91 84 84 84 9658</span>
          </div>

          <button className="px-4 py-2 border border-orange-500 rounded-lg text-white bg-transparent hover:bg-gray-800">
            Fee Structure
          </button>

          <button
            onClick={handleSignInClick}
            className="px-4 py-2 border border-transparent rounded-lg text-white bg-orange-500 hover:bg-orange-600"
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="mt-8 flex justify-start items-start relative"
        style={{
          backgroundImage: "url('/src/assets/home_background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          position: "relative",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(245, 245, 220, 0.5)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <div
          className="flex flex-col items-start"
          style={{
            position: "relative",
            zIndex: 2,
            top: "120px",
            left: "101px",
            width: "619px",
            height: "85.27px",
            color: "#FF9700",
          }}
        >
          <div className="flex items-center">
            <img
              src="/src/assets/logo_home.png"
              alt="GyaanLab Logo"
              className="h-20 w-20"
            />
            <span className="font-architect text-custom-25 font-normal leading-custom-36 ml-4">
              GyaanLab Academy
            </span>
          </div>
        </div>

        <div
          className="absolute"
          style={{
            width: "500px",
            height: "106px",
            top: "200px",
            left: "135px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "40px",
            fontWeight: "800",
            lineHeight: "52px",
            textAlign: "left",
            zIndex: 2,
          }}
        >
          Nurturing Young Minds..
        </div>

        <button className="absolute top-80 left-32 w-44 h-11 p-2 rounded-lg border border-transparent bg-orange-500 text-white z-10">
          Contact Us
        </button>

        <img
          src="/src/assets/home_picture.png"
          alt="Illustration"
          className="absolute"
          style={{
            width: "667px",
            height: "399px",
            top: "50px",
            left: "707px",
            zIndex: 2,
          }}
        />
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20">
        <h2 className="text-center text-3xl font-bold mb-4">Courses</h2>

        {/* Course Rectangles Section */}
        <div className="relative mx-auto mb-8" style={{ width: "1110px" }}>
          <div
            className="bg-white p-4 rounded-tl-lg shadow-md mb-4"
            style={{ width: "350px", height: "115px", display: "inline-block" }}
          >
            <h3 className="text-center font-bold">FOUNDATION IX - X</h3>
          </div>
          <div
            className="bg-white p-4 rounded-tl-lg shadow-md mb-4"
            style={{ width: "350px", height: "115px", display: "inline-block", marginLeft: "10px" }}
          >
            <h3 className="text-center font-bold">
              JEE (MAINS & ADV) MHT-CET / NEET XI - XII
            </h3>
          </div>
          <div
            className="bg-white p-4 rounded-tl-lg shadow-md mb-4"
            style={{ width: "350px", height: "115px", display: "inline-block", marginLeft: "10px" }}
          >
            <h3 className="text-center font-bold">
              PRE-FOUNDATION VI - VII - VIII
            </h3>
          </div>
        </div>

        {/* Overlay Section */}
        <div
          className="bg-[#F9F7F7] p-6 mx-auto rounded-lg"
          style={{
            width: "1200px",
            height: "614px",
            marginTop: "20px",
          }}
        >
          <div className="flex flex-row items-center h-full">
            <img
              src="/src/assets/course_picture.png"
              alt="Overlay Illustration"
              style={{ width: "400px", height: "auto" }}
            />
            <div className="ml-8">
              <div
                className="relative mx-auto"
                style={{ width: "562px", height: "285px" }}
              >
                <h4 className="text-left font-poppins font-bold text-lg mb-4">
                  GyaanLab Academy has been established to provide quality
                  education to students of Class 11th and 12th for JEE (Mains
                  and Advanced), NEET and MHT-CET.
                  <br />
                  <br />
                  We also prepare students of Pre Foundation (VI - VIII) and
                  Foundation (IX - X) of ICSE/CBSE/SSC Boards by strengthening
                  their conceptual base to get good grades in school and Board
                  Exam.
                </h4>
                <button className="px-4 py-2 border border-transparent rounded-lg text-white bg-orange-500 hover:bg-orange-600">
                  Enquire Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20">
        <h2 className="text-center text-3xl font-bold mb-4">About Us</h2>
      </section>
    </div>
  );
}

