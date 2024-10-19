import React from "react";
// import bgImg from "../../assets/Clip_path_group.png";
// import img1 from "../../assets/BluetoothCalling1.png";
// import img2 from "../../assets/BluetoothCalling2.png";

function BluetoothSection() {
	return (
		<div className="relative w-full h-[370px] md:h-[500px] lg:h-[976px] lg:bg-[url('/featurephone/Circle_1/Backgrounds/bluetooth_calling.webp')] bg-[url('/featurephone/Circle_1/Backgrounds/bluetooth_calling_mobile.webp')] bg-cover px-4 md:px-0 overflow-hidden">

			{/* Text Section */}
			<div className="relative z-10 flex flex-col items-center text-center text-white pt-4 md:py-12">
				<h2 className="lg:text-[48px] lg:leading-[52px] lg:-tracking-[1.9px] text-mobile/h4 font-medium">Realtime</h2>
				<h1 className="lg:text-[80px] lg:leading-[88px] lg:-tracking-[2.4px] text-mobile/h4 font-medium ">Bluetooth Calling</h1>
				<p className=" text-mobile/body/2 lg:text-desktop/body/large text-grey/grey/1/70 max-w-[578px] mt-3">
					No need to constantly hold your smartphone – Circle 1 with built-in BT
					Caller lets you take calls effortlessly.
				</p>
			</div>

			<img src="/featurephone/Circle_1/Backgrounds/bluetooth_calling_phone.webp" alt="Circle 1" className="lg:max-w-6xl md:max-w-lg translate-y-6 md:translate-y-0 mx-auto" />

		</div>
	);
}

export default BluetoothSection;