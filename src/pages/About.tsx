import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About: React.FC = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 md:pt-32">
        {/* Hero / Intro */}
        <section className="relative py-20 mb-8">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/039f35db-5cf1-4a0b-be13-c4f3947bec67.png')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10 container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              About Kenath Holiday Tour
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
              Your Gateway to Authentic Sri Lankan Adventures
            </p>
          </div>
        </section>
        
        <section className="section-padding container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Story</h2>
              <p className="text-foreground/70 mb-4">
                Welcome to Kenath Holiday Tour, where every journey becomes an unforgettable story. Founded with a passion for showcasing the breathtaking beauty and rich cultural heritage of Sri Lanka, we have established ourselves as a trusted partner for travelers seeking authentic experiences in the Pearl of the Indian Ocean.
              </p>
              <p className="text-foreground/70">
                Kenath Holiday Tour emerged from a simple yet powerful vision: to connect travelers with the true essence of Sri Lanka through personalized, memorable experiences. What began as a commitment to exceptional service has grown into a comprehensive travel solutions provider, dedicated to crafting perfect holidays that exceed expectations.
              </p>
            </div>
            <div>
              <div className="bg-secondary p-6 rounded-xl">
                <h3 className="text-2xl font-display font-semibold mb-3">What Sets Us Apart</h3>
                <div className="space-y-4 text-foreground/80">
                  <div>
                    <p className="font-semibold">Local Expertise, Global Standards</p>
                    <p>
                      Our team combines deep local knowledge with international service standards. We don't just show you destinations – we share the stories, traditions, and hidden gems that make each location special.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Comprehensive Travel Solutions</p>
                    <ul className="list-disc pl-6">
                      <li>Seamless airport transfers and transportation</li>
                      <li>Carefully curated tour packages</li>
                      <li>Accommodation from boutique guesthouses to luxury resorts</li>
                      <li>Expert local guides who bring destinations to life</li>
                      <li>Adventure activities and cultural experiences</li>
                      <li>24/7 customer support throughout your journey</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">Flexible & Personalized Service</p>
                    <p>
                      Select from our thoughtfully designed tour packages or let us create a completely customized itinerary just for you. Your holiday adapts to your interests, timeline, and budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Fleet & Services</h2>
                <p className="text-foreground/70 mb-4">
                  Our modern, well-maintained vehicle fleet ensures comfortable and safe travel across Sri Lanka's diverse landscapes. Choose from:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                  <li>Luxury air-conditioned coaches for group tours</li>
                  <li>Comfortable sedans and SUVs for family trips</li>
                  <li>Self-drive options for independent explorers</li>
                  <li>Specialized vehicles for adventure activities</li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Experience Sri Lanka With Us</h2>
                <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                  <li><strong>Cultural Heritage Tours</strong> – Temples, royal palaces, UNESCO sites</li>
                  <li><strong>Wildlife Safaris</strong> – Elephants, leopards, and exotic birds</li>
                  <li><strong>Hill Country Adventures</strong> – Tea plantations, misty mountains, colonial charm</li>
                  <li><strong>Coastal Escapes</strong> – Pristine beaches and water sports</li>
                  <li><strong>Adventure Activities</strong> – Hiking, white water rafting, and more</li>
                  <li><strong>Culinary Journeys</strong> – Authentic Sri Lankan flavors</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Commitment</h2>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li><strong>Quality</strong>: Every service meets our high standards</li>
                <li><strong>Authenticity</strong>: Genuine experiences that showcase real Sri Lanka</li>
                <li><strong>Sustainability</strong>: Responsible tourism that benefits local communities</li>
                <li><strong>Value</strong>: Competitive pricing without compromising on quality</li>
                <li><strong>Safety</strong>: Your security and comfort are our top priorities</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to Explore?</h2>
              <p className="text-foreground/70 mb-6">
                Let us transform your Sri Lankan holiday from ordinary to extraordinary. Our experienced team is ready to design the perfect adventure that matches your interests, schedule, and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-block px-6 py-3 bg-blue-700 text-white rounded-md shadow hover:bg-blue-800 transition">
                  Contact Us
                </Link>
                <a href="https://wa.me/94764519940" className="inline-block px-6 py-3 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50 transition">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-700 text-white text-center">
          <div className="container px-4">
            <p className="text-xl md:text-2xl font-display font-semibold">
              Kenath Holiday Tour - Creating Memories, One Journey at a Time
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};

export default About;
