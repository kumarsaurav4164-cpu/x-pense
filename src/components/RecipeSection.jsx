import React from 'react';
import { Clock, ChefHat, Sparkles, ArrowRight, ShoppingBag } from 'lucide-react';
import { RECIPES } from '../data/recipes';

export default function RecipeSection({ onOpenRecipeModal, onAddToCart }) {
  return (
    <section id="recipes" className="py-20 bg-gradient-to-b from-[#FAF7F2] via-amber-50/40 to-[#FAF7F2] border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-red-100 text-[#D9252A] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3">
              <ChefHat className="w-4 h-4 text-[#D9252A]" />
              Amul Culinary Kitchen
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Cook Like a Masterchef with Amul Fresh Cream
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              From signature Mughlai gravies to silky Italian pasta and French chocolate mousse, discover how 25% rich milk fat transforms everyday meals into restaurant delights.
            </p>
          </div>

          <div className="bg-white border border-amber-900/10 px-5 py-3 rounded-2xl shadow-xs flex items-center gap-3 shrink-0">
            <span className="text-2xl">👨‍🍳</span>
            <div className="text-xs">
              <p className="font-extrabold text-slate-900">Tested by Chefs</p>
              <p className="text-slate-500">Silky gloss & zero curdling guaranteed</p>
            </div>
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RECIPES.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-3xl overflow-hidden border border-amber-900/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cream-card-hover group"
            >
              {/* Image & Header Overlay */}
              <div className="relative h-48 w-full overflow-hidden bg-amber-50">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#0B3C8A] font-extrabold text-[11px] px-2.5 py-1 rounded-full shadow-xs">
                  {recipe.category}
                </div>
                <div className="absolute top-3 right-3 bg-slate-900/70 text-white font-bold text-[10px] px-2 py-0.5 rounded-full backdrop-blur-xs flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-300" />
                  {recipe.prepTime}
                </div>
              </div>

              {/* Recipe Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-slate-900 text-base leading-snug group-hover:text-[#D9252A] transition-colors line-clamp-2">
                    {recipe.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {recipe.description}
                  </p>

                  {/* Highlights tag */}
                  <div className="mt-3 bg-amber-50 rounded-xl p-2.5 border border-amber-200/50">
                    <p className="text-[11px] font-bold text-amber-900 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      Key: {recipe.creamAmount}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="mt-5 pt-3 border-t border-amber-900/10 flex items-center gap-2">
                  <button
                    onClick={() => onOpenRecipeModal(recipe)}
                    className="flex-1 bg-amber-100/70 hover:bg-amber-200/80 text-amber-950 font-extrabold text-xs py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>View Recipe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onAddToCart('amul-fresh-cream-250')}
                    className="bg-[#D9252A] hover:bg-[#b0171b] text-white p-2.5 rounded-xl shadow-xs transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                    title="Add Amul Fresh Cream 250ml to Bag"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
