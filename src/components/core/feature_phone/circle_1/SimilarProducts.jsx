import React from "react";
// import phone1 from "../../assets/it5262.png";
// import phone2 from "../../assets/it5330.png";
// import phone3 from "../../assets/circle1.png";
// import phone4 from "../../assets/superguru.png";
// import backgroundCircles from "../../assets/2-circle.png";

const ProductCard = ({ id, price, originalPrice }) => {
  const getImage = (id) => {
    switch (id.toLowerCase()) {
      case "it5262":
      case "it5027":
        return phone1;
      case "it5330":
        return phone2;
      case "circle 1":
        return phone3;
      case "super guru":
      case "power 120":
        return phone4;
      default:
        return phone1;
    }
  };

  return (
    <div className="flex flex-col items-center p-6 rounded-xl bg-[#F8F7F5] w-full">
      <div className="relative w-36 h-36 md:w-48 md:h-48">
        <div className="absolute inset-0 rounded-full bg-[#F5F5F5]" />
        <img
          src={backgroundCircles}
          alt="Background circles"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <img
          src={getImage(id)}
          alt={id}
          className="relative w-full h-full object-contain z-10"
        />
      </div>
      <div className="flex flex-col items-center gap-2 mt-4">
        <h3 className="text-lg md:text-xl font-medium text-stone-900">{id}</h3>
        <div className="flex items-center gap-2">
          <span className="text-base md:text-lg font-medium text-stone-900">
            {price}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {originalPrice}
            </span>
          )}
        </div>
        <button className="flex items-center gap-2 mt-2 font-medium text-stone-900">
          BUY NOW
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="red"
            className="transform translate-y-[1px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const SimilarProducts = () => {
  const products = [
    { id: "it5027", price: "₹1,099.00" },
    { id: "it5330", price: "₹1,499.00" },
    { id: "Circle 1", price: "₹1,269.00" },
    { id: "Power 120", price: "₹1,249.00" },
  ];

  return (
    <section className="flex flex-col items-center mt-16 md:mt-32 w-full relative">
      <div className="flex flex-col max-w-[1280px] w-full px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter leading-tight text-stone-900 mb-6 md:mb-9">
          Similar Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarProducts;
