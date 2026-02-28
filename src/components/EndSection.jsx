import React from "react";

const EndSection = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Image Wrapper */}
        <div className="w-full overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/end.jpg"
            alt="College of Commerce"
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default EndSection;