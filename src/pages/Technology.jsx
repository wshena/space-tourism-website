import { useState } from "react";
import { technology } from "../content"

function Technology() {
	const [activeLink, setActiveLink] = useState(0);
	const handleLinkClick = (index) => {
    setActiveLink(index);
  }

	return (
		<div className="lg:bg-techDesktopImage bg-techMobileImage bg-center bg-cover md:pt-[15%] pt-[100px]">
			<div className="lg:pl-[166px] text-center md:text-start">
				<h5 className="md:pl-[40px] lg:pl-0 uppercase lg:mb-[150px]"><span className="opacity-25">03</span> space launch 101</h5>
				
				<div className="flex flex-col lg:flex-row items-center justify-between lg:pb-[100px]">
					<div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-[30px] md:gap-[80px] pb-[85px] lg:pb-0">
						<div className="flex flex-row lg:flex-col gap-8">
							{
								technology.map((items, index) => (
									<button key={index} className={`w-[40px] md:w-[80px] h-[40px] md:h-[80px] bg-white/[.25] rounded-full flex items-center justify-center hover:bg-black ${activeLink === index ? 'bg-white/[1] text-black': ''}`} onClick={() => handleLinkClick(index)}>
										<div className={`w-[70%] h-[70%] bg-black rotate-45 flex items-center justify-center ${activeLink === index ? 'bg-white': ''}`}><span className="-rotate-45">{items.id}</span></div>
									</button>
								))
							}
						</div>
						<div className="w-[100%] lg:w-[80%] px-[24px] lg:px-0 text-center lg:text-start">
							<p className="uppercase text-Gray tracking-[2.7px]">the terminology...</p>
							<h3 className="uppercase">{technology[activeLink].name}</h3>
							<p className="text-Gray w-[100%] lg:w-[85%] mt-8 md:mt-0">{technology[activeLink].description}</p>
						</div>
					</div>
					
					<img src={technology[activeLink].imagePotrait} alt={technology[activeLink].name} className="hidden lg:block"/>
					<img src={technology[activeLink].imageLandscape} alt={technology[activeLink].name} className="lg:hidden order-first py-8"/>
				</div>

			</div>
		</div>
	)
}

export default Technology