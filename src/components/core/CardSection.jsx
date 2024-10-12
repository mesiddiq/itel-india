import React from "react";

const CardSection = () => {
  const cards = [
    { title: "Under 5000", image: "x" },
    { title: "Under 10000", image: "/path-to-image2.jpg" },
    { title: "Deals", image: "/path-to-image3.jpg" },
    { title: "Specials", image: "/path-to-image4.jpg" },
    { title: "Offer", image: "/path-to-image5.jpg" },
  ];

  return (
    <div className="bg-gray-900 py-10">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 px-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-800 text-center rounded-lg shadow-md p-6 transition-transform transform hover:scale-105"
          >
            <div className="flex justify-center">
              <img
                src={card.image}
                // alt={card.title}
                className="h-24 w-24 object-cover mb-4"
              />
            </div>
            <h3 className="text-white text-lg font-semibold">{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
