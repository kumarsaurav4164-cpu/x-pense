import React from 'react';
import { X, Clock, Users, ChefHat, Check, ShoppingBag, Sparkles } from 'lucide-react';

export default function RecipeModal({ recipe, onClose, onAddToCart }) {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-900/10 max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Image */}
        <div className="relative h-56 w-full shrink-0">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="bg-[#D9252A] text-white text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {recipe.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-black mt-1 leading-tight">{recipe.title}</h2>
            <div className="flex items-center gap-4 text-xs text-white/90 font-medium mt-2">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-300" /> Prep: {recipe.prepTime}
              </span>
              <span className="flex items-center gap-1">
                <ChefHat className="w-3.5 h-3.5 text-amber-300" /> Cook: {recipe.cookTime}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-amber-300" /> {recipe.servings}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Amul Cream Requirement Banner */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center font-bold text-lg">
                🥛
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-900">Star Ingredient</h4>
                <p className="text-xs font-bold text-amber-900">{recipe.creamAmount}</p>
              </div>
            </div>
            <button
              onClick={() => {
                onAddToCart('amul-fresh-cream-250');
              }}
              className="bg-[#D9252A] hover:bg-[#b0171b] text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-xs transition-transform hover:scale-105 active:scale-95"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add Cream (₹67)</span>
            </button>
          </div>

          {/* Ingredients List */}
          <div>
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0B3C8A]"></span>
              Ingredients Checklist
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <Check className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step-by-Step Instructions */}
          <div>
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D9252A]"></span>
              Cooking Steps
            </h3>
            <ol className="space-y-3">
              {recipe.steps.map((step, idx) => (
                <li key={idx} className="flex gap-3 text-xs text-slate-700 leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 font-extrabold flex items-center justify-center shrink-0 text-[11px]">
                    {idx + 1}
                  </span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Chef's Secret Tip */}
          {recipe.chefTip && (
            <div className="bg-blue-50 border border-blue-200/80 rounded-2xl p-4 flex gap-3 text-xs text-blue-900">
              <Sparkles className="w-5 h-5 text-[#0B3C8A] shrink-0" />
              <div>
                <strong className="block font-black text-[#0B3C8A] mb-0.5">Chef's Secret Technique:</strong>
                <span>{recipe.chefTip}</span>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 font-bold text-xs text-slate-700 rounded-xl transition-colors cursor-pointer"
          >
            Close Recipe
          </button>
        </div>

      </div>
    </div>
  );
}
