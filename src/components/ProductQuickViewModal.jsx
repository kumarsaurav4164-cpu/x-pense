import React, { useState } from 'react';
import { X, Star, Heart, ShoppingBag, Sparkles, Check } from 'lucide-react';

export default function ProductQuickViewModal({
  product,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onAddToCart
}) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const discountPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const handleAdd = () => {
    onAddToCart(product.id, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-900/10 max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image & Badges */}
        <div className="md:w-1/2 relative bg-amber-50/50 p-6 flex flex-col justify-between shrink-0">
          <div className="relative h-64 md:h-full w-full rounded-2xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 bg-[#0B3C8A] text-white text-xs font-black px-3 py-1 rounded-full shadow-md">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Right Column: Detailed Product Info */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between space-y-6">
          <div>
            {/* Category & Fat Content */}
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                {product.category}
              </span>
              <span className="bg-blue-50 text-[#0B3C8A] text-xs font-extrabold px-2.5 py-0.5 rounded-md">
                {product.fatContent}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
              {product.name}
            </h2>
            <p className="text-xs text-slate-500 mt-1 font-medium">{product.subtitle}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span className="text-xs font-black text-amber-900">{product.rating}</span>
              </div>
              <span className="text-xs text-slate-400">({product.reviewsCount.toLocaleString()} verified ratings)</span>
            </div>

            {/* Price section */}
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900">₹{product.price}</span>
              {product.mrp > product.price && (
                <>
                  <span className="text-sm text-slate-400 line-through">₹{product.mrp}</span>
                  <span className="text-xs font-black text-red-600 bg-red-50 px-2 py-0.5 rounded-md">
                    {discountPercent}% OFF
                  </span>
                </>
              )}
              <span className="text-xs text-slate-500 font-semibold ml-2">Net: {product.size}</span>
            </div>

            {/* Full description */}
            <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
              {product.description}
            </p>

            {/* Nutrition Breakdown Card */}
            {product.nutrition && (
              <div className="mt-4 bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5">
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Nutritional Values (Approx):
                </h4>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                  <div>• Calories: <strong className="text-slate-800">{product.nutrition.calories}</strong></div>
                  <div>• Milk Fat: <strong className="text-slate-800">{product.nutrition.fat}</strong></div>
                  <div>• Protein: <strong className="text-slate-800">{product.nutrition.protein}</strong></div>
                  <div>• Calcium: <strong className="text-slate-800">{product.nutrition.calcium}</strong></div>
                </div>
              </div>
            )}

            {/* Key Features Bullet List */}
            {product.features && (
              <div className="mt-3 space-y-1">
                {product.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
            {/* Quantity Selector */}
            <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-slate-600 hover:bg-white"
              >
                -
              </button>
              <span className="w-8 text-center text-xs font-black text-slate-900">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-slate-600 hover:bg-white"
              >
                +
              </button>
            </div>

            {/* Add to Bag Button */}
            <button
              onClick={handleAdd}
              className="flex-1 bg-[#D9252A] hover:bg-[#b0171b] text-white py-3 px-4 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-red-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add {quantity} to Bag (₹{product.price * quantity})</span>
            </button>

            {/* Wishlist toggle */}
            <button
              onClick={() => onToggleWishlist(product.id)}
              className={`p-3 rounded-xl border border-slate-200 transition-colors ${
                isWishlisted ? 'text-red-500 bg-red-50 border-red-200' : 'text-slate-400 hover:text-red-500 hover:bg-slate-50'
              }`}
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500' : ''}`} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
