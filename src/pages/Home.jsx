
function Home() {
	return (
		<>
			<div className="bg-homeMobileImage bg-cover bg-center md:bg-homeDesktopImage relative md:p-0 pt-[35%] lg:h-[100%]">
				<div className="flex items-center justify-center">
					<div className="flex items-center justify-between w-[100%] md:w-[70%]">
						<div className="flex items-center justify-center md:justify-between w-[100%] px-[24px] pb-[48px] md:pb-[130px] md:pt-[260px]">
							<div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-[100vw] relative">
								<div className="lg:w-[33vw] text-center lg:text-start">
									<h5 className="text-fontColor">SO, YOU WANT TO TRAVEL TO</h5>
									<h1>SPACE</h1>
									<p className='text-fontColor'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
								</div>

								<div className="mt-[2rem] lg:mt-0 lg:absolute lg:right-0 lg:bottom-0 hover:bg-Gray p-[2rem] rounded-full">
										<button className="text-black uppercase bg-white lg:m-0 py-[50px] md:py-[100px] px-[30px] md:px-[80px] border-0 rounded-full">explore</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home