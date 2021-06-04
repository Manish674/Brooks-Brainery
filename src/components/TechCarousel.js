import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const TechCarousel = ({ svg, title }) => {
	return (
		<div className="max-w-[25rem] max-h-[25rem] h-[17rem] flex flex-col space-y-[1rem] items-center justify-center bg-[#99E6FF] text-black md:ml-9">
			<div className="mt-[1rem] w-17 h-16 flex justify-center">{svg}</div>
			<div className="flex items-center justify-center">
				<h2 className="text-[1.2rem] font-semibold px-8">{title}</h2>
				<div>
					<BiRightArrowAlt className="text-3xl" />
				</div>
			</div>
		</div>
	);
};

export default TechCarousel;
