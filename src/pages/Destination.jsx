import { useState } from "react"
import { Destinations } from "../content"

function Destination() {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
    console.log(activeLink);
  }

  return (
    <div className="bg-destinationDesktopImage bg-cover bg-center relative md:pt-[15%] pt-[35%]">
      <div className="lg:px-[166px] px-[24px]">
        <h5 className="uppercase lg:mb-[74px] text-center md:text-start"> <span className='opacity-25'>01</span> pick your destination</h5>
        <div className="flex items-center justify-between relative">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between md:pt-[80px] md:pb-[112px] mb-[58px]">
            <img src={Destinations[activeLink].image} alt={Destinations[activeLink].planet} className="w-[80%] mb-[30px] lg:mb-0 md:w-[40%] mt-[35px] lg:mt-0"/>
            <div className="w-[100%] lg:w-[38%] lg:text-start text-center flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-8 mb-[30px] md:mb-0">
              {Destinations.map((items, index) => (
                <button key={index} onClick={() => handleLinkClick(index)} className={`uppercase navLinks text-Gray hover:border-b-2 hover:border-VeryDarkBLue pb-[15px]} ${activeLink === index ? 'border-b': ''}`}>{items.planet}</button>
              ))}
              </div>
              <h2 className="uppercase">{Destinations[activeLink].planet}</h2>
              <p className="text-Gray md:w-[60%] lg:w-[100%]">{Destinations[activeLink].description}</p>
              <span className="block w-[100%] h-[1px] bg-VeryDarkBLue mt-[63px] mb-[32px]"></span>

              <div className="flex flex-col md:flex-row items-center gap-[30px] md:gap-20">
                <div>
                  <p className="p2 uppercase text-Gray">avg. distance</p>
                  <p className="p1 uppercase ">{Destinations[activeLink].distance}</p>
                </div>
                <div>
                  <p className="p2 uppercase text-Gray">est. travel time</p>
                  <p className="p1 uppercase ">{Destinations[activeLink].travelTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		</div>
  )
}

export default Destination
