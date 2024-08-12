import React, { useState, useEffect } from 'react';

const TestimonialCard = ({ image, name, rating, text }) => (
  <div className="bg-white p-6 pt-16 rounded-lg shadow-lg text-center relative w-full">
    <img
      src={image}
      alt={name}
      className="mx-auto rounded-full mb-4 w-24 h-24 absolute -top-12 left-1/2 transform -translate-x-1/2"
    />
    <div className="flex items-center justify-center mb-2">
      <h3 className="font-bold text-lg text-orange-500">{name}</h3>
      <h3 className="text-yellow-500 font-bold ml-2">★ {rating}</h3>
    </div>
    <p className="text-black font-inter text-sm font-normal leading-tight text-left">
      {text}
    </p>
  </div>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      image: "src/assets/testimonial_1.png",
      name: "Apurva Kadam",
      rating: "4.8",
      text: "I would like to pay special thanks to GyaanLab Academy who guided me at every step of JEE prep & encouraged me to work hard. Teachers give attention to each and every student and help them clear their doubts."
    },
    {
      image: "src/assets/testimonial_2.png",
      name: "Sohamveer Patnaik",
      rating: "4.9",
      text: "I am glad that I got the opportunity to learn at GyaanLab. Bhardwaj sir's teaching will make you fall in love with maths. The way he makes us understand the subject through daily life examples."
    },
    {
      image: "src/assets/testimonial_3.png",
      name: "Bharat Devasi",
      rating: "5.0",
      text: "At GyaanLab Academy Bhardwaj sir's way of teaching mathematics is beyond extraordinary. He makes complex math sums as easy as adding two natural numbers & guidance were very valuable."
    },
    {
      image: "src/assets/testimonial_4.png",
      name: "Saloni Rathod",
      rating: "5.0",
      text: "If you want to get success in your desired field then this academy is the best in the given field. Amazing faculty with friendly interaction and amazing method of teaching. Onkar Sir is the best teacher for your future goals. Highly recommended academy."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Mobile Carousel */}
      <div className="md:hidden relative w-full max-w-sm mx-auto overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full mx-1 ${
                index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Desktop Spread */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-18 bg-slate-700">
      <div className="container mx-auto px-4 text-white">
        {/* Testimonials Heading */}
        <div className="relative mb-20 md:mb-24">
          <h2 className="text-3xl md:text-[40px] font-bold leading-tight mb-2 inline-block">
            Testimonials
          </h2>
          <div className="bg-orange-500 w-[199.09px] h-[19.02px] rotate-[-5deg] absolute -bottom-4 left-0"></div>
        </div>

        {/* Testimonial Section */}
        <TestimonialSection />
      </div>
    </section>
  );
};

export default AboutSection;