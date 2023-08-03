import { useState } from 'react'
import { Navlinks } from '../content';
import { Link } from 'react-router-dom';
import Logo from '../../public/assets/shared/logo.svg'
import iconHamburger from '../../public/assets/shared/icon-hamburger.svg'
import iconClose from '../../public/assets/shared/icon-close.svg'

function Navbar() {
	const [isClick, setIsClick] = useState(false);
	const [activeLink, setActiveLink] = useState(0);

	const handleClick = () => setIsClick(!isClick);		
	const handleLinkClick = (index) => setActiveLink(index);

  return (
		<>
		<div className='absolute top-0 z-20 w-[100%]'>
			<nav className="flex items-center justify-between md:py-0 lg:py-[40px] relative p-[24px] mb-[38px] md:m-0 md:p-0">
				<a href="/" className='md:ml-[55px]'> <img src={Logo} alt="Logo" /> </a>

				<span className="hidden xl:block absolute w-[33%] h-[1px] bg-gray-500 z-20 left-[15%]"></span>

				{/* Navigation link for desktop */}
				<div className="navLinks hidden md:flex items-center justify-center md:pt-[39px] lg:pt-[44px] bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 lg:w-[55%] md:w-[70%]">
					<div className='flex gap-12'>
						{
							Navlinks.map((items, index) => (
								<Link to={items.to} className={`uppercase hover:border-b border-Gray block pb-[39px] ${activeLink === index ? 'border-b': ''}`} key={index} onClick={() => handleLinkClick(index)}> <span className='font-bold md:hidden lg:inline'>{items.no}</span> {items.link} </Link>
							))
						}
					</div>
				</div>

				<button className='md:hidden' onClick={handleClick}> <img src={iconHamburger} alt="hamburger" /> </button>

				{/* Navigation link for mobile */}
				{isClick && (
					<div className="md:hidden absolute h-[100vh] w-[70vw] top-0 right-0 flex flex-col px-[32px] py-[34px] bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 slide-right">
						<button className='flex justify-end mb-[70px]' onClick={handleClick}> <img src={iconClose} alt="close" /> </button>
						<div className='flex flex-col w-[100%] gap-8'>
						{
							Navlinks.map((items, index) => (
								<Link to={items.to} className='uppercase' key={index}> <span className='font-bold'>{items.no}</span> {items.link} </Link>
							))
						}
						</div>
					</div>
				)}
			</nav>

		</div>
		</>
  )
}

export default Navbar