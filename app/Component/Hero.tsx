import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#A6ABBD] via-[#56B6B1] to-[#424656] text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-4">Fortunata</h1>
        <p className="text-lg text-white mb-8">
          Discover the best subscription plans for you!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
