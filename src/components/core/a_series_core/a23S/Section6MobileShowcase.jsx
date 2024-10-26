/* eslint-disable react/prop-types */
const ShowcaseImage = ({ src, alt }) => {
  return <img src={src} alt={alt} className="lg:w-[286px] lg:h-[452px] md:w-[175px] md:h-[238px] w-[75px] h-[138px]" />;
};

const Section6MobileShowcase = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${'/smartphone/A23s/Backgrounds/moonBg.jpeg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
          padding: '0',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="lg:h-[800px] flex flex-col md:h-[500px] lg:gap-14 h-[200px] justify-center items-center ">
          <div className="flex flex-row gap-5">
            <ShowcaseImage src="/smartphone/A23s/Backgrounds/mob1silver.png" alt="Silver Smartphone" />
            <ShowcaseImage src="/smartphone/A23s/Backgrounds/mob2green.png" alt="Green Smartphone" />
            <ShowcaseImage src="/smartphone/A23s/Backgrounds/mob3black.png" alt="Black Smartphone" />
          </div>
          <p className="text-mobile/h6 text-white text-center md:text-desktop/h3 lg:text-desktop/h2">
            Trendy Design with Awesomeness
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section6MobileShowcase;
