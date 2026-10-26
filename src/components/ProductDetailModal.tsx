import { useState } from 'react';
import { Product } from '../types';
import { X, Check, FileText, Settings, ShieldCheck, Heart } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onToggleEstimate: (product: Product) => void;
  isEstimated: boolean;
}

type TabType = 'features' | 'specs';

export default function ProductDetailModal({ product, onClose, onToggleEstimate, isEstimated }: ProductDetailModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('features');

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      {/* Backdrop Klik Closer */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />

      {/* Modal Main container */}
      <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[12px] border border-gray-200 bg-white shadow-2xl animate-fade-in flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button Top Right */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-[8px] bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-slate-100 transition-colors border border-gray-150"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Left Side: Product Illustration & Energy Badge */}
        <div className="relative w-full md:w-5/12 bg-slate-50 flex flex-col justify-between shrink-0">
          <div className="relative aspect-video md:aspect-auto md:h-full">
            <img 
              src={product.imageUrl} 
              alt={product.name}
              referrerPolicy="no-referrer"
              className="h-full w-full max-w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            
            {/* Visual Specs Overlays */}
            <div className="absolute bottom-6 left-6 text-white text-left">
              <span className="rounded-[4px] bg-brand px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                {product.categoryLabel}
              </span>
              <h4 className="mt-1.5 font-display text-xl font-bold tracking-tight">
                {product.name}
              </h4>
            </div>
          </div>
          
          <div className="hidden md:flex flex-col gap-3 p-6 border-t border-gray-200 bg-white">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-12 shrink-0 items-center justify-center rounded-[4px] bg-emerald-50 border border-emerald-250 font-display text-[11px] font-black text-emerald-700">
                1등급
              </span>
              <div>
                <p className="font-sans text-xs font-bold text-slate-800">에너지소비효율 1등급 특화</p>
                <p className="font-sans text-[11px] text-gray-500">전기요금을 대폭 세이빙해 가계 부담을 덜어드립니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Tabbed specification panels */}
        <div className="flex-1 flex flex-col overflow-y-auto p-6 md:p-8">
          
          {/* Brand/Product titles block */}
          <div className="text-left">
            <span className="text-xs font-bold text-brand uppercase tracking-wider">{product.categoryLabel} 프리미엄 스마트 싱크</span>
            <h3 className="mt-1 font-display text-xl font-extrabold text-black md:text-3xl leading-snug">
              {product.name}
            </h3>
            <p className="mt-2.5 font-sans text-sm leading-relaxed text-gray-550 text-gray-500">
              {product.description}
            </p>
          </div>

          <hr className="mt-6 border-gray-250" />

          {/* Navigation Clean Tabs (Toss/Samsung Health Vibe) */}
          <div className="mt-6 flex border-b border-gray-250">
            <button
              type="button"
              onClick={() => setActiveTab('features')}
              className={`flex items-center gap-1.5 pb-3 font-sans text-sm font-bold border-b-2 transition-all ${
                activeTab === 'features'
                  ? 'border-brand text-brand'
                  : 'border-transparent text-gray-400 hover:text-slate-600'
              }`}
            >
              <ShieldCheck className="h-4 w-4" />
              핵심 기능 ({product.features.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('specs')}
              className={`ml-6 flex items-center gap-1.5 pb-3 font-sans text-sm font-bold border-b-2 transition-all ${
                activeTab === 'specs'
                  ? 'border-brand text-brand'
                  : 'border-transparent text-gray-400 hover:text-slate-600'
              }`}
            >
              <FileText className="h-4 w-4" />
              상세 스펙 제원 표
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="mt-5 flex-grow text-left">
            {activeTab === 'features' ? (
              <ul className="space-y-4">
                {product.features.map((feature, i) => {
                  const parts = feature.split(':');
                  const title = parts[0];
                  const detail = parts[1] || '';
                  return (
                    <li key={`feat-${i}`} className="flex gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] bg-brand-light text-brand mt-0.5">
                        <Check className="h-3 w-3" />
                      </div>
                      <div>
                        <span className="font-sans text-sm font-bold text-slate-800">{title}</span>
                        {detail && (
                          <p className="mt-0.5 font-sans text-xs text-gray-500 leading-relaxed">
                            {detail.trim()}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="overflow-hidden rounded-[8px] border border-gray-200 bg-slate-50/50">
                <table className="w-full text-left font-sans text-xs border-collapse">
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr 
                        key={`spec-${i}`} 
                        className={`border-b border-gray-150 ${
                          i % 2 === 0 ? 'bg-white' : 'bg-slate-50/20'
                        }`}
                      >
                        <td className="p-3.5 font-bold text-gray-500 w-1/3 border-r border-gray-150">
                          {spec.label}
                        </td>
                        <td className="p-3.5 font-semibold text-slate-800">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-white">
                      <td className="p-3.5 font-bold text-gray-500 w-1/3 border-r border-gray-150">
                        에너지 효율 등급
                      </td>
                      <td className="p-3.5 font-semibold text-slate-800">
                        으뜸효율 1등급 (전 가구 공통 정부 적립 대상)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Pricing and Action Footer */}
          <div className="mt-8 border-t border-gray-200 pt-6 flex flex-wrap gap-4 items-center justify-between">
            <div>
              <span className="font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">혜택권 포함 즉시 구매가</span>
              <p className="font-display text-2xl font-black text-[#141414] leading-tight">
                {product.price.toLocaleString('ko-KR')}원
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  onToggleEstimate(product);
                }}
                className={`flex h-11 items-center gap-2 rounded-[10px] px-6 text-sm font-semibold transition-all active:scale-95 ${
                  isEstimated
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-brand text-white hover:bg-[#023b7a]'
                }`}
              >
                {isEstimated ? '선택 해제 ✕' : '나의 견적 담기'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
