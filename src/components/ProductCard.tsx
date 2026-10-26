import { Product } from '../types';
import { Zap, Sparkles, Cpu, Refrigerator, Wind, Shirt, ShieldCheck, Heart, User } from 'lucide-react';

interface ProductCardProps {
  key?: string;
  product: Product;
  onViewDetails: (product: Product) => void;
  onToggleToEstimate?: (product: Product) => void;
  isEstimated?: boolean;
}

// Helper to resolve string to Lucide icon dynamically
const getIcon = (name: string) => {
  switch (name) {
    case 'Refrigerator':
      return <Refrigerator className="h-5 w-5" />;
    case 'Wind':
      return <Wind className="h-5 w-5" />;
    case 'Shirt':
      return <Shirt className="h-5 w-5" />;
    case 'Sparkles':
      return <Sparkles className="h-5 w-5" />;
    case 'ShieldCheck':
      return <ShieldCheck className="h-5 w-5" />;
    case 'ChefHat':
      return <Sparkles className="h-5 w-5" />; // Keep it clean & robust
    default:
      return <Cpu className="h-5 w-5" />;
  }
};

export default function ProductCard({ product, onViewDetails, onToggleToEstimate, isEstimated = false }: ProductCardProps) {
  return (
    <div 
      className="group relative flex flex-col overflow-hidden rounded-[12px] border border-gray-200 bg-white/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md"
      id={`product-card-${product.id}`}
    >
      {/* Badge Top Left */}
      {product.hasSpecialBadge && (
        <span className="absolute top-4 left-4 z-10 rounded-[4px] bg-[#034EA2] px-2.5 py-1 text-[11px] font-bold text-white shadow-sm">
          {product.hasSpecialBadge}
        </span>
      )}

      {/* Energy Rating Badge Top Right */}
      <span className="absolute top-4 right-4 z-10 rounded-[4px] bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
        1등급 환급
      </span>

      {/* Product Image Area */}
      <div className="relative h-48 overflow-hidden bg-slate-50">
        <img
          src={product.imageUrl}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-[11px] font-extrabold tracking-wider uppercase text-brand">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-[6px] bg-brand-light">
            {getIcon(product.iconName)}
          </span>
          <span>{product.categoryLabel}</span>
        </div>

        <h3 className="mt-3 font-display text-lg font-bold text-slate-900 group-hover:text-brand line-clamp-1">
          {product.name}
        </h3>

        <p className="mt-2 flex-grow font-sans text-xs leading-relaxed text-slate-500 line-clamp-2">
          {product.description}
        </p>

        {/* Short specs bullet points */}
        <div className="mt-4 space-y-1.5 border-t border-gray-150 pt-4">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-sans">소비전력</span>
            <span className="font-sans font-medium text-slate-800">{product.powerConsumption}</span>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-sans">핵심 기능</span>
            <span className="font-sans font-medium text-slate-800 truncate max-w-[150px]">
              {product.features[0].split(':')[0]}
            </span>
          </div>
        </div>

        {/* Pricing Segment */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-150 pt-4">
          <div>
            <span className="font-sans text-[10px] font-semibold text-slate-400">네오 멤버십 혜택가</span>
            <p className="font-display text-lg font-extrabold text-slate-900">
              {product.price.toLocaleString('ko-KR')}원
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onViewDetails(product)}
            className="flex h-11 items-center justify-center rounded-[10px] bg-brand-light text-xs font-bold text-brand transition-all hover:bg-[#d0e1fd] active:scale-95"
          >
            자세히 보기
          </button>

          <button
            type="button"
            onClick={() => onToggleToEstimate && onToggleToEstimate(product)}
            className={`flex h-11 items-center justify-center rounded-[10px] text-xs font-bold transition-all active:scale-95 ${
              isEstimated
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-brand text-white hover:bg-[#023b7a]'
            }`}
          >
            {isEstimated ? '선택 완료 ✓' : '견적에 추가'}
          </button>
        </div>
      </div>
    </div>
  );
}
