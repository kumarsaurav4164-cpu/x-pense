import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlist,
  products,
  onAddToCart,
  onRemoveFromWishlist
}) {
  if (!isOpen) return null;

  const wishlistItems = wishlist
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-amber-900/10">
          
          {/* Header */}
          <div className="p-5 border-b border-amber-900/10 flex items-center justify-between bg-rose-50/50">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-base">Saved Delights</h3>
                <p className="text-[11px] text-slate-500 font-medium">
                  {wishlistItems.length} items saved
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3">
            {wishlistItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-3xl bg-rose-50 text-rose-500 text-3xl mx-auto flex items-center justify-center">
                  ❤️
                </div>
                <h4 className="font-bold text-slate-800 text-base">Your wishlist is empty</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Click the heart icon on any cream or ice cream product to save it for later!
                </p>
              </div>
            ) : (
              wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 bg-white p-3 rounded-2xl border border-slate-100 shadow-2xs hover:border-amber-200 transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 bg-amber-50"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-bold text-xs text-slate-900 line-clamp-1">{item.name}</h4>
                        <button
                          onClick={() => onRemoveFromWishlist(item.id)}
                          className="text-slate-400 hover:text-red-500 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[11px] text-slate-400">{item.size}</span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-black text-slate-900">₹{item.price}</span>
                      <button
                        onClick={() => {
                          onAddToCart(item.id);
                          onRemoveFromWishlist(item.id);
                        }}
                        className="bg-[#D9252A] hover:bg-[#b0171b] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-2xs"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-100 bg-slate-50 text-center">
            <button
              onClick={onClose}
              className="w-full py-2.5 bg-white border border-slate-200 hover:bg-slate-100 font-bold text-xs text-slate-700 rounded-xl"
            >
              Continue Shopping
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
