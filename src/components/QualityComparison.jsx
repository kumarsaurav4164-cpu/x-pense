import React from 'react';
import { ShieldCheck, Check, X, Award } from 'lucide-react';

export default function QualityComparison() {
  const comparisonItems = [
    {
      feature: 'Fat Source',
      amul: '100% Pure Dairy Milk Fat (Cow & Buffalo)',
      others: 'Hydrogenated Vegetable Palm Oils',
      amulGood: true
    },
    {
      feature: 'Sterilization & Purity',
      amul: 'Ultra-High Temperature (UHT) Aseptic Pack',
      others: 'Chemical Preservatives & Stabilizers',
      amulGood: true
    },
    {
      feature: 'Digestibility & Texture',
      amul: 'Natural velvety silkiness, zero greasy film',
      others: 'Artificial emulsifiers leaving waxy mouth coating',
      amulGood: true
    },
    {
      feature: 'True "Ice Cream" Label',
      amul: 'Certified 100% Real Ice Cream & Dairy Cream',
      others: 'Legally labeled only as "Frozen Dessert"',
      amulGood: true
    },
    {
      feature: 'Farmer Cooperative Support',
      amul: 'Over 3.6 Million small dairy farmers empowered (GCMMF)',
      others: 'Commercial corporate palm-oil conglomerates',
      amulGood: true
    }
  ];

  return (
    <section id="quality" className="py-20 bg-[#FAF7F2] border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-[#0B3C8A] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-[#0B3C8A]" />
            The Pure Milk Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Amul Pure Cream is in a League of its Own
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Know what goes onto your family's dining table. Amul uses pure dairy milk fat churned directly from fresh milk — never hydrogenated vegetable fat.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-amber-900/10 shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-12 bg-slate-900 text-white p-4 sm:p-5 text-xs sm:text-sm font-black">
            <div className="col-span-5 sm:col-span-4">Attribute / Standard</div>
            <div className="col-span-4 sm:col-span-4 text-[#FFD700] flex items-center gap-1.5">
              <span>Amul Real Cream & Ice Cream</span>
            </div>
            <div className="col-span-3 sm:col-span-4 text-slate-400">
              Synthetic Creams / Frozen Desserts
            </div>
          </div>

          <div className="divide-y divide-amber-100/80">
            {comparisonItems.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 text-xs sm:text-sm items-center hover:bg-amber-50/40 transition-colors"
              >
                <div className="col-span-5 sm:col-span-4 font-bold text-slate-900">
                  {item.feature}
                </div>
                
                <div className="col-span-4 sm:col-span-4 text-[#0B3C8A] font-extrabold flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item.amul}</span>
                </div>

                <div className="col-span-3 sm:col-span-4 text-slate-500 flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="line-clamp-2">{item.others}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Banner */}
          <div className="bg-gradient-to-r from-amber-50 via-white to-blue-50 p-5 border-t border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-200/80 text-amber-900 flex items-center justify-center font-bold text-xl">
                🥛
              </div>
              <div>
                <p className="font-extrabold text-slate-900">Gujarat Cooperative Milk Marketing Federation (GCMMF)</p>
                <p className="text-slate-500">Every rupee directly supports our nation's local dairy farmers.</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 font-bold text-[#0B3C8A] shrink-0">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Certified ISO 22000 & FSSAI A1 Grade</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
