import { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ConsultingSimulator from './components/ConsultingSimulator';
import EnergySavingsCalculator from './components/EnergySavingsCalculator';
import ProductDetailModal from './components/ProductDetailModal';
import Footer from './components/Footer';
import { PRODUCTS, CATEGORIES, LIFESTYLE_TAGS } from './data';
import { Product } from './types';
import { Sparkles, Trash2, Check, Calculator, ShieldCheck, ShoppingBag, Eye, HelpCircle } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [estimateBasket, setEstimateBasket] = useState<Product[]>([
    PRODUCTS[0], // Pre-populate with one item (refrigerator) for premium initial styling
  ]);
  const [activeLifestyleTag, setActiveLifestyleTag] = useState<string | null>(null);
  
  // Interactive UI notifications and completion overlays
  const [showToast, setShowToast] = useState<string | null>(null);
  const [showEstimateSuccess, setShowEstimateSuccess] = useState<boolean>(false);

  // References for scrolling
  const productsRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);
  const quizRef = useRef<HTMLDivElement>(null);

  const triggerToast = (message: string) => {
    setShowToast(message);
    setTimeout(() => {
      setShowToast(null);
    }, 3000);
  };

  const handleScrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
    setTimeout(() => {
      quizRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  // Toggle products inside custom custom quote basket
  const handleToggleToEstimate = (product: Product) => {
    const isAlreadyAdded = estimateBasket.some((p) => p.id === product.id);
    if (isAlreadyAdded) {
      setEstimateBasket(estimateBasket.filter((p) => p.id !== product.id));
      triggerToast(`${product.name}이(가) 견적 목록에서 제외되었습니다.`);
    } else {
      setEstimateBasket([...estimateBasket, product]);
      triggerToast(`${product.name}이(가) 견적 목록에 담겼습니다.`);
    }
  };

  const handleClearBasket = () => {
    setEstimateBasket([]);
    triggerToast('견적 목록이 모두 비워졌습니다.');
  };

  const handleApplyPackageFromQuiz = (quizProducts: Product[]) => {
    setEstimateBasket(quizProducts);
    triggerToast('AI 추천 패키지 3종이 견적 목록에 적용되었습니다.');
    handleScrollToProducts();
  };

  // Pricing analysis for the active basket
  const totalBasketPrice = estimateBasket.reduce((sum, p) => sum + p.price, 0);
  // 10% cash rebate for Korean Grade 1 appliances, max limit 300,000 KRW
  const basketRebateAmount = Math.min(Math.round(totalBasketPrice * 0.1), 300000);
  const netEstimatedPrice = totalBasketPrice - basketRebateAmount;

  // Filter products by selected categories and active lifestyle tags
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchLifestyle = !activeLifestyleTag || product.lifestyleTags.includes(activeLifestyleTag);
    return matchCategory && matchLifestyle;
  });

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-light selection:text-brand antialiased">
      
      {/* Toast Notification popup */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-[8px] bg-[#141414] border border-gray-700/80 px-6 py-3.5 text-center shadow-lg backdrop-blur-md animate-fade-in flex items-center gap-2">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] bg-brand text-white">
            <Check className="h-3 w-3" />
          </div>
          <span className="font-sans text-xs font-semibold text-white whitespace-nowrap">{showToast}</span>
        </div>
      )}

      {/* Header element */}
      <Header 
        onStartQuiz={handleStartQuiz} 
        onScrollToProducts={handleScrollToProducts}
        onScrollToCalculator={handleScrollToCalculator}
      />

      {/* Main Hero block */}
      <Hero 
        onStartQuiz={handleStartQuiz} 
        onScrollToProducts={handleScrollToProducts}
      />

      {/* Main Page Layout Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">
        
        {/* Dynamic Quiz Container when visible */}
        {showQuiz && (
          <div ref={quizRef} className="scroll-mt-24 mb-16">
            <ConsultingSimulator 
              onClose={() => setShowQuiz(false)}
              onApplyPackage={handleApplyPackageFromQuiz}
              onViewProductDetails={(p) => setSelectedProductForModal(p)}
            />
          </div>
        )}

        {/* Brand Core Highlight - Two-column promotional card row */}
        <section className="mb-20 grid gap-6 md:grid-cols-2">
          {/* Accent block left - Toss / Samsung health gradient style, but solid blue based on user intent */}
          <div className="rounded-[12px] bg-brand p-8 text-white text-left md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 -z-0 h-40 w-40 rounded-full bg-white/10 blur-xl" />
            <h4 className="font-display text-2xl font-extrabold tracking-tight">
              정부 으뜸효율 가전 전 품목 <br />
              <span className="text-blue-200">10% 환급 혜택 대상 BRAND</span>
            </h4>
            <p className="mt-4 font-sans text-xs text-blue-100 max-w-md leading-relaxed font-light">
              NEO BLUE 전 라인업은 자율 인공지능 절전 기술을 통해 국가 친환경 1등급 성능 규격을 만점으로 통과하였습니다. 스마트 매칭 또는 제품 탐색 후 견적을 채워 최대 30만원 환급 혜택을 드립니다.
            </p>
            <button
              type="button"
              onClick={handleScrollToCalculator}
              className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-[8px] bg-white/10 px-4 h-11 md:h-8 text-xs font-semibold tracking-tight hover:bg-white/20 transition-all active:scale-95"
            >
              <Calculator className="h-4 w-4" />
              나의 에너지 절약 계산기 이동
            </button>
          </div>

          <div className="rounded-[12px] bg-[#F8F9FA] border border-gray-200 p-8 text-left md:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-brand uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4 text-brand" />
                <span>SmartThings Life Support</span>
              </div>
              <h4 className="mt-4 font-display text-xl font-extrabold text-black">
                인공지능 진단 및 품질 연간 케어 무상 제공
              </h4>
              <p className="mt-2.5 font-sans text-xs leading-relaxed text-gray-550 font-light">
                기밀 센서와 스마트 마이크로 공정을 통해 가동 소음, 미세 먼지 잔량을 스스로 파악하고 스마트폰으로 리포트를 보냅니다. 
                핵심 인버터 모터는 조건 없는 평생 무상 부품 보증을 보장합니다.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-bold text-brand">
              <span>● Smart 인버터 DD 모터 및 핵심 핵심부품 평생 보증</span>
            </div>
          </div>
        </section>

        {/* Dynamic Products Catalog Block */}
        <section ref={productsRef} className="scroll-mt-24 mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 text-left">
            <div>
              <h3 className="font-display text-xl font-black text-slate-950 md:text-3xl tracking-tight">
                프리미엄 지능 가전 컬렉션
              </h3>
              <p className="mt-2 font-sans text-xs text-slate-400">
                네오 블루의 하이테크 1등급 가전 모델들을 카테고리별로 탐색해 보세요.
              </p>
            </div>

            {/* Quick Lifestyle Tag Reset/Select */}
            <div className="mt-4 md:mt-0 flex flex-wrap gap-1.5 bg-gray-100 p-1 rounded-[10px]">
              <button
                type="button"
                onClick={() => setActiveLifestyleTag(null)}
                className={`px-3 py-1.5 text-xs font-bold rounded-[8px] transition-all ${
                  activeLifestyleTag === null
                    ? 'bg-white text-brand shadow-sm'
                    : 'text-gray-500 hover:text-slate-800'
                }`}
              >
                전체 보기
              </button>
              {LIFESTYLE_TAGS.map((tag) => (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => setActiveLifestyleTag(tag.id)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-[8px] transition-all ${
                    activeLifestyleTag === tag.id
                      ? 'bg-white text-brand shadow-sm'
                      : 'text-gray-500 hover:text-slate-800'
                  }`}
                >
                  {tag.label.split(' • ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Clean Category Navigation Tabs (Toss/Samsung Health vibe) */}
          <div className="flex border-b border-gray-250 overflow-x-auto pb-px mb-8 mb:scroll-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`pb-3.5 pr-2 mr-8 font-sans text-sm font-bold border-b-2 transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'border-brand text-brand font-extrabold'
                    : 'border-transparent text-[#141414] hover:text-brand'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Products Grid: 8 columns out of 12 */}
            <div className="lg:col-span-8">
              {filteredProducts.length > 0 ? (
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((p) => (
                    <ProductCard
                      key={p.id}
                      product={p}
                      onViewDetails={(p) => setSelectedProductForModal(p)}
                      onToggleToEstimate={handleToggleToEstimate}
                      isEstimated={estimateBasket.some((eb) => eb.id === p.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-200 py-20 text-center">
                  <HelpCircle className="mx-auto h-12 w-12 text-slate-300" />
                  <p className="mt-4 font-sans text-sm font-bold text-slate-500">
                    선택한 조건에 해당하는 가전 모델이 없습니다.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory('all');
                      setActiveLifestyleTag(null);
                    }}
                    className="mt-4 text-xs font-bold text-brand hover:underline"
                  >
                    필터 지우고 전체 가전 보기
                  </button>
                </div>
              )}
            </div>

            {/* Right Estimator Basket panel: 4 columns out of 12 */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
              <div className="rounded-[12px] border border-gray-200 bg-white p-5 shadow-sm md:p-6 text-left">
                <div className="flex items-center justify-between border-b border-gray-150 pb-4">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5 text-brand" />
                    <h4 className="font-display text-base font-black text-[#141414] uppercase tracking-wide">
                      실시간 견적 바스켓 ({estimateBasket.length})
                    </h4>
                  </div>
                  {estimateBasket.length > 0 && (
                    <button
                      type="button"
                      onClick={handleClearBasket}
                      className="text-xs font-semibold text-gray-400 hover:text-rose-500"
                    >
                      전체 비우기
                    </button>
                  )}
                </div>

                {/* Estimate Basket List */}
                {estimateBasket.length > 0 ? (
                  <div className="mt-4 space-y-3.5 max-h-[250px] overflow-y-auto pr-1">
                    {estimateBasket.map((ebItem) => (
                      <div key={`eb-${ebItem.id}`} className="flex items-center justify-between gap-3 bg-[#F8F9FA] rounded-[8px] p-2.5 border border-gray-150">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img 
                            src={ebItem.imageUrl} 
                            alt={ebItem.name} 
                            referrerPolicy="no-referrer"
                            className="h-10 w-10 rounded-[4px] object-cover"
                          />
                          <div className="min-w-0">
                            <p className="font-display text-xs font-bold text-[#141414] truncate">
                              {ebItem.name}
                            </p>
                            <p className="font-display text-[11px] font-semibold text-gray-550">
                              {ebItem.price.toLocaleString()}원
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleToggleToEstimate(ebItem)}
                          className="text-gray-400 hover:text-rose-500 p-1"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-10 mb-8 text-center">
                    <ShoppingBag className="mx-auto h-12 w-12 text-gray-300" />
                    <p className="mt-3 font-sans text-xs font-bold text-gray-400">
                      담긴 가전제품이 없습니다. <br />
                      목록에서 '견적에 추가'를 눌러보세요!
                    </p>
                  </div>
                )}

                {/* Totals Calculations */}
                <div className="mt-6 border-t border-gray-150 pt-5 space-y-3">
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>가전 총액</span>
                    <span className="font-display font-medium text-slate-800">{totalBasketPrice.toLocaleString()}원</span>
                  </div>
                  
                  <div className="flex justify-between text-xs text-emerald-700 font-bold">
                    <span className="flex items-center gap-1">으뜸효율 정부 환급 (10%)</span>
                    <span className="font-display">-{basketRebateAmount.toLocaleString()}원</span>
                  </div>

                  <div className="border-t border-gray-150 pt-3 flex justify-between items-end">
                    <div>
                      <span className="font-sans text-[10px] font-bold text-gray-400 uppercase tracking-widest">환급 최종 예산</span>
                      <p className="font-display text-xl font-extrabold text-[#141414] mt-0.5">
                        {netEstimatedPrice.toLocaleString()}원
                      </p>
                    </div>

                    <button
                      type="button"
                      disabled={estimateBasket.length === 0}
                      onClick={() => {
                        setShowEstimateSuccess(true);
                        triggerToast('성공적으로 무료 정밀 견적 문의가 전송되었습니다.');
                      }}
                      className="rounded-[10px] bg-brand font-sans px-4 h-11 md:h-11 flex items-center justify-center text-xs font-semibold text-white transition-all hover:bg-[#023b7a] active:scale-95 disabled:bg-slate-150 disabled:text-gray-400 disabled:cursor-not-allowed"
                    >
                      견적 무료 메일 전송
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Energy Savings Simulation Calculator Section */}
        <section ref={calculatorRef} className="scroll-mt-24 mb-16">
          <EnergySavingsCalculator />
        </section>

      </main>

      {/* Corporate detailed Footer */}
      <Footer />

      {/* Specification overlay Modal */}
      {selectedProductForModal && (
        <ProductDetailModal
          product={selectedProductForModal}
          onClose={() => setSelectedProductForModal(null)}
          onToggleEstimate={handleToggleToEstimate}
          isEstimated={estimateBasket.some((eb) => eb.id === selectedProductForModal.id)}
        />
      )}

      {/* Dynamic Estimate Success Confirm Dialog (Toss-like popup) */}
      {showEstimateSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="relative z-10 w-full max-w-sm rounded-[12px] border border-gray-200 bg-white p-6 shadow-2xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[4px] bg-emerald-50 border border-emerald-250 text-emerald-600">
              <Check className="h-8 w-8" />
            </div>

            <h3 className="mt-5 font-display text-lg font-black text-[#141414] leading-snug">
               견적 문의 접수 완료!
            </h3>

            <p className="mt-3.5 font-sans text-xs leading-relaxed text-gray-500">
              선택하신 프리미엄 가전 패키지 ({estimateBasket.length}개 모델) 견적이 본사 안심 시스템에 등록되었습니다. 등록 이메일로 으뜸가전 국가 환급 청구 서류 및 추가 설치 할인 혜택 리포트가 발송됩니다.
            </p>

            <button
              type="button"
              onClick={() => setShowEstimateSuccess(false)}
              className="mt-6 w-full rounded-[10px] bg-brand h-11 flex items-center justify-center text-xs font-semibold text-white transition-all hover:bg-[#023b7a] active:scale-95"
            >
              확인
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
