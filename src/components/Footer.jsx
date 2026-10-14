import React, { useState } from 'react';
import { Mail, Phone, MapPin, Heart, ShieldCheck, ArrowRight } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [subscribedSuccess, setSubscribedSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (subscribedEmail) {
      setSubscribedSuccess(true);
      setSubscribedEmail('');
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D9252A] to-[#B0171B] flex flex-col items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl tracking-tighter leading-none italic font-serif">Amul</span>
                <span className="text-[8px] text-amber-200 font-bold uppercase tracking-widest">Dairy</span>
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-tight font-serif">Amul Cream</span>
                <p className="text-xs text-amber-400 font-bold tracking-wider uppercase">The Taste of India</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Owned by the Gujarat Cooperative Milk Marketing Federation Ltd. (GCMMF), the world's largest farmer-owned dairy cooperative empowering over 3.6 million rural milk producers.
            </p>

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 pt-2">
              <div className="flex items-center gap-1.5 text-white">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span>FSSAI Lic. 10012021000071</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-black text-sm uppercase tracking-wider">Dairy Range</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#products" className="hover:text-amber-300 transition-colors">Amul Fresh Cream 250ml</a></li>
              <li><a href="#products" className="hover:text-amber-300 transition-colors">Amul Fresh Cream 1 Litre</a></li>
              <li><a href="#products" className="hover:text-amber-300 transition-colors">Amul Whipping Cream 30%</a></li>
              <li><a href="#products" className="hover:text-amber-300 transition-colors">Amul Rajbhog Ice Cream</a></li>
              <li><a href="#products" className="hover:text-amber-300 transition-colors">Amul Alphonso Gold Mango</a></li>
              <li><a href="#products" className="hover:text-amber-300 transition-colors">Sugar-Free Vanilla Tub</a></li>
            </ul>
          </div>

          {/* Recipes & Culinary */}
          <div className="space-y-3">
            <h4 className="text-white font-black text-sm uppercase tracking-wider">Culinary Kitchen</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#recipes" className="hover:text-amber-300 transition-colors">Shahi Paneer Makhani</a></li>
              <li><a href="#recipes" className="hover:text-amber-300 transition-colors">Creamy Garlic Fettuccine</a></li>
              <li><a href="#recipes" className="hover:text-amber-300 transition-colors">Dark Chocolate Mousse</a></li>
              <li><a href="#recipes" className="hover:text-amber-300 transition-colors">Old Delhi Fruit Cream</a></li>
              <li><a href="#calculator" className="hover:text-amber-300 transition-colors">Party Cream Estimator</a></li>
            </ul>
          </div>

          {/* Newsletter Subscribe */}
          <div className="space-y-3">
            <h4 className="text-white font-black text-sm uppercase tracking-wider">Cream Recipe Club</h4>
            <p className="text-xs text-slate-400">
              Get weekly dessert recipes and secret restaurant-style curry tips delivered directly to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={subscribedEmail}
                  onChange={(e) => setSubscribedEmail(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-hidden focus:border-amber-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#D9252A] hover:bg-[#b0171b] text-white py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>Join Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              {subscribedSuccess && (
                <p className="text-[11px] text-green-400 font-bold">
                  ✓ Welcome! You will receive our secret cream recipes.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Corporate Address & Toll-free bar */}
        <div className="pt-8 border-t border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span>GCMMF Ltd., Amul Dairy Road, Anand 388001, Gujarat, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Toll Free Support: 1800 258 3333 (24x7)</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Email: gcmmf@amul.coop</span>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <p>© {CURRENT_YEAR} Gujarat Cooperative Milk Marketing Federation (GCMMF). All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Built with pure dairy love <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> & React + Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
