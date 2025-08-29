import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { tours } from "@/data/tours";
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === '') {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    // Show success notification
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter",
      variant: "default"
    });

    // Reset form and show dialog
    setEmail("");
    setIsSubscribed(true);
  };
  const { dayTours, roundTours } = useMemo(() => {
    const round = tours.filter(t => /\d+\s*(Nights?|Days?)/i.test(t.title));
    const day = tours.filter(t => !/\d+\s*(Nights?|Days?)/i.test(t.title));
    return { dayTours: day, roundTours: round };
  }, []);
  return <>
      <footer className="bg-blue-700 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 px-4">
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-2xl font-display font-semibold">
              Kenath Tours & Holiday</h3>
              <p className="text-white/80 max-w-xs">
                Discover a world of adventure and tranquility nestled in the heart of nature's paradise.
              </p>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-125">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-125">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-125">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div className="space-y-4 animate-fade-in animation-delay-200">
              <h4 className="text-lg font-display font-semibold">Day Tours</h4>
              <ul className="space-y-2">
                {dayTours.map(t => (
                  <li key={t.slug}>
                    <Link to={`/tours/${t.slug}`} className="text-white/80 hover:text-white transition-colors duration-300 inline-block py-1 link-underline">
                      {t.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4 animate-fade-in animation-delay-400">
              <h4 className="text-lg font-display font-semibold">Round Tours</h4>
              <ul className="space-y-2">
                {roundTours.map(t => (
                  <li key={t.slug}>
                    <Link to={`/tours/${t.slug}`} className="text-white/80 hover:text-white transition-colors duration-300 inline-block py-1 link-underline">
                      {t.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <a
                  href={`https://wa.me/94764519940?text=${encodeURIComponent("I'm interested in your packages")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors duration-300"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            
            <div className="space-y-4 animate-fade-in animation-delay-600">
              <h4 className="text-lg font-display font-semibold">Newsletter</h4>
              <p className="text-white/80 mx-0 my-0 px-0 py-0 rounded-lg">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <form className="mt-4 space-y-3" onSubmit={handleSubscribe}>
                <input type="email" placeholder="Your email address" className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" value={email} onChange={e => setEmail(e.target.value)} />
                <button type="submit" className="w-full px-4 py-2 rounded-md bg-white text-blue-700 font-medium transition-all duration-300 hover:scale-105 hover:bg-white/90">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/20 py-6 px-4 text-center text-white/70">
            <p>© {currentYear} KENATH Adventure Resorts. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Subscription Success Dialog */}
      <Dialog open={isSubscribed} onOpenChange={setIsSubscribed}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display text-center">Subscribed!</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center py-6">
            <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-scale-in">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-center mb-2">Thank you for subscribing!</h3>
            <p className="text-center text-muted-foreground">
              You'll now receive our latest updates and exclusive offers directly to your inbox.
            </p>
            <button onClick={() => setIsSubscribed(false)} className="mt-6 px-6 py-2 rounded-md bg-white text-blue-700 font-medium transition-all duration-300 hover:bg-white/90 hover:scale-105">
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>;
};
export default Footer;