import { useState } from 'react';
import { Sparkles, HelpCircle, Calculator, Menu, X, CheckSquare } from 'lucide-react';

interface HeaderProps {
  onStartQuiz: () => void;
  onScrollToProducts: () => void;
  onScrollToCalculator: () => void;
}

export default function Header({ onStartQuiz, onScrollToProducts, onScrollToCalculator }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 md:px-8 lg:px-10">
        {/* Logo Section */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl font-black tracking-tighter text-[#034EA2]">
              SAMSUNG <span className="text-[#141414] font-medium tracking-normal text-lg">NEOBLUE</span>
            </span>
            <span className="ml-1.5 rounded-[4px] bg-brand-light px-2 py-0.5 text-[10px] font-bold text-brand uppercase tracking-wider">
              AI Home
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <button 
            type="button"
            onClick={onScrollToProducts}
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-brand"
          >
            Products (전체 라인업)
          </button>
          
          <button 
            type="button"
            onClick={onScrollToCalculator}
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition-colors hover:text-brand"
          >
            <Calculator className="h-4 w-4" />
            Energy 환급 계산기
          </button>

          <button 
            type="button"
            onClick={onStartQuiz}
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition-colors hover:text-brand"
          >
            <HelpCircle className="h-4 w-4" />
            AI 라이프스타일 큐레이션
          </button>
        </nav>

        {/* Action Button Section */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={onStartQuiz}
            className="flex items-center gap-2 rounded-[10px] bg-brand font-sans px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#023b7a] active:scale-95"
          >
            <Sparkles className="h-4 w-4" />
            무료 AI 매칭 분석
          </button>
        </div>

        {/* Mobile Hamburger menu */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-50 md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={() => {
                onScrollToProducts();
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left font-sans py-3 text-sm font-semibold text-slate-700 hover:text-brand"
            >
              프리미엄 제품 라인업
            </button>
            <button
              type="button"
              onClick={() => {
                onScrollToCalculator();
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left font-sans py-3 text-sm font-semibold text-slate-700 hover:text-brand"
            >
              에너지 등급 환급 계산기
            </button>
            <button
              type="button"
              onClick={() => {
                onStartQuiz();
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left font-sans py-3 text-sm font-semibold text-slate-700 hover:text-brand"
            >
              라이프스타일 가전 컨설팅
            </button>
            <hr className="border-slate-100" />
            <button
              type="button"
              onClick={() => {
                onStartQuiz();
                setIsMobileMenuOpen(false);
              }}
              className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-brand py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#023b7a]"
            >
              <Sparkles className="h-4 w-4" />
              무료 AI 매칭 분석
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
