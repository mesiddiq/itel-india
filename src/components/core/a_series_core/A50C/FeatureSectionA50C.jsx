import FeatureRich from "../../../common/feature_phone_common/FeatureRich";

const featureData = {
  title: "Discover the All-Rounder A50C: Packed with 4GB* RAM",
  description:
    "Experience top performance and style with the itel A50C, India's true all-rounder. It features 2GB RAM, expandable to 4GB with memory fusion technology, for smooth multitasking. Enjoy vibrant visuals on the 6.6″ HD+ display with a dynamic bar. Capture detailed photos with the 8MP AI rear camera and perfect selfies with the 5MP front camera. The Unisoc T603 Octa-core processor ensures seamless performance, while the 4000 mAh battery and 10W charging keep you powered all day. Plus, get a Free Screen Replacement and a 1-year warranty.",
  cards: [
    {
      id: 1,
      title: "Uninterrupted Performance with 4GB* (2GB+2GB*) RAM",
      description:
        "Experience seamless multitasking with 4GB* RAM (2GB + 2GB* expandable), ensuring continuous use throughout your day.",
      icon: "/smartphone/A50C/ramA50C.svg",
    },
    {
      id: 2,
      title: "Vivid 6.6” HD+IPS Display with Dynamic Bar",
      description:
        "Enjoy vibrant visuals with the 6.6” HD+ IPS Display and Dynamic Bar. Immerse yourself in a engaging viewing experience.",
      icon: "/smartphone/A50C/displayA50C.svg",
    },
    {
      id: 3,
      title: "Click Exceptional Photos: 8 MP AI Rear & 5 MP Front Camera",
      description:
        "Capture stunning shots with the 8 MP AI rear camera and perfect selfies with the 5 MP front camera, making every photo stand out.",
      icon: "/smartphone/A50C/cameraA50C.svg",
    },
  ],
};

const FeatureSectionA50C = () => (
  <div id="overview" className="bg-white">
    <FeatureRich
      title={featureData.title}
      description={featureData.description}
      cards={featureData.cards}
    />
  </div>
);

export default FeatureSectionA50C;
