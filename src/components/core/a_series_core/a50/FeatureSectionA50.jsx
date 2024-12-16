import FeatureRich from "../../../common/feature_phone_common/FeatureRich";

const featureData = {
  title: "Store More, Worry Less with Massive 64GB ROM",
  description:
    "Experience breathtaking visuals on the itel A50 smartphone with its expansive 6.6-inch HD+ Drop Notch Display, featuring a crisp 1612 x 720 pixel resolution. Stay powered all day with the robust 4000 mAh battery and Type-C charging support. Effortlessly multitask with 8GB* (4GB+4GB*) RAM and 64GB ROM. Capture stunning photos with the 5MP dual rear camera and enjoy enhanced security with dual protection for your device.",
  cards: [
    {
      id: 1,
      title: "Blazing Speed with 8GB*(4GB+4GB*) RAM & 64GB ROM",
      description:
        "Ensure smooth multitasking and seamless app navigation with 8GB* (4GB+4GB*) RAM using memory fusion technology, combined with ample 64GB ROM.",
      icon: "/smartphone/a70/storageA70.svg",
    },
    {
      id: 2,
      title: "Big Screen Brilliance: 6.6” HD+ Drop Notch Display",
      description:
        "Immerse yourself in every detail with vibrant colours and sharp clarity in our 6.6” HD+ drop notch display.",
      icon: "/smartphone/a70/DisplayA70.svg",
    },
    {
      id: 3,
      title: "Turbocharge Your Day: 4000 mAh Battery & Type-C Charging",
      description:
        "No more battery anxiety! With lightning-fast Type-C charging & powerful 4000 mAh battery keeps you going non-stop.",
      icon: "/smartphone/a70/CameraA70.svg",
    },
  ],
};

const FeatureSectionA50 = () => (
  <div id="overview">
    <FeatureRich
      title={featureData.title}
      description={featureData.description}
      cards={featureData.cards}
    />
  </div>
);

export default FeatureSectionA50;
