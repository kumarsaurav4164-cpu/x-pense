import React from 'react';
import { Star, Heart, ShoppingBag, Eye, Sparkles } from 'lucide-react';

export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onQuickView
}) {
  const discountPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div className="group bg-white rounded-3xl p-5 border border-amber-900/10 shadow-xs hover:shadow-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between cream-card-hover relative">
      
      {/* Top Floating Badges */}
      <div className="absolute top-7 left-7 z-10 flex flex-col gap-1.5 items-start">
        {product.badge && (
          <span className="bg-[#0B3C8A] text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-300" />
            {product.badge}
          </span>
        )}
        {discountPercent > 0 && (
          <span className="bg-red-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-2xs">
            {discountPercent}% OFF
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={() => onToggleWishlist(product.id)}
        className="absolute top-7 right-7 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-slate-400 hover:text-red-500 hover:scale-110 active:scale-90 transition-all cursor-pointer"
        aria-label="Add to wishlist"
      >
        <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
      </button>

      {/* Product Image */}
      <div className="relative h-52 w-full rounded-2xl overflow-hidden bg-amber-50/50 mb-4 cursor-pointer" onClick={() => onQuickView(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="bg-white/95 text-slate-800 text-xs font-bold py-2 px-3.5 rounded-full shadow-lg flex items-center gap-1.5 hover:bg-white hover:scale-105 transition-all"
          >
            <Eye className="w-3.5 h-3.5" /> Quick Info
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Fat Spec */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
            <span className="font-semibold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-md">
              {product.category}
            </span>
            <span className="font-bold text-slate-600">
              {product.fatContent}
            </span>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-bold text-slate-900 text-base leading-snug group-hover:text-[#0B3C8A] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Subtitle / Description */}
          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
            {product.subtitle}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2.5">
            <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span className="text-xs font-black text-amber-900">{product.rating}</span>
            </div>
            <span className="text-[11px] text-slate-400">({product.reviewsCount.toLocaleString()} reviews)</span>
          </div>
        </div>

        {/* Price & Action Section */}
        <div className="mt-5 pt-3 border-t border-amber-900/10 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold text-slate-400">Net: {product.size}</div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-black text-slate-900">₹{product.price}</span>
              {product.mrp > product.price && (
                <span className="text-xs text-slate-400 line-through">₹{product.mrp}</span>
              )}
            </div>
          </div>

          <button
            onClick={() => onAddToCart(product.id)}
            className="flex items-center gap-1.5 bg-[#D9252A] hover:bg-[#b0171b] text-white px-3.5 py-2.5 rounded-xl text-xs font-extrabold shadow-md shadow-red-600/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>

    </div>
  );
}
