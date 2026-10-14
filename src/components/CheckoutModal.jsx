import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';

export default function CheckoutModal({ orderDetails, onClose, onClearCart }) {
  const [formData, setFormData] = useState({
    name: 'Ananya Sharma',
    phone: '9876543210',
    email: 'ananya@example.com',
    address: 'Flat 402, Golden Heritage Apts, Sector 14',
    city: 'New Delhi',
    pincode: '110001',
    paymentMethod: 'upi'
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!orderDetails) return null;

  const handleClose = () => {
    setOrderPlaced(false);
    setOrderId('');
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedId = 'AMUL-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setOrderPlaced(true);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-900/10 max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {orderPlaced ? (
          /* Order Success Receipt Screen */
          <div className="p-8 text-center space-y-5 overflow-y-auto">
            <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto text-4xl shadow-inner animate-bounce">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>

            <div>
              <span className="bg-green-100 text-green-800 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                Order Confirmed
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-2">
                Thank You, {formData.name}!
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Your cold-chain dairy package is being packed at your nearest Amul Ice Cream Parlour.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-amber-200/80 text-left text-xs space-y-2">
              <div className="flex justify-between font-bold text-slate-700 border-b border-amber-200/50 pb-2">
                <span>Order Reference:</span>
                <span className="font-mono text-[#0B3C8A] font-black">{orderId}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Estimated Cold Delivery:</span>
                <span className="font-bold text-green-700">Within 35 Minutes ⚡</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Delivery Address:</span>
                <span className="font-semibold text-slate-800 text-right max-w-xs truncate">
                  {formData.address}, {formData.city} - {formData.pincode}
                </span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Payment Mode:</span>
                <span className="uppercase font-bold text-slate-800">{formData.paymentMethod}</span>
              </div>
              <div className="flex justify-between text-sm font-black text-slate-900 pt-2 border-t border-amber-200/50">
                <span>Total Amount Paid:</span>
                <span className="text-[#D9252A]">₹{orderDetails.grandTotal}</span>
              </div>
            </div>

            <div className="bg-blue-50 text-blue-900 rounded-xl p-3 text-xs flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#0B3C8A] shrink-0" />
              <span>SMS updates and tracking link sent to +91 {formData.phone}</span>
            </div>

            <button
              onClick={handleClose}
              className="w-full bg-[#0B3C8A] hover:bg-[#082e6c] text-white py-3 px-4 rounded-xl font-black text-sm shadow-md transition-all cursor-pointer"
            >
              Continue Browsing Delights
            </button>
          </div>
        ) : (
          /* Checkout Input Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 overflow-y-auto space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-[#D9252A] uppercase tracking-wider">Fast Delivery</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">Delivery Details</h2>
              <p className="text-xs text-slate-500">Dispatching from nearest cold warehouse directly to your doorstep.</p>
            </div>

            {/* Customer Contact */}
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-hidden focus:border-[#0B3C8A]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">Mobile Number (10 digits)</label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-hidden focus:border-[#0B3C8A]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">Street Address</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-hidden focus:border-[#0B3C8A]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-hidden focus:border-[#0B3C8A]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">6-Digit Pincode</label>
                  <input
                    type="text"
                    maxLength={6}
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value.replace(/\D/g, '') })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-hidden focus:border-[#0B3C8A]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-800 block">Select Payment Method</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'upi', label: 'UPI / PhonePe', icon: '⚡' },
                  { id: 'card', label: 'Debit / Credit Card', icon: '💳' },
                  { id: 'cod', label: 'Cash on Delivery', icon: '💵' }
                ].map((pm) => (
                  <button
                    type="button"
                    key={pm.id}
                    onClick={() => setFormData({ ...formData, paymentMethod: pm.id })}
                    className={`p-3 rounded-xl border text-center text-xs transition-all cursor-pointer ${
                      formData.paymentMethod === pm.id
                        ? 'border-[#0B3C8A] bg-blue-50/70 text-[#0B3C8A] font-bold shadow-2xs'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-lg block mb-1">{pm.icon}</span>
                    <span className="font-semibold text-[11px]">{pm.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Order total info bar */}
            <div className="bg-amber-50 rounded-2xl p-3.5 border border-amber-200 flex items-center justify-between">
              <div>
                <p className="text-[11px] text-slate-500 font-medium">Final Payable Amount</p>
                <p className="text-lg font-black text-[#D9252A]">₹{orderDetails.grandTotal}</p>
              </div>
              <div className="text-[11px] text-green-700 font-bold flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span>100% Safe & Insulated Delivery</span>
              </div>
            </div>

            {/* Place Order CTA */}
            <button
              type="submit"
              className="w-full bg-[#D9252A] hover:bg-[#b0171b] text-white py-3.5 px-4 rounded-xl font-black text-sm shadow-md shadow-red-600/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              Confirm Order & Pay ₹{orderDetails.grandTotal}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
