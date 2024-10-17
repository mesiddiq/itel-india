
import MainHeader from "./header/MainHeader";


const Aboutus = () => {
  return (
    <div className=" font-markot overflow-hidden ">
      <MainHeader />

      <div className="relative h-screen w-full">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/mp4/aboutus.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Centered Image */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <img src="/images/Group 13950.png" alt="Centered" className="w-1/3" />
        </div>

        {/* Overlay to darken video if needed */}
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
      </div>

      <div className=" lg:p-20 p-10 ">
        <div className=" space-y-10 lg:p-10 p-5">
          <p className=" lg:text-desktop/h2  text-mobile/h4 text-center">Our Mission</p>
          <p className=" lg:text-desktop/body/large text-desktop/body/1  text-grey/grey/5">
            Established over 10 years, itel is a reliable smart life brand for
            everyone. Adopting “Enjoy Better Life” as its brand philosophy,
            itel’s mission is to provide budget-friendly consumer electronic
            products and lifestyle products to everyone. It democratises
            technology by giving entry to technology and connectedness to
            consumers without prior access to it. After more than 10 years’
            development, itel has expanded its presence in more than 70 emerging
            markets globally. itel has a product portfolio of smartphones, TV,
            accessories, electrics, home appliances, laptop and lifestyle
            products.
          </p>
        </div>

      </div>
 

      <div className="relative h-screen w-full">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/mp4/aboutus.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Centered Image */}
        <div className="relative z-10 flex items-end justify-center h-full">
         <p className=" lg:text-desktop/h2 m-10 text-mobile/h7 text-white ">Connecting Hearts, Everyday with itel!</p>
        </div>

        {/* Overlay to darken video if needed */}
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
      </div>

<div className=" lg:py-20 py-10 space-y-10"> 
  <p className=" text-desktop/h2 text-center">itel’s Global Milestones</p>
  <div>
    <img  className="p-10"  src={'/static_page/Group 1973340154 (2).png'} alt="" />
  </div>
</div>


<div className=" ">
<p className=" text-desktop/h2 text-center">Awards and Recognitions</p>

<p className=" p-10 text-center">under building</p>

</div>


    </div>
  );
};

export default Aboutus;
