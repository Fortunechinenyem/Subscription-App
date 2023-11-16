import React, { useEffect, useState } from "react";

const HeroSection: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const textOptions = [
    "Discover the best subscription plans for you!",
    "Find the perfect plan that fits your needs!",
    "Unlock premium features with our subscription plans!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === textOptions.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#A6ABBD] via-[#56B6B1] to-[#424656] text-white py-16 relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl font-extrabold mb-4">Fortunata</h1>
        <p className="text-lg text-white mb-8">{textOptions[slideIndex]}</p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="flex h-full">
          {textOptions.map((text, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full h-full transition-transform duration-500 transform ${
                index === slideIndex ? "translate-x-0" : "translate-x-full"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
