import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: 'Chef Ranveer M.',
      role: 'Executive Chef & Food Content Creator',
      avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      product: 'Amul Fresh Cream 250ml & 1L',
      review: 'In Indian commercial kitchens, nothing replicates the fat balance of Amul Fresh Cream. It adds that signature sheen to Dal Makhani and Butter Chicken without splitting or curdling. An absolute gold standard.'
    },
    {
      id: 2,
      name: 'Pooja Dhingra',
      role: 'Pastry Chef & Bakery Owner',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      product: 'Amul Whipping Cream 30% Fat',
      review: 'Amul Whipping Cream creates gorgeous stiff peaks with pure dairy mouthfeel. Our chocolate ganache tarts and strawberry shortcakes taste so rich because there is zero vegetable fat film.'
    },
    {
      id: 3,
      name: 'Vikram & Priya Iyer',
      role: 'Home Gourmets & Parents',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      product: 'Amul Rajbhog & Alphonso Gold Tub',
      review: 'My family has been eating Amul Ice Cream for 25 years. The real saffron aroma and crunchy pistachios in the Rajbhog tub are unmatched. Plus knowing it is 100% real cow and buffalo milk gives complete peace of mind.'
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-white via-amber-50/50 to-white border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            Loved By Chefs & Families
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Over 3.6 Million Kitchens Trust Amul
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Read real stories from Michelin-recommended chefs, artisanal bakers, and everyday households.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-7 border border-amber-900/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cream-card-hover relative"
            >
              <Quote className="w-10 h-10 text-amber-200/80 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.review}"
                </p>

                <div className="mt-4 bg-amber-50/80 rounded-xl px-3 py-1.5 border border-amber-200/50 inline-block">
                  <span className="text-[11px] font-bold text-amber-900 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    Verified: {rev.product}
                  </span>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-slate-100">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-300"
                />
                <div>
                  <h4 className="font-black text-slate-900 text-sm">{rev.name}</h4>
                  <p className="text-[11px] text-slate-500 font-medium">{rev.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Nostalgic Amul Billboard tribute banner */}
        <div className="mt-14 bg-gradient-to-r from-red-600 via-[#D9252A] to-red-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="bg-white/20 text-white font-extrabold text-[11px] px-3 py-1 rounded-full uppercase tracking-widest inline-block">
              AMUL TOPICAL NOSTALGIA
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              "Cream Always Rises to the Top!"
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl">
              Celebrating over 50 years of the iconic Amul mascot, bringing pure smiles and wholesome dairy to every Indian household.
            </p>
          </div>

          <a
            href="#products"
            className="bg-white hover:bg-amber-100 text-[#D9252A] px-6 py-3.5 rounded-2xl font-black text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            Order Your Fresh Cream Now
          </a>
        </div>

      </div>
    </section>
  );
}
