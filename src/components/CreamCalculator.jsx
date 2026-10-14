import React, { useState } from 'react';
import { Calculator, Users, ShoppingBag, CheckCircle } from 'lucide-react';

export default function CreamCalculator({ onAddToCart }) {
  const [guests, setGuests] = useState(6);
  const [dishType, setDishType] = useState('curries');

  // ml required per guest based on culinary benchmarks
  const dishProfiles = {
    curries: {
      name: 'North Indian Curries (Makhani & Korma)',
      mlPerPerson: 40,
      description: 'Gives the signature satin gloss and rich gravy body to Paneer/Chicken Makhani & Dal Makhani.',
      recommendedPacks: 'tetra'
    },
    pasta: {
      name: 'Italian Alfredo Pastas & Soups',
      mlPerPerson: 55,
      description: 'Creates thick, velvety white sauce that coats pasta perfectly.',
      recommendedPacks: 'tetra'
    },
    desserts: {
      name: 'Fruit Cream & Shahi Malai Desserts',
      mlPerPerson: 45,
      description: 'Chilled cream mixed with fruits, nuts, and condensed milk.',
      recommendedPacks: 'tetra'
    },
    baking: {
      name: 'Cakes & Whipping Frostings',
      mlPerPerson: 70,
      description: 'Whips to twice its volume for birthday cakes, mousse, and pie toppings.',
      recommendedPacks: 'whipping'
    }
  };

  const selectedProfile = dishProfiles[dishType];
  const totalMlNeeded = Math.round(guests * selectedProfile.mlPerPerson);

  const isWhipping = selectedProfile.recommendedPacks === 'whipping';
  const pack1LPrice = isWhipping ? 280 : 235;
  const pack1LId = isWhipping ? 'amul-whipping-cream-1000' : 'amul-fresh-cream-1000';
  const pack1LName = isWhipping ? 'Amul Whipping Cream 30% Fat (1 Litre)' : 'Amul Fresh Cream (1 Litre Family Pack)';

  // Compute best combo of packs
  let packs1L = 0;
  let packs250 = 0;

  if (totalMlNeeded >= 800) {
    packs1L = Math.ceil(totalMlNeeded / 1000);
  } else {
    packs250 = Math.ceil(totalMlNeeded / 250);
  }

  const estimatedCost = packs1L * pack1LPrice + packs250 * 67;

  const handleAddCalculatedToCart = () => {
    if (packs1L > 0) {
      onAddToCart(pack1LId, packs1L);
    }
    if (packs250 > 0) {
      onAddToCart('amul-fresh-cream-250', packs250);
    }
  };

  return (
    <section id="calculator" className="py-20 bg-white border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-amber-50/80 via-white to-amber-100/50 rounded-3xl p-6 sm:p-10 border border-amber-200/80 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Form Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-[#0B3C8A]/10 text-[#0B3C8A] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
                  <Calculator className="w-3.5 h-3.5" />
                  Kitchen & Feast Tool
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Party Cream Quantity Estimator
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                  Never run short of rich cream in the middle of cooking! Select your guest count and menu to get the exact pack combination.
                </p>
              </div>

              {/* Guests Count Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-amber-700" />
                    Number of Guests / Servings:
                  </label>
                  <span className="text-sm font-black text-[#0B3C8A] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    {guests} People
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="40"
                  step="1"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-[#D9252A]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>Intimate (2)</span>
                  <span>Family Dinner (6-10)</span>
                  <span>Grand Party (40)</span>
                </div>
              </div>

              {/* Dish Category Selection */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2">
                  What are you preparing?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {Object.entries(dishProfiles).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => setDishType(key)}
                      className={`p-3 rounded-2xl text-left border text-xs transition-all cursor-pointer ${
                        dishType === key
                          ? 'border-[#0B3C8A] bg-blue-50/70 text-[#0B3C8A] font-bold shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-amber-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold">{item.name}</span>
                        {dishType === key && <CheckCircle className="w-4 h-4 text-[#0B3C8A]" />}
                      </div>
                      <span className="text-[11px] text-slate-500 font-normal block mt-1">
                        ~{item.mlPerPerson} ml per person
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Instant Calculation Result Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-900/10 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/40 rounded-full blur-2xl pointer-events-none"></div>

                <div className="flex items-center justify-between border-b border-amber-100 pb-4 mb-4">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-wider">
                    Recommended Quantity
                  </span>
                  <span className="bg-green-100 text-green-800 text-[10px] font-black px-2 py-0.5 rounded-full">
                    Chef Calibrated
                  </span>
                </div>

                {/* Big Metric Display */}
                <div className="space-y-1 mb-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                      {totalMlNeeded}
                    </span>
                    <span className="text-xl font-bold text-amber-700">ml Cream</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {selectedProfile.description}
                  </p>
                </div>

                {/* Recommended Pack Breakdown */}
                <div className="bg-amber-50/80 rounded-2xl p-4 border border-amber-200/60 mb-5 space-y-2">
                  <span className="text-[11px] font-black text-amber-950 uppercase tracking-wider block">
                    Ideal Amul Pack Combination:
                  </span>
                  
                  {packs1L > 0 && (
                    <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                      <span>• {packs1L}x {pack1LName}</span>
                      <span>₹{packs1L * pack1LPrice}</span>
                    </div>
                  )}

                  {packs250 > 0 && (
                    <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                      <span>• {packs250}x Amul Fresh Cream (250 ml Tetra Pack)</span>
                      <span>₹{packs250 * 67}</span>
                    </div>
                  )}

                  <div className="border-t border-amber-200/80 pt-2 flex items-center justify-between text-xs font-black text-slate-900">
                    <span>Estimated Total:</span>
                    <span className="text-base text-[#D9252A]">₹{estimatedCost}</span>
                  </div>
                </div>

                {/* Add to Cart CTA */}
                <button
                  onClick={handleAddCalculatedToCart}
                  className="w-full bg-[#D9252A] hover:bg-[#b0171b] text-white py-3.5 px-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-md shadow-red-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add Recommended Packs to Bag</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center mt-2.5">
                  Aseptic packaging stays fresh for up to 120 days unopened at room temperature.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
