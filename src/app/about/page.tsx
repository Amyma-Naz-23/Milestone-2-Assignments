import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Section */}
      <section className="flex justify-center items-center py-20 px-5">
        <div className="max-w-4xl bg-pink-100 text-center rounded-lg border border-gray-300 shadow-xl p-10">
          {/* Title */}
          <h2 className="text-5xl text-pink-700 font-serif font-bold mb-6">About Us</h2>

          {/* Subheading */}
          <h3 className="text-3xl text-gray-800 font-medium underline mb-4">How We Evolved</h3>
          <p className="text-base text-gray-600 leading-7 mb-6">
            The journey of ST London began with a collection of nail colors, and right from the
            beginning, the brand's creators recognized that every girl is different, with distinct
            needs, tastes, and preferences. With this in mind, they developed a philosophy that
            emphasizes the idea that no single product can suit everyone, but there's always
            something special for each person.
          </p>

          {/* Conscious Formulation */}
          <h3 className="text-3xl text-gray-800 font-medium underline mb-4">We Formulate Consciously</h3>
          <p className="text-base text-gray-600 leading-7 mb-6">
            At our core, we are dedicated to keeping our promises while also prioritizing the
            well-being of our users and the environment. We are committed to ensuring that our
            products are safe and sustainable without sacrificing quality or effectiveness.
          </p>

          {/* Embracing Diversity */}
          <h3 className="text-3xl text-gray-800 font-medium underline mb-4">We Embrace Diversity</h3>
          <p className="text-base text-gray-600 leading-7 mb-6">
            Recognizing and embracing the diversity of beauty, understanding that there is no single
            standard to define it. The brand is dedicated to empowering individuals to enhance their
            own unique beauty, and their tagline, "Own your look," encourages everyone to express
            themselves with confidence and pride.
          </p>

          {/* Commitment */}
          <h3 className="text-3xl text-gray-800 font-medium underline mb-4">Our Commitment</h3>
          <p className="text-base text-gray-600 leading-7">
            We want to deliver results without compromising the quality of our product. Hence, our
            formulations are skin-friendly, and our processes are environmentally considerate.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
