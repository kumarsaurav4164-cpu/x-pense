import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, MapPin, PhoneCall } from 'lucide-react';

export default function Navbar({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  searchQuery,
  setSearchQuery,
  onOpenPincodeModal
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-amber-900/10 shadow-xs transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-[#0B3C8A] via-[#1A5BB8] to-[#D9252A] text-white text-xs sm:text-sm py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-[11px] font-bold tracking-wide">SPECIAL OFFER</span>
            <span className="hidden sm:inline">Get 10% off on all Amul Fresh Cream & Ice Cream orders with code</span>
            <span className="font-bold tracking-wider text-amber-200">AMULCREAM10</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold shrink-0">
            <button
              onClick={onOpenPincodeModal}
              className="hover:text-amber-200 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Deliver to: </span>
              <span className="underline decoration-dotted">Check Pincode</span>
            </button>
            <span className="hidden lg:inline text-white/50">|</span>
            <a href="tel:18002583333" className="hidden lg:flex items-center gap-1 hover:text-amber-200 transition-colors">
              <PhoneCall className="w-3.5 h-3.5" />
              1800 258 3333
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D9252A] to-[#B0171B] flex flex-col items-center justify-center shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
                <span className="text-white font-black text-xl tracking-tighter leading-none italic font-serif">Amul</span>
                <span className="text-[8px] text-amber-200 font-bold tracking-widest uppercase">Dairy</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-black text-[#0B3C8A] tracking-tight font-serif">Amul</span>
                  <span className="text-2xl font-light text-amber-800">Cream</span>
                  <span className="text-[10px] bg-red-100 text-red-700 font-extrabold px-1.5 py-0.5 rounded-sm uppercase tracking-wider">Original</span>
                </div>
                <span className="text-[11px] font-semibold text-slate-500 tracking-wider">The Taste of India</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a href="#products" className="hover:text-[#D9252A] transition-colors py-2 flex items-center gap-1.5">
              <span>Products & Flavors</span>
            </a>
            <a href="#recipes" className="hover:text-[#D9252A] transition-colors py-2 flex items-center gap-1.5">
              <span>Cream Recipes</span>
              <span className="bg-amber-100 text-amber-800 text-[10px] px-1.5 py-0.5 rounded-full font-bold">Chef's Pick</span>
            </a>
            <a href="#calculator" className="hover:text-[#D9252A] transition-colors py-2">
              Cream Calculator
            </a>
            <a href="#quality" className="hover:text-[#D9252A] transition-colors py-2">
              Pure Milk Promise
            </a>
            <a href="#reviews" className="hover:text-[#D9252A] transition-colors py-2">
              Reviews
            </a>
          </nav>

          {/* Actions: Search, Wishlist, Cart */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Search Input / Trigger */}
            <div className="relative">
              <div className="hidden md:flex items-center bg-white border border-amber-900/15 rounded-full px-3 py-1.5 shadow-2xs focus-within:ring-2 focus-within:ring-[#0B3C8A]/30 focus-within:border-[#0B3C8A] transition-all w-48 lg:w-64">
                <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Search cream, flavors, recipes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs text-slate-800 bg-transparent focus:outline-hidden placeholder:text-slate-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-xs text-slate-400 hover:text-slate-600 ml-1"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Mobile search toggle */}
              <button
                onClick={() => setShowSearchInput(!showSearchInput)}
                className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-amber-100/60 transition-colors"
                aria-label="Toggle search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2.5 rounded-xl text-slate-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
              title="Saved items"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-xs animate-scale">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-[#0B3C8A] hover:bg-[#082e6c] text-white px-4 py-2.5 rounded-full font-bold text-sm shadow-md shadow-blue-900/15 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Bag</span>
              <span className="bg-[#D9252A] text-white text-xs font-black px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-amber-100/60 rounded-xl"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile search bar dropdown */}
        {showSearchInput && (
          <div className="md:hidden pb-3 px-1">
            <div className="flex items-center bg-white border border-amber-900/20 rounded-xl px-3 py-2 shadow-sm">
              <Search className="w-4 h-4 text-slate-400 mr-2" />
              <input
                type="text"
                placeholder="Search fresh cream, ice cream, recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm bg-transparent focus:outline-hidden"
                autoFocus
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-xs text-slate-400">
                  ✕
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-amber-900/10 bg-[#FAF7F2] px-6 py-5 space-y-4 shadow-lg animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-3 font-semibold text-slate-800">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-amber-100 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Products & Flavors</span>
              <span className="text-xs text-red-600 font-bold">Explore</span>
            </a>
            <a
              href="#recipes"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-amber-100 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Cream Recipes</span>
              <span className="bg-amber-200 text-amber-900 text-xs px-2 py-0.5 rounded-full font-bold">Chef's Pick</span>
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-amber-100 rounded-lg transition-colors"
            >
              Party Cream Calculator
            </a>
            <a
              href="#quality"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-amber-100 rounded-lg transition-colors"
            >
              Pure Milk Promise
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-amber-100 rounded-lg transition-colors"
            >
              Ratings & Reviews
            </a>
          </nav>
          
          <div className="pt-3 border-t border-amber-900/10 flex items-center justify-between text-xs text-slate-600 font-medium">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPincodeModal();
              }}
              className="flex items-center gap-1.5 text-[#0B3C8A] font-bold"
            >
              <MapPin className="w-4 h-4" /> Check Pincode Delivery
            </button>
            <a href="tel:18002583333" className="flex items-center gap-1 text-slate-600">
              <PhoneCall className="w-3.5 h-3.5" /> 1800 258 3333
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
