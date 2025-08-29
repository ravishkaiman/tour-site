import anuradhapuraImg from "@/lib/Ruwenweli Seya Anuradhapura Sri Lanka.jpeg";
import udawalaweImg from "@/lib/This happens___.jpeg";
import polonnaruwaImg from "@/lib/Tip voor een bezoek aan Polonnaruwa.jpeg";
import kandyImg from "@/lib/Sri Dalada Maligawa, Kandy.jpeg";
import ellaImg from "@/lib/Ella, Sri Lanka_ 10 Best Things To Do.jpeg";
import minneriyaImg from "@/lib/Minneriya National Park Halfday Safari.jpeg";
import galleImg from "@/lib/beach.jpeg";
import summerImg from "@/lib/Turtle hatchery rescue centre - Hikkaduwa, SriLanka.jpeg";
import fiveDaysImg from "@/lib/KANDY _ SRI LANKA UNCOVERED TOUR _ TruTravels.jpeg";
import honeymoonImg from "@/lib/Visit Sri Lanka (1).jpeg";
import sigiriyaImg from "@/lib/The Eighth Wonder Of the World _SIGIRIYA_ in Sri Lanka.jpeg";
import asianImg from "@/lib/Asian Sunday_ Sunrise at Ella Rock, Sri Lanka — Steemit.jpeg";

export type Tour = {
	slug: string;
	title: string;
	description: string;
	image: string;
};

export const tours: Tour[] = [
	{
		slug: 'anuradhapura-day-tour',
		title: 'Anuradhapura Day Tour',
		description:
			"Explore UNESCO-listed Anuradhapura: Sri Maha Bodhi, sacred stupas, and ancient royal ruins with an expert private guide.",
		image: anuradhapuraImg,
	},
	{
		slug: 'safari-tour-at-udawalawa-national-park',
		title: 'Safari Tour at Udawalawa National Park',
		description:
			"Guided safari in Udawalawe to see wild elephants, birdlife, and scenic reservoirs—safe, private, and photography-friendly.",
		image: udawalaweImg,
	},
	{
		slug: 'day-tour-at-polonnaruwa-city',
		title: 'Day Tour at Polonnaruwa City',
		description:
			"Walk the medieval capital’s royal ruins and the Gal Viharaya Buddhas on a compact, story-rich day tour.",
		image: polonnaruwaImg,
	},
	{
		slug: 'kandy-city-tour',
		title: 'Kandy City Tour',
		description:
			"Discover Kandy’s Temple of the Tooth, lake views, and hill-country charm on a culture-focused city tour.",
		image: kandyImg,
	},
	{
		slug: 'ella-city-tour',
		title: 'Ella City Tour',
		description:
			"Soak in Ella’s tea hills, Little Adam’s Peak, and Nine Arches Bridge—views, trails, and fresh mountain air.",
		image: ellaImg,
	},
	{
		slug: 'minneriya-safari-tour',
		title: 'Minneriya Safari Tour',
		description:
			"Private jeep safari to spot elephant gatherings and diverse wildlife in Minneriya’s lakeside grasslands.",
		image: minneriyaImg,
	},
	{
		slug: 'galle-city-tour',
		title: 'Galle City Tour',
		description:
			"Explore Galle Fort’s colonial streets, lighthouse views, and seaside cafes on a relaxed coastal day tour.",
		image: galleImg,
	},
  // Round tours
  {
    slug: '2-nights-3-days-summer-in-srilanka',
    title: '2 Nights / 3 Days Summer In Srilanka',
    description:
      'A compact highlights route with beaches, wildlife and heritage packed into three memorable days.',
    image: summerImg,
  },
  {
    slug: '5-days-tour-in-srilanka',
    title: '5 Days Tour In Srilanka',
    description:
      'Five-day circuit covering cultural triangle, hill country and coastal relaxation with curated experiences.',
    image: fiveDaysImg,
  },
  {
    slug: '3-nights-4-days-honeymoon-tour',
    title: '3 Nights / 4 Days Honeymoon Tour',
    description:
      'A romantic getaway through misty highlands, tea country and tranquil stays perfect for couples.',
    image: honeymoonImg,
  },
  {
    slug: '4-days-tour',
    title: '4 Days Tour',
    description:
      'Iconic Sigiriya and Dambulla paired with hill country scenery and a coastal wind-down.',
    image: sigiriyaImg,
  },
  {
    slug: '7-days-6-nights-tour-sri-lanka',
    title: '7 Days / 6 Nights Tour Sri Lanka',
    description:
      'A week-long round tour blending heritage cities, tea hills, wildlife and golden beaches.',
    image: asianImg,
  },
];
