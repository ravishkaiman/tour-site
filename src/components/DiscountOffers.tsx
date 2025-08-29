import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import thisHappens from '@/lib/This happens___.jpeg';
import sigiriya from "@/lib/The Eighth Wonder Of the World _SIGIRIYA_ in Sri Lanka.jpeg";
import polonnaruwa from "@/lib/Tip voor een bezoek aan Polonnaruwa.jpeg";
import kandy from "@/lib/Sri Dalada Maligawa, Kandy.jpeg"
import ella from "@/lib/Ella, Sri Lanka_ 10 Best Things To Do.jpeg"
import nuwaraeliya from "@/lib/𝐍𝐮𝐰𝐚𝐫𝐚 𝐄𝐥𝐢𝐲𝐚.jpeg"
import Anuradhapura from "@/lib/Ruwenweli Seya Anuradhapura Sri Lanka.jpeg"
import minneriya from "@/lib/Minneriya National Park Halfday Safari.jpeg"
import galle from "@/lib/beach.jpeg"
interface OfferProps {
  id: string;
  title: string;
  description: string;
  discount: string;
  priceFrom: string;
  priceTo: string;
  image: string;
  backgroundColor: string;
  textColor: string;
  linkTo: string;
  animationDelay?: number;
  featured?: boolean;
}

const offers: OfferProps[] = [

  {
    id: '',
    title: 'Anuradhapura Day Tour',
    description: "Explore Anuradhapura, Sri Lanka’s ancient capital and UNESCO World Heritage site. Discover sacred temples, towering dagobas, and the 2,500-year-old Sri Maha Bodhi tree with expert local guides.",
    discount: '',
    priceFrom: '',
    priceTo: '',
    image: Anuradhapura,
    backgroundColor: 'bg-blue-600',
    textColor: 'text-white',
    linkTo: 'https://wa.me/94764519940',
    animationDelay: 0
  },
  
  {
    id: 'Safari Tour at Udawalawa National Park',
    title: 'Safari Tour at Udawalawa National Park',
    description: `Discover Udawalawe National Park with our guided safari—majestic elephants, wild leopards, and exotic birds await. Experience Sri Lanka’s raw beauty with expert local guides. Book your adventure today!`,
    discount: '',
    priceFrom: '',
    priceTo: '',
    image: thisHappens,
    backgroundColor: 'bg-blue-600',
    textColor: 'text-white',
    linkTo: 'https://wa.me/94764519940',
    animationDelay: 200
  },
  {
    id: 'Day Tour at Polonnaruwa City',
    title: 'Day Tour at Polonnaruwa City',
    description: `Journey into the heart of Sri Lanka's golden age with our immersive Polonnaruwa Day Tour. This UNESCO World Heritage Site and key destination in the cultural triangle showcases the architectural brilliance of ancient Sinhalese civilization through its perfectly preserved ruins and sacred monuments.Discover the grandeur of royal palaces, walk through ancient temple complexes, and stand in awe before the magnificent Gal Viharaya Buddha statues carved from solid granite. Each site reveals fascinating stories of kings who once ruled this medieval capital with unprecedented prosperity and cultural achievement.Our experienced guides share captivating historical narratives and architectural insights, bringing these 800-year-old ruins to life in fluent English. Specialized language guides are available upon request to enhance your cultural exploration.Designed for history enthusiasts, cultural explorers, and inquisitive travelers, this comprehensive day tour ensures you experience the finest treasures of Polonnaruwa's royal legacy. Witness the remarkable fusion of religious devotion and royal power that defined one of Sri Lanka's most influential ancient kingdoms`,
    discount: '',
    priceFrom: '',
    priceTo: '',
    image: polonnaruwa,
    backgroundColor: 'bg-blue-600',
    textColor: 'text-white',
    linkTo: 'https://wa.me/94764519940',
    animationDelay: 100
  },
  {
    id: 'Kandy City Tour',
    title: 'Kandy City Tour',
    description: 'Discover Kandy, Sri Lanka’s hill capital and UNESCO World Heritage city. Home to the sacred Temple of the Tooth Relic, it blends rich history, cultural heritage, and stunning mountain scenery.',
    discount: '',
    priceFrom: '',
    priceTo: '',
    image: kandy,
    backgroundColor: 'bg-orange-600',
    textColor: 'text-white',
    linkTo: 'https://wa.me/94764519940',
    animationDelay: 200
  },
  {
    id: 'Ella City Tour ',
    title: 'Ella City Tour ',
    description: 'Discover Ella’s natural beauty with our guided tour—lush landscapes, stunning views, and unforgettable sights await nature lovers.',
    discount: '',
    priceFrom: '',
    priceTo: '',
    image: ella ,
    backgroundColor: 'bg-orange-600',
    textColor: 'text-white',
    linkTo: 'https://wa.me/94764519940',
    animationDelay: 200
  },
  {
    id: 'Minneriya Safari Tour',
    title: 'Minneriya Safari Tour',
    description: 'Explore Minneriya National Park on a private safari with comfortable transport and expert guides. Enjoy a personalized wildlife experience with language-specific guides available on request.',
    discount: '',
    priceFrom: '',
    priceTo: '',
    image: minneriya,
    backgroundColor: 'bg-orange-600',
    textColor: 'text-white',
    linkTo: 'https://wa.me/94764519940',
    animationDelay: 200
  },
  {
    id: 'Galle City Tour',
    title: 'Galle City Tour',
    description: 'Discover Galle, Sri Lanka’s historic southern city with rich cultural heritage and colonial history. Join our Galle City Day Tour to explore its iconic sites and create unforgettable memories.',
    discount: '',
    priceFrom: '',
    priceTo: '',
    image:galle  ,
    backgroundColor: 'bg-blue-400',
    textColor: 'text-white',
    linkTo: 'https://wa.me/94764519940',
    animationDelay: 200
  }
];

