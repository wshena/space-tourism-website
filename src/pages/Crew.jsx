import { useState } from "react";
import { CrewMember } from "../content"

function Crew() {
	const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  }
  return (
    <div className='bg-crewMobileImage md:bg-crewDesktopImage bg-center bg-cover md:pt-[15%] pt-[35%] lg:h-[100%]'>
			<div className="md:px-[40px] lg:px-[166px] px-[24px]">
				<h5 className="uppercase mb-[30px] lg:mb-[150px] text-center md:text-start"> <span className='opacity-25'>02</span> meet your crew</h5>

				<div className="border flex flex-col lg:flex-row items-center justify-center md:justify-between pb-[95px] md:pb-0 lg:pb-[95px] relative">
					<div className="w-[100%] flex flex-col items-center lg:items-start text-center lg:text-start">
						<h4 className="opacity-[50%] uppercase">{CrewMember[activeLink].role}</h4>
						<h3 className="uppercase">{CrewMember[activeLink].name}</h3>
						<p className="text-Gray md:w-[65%] lg:w-[40%] mt-[30px] md:mt-0">{CrewMember[activeLink].description}</p>

						<div className="flex items-center gap-6 md:mt-[5%] lg:mt-[130px] flex-items order-first md:order-last mt-[20px] mb-[35px] lg:mb-0">
							{
								CrewMember.map((items, index) => (
									<button className={`block w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-white/[.17] rounded-full ${activeLink === index ? 'bg-white/[1]': ''}`} onClick={() => handleLinkClick(index)} key={index}></button>
								))
							}
						</div>
					</div>
					
					<div className="lg:absolute lg:right-0 bottom-[60%] md:bottom-[-80%] lg:bottom-0 md:border-0 border-b border-Gray flex items-center justify-center order-first md:order-last">
						<img src={CrewMember[activeLink].image} alt={CrewMember[activeLink].name} className="w-[50%] md:w-[80%] lg:w-[100%]"/>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Crew