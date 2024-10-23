import FeatureRich from "../../../common/feature_phone_common/FeatureRich";

const featureData = {
  title: "The Ultimate Storage Solution: Massive 256GB ROM",
  description:
    "Introducing the itel A70, your gateway to the future of smartphones! With its awesome design and 6.6inch HD+ display, it's the epitome of elegance and functionality. Experience seamless multitasking with 4GB RAM, expandable up to 12GB* with Memory Fusion & Massive 256GB ROM. Powered by an octa-core processor and 5000 mAh battery, and Type-C charging it's built for seamless performance. Get yours today and step into the world of tomorrow!",
  cards: [
    {
      id: 1,
      title: "Unparalleled Storage: 12GB* (4GB+8GB*) RAM + 256GB ROM",
      description:
        "Store, organize, and access your data effortlessly - 4GB RAM, expandable up to 12GB* with Memory Fusion & Massive 256GB ROM.",
      icon: "/smartphone/a70/storageA70.svg",
    },
    {
      id: 2,
      title: "Brighter, Bolder, Better: 6.6 inch HD+ Display",
      description:
        "Experience vibrant colors and sharp details with the 6.6” HD+ Display, featuring 500 nits of peak brightness and a dynamic display bar.",
      icon: "/smartphone/a70/DisplayA70.svg",
    },
    {
      id: 3,
      title: "Camera Duo: 8MP AI Front & 13MP AI Dual Rear Camera",
      description:
        "With itel A70's 8MP AI Front Camera and 13MP AI Dual Rear Camera, capturing and sharing your memories has never been easier.",
      icon: "/smartphone/a70/CameraA70.svg",
    },
  ],
};

const FeatureSection70 = () => (
  <div id="overview">
    <FeatureRich
      title={featureData.title}
      description={featureData.description}
      cards={featureData.cards}
    />
  </div>
);

export default FeatureSection70;