const OfferCard: React.FC<OfferProps> = ({
  id,
  title,
  description,
  discount,
  priceFrom,
  priceTo,
  image,
  backgroundColor,
  textColor,
  linkTo,
  animationDelay = 0,
  featured
}) => {
  return (
    <motion.div
      className={cn(
        "rounded-xl overflow-hidden shadow-lg hover:shadow-xl group relative h-full flex flex-col",
        featured && "md:col-span-2 md:row-span-2"
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay / 1000 }}
      viewport={{ once: true }}
    >
      <div className={cn("relative h-64")}> 
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div 
          className={cn(
            "absolute top-0 right-0 py-2 px-4 rounded-bl-lg z-10",
            backgroundColor
          )}
        >
          <span className={cn("font-bold text-lg", textColor)}>{discount}</span>
        </div>
        {featured && (
          <div className="absolute top-0 left-0 m-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured Package
          </div>
        )}
      </div>
      <div className={cn("p-6 flex flex-col flex-1", backgroundColor, textColor)}>
        <h3 className="text-2xl font-display font-semibold mb-2">{title}</h3>
        <div className="mb-5 opacity-90 max-h-24 min-h-24 overflow-hidden">
          {description}
        </div>
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="line-through opacity-75 text-sm">{priceFrom}</span>
            <span className="text-xl font-bold ml-2">{priceTo}</span>
          </div>
          <Link 
            to={`/tours/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} 
            className={cn(
              "rounded-full py-2 px-4 inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 transition-all",
              textColor
            )}
          >
            Tour Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const DiscountOffers: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden" id="day-package">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="px-4 py-1.5 bg-purple-100 text-purple-800 rounded-full text-sm font-medium inline-block mb-4">
            
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Day Tour Pakages          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take advantage of our exclusive deals and save on your next adventure in Sri Lanka.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <OfferCard key={offer.id} {...offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscountOffers;
