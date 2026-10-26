import { useState } from 'react';
import { Product, QuizQuestion } from '../types';
import { PRODUCTS, QUIZ_QUESTIONS } from '../data';
import { Sparkles, RefreshCw, Gift, Calculator, TrendingUp, Check, ArrowRight, User, Heart, PawPrint, Cpu, ChefHat } from 'lucide-react';

interface ConsultingSimulatorProps {
  onClose: () => void;
  onApplyPackage: (products: Product[]) => void;
  onViewProductDetails: (product: Product) => void;
}

export default function ConsultingSimulator({ onClose, onApplyPackage, onViewProductDetails }: ConsultingSimulatorProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentIdx];
  const progressPercent = Math.round(((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100);

  const handleSelectOption = (optionId: string) => {
    const updatedAnswers = { ...answers, [currentQuestion.id]: optionId };
    setAnswers(updatedAnswers);

    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentIdx(0);
    setIsCompleted(false);
  };

  // Analyze answers and find matching appliances
  const getRecommendedProducts = (): Product[] => {
    // Collect all tag values from chosen answers
    const activeTags: string[] = [];
    QUIZ_QUESTIONS.forEach((q) => {
      const selectedOptionId = answers[q.id];
      if (selectedOptionId) {
        const option = q.options.find((o) => o.id === selectedOptionId);
        if (option) {
          activeTags.push(option.tagValue);
        }
      }
    });

    // Score products based on tag matches
    const scored = PRODUCTS.map((product) => {
      let score = 0;
      product.lifestyleTags.forEach((tag) => {
        if (activeTags.includes(tag)) {
          score += 2;
        }
      });
      // Add a small default boost for high-popularity items so we always have products
      if (product.hasSpecialBadge === '인기 상품') {
        score += 0.5;
      }
      return { product, score };
    });

    // Sort by score descend & return top 3
    return scored
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((item) => item.product);
  };

  const recommendations = isCompleted ? getRecommendedProducts() : [];
  const totalPrice = recommendations.reduce((sum, p) => sum + p.price, 0);
  
  // Korean Government Rebate for Grade 1 appliances (10% rebate, max 300,000 KRW limit)
  const rebateAmount = Math.min(Math.round(totalPrice * 0.1), 300000);

  return (
    <div className="rounded-[12px] border border-gray-200 bg-white p-4 md:p-10" id="lifestyle-quiz-container">
      {!isCompleted ? (
        // ACTIVE QUIZ SCREEN
        <div>
          {/* Header Progress panel */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-brand-light text-xs font-bold text-brand">
                {currentIdx + 1}
              </span>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">AI 맞춤 컨설팅 진행 중</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-semibold text-gray-400 hover:text-slate-600"
            >
              종료하기
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 h-1.5 w-full rounded-full bg-slate-100">
            <div 
              className="h-full rounded-full bg-brand transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Question Text */}
          <div className="mt-8 text-left">
            <h3 className="font-display text-xl font-black leading-tight text-black md:text-3xl">
              {currentQuestion.title}
            </h3>
            <p className="mt-2 font-sans text-sm text-gray-550 text-gray-500">
              {currentQuestion.subtitle}
            </p>
          </div>

          {/* Question Options List */}
          <div className="mt-8 space-y-4">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelectOption(option.id)}
                className="flex w-full items-center justify-between rounded-[10px] border border-gray-200 p-5 text-left transition-all hover:bg-slate-50 hover:border-gray-300 active:scale-[0.99]"
              >
                <div className="flex flex-col gap-1 pr-4">
                  <span className="font-sans text-base font-bold text-[#141414]">
                    {option.label}
                  </span>
                  <span className="font-sans text-xs text-gray-500">
                    {option.description}
                  </span>
                </div>
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-200">
                  <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-slate-300" />
                </div>
              </button>
            ))}
          </div>

          {/* Bottom helper */}
          {currentIdx > 0 && (
            <div className="mt-6 flex justify-start">
              <button
                type="button"
                onClick={() => setCurrentIdx(currentIdx - 1)}
                className="text-xs font-bold text-gray-400 hover:text-brand"
              >
                ← 이전 질문으로 돌아가기
              </button>
            </div>
          )}
        </div>
      ) : (
        // COMPLETED RESULTS SCREEN
        <div className="text-left animate-fade-in">
          {/* Top Banner Tag */}
          <div className="inline-flex items-center gap-2 rounded-[4px] bg-emerald-50 px-3.5 py-1.5 text-xs font-bold text-emerald-700 border border-emerald-150">
            <Check className="h-4 w-4" />
            <span>AI 맞춤 가전 매칭 분석 완료</span>
          </div>

          <h3 className="mt-5 font-display text-xl font-extrabold leading-tight tracking-tight text-black md:text-3xl">
            고객님의 라이프케어를 극대화할 <br />
            <span className="text-brand">NEO 블루 스마트 시퀀스</span> 패키지입니다.
          </h3>
          
          <p className="mt-3 font-sans text-sm text-gray-550 text-gray-500">
            답변에 따른 1등급 에코 고효율 프리미엄 대표 모델과 정부 환급 최적 패키지 구성을 정밀 제안합니다.
          </p>

          {/* Results Appliance Grid */}
          <div className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((prod) => (
              <div 
                key={prod.id} 
                className="group flex flex-col rounded-[10px] border border-gray-200 bg-white p-4 transition-all hover:bg-slate-50 hover:shadow-sm"
              >
                <img 
                  src={prod.imageUrl} 
                  alt={prod.name}
                  referrerPolicy="no-referrer"
                  className="h-24 w-full max-w-full object-cover rounded-[6px]"
                />
                <span className="mt-3 text-[10px] font-bold text-brand uppercase">{prod.categoryLabel}</span>
                <h4 className="mt-1 font-display text-sm font-bold text-slate-900 line-clamp-1">{prod.name}</h4>
                <p className="mt-1 font-display text-xs font-bold text-slate-600">{prod.price.toLocaleString()}원</p>
                <button
                  type="button"
                  onClick={() => onViewProductDetails(prod)}
                  className="mt-3 rounded-[8px] border border-gray-200 bg-white h-11 md:h-8 flex items-center justify-center text-[11px] font-semibold text-gray-600 transition-colors hover:bg-slate-50"
                >
                  기능상세 보기
                </button>
              </div>
            ))}
          </div>

          {/* Visual Estimate Bill Summary */}
          <div className="mt-8 rounded-[12px] bg-brand p-6 text-white md:p-8">
            <h4 className="font-display text-lg font-bold">인공지능 추천 패키지 총합 견적</h4>
            
            <div className="mt-5 space-y-3.5 border-b border-white/10 pb-5">
              <div className="flex justify-between text-sm font-light text-blue-100">
                <span>추천 엄선 가전 총 부가세 포함가 ({recommendations.length}개 모델)</span>
                <span className="font-display font-medium">{totalPrice.toLocaleString()}원</span>
              </div>
              <div className="flex justify-between text-sm font-light text-emerald-100">
                <span className="flex items-center gap-1">
                  <Gift className="h-4 w-4" />
                  정부 으뜸효율 1등급 에너지 10% 일시 환급금 
                </span>
                <span className="font-display font-semibold text-emerald-300">-{rebateAmount.toLocaleString()}원</span>
              </div>
            </div>

            <div className="mt-5 flex items-end justify-between">
              <div>
                <span className="text-xs font-light text-blue-200">혜택 및 정부 적립 환급 적용 시</span>
                <p className="mt-1 font-display text-2xl font-black sm:text-3xl">
                  {(totalPrice - rebateAmount).toLocaleString()}원
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={resetQuiz}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-white/10 text-white transition-colors hover:bg-white/20"
                  title="다시 분석하기"
                >
                  <RefreshCw className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={() => onApplyPackage(recommendations)}
                  className="rounded-[10px] bg-white font-sans px-5 h-11 md:h-11 flex items-center justify-center text-sm font-bold text-brand shadow-sm transition-all hover:bg-blue-50 active:scale-95"
                >
                  이 패키지로 견적 확정
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Close CTA */}
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="font-sans text-xs font-bold text-slate-400 hover:text-brand"
            >
              닫기 및 메인화면으로 돌아가기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
