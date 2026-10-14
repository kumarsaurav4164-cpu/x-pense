import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Award, Snowflake, Utensils, Star, CheckCircle2, Eye } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function Hero({ onAddToCart, onQuickView }) {
  const [activeHighlight, setActiveHighlight] = useState(0);

  const highlights = [
    {
      title: 'Amul Fresh Cream',
      badge: '25% Pure Milk Fat',
      tagline: 'The secret behind velvety curries & dreamy desserts',
      size: '250 ml Tetra Pack',
      price: '₹67',
      fatBadge: '25% Low-Fat Sterilized',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80',
      productId: 'amul-fresh-cream-250'
    },
    {
      title: 'Amul Rajbhog Ice Cream',
      badge: 'Royal Saffron & Nuts',
      tagline: 'Kashmiri saffron cream loaded with pistachios and almonds',
      size: '1 Litre Tub',
      price: '₹275',
      fatBadge: '100% Real Dairy Milk',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
      productId: 'amul-rajbhog-icecream'
    },
    {
      title: 'Amul Alphonso Gold',
      badge: 'Ratnagiri Mango',
      tagline: 'Sun-drenched mango pulp folded into churned dairy cream',
      size: '1 Litre Tub',
      price: '₹240',
      fatBadge: 'No Palm Oil Added',
      image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80',
      productId: 'amul-alphonso-mango'
    }
  ];

  const current = highlights[activeHighlight];

  const handleQuickViewHero = () => {
    if (onQuickView) {
      const fullProduct = PRODUCTS.find((p) => p.id === current.productId);
      if (fullProduct) {
        onQuickView(fullProduct);
      }
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E6] to-[#FAF7F2]">
      {/* Decorative background blurs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-200/35 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-100/30 rounded-full blur-2xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300/60 rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold text-amber-900 shadow-2xs">
              <Sparkles className="w-4 h-4 text-amber-600 fill-amber-500" />
              <span>India's Most Loved Dairy & Fresh Cream Heritage</span>
              <span className="hidden sm:inline bg-amber-900 text-amber-100 px-2 py-0.2 rounded-full text-[10px]">Since 1946</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              The Richness of <br className="hidden sm:inline" />
              <span className="text-[#D9252A] underline decoration-amber-300 decoration-wavy decoration-2">Pure Milk Cream</span>, <br />
              <span className="bg-gradient-to-r from-[#0B3C8A] via-[#1A5BB8] to-[#0B3C8A] bg-clip-text text-transparent">
                Every Single Day.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Elevate every curry, soup, pasta, and dessert with sterilized 
              <strong className="text-slate-900 font-semibold"> Amul Fresh Cream (25% Milk Fat) </strong> 
              and indulge in our 100% real dairy gourmet ice creams. Pure milk purity with zero hydrogenated vegetable oil.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#D9252A] hover:bg-[#b51c20] text-white font-extrabold px-8 py-4 rounded-2xl shadow-lg shadow-red-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] text-base group cursor-pointer"
              >
                <span>Order Fresh Cream & Ice Creams</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#recipes"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-amber-50 text-slate-800 font-bold px-6 py-4 rounded-2xl border border-amber-900/15 shadow-xs transition-all hover:border-amber-300"
              >
                <Utensils className="w-5 h-5 text-amber-600" />
                <span>Explore Chef Recipes</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-amber-900/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900">100% Real Milk</h4>
                  <p className="text-[11px] text-slate-500">No Palm Oil</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center text-[#0B3C8A] shrink-0">
                  <Snowflake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900">Cold Chain</h4>
                  <p className="text-[11px] text-slate-500">Delivered Chilled</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center text-green-800 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900">Aseptic Sterilized</h4>
                  <p className="text-[11px] text-slate-500">120 Days Life</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center text-[#D9252A] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900">Taste of India</h4>
                  <p className="text-[11px] text-slate-500">Farmer Owned</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Featured Product Card with switcher */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              
              {/* Outer Card */}
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl shadow-amber-950/10 border border-amber-900/10 backdrop-blur-xl">
                
                {/* Floating Discount / Tag Badge */}
                <div className="absolute -top-3 right-6 bg-[#0B3C8A] text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  <span>{current.badge}</span>
                </div>

                {/* Hero Showcase Image */}
                <div
                  onClick={handleQuickViewHero}
                  className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-amber-50 group cursor-pointer"
                  title="Click to view full details"
                >
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold py-1.5 px-3 rounded-full shadow-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-[#0B3C8A]" /> Quick View
                    </span>
                  </div>

~                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full text-xs font-semibold mb-1">
                      {current.fatBadge}
                    </span>
                    <h3 className="text-xl font-black">{current.title}</h3>
                    <p className="text-xs text-white/80 line-clamp-1">{current.tagline}</p>
                  </div>
                </div>

                {/* Switcher Tabs */}
                <div className="grid grid-cols-3 gap-2 p-1.5 bg-amber-50 rounded-2xl mb-5">
                  {highlights.map((item, idx) => (
                    <button
                      key={item.title}
                      onClick={() => setActiveHighlight(idx)}
                      className={`text-xs py-2 px-1 rounded-xl font-bold transition-all text-center ${
                        activeHighlight === idx
                          ? 'bg-white text-[#0B3C8A] shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {item.title.split(' ')[1] || item.title.split(' ')[0]}
                    </button>
                  ))}
                </div>

                {/* Pricing & Add to Cart Action */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">{current.size}</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-black text-slate-900">{current.price}</span>
                      <span className="text-xs text-slate-400 font-medium">inclusive of taxes</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onAddToCart(current.productId)}
                    className="bg-[#D9252A] hover:bg-[#b0171b] text-white px-5 py-2.5 rounded-xl font-black text-sm shadow-md shadow-red-600/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    + Add to Bag
                  </button>
                </div>
              </div>

              {/* Decorative side floating badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white border border-amber-200 rounded-2xl p-3 shadow-xl items-center gap-3 animate-bounce [animation-duration:3s]">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-black text-lg">
                  🥣
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">25% Milk Fat</p>
                  <p className="text-[10px] text-slate-500">Natural Double Cream</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
