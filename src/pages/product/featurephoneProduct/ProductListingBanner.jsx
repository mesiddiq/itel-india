import { Link } from "react-router-dom";
import curlyLine from "/product-listing/curlyHeader.svg";
import readmore from "/product-listing/read-more.svg";

const ProductListingBanner = () => {
	return (
		<section className=" w-full h-[450px] md:h-[329px] font-markot bg-[#EBE8E2] lg:rounded-2xl relative overflow-hidden">
			<div
				className=" overflow-hidden flex md:flex-row justify-between lg:pr-40 flex-col bg-[#EBE8E2] h-full w-full rounded-2xl bg-no-repeat bg-center md:bg-right bg-cover md:bg-auto"
				style={{ backgroundImage: `url(${curlyLine})` }}
			>
				<section className="pl-5 md:pl-10 py-5 md:py-11 md:h-full md:w-1/2 w-full flex flex-col gap-4 md:justify-between">
					<div className="flex flex-col">
						<h3 className="text-base md:text-2xl font-medium tracking-[-2%]">
							The Wait is Over!
						</h3>
						<h3 className="text-4xl md:text-5xl font-medium lg:leading-[57.6px] tracking-[-0.04em] text-left text-[#FF0037]">
							Presenting King Signal
						</h3>
					</div>

					<Link to="/product/king-signal">
						<img
							src={readmore}
							className="w-1/3"
						/>
					</Link>
				</section>
				<img
					src="/featurephone/king_signal/product/hero_phone.webp"
					alt="King Signal"
					className="lg:ml-20 max-w-[200px] lg:max-w-[250px] self-end lg:self-start"
				/>
			</div>
		</section>
	);
};

export default ProductListingBanner;
//styleName: Desktop/H2;
