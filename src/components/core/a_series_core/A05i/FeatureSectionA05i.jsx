import FeatureRich from "../../../common/feature_phone_common/FeatureRich";

const featureData = {
  title: "Elevate Your Everyday Experience with 32GB ROM",
  description:
    "Presenting itel Aura 05i with 6.6-inch HD+ display, a 4000 mAh battery, 10W Type-C fast charging support, and 32GB ROM. Snap pics with its 5 MP dual rear camera and 5 MP front camera. Running on Android 13, it has fingerprint and Face unlock for extra security.",
  cards: [
    {
      id: 1,
      title: '6.6" HD+ Waterdrop Display',
      description:
        "Enjoy edge-to-edge screen that offers vibrant colors and crisp details, perfect for streaming, gaming, and browsing.",
      icon: "/smartphone/A05i/displayA05i.svg",
    },
    {
      id: 2,
      title: "Stay Powered All Day: 4000 mAh Battery & Type-C Charging",
      description:
        "Use your itel Aura 05i for long hours with 4000 mAh battery and Type-C fast charging for quick recharge.",
      icon: "/smartphone/A05i/batteryA05i.svg",
    },
    {
      id: 3,
      title: "Peak Awesomeness with 4GB* (2GB + 2GB*) RAM + 32GB ROM",
      description:
        "Get high performance with 4GB* (2GB + 2GB*) RAM for efficient multitasking and 32GB of storage for your apps and media.",
      icon: "/smartphone/A05i/ramA05i.svg",
    },
  ],
};

const FeatureSectionA05i = () => (
  <div id="overview" className="bg-white">
    <FeatureRich
      title={featureData.title}
      description={featureData.description}
      cards={featureData.cards}
    />
  </div>
);

export default FeatureSectionA05i;
