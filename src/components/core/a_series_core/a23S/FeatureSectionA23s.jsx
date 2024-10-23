import FeatureRich from "../../../common/feature_phone_common/FeatureRich";

const FeatureSectionA23s = () => {
  const featureData = {
    title: "Get Started with Your Digital Journey with the All-New itel A23S",
    description: "If you’re someone who is taking their first steps into the digital world then the all-new itel A23S is the best bet for you! The A23S is equipped with a robust 3020 mAh battery and Smart Power Master, ensuring all-day performance. With 2GB of RAM, expandable upto 4GB with memory fusion, and 32GB of storage, it’s the ideal package for you. Enjoy the convenience of easy Smart Face Unlock and enhanced WhatsApp features like Peek Mode and Call Recording. Meet your perfect tech partner, wrapped in a trendy design.",
    cards: [
      { id: 1, title: "Unleash Possibilities with 32GB Ample Storage", description: "Experience swift performance with ample 32GB storage for all your apps and media at your fingertips.", icon: "/smartphone/A23s/AmpleStorage.svg" },
      { id: 2, title: "Secure and Convenient: Smart Face Unlock", description: "With lightning-fast recognition, smart face unlock offers both security and convenience, granting you quick access to your phone.", icon: "/smartphone/A23s/FaceUnlock.svg" },
      { id: 3, title: "Efficient 3020 mAh Battery", description: "Enjoy the robust 3020 mAh battery, optimized by Smart Power Master for efficient use throughout your day.", icon: "/smartphone/A23s/EffectiveBatter.svg" },
    ],
  };

  return (
    <div id="overview">
      <FeatureRich
        title={featureData.title} 
        description={featureData.description} 
        cards={featureData.cards} 
      />
    </div>
  );
};

export default FeatureSectionA23s;
