export const Navlinks = [
    {no:'00', link:'home', to:'/'},
    {no:'01', link:'destination', to:'/destination'},
    {no:'02', link:'crew', to:'/crew'},
    {no:'03', link:'technology', to:'/technology'},
]

export const Destinations = [
    {
				id: 1,
        planet: 'Moon',
        description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 KM',
        travelTime: '3 days',
				image: 'public/assets/destination/image-moon.png'
    },
    {
				id: 2,
        planet: 'Mars',
        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 MIL. km',
        travelTime: '9 months',
				image: 'public/assets/destination/image-mars.png'
    },
    {
			id: 3,
        planet: 'Europa',
        description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
				distance: '628 MIL. km',
        travelTime: '3 years',
				image: 'public/assets/destination/image-europa.png'
    },
		{
			id: 4,
			planet: 'Titan',
			description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
			distance: '1.6 BIL. km',
			travelTime: '7 years',
			image: 'public/assets/destination/image-titan.png'
	},
]

export const CrewMember = [
  {
    id: 1,
    role: 'commander',
    name: 'douglas hurley',
    description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    image: 'public/assets/crew/image-douglas-hurley.png'
  },
  {
    id: 2,
    role: 'mission specialist',
    name: 'mark shuttleworth',
    description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    image: 'public/assets/crew/image-mark-shuttleworth.png'
  },
  {
    id: 3,
    role: 'pilot',
    name: 'victor glover',
    description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
    image: 'public/assets/crew/image-victor-glover.png'
  },
  {
    id: 4,
    role: 'flight engineer',
    name: 'anousheh ansari',
    description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
    image: 'public/assets/crew/image-anousheh-ansari.png'
  },
]

export const technology = [
  {
    id: 1,
    name: 'launch vehicle',
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imageLandscape: 'public/assets/technology/image-launch-vehicle-landscape.jpg',
    imagePotrait: 'public/assets/technology/image-launch-vehicle-portrait.jpg'
  },
  {
    id: 2,
    name: 'spaceport',
    description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    imageLandscape: 'public/assets/technology/image-spaceport-landscape.jpg',
    imagePotrait: 'public/assets/technology/image-spaceport-portrait.jpg'
  },
  {
    id: 3,
    name: 'space capsule',
    description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    imageLandscape: 'public/assets/technology/image-space-capsule-landscape.jpg',
    imagePotrait: 'public/assets/technology/image-space-capsule-portrait.jpg'
  },
]