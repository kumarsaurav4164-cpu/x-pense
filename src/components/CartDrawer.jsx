import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag, Snowflake } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  products,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) {
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [useInsulatedBox, setUseInsulatedBox] = useState(true);

  if (!isOpen) return null;

  // Enrich cart items with product info
  const cartItems = Object.entries(cart)
    .map(([productId, qty]) => {
      const product = products.find((p) => p.id === productId);
      return product ? { ...product, quantity: qty } : null;
    })
    .filter(Boolean);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeDeliveryThreshold = 299;
  const remainingForFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);
  const deliveryFee = subtotal >= freeDeliveryThreshold || subtotal === 0 ? 0 : 40;
  const insulatedPackFee = useInsulatedBox && subtotal > 0 ? 25 : 0;
  const discountAmount = Math.round((subtotal * appliedDiscount) / 100);
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee + insulatedPackFee);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'AMULCREAM10') {
      setAppliedDiscount(10);
      setCouponError('');
    } else if (code === 'TASTEOFINDIA') {
      setAppliedDiscount(15);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon. Try AMULCREAM10 or TASTEOFINDIA');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-amber-900/10">
          
          {/* Header */}
          <div className="p-5 border-b border-amber-900/10 flex items-center justify-between bg-amber-50/50">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#0B3C8A] text-white flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-base">Your Dairy Bag</h3>
                <p className="text-[11px] text-slate-500 font-medium">
                  {cartItems.reduce((acc, i) => acc + i.quantity, 0)} items in your cart
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

          {/* Free Delivery Tracker */}
          {subtotal > 0 && (
            <div className="bg-[#FAF7F2] p-3 px-5 border-b border-amber-900/10 text-xs">
              {remainingForFreeDelivery > 0 ? (
                <div className="space-y-1.5">
                  <p className="text-slate-600">
                    Add <strong className="text-[#D9252A] font-bold">₹{remainingForFreeDelivery}</strong> more for <strong>FREE Cold-Chain Delivery</strong>!
                  </p>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#D9252A] transition-all duration-300"
                      style={{ width: `${Math.min(100, (subtotal / freeDeliveryThreshold) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              ) : (
                <p className="text-green-700 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-green-600" />
                  Unlocked! Free Cold-Chain Delivery applied to your order.
                </p>
              )}
            </div>
          )}

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-3xl bg-amber-50 text-amber-800 text-3xl mx-auto flex items-center justify-center">
                  🍦
                </div>
                <h4 className="font-bold text-slate-800 text-base">Your bag is empty</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Add luscious Amul Fresh Cream or your favorite ice cream tubs to get started!
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
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
                          onClick={() => onRemoveItem(item.id)}
                          className="text-slate-400 hover:text-red-500 p-1 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">{item.size}</span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-black text-slate-900">
                        ₹{item.price * item.quantity}
                      </span>
                      <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50 px-1 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-slate-600 hover:bg-white rounded font-bold text-xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-black">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-slate-600 hover:bg-white rounded font-bold text-xs"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Bottom Summary & Actions */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-amber-900/10 bg-[#FAF7F2]/60 space-y-4">
              
              {/* Cold packaging toggle */}
              <div className="flex items-center justify-between bg-blue-50/70 border border-blue-200/60 p-2.5 rounded-xl text-xs">
                <div className="flex items-center gap-2">
                  <Snowflake className="w-4 h-4 text-[#0B3C8A]" />
                  <div>
                    <p className="font-bold text-slate-800">Insulated Ice-Pack Box (+₹25)</p>
                    <p className="text-[10px] text-slate-500">Guarantees ice creams remain ice-cold</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={useInsulatedBox}
                  onChange={(e) => setUseInsulatedBox(e.target.checked)}
                  className="w-4 h-4 accent-[#0B3C8A] rounded cursor-pointer"
                />
              </div>

              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="space-y-1">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Promo: AMULCREAM10"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-8 pr-3 py-2 text-xs uppercase font-bold focus:outline-hidden focus:border-[#0B3C8A]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#0B3C8A] text-white px-3.5 py-2 rounded-xl text-xs font-bold hover:bg-[#082e6c]"
                  >
                    Apply
                  </button>
                </div>
                {appliedDiscount > 0 && (
                  <p className="text-[11px] text-green-700 font-bold">
                    ✓ {appliedDiscount}% discount applied!
                  </p>
                )}
                {couponError && (
                  <p className="text-[11px] text-red-600 font-bold">{couponError}</p>
                )}
              </form>

              {/* Bill Details */}
              <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-200">
                <div className="flex justify-between">
                  <span>Items Subtotal</span>
                  <span className="font-bold text-slate-900">₹{subtotal}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-green-700 font-bold">
                    <span>Coupon Savings</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Cold Packing</span>
                  <span>{insulatedPackFee > 0 ? `₹${insulatedPackFee}` : 'Free'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charge</span>
                  <span>{deliveryFee === 0 ? <strong className="text-green-700">FREE</strong> : `₹${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between text-sm font-black text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total Payable</span>
                  <span className="text-lg text-[#D9252A]">₹{grandTotal}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout({
                    cartItems,
                    subtotal,
                    discountAmount,
                    deliveryFee,
                    insulatedPackFee,
                    grandTotal
                  });
                }}
                className="w-full bg-[#D9252A] hover:bg-[#b0171b] text-white py-3.5 px-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
