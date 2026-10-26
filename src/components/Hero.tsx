import { Sparkles, ArrowRight, ShieldCheck, Zap, Eye } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
  onScrollToProducts: () => void;
}

export default function Hero({ onStartQuiz, onScrollToProducts }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#F8F9FA] py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          
          {/* Hero Left Content */}
          <div className="flex flex-col items-start text-left md:col-span-1 lg:col-span-7">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 rounded-[6px] bg-brand-light px-3.5 py-1.5 text-xs font-bold text-brand uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              <span>NEW BESPOKE AI • 2026 하이테크 라인업</span>
            </div>

            {/* Display Headline */}
            <h1 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-black sm:text-3xl md:text-4xl lg:text-[52px] lg:leading-[1.12]">
              일상의 진화, <br />
              <span className="text-[#034EA2]">인공지능으로 완성되다</span>
            </h1>

            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-slate-650 text-gray-600 md:text-lg">
              삼성의 혁신적인 AI 기술이 당신의 라이프스타일을 스스로 학습하여 가장 최적화된 프리미엄 홈 솔루션을 선사합니다. 1등급 고효율 으뜸 케어를 가벼운 마음으로 누려보세요.
            </p>

            {/* Hero CTA Button group */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onStartQuiz}
                className="flex items-center gap-2 rounded-[10px] bg-brand font-sans px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#023b7a] active:scale-95"
              >
                나의 맞춤형 가전 찾기
                <ArrowRight className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={onScrollToProducts}
                className="rounded-[10px] bg-brand-light font-sans px-8 py-4 text-base font-semibold text-brand transition-all hover:bg-[#d0e1fd] active:scale-95"
              >
                전체 브랜드 라인업 보기
              </button>
            </div>

            {/* Core Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-gray-200 pt-8 w-full max-w-lg">
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-[#141414]">100%</span>
                <span className="mt-1 font-sans text-xs font-semibold text-gray-500">전 가전 에너지 1등급</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-[#141414]">평생 무상</span>
                <span className="mt-1 font-sans text-xs font-semibold text-gray-500">인버터 핵심부품 보증</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-[#141414]">AI Care</span>
                <span className="mt-1 font-sans text-xs font-semibold text-gray-500">스마트싱스 원터치 연동</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Column - Minimalist Bespoke Visual representation */}
          <div className="relative md:col-span-1 lg:col-span-5 h-[320px] md:h-[400px] flex items-center justify-center">
            <div className="relative w-full h-full bg-white rounded-[12px] shadow-sm overflow-hidden flex items-center justify-center p-8 border border-gray-150">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-60"></div>
              
              {/* Minimal Bespoke Refrigerator Mock */}
              <div className="w-36 h-72 bg-[#E6E7E8] rounded-[6px] shadow-md relative flex flex-col justify-between p-4 border border-white/80 z-10 transition-transform hover:scale-102">
                <span className="text-[10px] font-bold text-gray-400">BESPOKE Fridge</span>
                <div className="w-full h-[1.5px] bg-white/60 my-auto"></div>
                <div className="w-full h-8 bg-brand-light/40 rounded-[4px] border border-brand/10"></div>
              </div>

              {/* Companion AirDresser Mock */}
              <div className="ml-6 w-24 h-60 bg-[#D1D3D4] rounded-[6px] shadow-sm relative border border-white/80 z-10 p-3 flex flex-col justify-between">
                <span className="text-[9px] font-bold text-gray-500">AirDresser</span>
                <div className="w-2 h-10 bg-[#BCBEC0] rounded mx-auto"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
