import { Sparkles, ShieldCheck, Award, MessageSquareHeart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F8F9FA] border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:py-16">
        
        {/* Core Value Stamps banner */}
        <div className="grid gap-6 border-b border-slate-200 pb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-white text-brand border border-gray-200">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="font-sans text-xs font-bold text-slate-800">모터 & 컴프레서 평생 보증</p>
              <p className="font-sans text-[11px] text-slate-500">핵심 부품 기한 없음 평생 고장 전액 보증</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-white text-brand border border-gray-200">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <p className="font-sans text-xs font-bold text-slate-800">에너지 효율 대상 최우수상 수상</p>
              <p className="font-sans text-[11px] text-slate-500">자연 탄소 배출 저감 및 정부 1등급 인증 가전</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-white text-brand border border-gray-200">
              <MessageSquareHeart className="h-5 w-5" />
            </div>
            <div>
              <p className="font-sans text-xs font-bold text-slate-800">24시간 스마트 원격 스마트 진단</p>
              <p className="font-sans text-[11px] text-slate-500">SmartThings 연동으로 사전 고장 자율 예측 알림</p>
            </div>
          </div>
        </div>

        {/* Brand details and links links */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-12">
          
          <div className="md:col-span-1 lg:col-span-5 text-left">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-black tracking-tighter text-[#034EA2]">
                SAMSUNG <span className="text-[#141414] font-medium tracking-normal text-md">NEOBLUE</span>
              </span>
            </div>

            <p className="mt-4 font-sans text-xs leading-relaxed text-slate-500 max-w-sm">
              네오블루는 삼성의 고품격 헤리티지와 하이테크 인텔리전스를 결합한 미래형 가전 홈 테크 개념 모델입니다.
              불필요한 가식적 수식을 배제하고 1등급 친환경 고성능만을 추구합니다.
            </p>

            <span className="mt-6 block font-sans text-[10px] text-slate-400">
              * 본 웹사이트는 가전 부문 으뜸효율 정부 환급 및 비스포크 모티브에 따라 기획된 고성능 클라이언트 포트폴리오입니다.
            </span>
          </div>

          <div className="md:col-span-1 lg:col-span-7 grid grid-cols-2 gap-6 md:grid-cols-3 text-left">
            <div>
              <h5 className="font-sans text-xs font-bold text-slate-800 uppercase tracking-widest">
                제품 카테고리
              </h5>
              <ul className="mt-4 space-y-2 text-xs text-slate-500">
                <li><span className="cursor-pointer hover:text-brand transition-colors">주방 가전 (냉장고, 인덕션)</span></li>
                <li><span className="cursor-pointer hover:text-brand transition-colors">리빙 가전 (세탁 건조기)</span></li>
                <li><span className="cursor-pointer hover:text-brand transition-colors">에어 케어 (무풍 에어컨)</span></li>
                <li><span className="cursor-pointer hover:text-brand transition-colors">청소 가전 (AI 로봇 청소기)</span></li>
              </ul>
            </div>

            <div>
              <h5 className="font-sans text-xs font-bold text-slate-800 uppercase tracking-widest">
                고객 지원 서비스
              </h5>
              <ul className="mt-4 space-y-2 text-xs text-slate-500">
                <li><span className="cursor-pointer hover:text-brand transition-colors">스마트 자가 원격 자율진단</span></li>
                <li><span className="cursor-pointer hover:text-brand transition-colors">제품 정품 인증 및 시리얼 등록</span></li>
                <li><span className="cursor-pointer hover:text-brand transition-colors">A/S 전 부문 전문 엔지니어 찾기</span></li>
                <li><span className="cursor-pointer hover:text-brand transition-colors">정부 일시 환급 정책 자료실</span></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h5 className="font-sans text-xs font-bold text-slate-800 uppercase tracking-widest">
                본사 케어 센터
              </h5>
              <p className="mt-4 font-display text-lg font-extrabold text-slate-800">
                1588 - 034E
              </p>
              <p className="mt-1 font-sans text-[11px] text-slate-400">
                평일 09:00 ~ 18:00 (주말 휴무) <br />
                smart_blue@samsung_neo.com
              </p>
            </div>
          </div>

        </div>

        {/* Deep bottom copy links and copyrights */}
        <div className="mt-12 border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-slate-400 text-left">
            © {currentYear} NEO BLUE AI Inc. All Rights Reserved. (주)네오블루테크 | 대표이사: AI 빌더 | 사업자등록번호 120-20-20261 <br />
            서울특별시 강남구 테헤란로 프리미엄 가전 R&D 본부 5층 | 개인정보 처리방침 | 이용 약관 • 보증기준 안내
          </p>
          <div className="flex gap-4 text-slate-400 text-xs">
            <span className="hover:text-brand cursor-pointer">이용약관</span>
            <span className="hover:text-brand cursor-pointer font-bold text-slate-600">개인정보처리방침</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
