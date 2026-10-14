import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../data/products';
import { SlidersHorizontal, Sparkles } from 'lucide-react';

export default function ProductCatalog({
  products,
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
  searchQuery,
  setSearchQuery
}) {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [sortBy, setSortBy] = useState('featured');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products
      .filter((item) => {
        const matchesCategory =
          selectedCategory === 'All Products' || item.category === selectedCategory;
        const matchesSearch =
          !searchQuery ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'popularity') return b.reviewsCount - a.reviewsCount;
        return 0; // featured
      });
  }, [products, selectedCategory, searchQuery, sortBy]);

  return (
    <section id="products" className="py-16 bg-[#FAF7F2] border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            Pure Dairy Collection
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Amul Fresh Creams & Artisanal Ice Creams
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Freshly pasteurized milk fat, zero synthetic additives. Packed in sterile hygienic tetra packs and tamper-proof freezer tubs.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0B3C8A] text-white shadow-md shadow-blue-900/20 scale-[1.02]'
                    : 'bg-white text-slate-600 border border-amber-900/10 hover:border-amber-400 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <div className="flex items-center gap-2 bg-white border border-amber-900/10 rounded-2xl px-3 py-2 text-xs font-semibold text-slate-700 shadow-2xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
              <span>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent font-bold text-slate-900 focus:outline-hidden cursor-pointer"
              >
                <option value="featured">Featured / Best Match</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Customer Rated</option>
                <option value="popularity">Most Popular</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Search Badge */}
        {searchQuery && (
          <div className="mb-6 flex items-center justify-between bg-amber-50 border border-amber-200/80 rounded-2xl p-3 text-xs sm:text-sm">
            <span>
              Showing results for: <strong className="text-amber-950 font-bold">"{searchQuery}"</strong> ({filteredProducts.length} items found)
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-red-600 hover:underline font-bold"
            >
              Clear search filter
            </button>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-amber-900/10 max-w-lg mx-auto">
            <div className="text-4xl mb-3">🍨</div>
            <h3 className="text-lg font-bold text-slate-900">No items found matching your filter</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try searching for "Fresh cream", "Vanilla", "Mango", or clear your current search query.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All Products');
                setSearchQuery('');
              }}
              className="mt-4 bg-[#0B3C8A] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md hover:bg-[#092e6a]"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
