import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DiscountOffers from '@/components/DiscountOffers';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import summer from "@/lib/Turtle hatchery rescue centre - Hikkaduwa, SriLanka.jpeg"
import fivedays from "@/lib/KANDY _ SRI LANKA UNCOVERED TOUR _ TruTravels.jpeg"
import honeymoon from "@/lib/Visit Sri Lanka (1).jpeg"
import sigiriya from "@/lib/The Eighth Wonder Of the World _SIGIRIYA_ in Sri Lanka.jpeg"
import asian from "@/lib/Asian Sunday_ Sunrise at Ella Rock, Sri Lanka — Steemit.jpeg"


const Index: React.FC = () => {
  const roundTours = [
    {
      title: "2 Nights / 3 Days Summer In Srilanka",
      slug: "2-nights-3-days-summer-in-srilanka",
      image: summer,
      description: "Experience Sri Lanka in three unforgettable days with our ‘Summer in Sri Lanka’ tour, featuring ancient temples, wildlife safaris, scenic train rides, and stunning natural landscapes.",
      delay: 0,
    },
    {
      title: "5 Days Tour In Srilanka",
      slug: "5-days-tour-in-srilanka",
      image: fivedays,
      description: "Experience the best of Sri Lanka in five unforgettable days, from ancient wonders and wildlife adventures to scenic tea plantations, cultural Kandy, and relaxing golden beaches",
      delay: 200,
    },
    {
      title: "3 Nights / 4 Days Honeymoon Tour ",
      slug: "3-nights-4-days-honeymoon-tour",
      image: honeymoon,
      description: "Discover the enchanting beauty of Sri Lanka on this 3-night, 4-day romantic getaway. Immerse yourself in the vibrant culture, stunning landscapes, and serene tranquility of this tropical paradise. From the bustling city of Colombo to the serene hill country of Nuwara Eliya, this itinerary offers a perfect blend of adventure, relaxation, and romance.",
      delay: 400,
    },
    {
      title: "4 Days Tour ",
      slug: "4-days-tour",
      image: sigiriya,
      description: "Embark on an unforgettable 3 Nights/4 Days journey through the heart of Sri Lanka, exploring the island’s most iconic destinations. Begin your adventure with the awe-inspiring Sigiriya Rock Fortress, the sacred Dambulla Cave Temple, and an exciting safari tour. Continue into the misty hill country, where you’ll enjoy a scenic train ride and a traditional tea experience. Discover the natural beauty and charm of Ella, then head south to relax on the serene beaches of Bentota. Conclude your journey with a brief tour of vibrant Colombo. A perfect blend of culture, nature, and relaxation awaits!",
      delay: 400,
    },
    {
      title: "7 Days /6 nights Tour Sri lanka",
      slug: "7-days-6-nights-tour-sri-lanka",
      image: asian,
      description: "Embark on an unforgettable 7-day journey across Sri Lanka, exploring its most iconic destinations and hidden treasures. Begin in Colombo, experiencing the vibrant city life before heading to the ancient wonders of Dambulla and Sigiriya, where history and culture come alive. Visit the cultural city of Kandy, home to the sacred Temple of the Tooth, and marvel at the breathtaking hill country with its lush tea plantations and misty landscapes in Ella. Enjoy the world-famous scenic train ride, encounter wildlife at Yala National Park, and relax along the golden beaches of the southern coast",
      delay: 400,
    },
  ];

  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        {/* Day Tour Packages */}
        <DiscountOffers />
        
        {/* Round Tours */}
        <section id="round-tours" className="py-20 bg-secondary">
          <div className="container px-4">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                ROUND TOURS
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roundTours.map((accommodation, index) => {
                const isOrange = accommodation.slug === '4-days-tour' || accommodation.slug === '7-days-6-nights-tour-sri-lanka';
                return (
                  <div key={index} className="overflow-hidden rounded-xl group shadow-lg animate-slide-up hover:shadow-xl bg-white flex flex-col h-full" style={{
                    animationDelay: `${accommodation.delay}ms`
                  }}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={accommodation.image} alt={accommodation.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className={(isOrange ? 'bg-gradient-to-r from-orange-600 to-orange-500' : 'bg-gradient-to-r from-blue-700 to-blue-600') + ' text-white p-6 flex flex-col flex-1'}>
                      <h3 className="text-xl font-display font-semibold mb-3">
                        {accommodation.title}
                      </h3>
                      <p className="text-white/90 mb-4">
                        {accommodation.description}
                      </p>
                      <div className="mt-auto">
                        <Link
                          to={`/tours/${accommodation.slug}`}
                          className={(isOrange ? 'text-orange-700' : 'text-blue-700') + ' inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white font-medium shadow hover:bg-white/90 hover:shadow-md transition-all duration-300 group'}
                        >
                          Tour Details
                          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};

export default Index;
