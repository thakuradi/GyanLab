import React from "react";
import AboutSection from "@/components/ui/Testimonialcards";

function Content() {
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
    <>
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
                className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
              />
              <span className="font-architect text-xl sm:text-2xl lg:text-custom-25 font-normal leading-custom-36 ml-4 text-orange-500">
                GyaanLab Academy
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-8 max-w-lg">
              Nurturing Young Minds..
            </h1>

            <button
              onClick={() => scrollToSection("contact_us")}
              className="w-36 sm:w-44 h-10 sm:h-11 p-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 text-sm sm:text-base"
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

        <div className="hidden lg:block absolute -bottom-14 left-1/2 transform -translate-x-1/2 w-full max-w-4xl bg-white shadow-lg rounded-t-lg p-4">
          <img
            src="/src/assets/card.png"
            alt="Information"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-12 sm:py-16 lg:py-20 px-4 relative">
        {/* Course Rectangles Section */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-12 lg:mb-16 mt-5 sm:mt-10 lg:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "FOUNDATION", subtitle: "IX - X" },
              { title: "JEE(MAINS & ADV) MHC-CET/NEET", subtitle: "XI - XII" },
              { title: "PRE-FOUNDATION", subtitle: "VI - VII - VIII" },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-[#010e40] p-3 sm:p-4 rounded-lg shadow-md transform translate-y-4 sm:translate-y-6 lg:translate-y-8"
              >
                <h3 className="text-center font-bold text-white text-sm sm:text-base">
                  {course.title}
                </h3>
                <h3 className="text-center font-bold text-orange-500 text-sm sm:text-base">
                  {course.subtitle}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Overlay Section */}
        <div className="bg-[#F9F7F7] p-4 sm:p-6 mx-auto rounded-lg relative z-0 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center">
            <img
              src="/src/assets/course_picture.png"
              alt="Overlay Illustration"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md lg:w-1/3 mb-6 lg:mb-0"
            />
            <div className="lg:ml-8 w-full lg:w-2/3">
              <h4 className="text-left font-poppins font-bold text-base sm:text-lg mb-4">
                GyaanLab Academy has been established to provide quality
                education to students of Class 11th and 12th for JEE (Mains and
                Advanced), NEET and MHT-CET.
                <br />
                <br />
                We also prepare students of Pre Foundation (VI - VIII) and
                Foundation (IX - X) of ICSE/CBSE/SSC Boards by strengthening
                their conceptual base to get good grades in school and Board
                Exam.
              </h4>
              <button
                className="px-3 sm:px-4 py-2 border border-transparent rounded-lg text-white bg-orange-500 hover:bg-orange-600 text-sm sm:text-base"
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
      </section>

      {/* Contact section */}
      <div className="bg-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          {/* Contact Details Box */}
          <div className="flex flex-col md:flex-row justify-between items-center bg-white-100 p-4 sm:p-6 rounded-lg shadow-lg">
            {/* Contact Image */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img
                src="/src/assets/About_us_contact.png"
                alt="Contact Us"
                className="w-full rounded-lg"
              />
            </div>

            {/* Contact Details */}
            <div id="contact_us" className="w-full md:w-1/2 md:pl-8 lg:pl-12">
              <div className="flex items-center mb-4 sm:mb-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mr-3">
                  Our Contact
                </h3>
                <img
                  src="/src/assets/logo_home.png"
                  alt="GyaanLab Logo"
                  className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20"
                />
              </div>

              <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
                <span className="font-bold">GyaanLab Academy,</span>
                <br />
                Opposite Dutt Hotel, Above KOTAK ATM,
                <br />
                Yashwant Nagar, Kharadi Road, Pune - 14
              </p>
              <p className="text-orange-600 text-sm sm:text-base md:text-lg mb-2 sm:mb-3">
                gyaanlabacademy@gmail.com
              </p>
              <p className="text-sm sm:text-base md:text-lg">
                +91 84848 49658 <br /> +91 85510 66450
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
