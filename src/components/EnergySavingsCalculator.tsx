import { useState } from 'react';
import { Sparkles, HelpCircle, Flame, ShieldAlert, CheckCircle2, DollarSign, Leaf, Zap } from 'lucide-react';

interface CalculatorItem {
  id: string;
  name: string;
  price: number;
  averageSavingKwh: number; // monthly kWh saved over older Grade 3 models
}

const CALCULATOR_ITEMS: CalculatorItem[] = [
  { id: 'ref-c', name: 'Neo AI 패밀리허브 비스포크 냉장고', price: 3490000, averageSavingKwh: 35.8 },
  { id: 'wash-c', name: 'Neo AI 원바디 세탁건조 콤보', price: 2890000, averageSavingKwh: 28.5 },
  { id: 'air-c', name: 'Neo 비스포크 무풍 AI 에어컨', price: 2250000, averageSavingKwh: 45.2 },
  { id: 'bot-c', name: 'Neo Jet AI 스팀 로봇 청소기', price: 1590000, averageSavingKwh: 12.0 }
];

export default function EnergySavingsCalculator() {
  const [selectedIds, setSelectedIds] = useState<string[]>(['ref-c', 'wash-c']);
  const [familySize, setFamilySize] = useState<number>(3); // 1 to 5 people
  const [averageUseHours, setAverageUseHours] = useState<number>(8); // hours per day

  const toggleItem = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(item => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Pricing calculations
  const selectedProducts = CALCULATOR_ITEMS.filter(item => selectedIds.includes(item.id));
  const totalAppliancePrice = selectedProducts.reduce((sum, item) => sum + item.price, 0);

  // Government 10% Refund (으뜸효율 환급금 - 10% of buy price, max 300,000 KRW limit)
  const rebateAmount = Math.min(Math.round(totalAppliancePrice * 0.1), 300000);

  // Monthly kWh saved in total
  const kwhSavedMonthly = selectedProducts.reduce((sum, item) => sum + item.averageSavingKwh, 0) * (averageUseHours / 8);
  
  // Power costs in KRW per kWh in standard progressive stage (approx 200 KRW average base in Korea)
  const baseKwhCost = 210; 
  const monthlyCostSavings = Math.round(kwhSavedMonthly * baseKwhCost);
  const yearlyCostSavings = monthlyCostSavings * 12;

  // Carbon emissions reduction (approx 0.466 kg of CO2 per kWh)
  const carbonSavedYearly = Math.round(kwhSavedMonthly * 12 * 0.466);

  return (
    <div className="rounded-[12px] border border-gray-200 bg-[#F8F9FA] p-4 md:p-10" id="energy-calculator-section">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12">
        {/* Left Interactive Parameters */}
        <div className="md:col-span-1 lg:col-span-7">
          <div className="inline-flex items-center gap-1.5 rounded-[4px] bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-250">
            <Zap className="h-4 w-4 text-emerald-600" />
            <span>친환경 1등급 에너지 절약 체험 시뮬레이터</span>
          </div>

          <h3 className="mt-4 font-display text-xl font-extrabold tracking-tight text-black md:text-3xl">
            가전을 바꾸는 것만으로도 <br />
            <span className="text-brand">매달 고정비가 달라집니다.</span>
          </h3>

          <p className="mt-3 font-sans text-sm text-gray-500 max-w-lg leading-relaxed">
            구형 3~4등급 대비 최신 NEO BLUE 1등급 인공지능 가전을 도입했을 시, 
            가계 지출과 환경 탄소 감소 수치를 즉각 예측해 드립니다. 구매 예정 가전을 체크해 보세요.
          </p>

          {/* Product Checkboxes */}
          <div className="mt-8 space-y-3">
            <span className="font-sans text-xs font-bold text-gray-400 uppercase tracking-wider">교체할 보유/구매 예정 가전 선택</span>
            <div className="space-y-2">
              {CALCULATOR_ITEMS.map((item) => {
                const isChecked = selectedIds.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className={`flex w-full items-center justify-between rounded-[10px] border p-4 text-left transition-all ${
                      isChecked
                        ? 'border-brand bg-brand-light/40 shadow-sm'
                        : 'border-gray-250 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-5 w-5 items-center justify-center rounded-[4px] border text-white transition-all ${
                        isChecked ? 'bg-brand border-brand' : 'bg-white border-gray-300'
                      }`}>
                        {isChecked && <CheckCircle2 className="h-4 w-4 shrink-0" />}
                      </div>
                      <span className="font-sans text-sm font-bold text-slate-800">{item.name}</span>
                    </div>
                    <span className="font-display text-xs font-medium text-gray-500">
                      {item.price.toLocaleString()}원
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Usage Multiplier Slider */}
          <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2">
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-gray-400 mb-2">
                <span>가구 거주 인원수</span>
                <span className="text-slate-800">{familySize}명 가구 기준</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={familySize}
                onChange={(e) => setFamilySize(parseInt(e.target.value))}
                className="w-full accent-brand h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1.5 font-medium">
                <span>1인 가구</span>
                <span>3인 기준</span>
                <span>대형 가사</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-bold text-gray-400 mb-2">
                <span>하루 평균 가동 시간</span>
                <span className="text-slate-800">{averageUseHours}시간 가량</span>
              </div>
              <input
                type="range"
                min="2"
                max="24"
                value={averageUseHours}
                onChange={(e) => setAverageUseHours(parseInt(e.target.value))}
                className="w-full accent-brand h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1.5 font-medium">
                <span>절전 위주</span>
                <span>표준 모드</span>
                <span>24시간 대기</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Dynamic Calculator Output Dashboard */}
        <div className="md:col-span-1 lg:col-span-5 flex flex-col justify-between rounded-[12px] bg-white border border-gray-200 p-4 md:p-8">
          <div>
            <h4 className="font-display text-sm font-black text-[#141414] uppercase tracking-wide border-b border-gray-150 pb-4">
              실시간 시뮬레이션 결과 리포트
            </h4>

            {/* Calculations Blocks */}
            <div className="mt-6 space-y-6">
              
              {/* Electricity fees */}
              <div>
                <span className="font-sans text-xs font-bold text-gray-400 uppercase tracking-wider">네오 웰빙 인텔리전스 연간 누적 전기료 절감액</span>
                <div className="mt-2 flex items-baseline gap-1 animate-fade-in">
                  <span className="font-display text-3xl font-extrabold text-brand">
                    {yearlyCostSavings.toLocaleString()}
                  </span>
                  <span className="font-sans text-sm font-bold text-slate-800">원 / 년</span>
                </div>
                <p className="mt-1 font-sans text-xs text-slate-400">
                  * 전기세 기본 단가 {baseKwhCost}원 기준 적용 시 (교체 가전 {selectedIds.length}개 기준)
                </p>
              </div>

              {/* Tax rebate */}
              <div>
                <span className="font-sans text-xs font-bold text-gray-400 uppercase tracking-wider">으뜸효율 정부 정책 가전 10% 현금 환불</span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-display text-2xl font-extrabold text-emerald-600">
                    {rebateAmount.toLocaleString()}
                  </span>
                  <span className="font-sans text-sm font-bold text-emerald-600">원 1회 일시 환물</span>
                </div>
                <p className="mt-1 font-sans text-xs text-slate-400">
                  * 구매금액 {totalAppliancePrice.toLocaleString()}원 대비 최대 {rebateAmount === 300000 ? '국가한도 도달 (30만)' : '10% 즉시 지급'}
                </p>
              </div>

              {/* Carbon block */}
              <div className="flex items-center gap-4 bg-emerald-50 rounded-[10px] p-4 border border-emerald-200">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-emerald-650 bg-emerald-600 text-white">
                  <Leaf className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-sans text-[11px] font-bold text-emerald-700 uppercase tracking-wider">연간 탄소 절감 효과</span>
                  <p className="font-display text-sm font-extrabold text-slate-900 mt-0.5">
                    연간 CO₂ {carbonSavedYearly}kg 절감 효과 <br />
                    <span className="text-emerald-600">소나무 {Math.round(carbonSavedYearly / 6.6)} 그루</span>를 심은 효과와 동일합니다!
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-8 border-t border-gray-150 pt-5 text-left text-xs leading-relaxed text-gray-400 font-light">
            본 시뮬레이션 수치는 에너지 공단 표준 등급 분석에 근거하며 스마트싱스 AI 절전 모드 가동 유무와 실 사용 패턴에 따라 다소 달라질 수 있습니다.
          </div>
        </div>
      </div>
    </div>
  );
}
