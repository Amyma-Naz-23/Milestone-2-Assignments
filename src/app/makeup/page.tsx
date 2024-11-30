import React from 'react';

const MakeUp = () => {
  const makeupData = [
    { id: 1, name: 'Foundation', price: 4000, description: 'St London Foundation', image: '/found.jpeg' },
    { id: 2, name: 'Lipstick', price: 650, description: 'Otwo Lipstick', image: '/lipstick.web.jpg' },
    { id: 3, name: 'Mascara', price: 1000, description: 'Maybelline', image: '/mask.jpg' },
    { id: 4, name: 'Face-Powder', price: 1000, description: 'Miss Ross Face-powder', image: '/powder.jpeg' },
    { id: 5, name: 'Nail Paint', price: 500, description: 'Revlon', image: '/nail.jpg' },
    { id: 6, name: 'Highlighter', price: 500, description: 'REFY Gloss Highlighter', image: '/heigh.jpg' },
  ];

  return (
    <div className="py-10 px-5 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {makeupData.map((makeup) => (
          <div
            key={makeup.id}
            className="bg-white p-5 rounded-lg shadow-lg text-center transform transition duration-300 hover:shadow-xl"
          >
            {/* Product Image */}
            <img
              src={makeup.image}
              alt={makeup.name}
              className="w-24 h-24 mx-auto rounded-md transition-transform duration-300 hover:scale-110"
            />
            {/* Product Name */}
            <h3 className="mt-4 text-lg font-bold text-gray-800">{makeup.name}</h3>
            {/* Product Description */}
            <p className="mt-2 text-sm text-gray-600">{makeup.description}</p>
            {/* Product Price */}
            <div className="mt-4 text-pink-600 font-bold text-xl">${makeup.price}</div>
            {/* Add to Cart Button */}
            <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MakeUp;
