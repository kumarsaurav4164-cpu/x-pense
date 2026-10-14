import React, { useState } from 'react';
import { X, MapPin, CheckCircle } from 'lucide-react';

export default function PincodeCheckerModal({ isOpen, onClose }) {
  const [pincode, setPincode] = useState('');
  const [result, setResult] = useState(null);

  if (!isOpen) return null;

  const quickPincodes = [
    { city: 'Delhi / NCR', code: '110001' },
    { city: 'Mumbai', code: '400001' },
    { city: 'Bengaluru', code: '560001' },
    { city: 'Ahmedabad (HQ)', code: '380001' },
    { city: 'Pune', code: '411001' },
    { city: 'Kolkata', code: '700001' }
  ];

  const handleCheck = (codeToCheck) => {
    const code = codeToCheck || pincode;
    if (code.length === 6 && /^\d+$/.test(code)) {
      setResult({
        available: true,
        message: '⚡ Cold-Chain Express Delivery available in 30-45 minutes from your nearest Amul Parlour Hub!',
        pincode: code
      });
    } else {
      setResult({
        available: false,
        message: 'Please enter a valid 6-digit Indian PIN code.'
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-900/10 p-6 space-y-5">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-full cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0B3C8A] flex items-center justify-center">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900">Delivery Availability</h3>
            <p className="text-xs text-slate-500">Check cold storage logistics in your neighborhood</p>
          </div>
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCheck();
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            maxLength={6}
            placeholder="Enter 6-digit PIN code"
            value={pincode}
            onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-bold focus:outline-hidden focus:border-[#0B3C8A]"
          />
          <button
            type="submit"
            className="bg-[#0B3C8A] hover:bg-[#082e6c] text-white px-4 py-2.5 rounded-xl text-xs font-black shadow-xs transition-all cursor-pointer"
          >
            Check
          </button>
        </form>

        {/* Quick select popular hubs */}
        <div>
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
            Popular Metro Hubs:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {quickPincodes.map((item) => (
              <button
                key={item.code}
                onClick={() => {
                  setPincode(item.code);
                  handleCheck(item.code);
                }}
                className="text-[11px] font-semibold bg-amber-50 hover:bg-amber-100 text-amber-900 px-2.5 py-1 rounded-lg border border-amber-200/60 transition-colors"
              >
                {item.city} ({item.code})
              </button>
            ))}
          </div>
        </div>

        {/* Result notification */}
        {result && (
          <div
            className={`p-4 rounded-2xl text-xs font-medium border flex items-start gap-2.5 ${
              result.available
                ? 'bg-green-50 border-green-200 text-green-900'
                : 'bg-red-50 border-red-200 text-red-900'
            }`}
          >
            {result.available ? (
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
            ) : (
              <X className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
            )}
            <div>
              <p className="font-bold">{result.message}</p>
              {result.available && (
                <p className="text-[11px] text-green-700 mt-1">
                  📦 Insulated temperature-controlled delivery guaranteed at -18°C.
                </p>
              )}
            </div>
          </div>
        )}

        <button
          onClick={onClose}
          className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-2.5 rounded-xl transition-colors"
        >
          Done
        </button>

      </div>
    </div>
  );
}
