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
      <div
        className="absolute"
        style={{
          width: "820px",
          height: "229.18px",
          top: "619px",
          left: "310px",
          padding: "5px",
          borderRadius: "5px 0px 0px 0px",
          border: "1px solid transparent",
          backgroundColor: "white",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "70%",
            padding: "10px 10px 10px 10px",
            boxSizing: "border-box",
          }}
        >
          <img
            src="/src/assets/card.png"
            alt="Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Courses Section */}
      <section id="courses" className="py-20 relative">
        {/* <h2 className="text-center text-3xl font-bold mb-10">Courses</h2> */}

        {/* Course Rectangles Section */}
        <div
          className="relative mx-auto"
          style={{ width: "1110px", marginTop: "250px" }}
        >
          <div
            className="relative z-10 mx-auto"
            style={{ width: "1110px", marginTop: "0px" }}
          >
            <div
              className="bg-white p-4 rounded-lg shadow-md"
              style={{
                width: "350px",
                height: "100px",
                display: "inline-block",
                backgroundColor: "hsla(220, 98%, 19%, 1)",
                position: "relative",
                top: "-60px",
                marginRight: "20px",
              }}
            >
              <h3 className="text-center font-bold text-white">FOUNDATION</h3>
              <h3 className="text-center font-bold text-orange-500">IX - X</h3>
            </div>
            <div
              className="bg-white p-4 rounded-lg shadow-md"
              style={{
                width: "350px",
                height: "100px",
                display: "inline-block",
                backgroundColor: "hsla(220, 98%, 19%, 1)",
                position: "relative",
                top: "-60px",
                marginRight: "20px",
              }}
            >
              <h3 className="text-center font-bold text-white">
                JEE(MAINS & ADV) MHC-CET/NEET
              </h3>
              <h3 className="text-center font-bold text-orange-500">IX - X</h3>
            </div>
            <div
              className="bg-white p-4 rounded-lg shadow-md"
              style={{
                width: "350px",
                height: "100px",
                display: "inline-block",
                backgroundColor: "hsla(220, 98%, 19%, 1)",
                position: "relative",
                top: "-60px",
                marginRight: "20px",
              }}
            >
              <h3 className="text-center font-bold text-white">
                PRE-FOUNDATION
              </h3>
              <h3 className="text-center font-bold text-orange-500">
                VI - VII - VIII
              </h3>
            </div>
          </div>
        </div>

        {/* Overlay Section */}
        <div
          className="bg-[#F9F7F7] p-6 mx-auto rounded-lg relative z-0"
          style={{
            width: "1150px",
            height: "500px",
            marginTop: "-100px",
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
      <section id="about" className="py-20 bg-slate-700">
        {/* <h2 className="text-center text-3xl font-bold mb-4">About Us</h2> */}
        <div className="relative w-[1440px] h-[556px] text-white">
          {/* Testimonials Heading */}
          <div className="absolute top-0 left-24 w-full text-left pl-10 pt-8">
            <h2 className="text-[40px] font-bold leading-[48px] mb-2">
              Testimonials
            </h2>
            <div className="bg-[hsla(14, 100%, 62%, 1)] w-[199.09px] h-[19.02px] rotate-[-5deg] absolute top-[60px] left-0"></div>
          </div>

          {/* Testimonial Cards Section */}
          <div className="absolute top-[150px] left-[175px] w-[1090px] h-[299px] flex justify-between gap-[50px]">
            {/* Testimonial Cards */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[250px] h-[299px]">
              <img
                src="src/assets/testimonial_1.png"
                alt="Apurva Kadam"
                className="mx-auto rounded-full mb-4 w-24 h-24 -mt-16"
              />
              <div className="flex items-center justify-center">
                <h3 className="font-bold text-lg text-orange-500">
                  Apurva Kadam
                </h3>
                <h3 className="text-yellow-500 font-bold ml-2">★ 4.8</h3>
              </div>
              <p className="text-black font-inter text-[14px] font-normal leading-[21px] text-left">
                I would like to pay special thanks to GyaanLab Academy who
                guided me at every step of JEE prep & encouraged me to work
                hard. Teachers give attention to each and every student and help
                them clear their doubts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[250px] h-[299px]">
              <img
                src="src/assets/testimonial_2.png"
                alt="Sohamveer Patnaik"
                className="mx-auto rounded-full mb-4 w-24 h-24 -mt-16"
              />
              <div className="flex items-center justify-center whitespace-nowrap">
                <h3 className="font-bold text-lg text-orange-500">
                  Sohamveer Patnaik
                </h3>
                <h3 className="text-yellow-500 font-bold ml-2">★ 4.9</h3>
              </div>
              <p className="text-black font-inter text-[14px] font-normal leading-[21px] text-left">
                I am glad that I got the opportunity to learn at GyaanLab.
                Bhardwaj sir's teaching will make you fall in love with maths.
                The way he makes us understand the subject through daily life
                examples.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[250px] h-[299px]">
              <img
                src="src/assets/testimonial_3.png"
                alt="Bharat Devasi"
                className="mx-auto rounded-full mb-4 w-24 h-24 -mt-16"
              />
              <div className="flex items-center justify-center">
                <h3 className="font-bold text-lg text-orange-500">
                  Bharat Devasi
                </h3>
                <h3 className="text-yellow-500 font-bold ml-2">★ 5.0</h3>
              </div>
              <p className="text-black font-inter text-[14px] font-normal leading-[21px] text-left">
                At GyaanLab Academy Bhardwaj sir’s way of teaching mathematics
                is beyond extraordinary. He makes complex math sums as easy as
                adding two natural numbers & guidance were very valuable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[250px] h-[299px]">
              <img
                src="src/assets/testimonial_4.png"
                alt="Saloni Rathod"
                className="mx-auto rounded-full mb-4 w-24 h-24 -mt-16"
              />
              <div className="flex items-center justify-center">
                <h3 className="font-bold text-lg text-orange-500">
                  Saloni Rathod
                </h3>
                <h3 className="text-yellow-500 font-bold ml-2">★ 5.0</h3>
              </div>
              <p className="text-black font-inter text-[14px] font-normal leading-[21px] text-left">
                If you want to get success in your desired field then this
                academy is the best in the given field. Amazing faculty with
                friendly interaction and amazing method of teaching. Onkar Sir
                is the best teacher for your future goals. Highly recommended
                academy.
              </p>
            </div>
          </div>
        </div>

        {/* Contact section
        <div className="bg-white py-12">
          <div className="container mx-auto">
            {/* Contact Details Box *}
            <div className="flex justify-between items-center bg-white-100 p-6 rounded-lg">
              {/* Contact Image *}
              <div className="w-1/2">
                <img
                  src="/src/assets/About_us_contact.png"
                  alt="Contact Us"
                  className="w-full rounded-lg"
                />
              </div>

              {/* Contact Details *}
              <div className="w-1/2 pl-12">
                <div className="flex items-center mb-4">
                  <h3 className="text-3xl font-bold text-orange-600 mr-2">
                    Our Contact
                  </h3>
                  <img
                    src="/src/assets/logo_home.png"
                    alt="GyaanLab Logo"
                    className="h-11 w-11"
                  />
                </div>

                <p className="mb-4">
                  <span className="font-bold">GyaanLab Academy,</span>
                  <br />
                  Opposite Dutt Hotel, Above KOTAK ATM,
                  <br />
                  Yashwant Nagar, Kharadi Road, Pune - 14
                </p>
                <p className="text-orange-600 mb-2">
                  gyaanlabacademy@gmail.com
                </p>
                <p>
                  +91 84848 49658 <br /> +91 85510 66450
                </p>
              </div>
            </div>

            {/* Enquire Now Form *}
            <div className="mt-6 bg-[#004aad] rounded-lg p-4">
              <h4 className="text-white text-xl font-bold mb-2">Enquire Now</h4>
              <form className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="px-4 py-2 border rounded-lg w-1/2"
                />
                <input
                  type="text"
                  placeholder="Contact no:"
                  className="px-4 py-2 border rounded-lg w-1/2"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-orange-500 text-white rounded-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div> */}

        {/* Contact section */}
        <div className="bg-white py-12">
          <div className="container mx-auto">
            {/* Contact Details Box */}
            <div className="flex justify-between items-center bg-white-100 p-6 rounded-lg">
              {/* Contact Image */}
              <div className="w-1/2">
                <img
                  src="/src/assets/About_us_contact.png"
                  alt="Contact Us"
                  className="w-full rounded-lg"
                />
              </div>

              {/* Contact Details */}
              <div className="w-1/2 pl-12">
                <div className="flex items-center mb-6">
                  <h3 className="text-4xl font-bold text-orange-600 mr-3">
                    Our Contact
                  </h3>
                  <img
                    src="/src/assets/logo_home.png"
                    alt="GyaanLab Logo"
                    className="h-20 w-20"
                  />
                </div>

                <p className="text-lg mb-4">
                  <span className="font-bold">GyaanLab Academy,</span>
                  <br />
                  Opposite Dutt Hotel, Above KOTAK ATM,
                  <br />
                  Yashwant Nagar, Kharadi Road, Pune - 14
                </p>
                <p className="text-orange-600 text-lg mb-3">
                  gyaanlabacademy@gmail.com
                </p>
                <p className="text-lg">
                  +91 84848 49658 <br /> +91 85510 66450
                </p>
              </div>
            </div>

            {/* Enquire Now Form */}
            <div className="mt-6 bg-[#004aad] rounded-lg p-6 max-w-4xl mx-auto">
              <h4 className="text-white text-2xl font-bold mb-4">
                Enquire Now
              </h4>
              <form className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="px-4 py-3 border rounded-lg flex-1"
                />
                <input
                  type="text"
                  placeholder="Contact no:"
                  className="px-4 py-3 border rounded-lg flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-orange-500 text-white rounded-lg flex-shrink-0"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="bg-black text-white py-8">
          <div className="container mx-auto flex justify-between">
            <div className="flex flex-col items-center">
              <img
                src="/src/assets/gyaanlab_logo.png"
                alt="GyaanLab Logo"
                className="mb-4 h-20 w-20"
              />
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-orange-500 hover:text-white">
                  Instagram
                </a>
                <a href="#" className="text-orange-500 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-orange-500 hover:text-white">
                  Twitter
                </a>
                <a href="#" className="text-orange-500 hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="text-orange-500 hover:text-white">
                  YouTube
                </a>
              </div>
              <div>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
                <span className="mx-2">|</span>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Terms and Conditions
                </a>
              </div>
            </div>
            <div className="flex space-x-16">
              <div>
                <h3 className="text-lg font-bold mb-4">GyaanLab</h3>
                <ul>
                  <li className="mb-2">
                    <a href="#" className="text-gray-400 hover:text-white">
                      About
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-400 hover:text-white">
                      Features
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-400 hover:text-white">
                      Works
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-400 hover:text-white">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Help</h3>
                <ul>
                  <li className="mb-2">
                    <a href="#" className="text-gray-400 hover:text-white">
                      Customer Support
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-400 hover:text-white">
                      Delivery Details
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-400 hover:text-white">
                      Terms and Conditions
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-400 hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}
