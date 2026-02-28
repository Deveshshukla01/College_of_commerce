import React from "react";

const MidSection = () => {
  return (
    <section className="w-full bg-white py-10 md:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Image Wrapper */}
        <div className="w-full lg:w-3/4 mx-auto overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/mid-logo.jpeg"
            alt="College of Commerce"
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default MidSection;