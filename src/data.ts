import { Product, QuizQuestion } from './types';

export const CATEGORIES = [
  { id: 'all', label: '전체 제품' },
  { id: 'kitchen', label: '주방 가전' },
  { id: 'living', label: '리빙 가전' },
  { id: 'air', label: '에어 케어' },
  { id: 'cleaning', label: '청소 가전' }
];

export const LIFESTYLE_TAGS = [
  { id: 'single', label: '1인 가구 • 미니멀 라이프', icon: 'User' },
  { id: 'newlyweds', label: '신혼 부부 • 감성 인테리어', icon: 'Heart' },
  { id: 'pet', label: '반려동물 가정 • 안심 케어', icon: 'PawPrint' },
  { id: 'smart-home', label: '얼리어답터 • 하이테크 홈터넷', icon: 'Cpu' },
  { id: 'chef', label: '미식가 • 요리를 즐기는 홈다이닝', icon: 'ChefHat' }
];

export const PRODUCTS: Product[] = [
  {
    id: 'refrigerator-01',
    name: 'Neo AI 패밀리허브 비스포크 냉장고',
    category: 'kitchen',
    categoryLabel: '주방 가전',
    description: 'AI 비전 센서가 식재료를 스스로 인식하여 보관 기한을 알려주고, 푸드 레시피를 제안하는 최고급 4도어 스마트 냉장고',
    price: 3490000,
    energyRating: 1,
    powerConsumption: '32.5 kWh/월',
    hasSpecialBadge: '인기 상품',
    imageUrl: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80',
    iconName: 'Refrigerator',
    lifestyleTags: ['newlyweds', 'smart-home', 'chef'],
    features: [
      'AI Vision Inside: 보관 중인 식재료 실시간 모니터링',
      '비스포크 맞춤 패널: 주방 분위기에 최적화된 패널 교체 디자인',
      '트리플 독립 냉각: 냄새 섞임 없는 독립 냉각 및 미세 온도 제어',
      '오토 오픈 도어: 손을 대면 가볍게 열리는 터치식 도어 센서'
    ],
    specs: [
      { label: '용량', value: '840 L' },
      { label: '컴프레서', value: '디지털 인버터 (평생보증)' },
      { label: '어플 연동', value: 'SmartThings 지원' },
      { label: '크기 (가로x세로x깊이)', value: '912 x 1853 x 930 mm' }
    ]
  },
  {
    id: 'washer-01',
    name: 'Neo AI 그랑데 올인원 원바디 콤보',
    category: 'living',
    categoryLabel: '리빙 가전',
    description: '세탁부터 건조까지 터치 한 번으로 끝내며, 세탁물의 무게와 오염도를 분석해 맞춤형 코스를 추천하는 차세대 고성능 세탁건조기',
    price: 2890000,
    energyRating: 1,
    powerConsumption: '세탁 0.8 kWh | 건조 1.6 kWh (1회)',
    hasSpecialBadge: '최고 평점',
    imageUrl: 'https://images.unsplash.com/photo-1545173168-9f1907e80020?auto=format&fit=crop&w=800&q=80',
    iconName: 'Sparkles',
    lifestyleTags: ['single', 'newlyweds', 'pet', 'smart-home'],
    features: [
      '인공지능 맞춤 세탁•건조: 무게, 원단, 오염도 감지 세제 자동 투입',
      '원바디 일체형 인터페이스: 복잡성 없는 중앙 심플 터치 패널',
      '펫케어 가열 버블: 알레르기 유발 항원 및 미세한 반려동물 미세털 완벽 제거',
      '초고속 에어 세니타이즈: 고온 미세 스팀으로 99.9% 냄새 및 세균 살균'
    ],
    specs: [
      { label: '용량', value: '세탁 25kg / 건조 15kg' },
      { label: '세제 자동 투입기', value: '대용량 (최대 6주 분량)' },
      { label: '모터 보증', value: '초정밀 DD 모터 (평생보증)' },
      { label: '미세 플라스틱 케어', value: '전용 필터 탑재 (미세 먼지 차단)' }
    ]
  },
  {
    id: 'air-01',
    name: 'Neo 비스포크 무풍 AI 에어컨 클래식',
    category: 'air',
    categoryLabel: '에어 케어',
    description: '살결에 직접 닿는 실외 바람 없이 공간을 쾌적하고 균일하게 냉방하며, 실내 공기 상태를 학습해 완벽한 환기와 무풍을 알아서 조절하는 지능형 에어컨',
    price: 2250000,
    energyRating: 1,
    powerConsumption: '최소 0.35 kW ~ 최대 1.95 kW',
    hasSpecialBadge: '시즌 베스트',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    iconName: 'Wind',
    lifestyleTags: ['single', 'newlyweds', 'pet'],
    features: [
      '와이드 무풍 냉방: 메탈 기공을 통해 고르고 시원한 무풍 에어 메커니즘',
      'AI 맞춤 청정웰빙: 스마트 센서가 실내 이산화탄소농도를 측정해 청정 필터링',
      '스마트 제습 센서: 장마철 습도 상황을 스스로 인지하는 자동 자율 제습',
      '친환경 태양광 리모컨: 일회용 배터리가 필요 없는 친환경 및 고효율 리모컨'
    ],
    specs: [
      { label: '냉방 공간 면적', value: '56.9 ㎡ (실평수 약 17평형)' },
      { label: '공기 청정 기능', value: 'PM 1.0 초미세 디럭스 필터' },
      { label: '자동 건조 세척', value: '5단계 필터살균 & 인공지능 내부건조' },
      { label: '안전성', value: '국가 안전인증 KC 인증 획득' }
    ]
  },
  {
    id: 'cleaner-01',
    name: 'Neo Jet AI 스팀 로봇 청소기',
    category: 'cleaning',
    categoryLabel: '청소 가전',
    description: '초정밀 LiDAR 고성능 라이다와 3D AI 사물 인식 카메라로 펫 배설물, 미세한 전선까지 정확히 회피하며 100도 고온 스팀으로 걸레 세척과 살균을 한 번에 해주는 로봇 청소기',
    price: 1590000,
    energyRating: 1,
    powerConsumption: '대기 전력 0.5W | 청정 스테이션 작동 시 1200W',
    hasSpecialBadge: '기술 특허',
    imageUrl: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80',
    iconName: 'ShieldCheck',
    lifestyleTags: ['single', 'pet', 'smart-home'],
    features: [
      '3D Active AI 센서: 3차원 패턴 센서 및 전면 카메라 기반 스마트 사물 회피',
      '100℃ 고온 스팀 살균: 청소 전후 살균 99.9%, 미생물 번식 및 걸레 악취 제로',
      '듀얼 물걸레 회전: 분당 180회 강력하게 회전 압착하여 찌든 때 완벽 청소',
      '펫 전용 매핑 모드: 외출 시 집 안의 동반 반려동물이 머무는 곳 위주 즉시 안전 투어 수색'
    ],
    specs: [
      { label: '흡입력', value: '6000 Pa (하이퍼 모터 장착)' },
      { label: '장애물 감지 사양', value: 'LiDAR + 3D 카메라 + 범퍼 센서' },
      { label: '스테이션 기능', value: '먼지 자동비움, 스팀걸레 세척 및 55℃ 열풍 건조' },
      { label: '배터리 수명', value: '최대 180분 연속 가동 가능 (리튬이온)' }
    ]
  },
  {
    id: 'cooker-01',
    name: 'Neo AI 인덕션 더 셰프 3구',
    category: 'kitchen',
    categoryLabel: '주방 가전',
    description: '스마트 온도 센서가 부착되어 국물이 넘치기 전에 자율적으로 화력을 컨트롤하고, 용기 자동 인식 기능으로 요리의 스트레스를 스마트하게 덜어주는 슬림 인덕션',
    price: 1290000,
    energyRating: 1,
    powerConsumption: '최대 화력 3400W (플렉스 존 가속 코일 포함)',
    hasSpecialBadge: '인테리어 완벽',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    iconName: 'ChefHat',
    lifestyleTags: ['newlyweds', 'chef'],
    features: [
      '스마트 쿡 윈도우 센서: 온도 변화를 초정밀로 읽어 찌개 및 소스 끓어오름 방지',
      '맥스 보일 프렌치 플렉스존: 크고 네모난 직사각형 서양식 프라이팬과 냄비 동시 쾌속 가열',
      '최고 배출 글래스 세라믹: 스크래치 강도 및 음식물 오염 세밀 고열 방지 글래스 적용',
      '스마트싱스 센싱 가이드: 요리 가이드 어플과 싱크되어 레시피 조리 온도 완전 자동 제어'
    ],
    specs: [
      { label: '화구 수', value: '3구 (플렉스존 포함)' },
      { label: '화력 단계', value: '1단계 ~ 15단계 섬세 슬라이드 터치' },
      { label: '안전성 제어 장치', value: '어린이 잠금 키즈락 포함 16가지 안전 장치 탑재' },
      { label: '설치 형태', value: '스탠드형 / 빌트인 프레임 프리 매끄러운 마감' }
    ]
  },
  {
    id: 'dresser-01',
    name: 'Neo 에어 드레서 수트 마스터 플러스',
    category: 'living',
    categoryLabel: '리빙 가전',
    description: '강력한 제트 미세 스팀 에어로 매일 세탁하기 어려운 겉옷, 소중한 정장, 가구 패브릭의 유해 물질과 생활 먼지를 조용하지만 강력하게 집중 관리해 주는 세컨 드림 에어 드레서',
    price: 1890000,
    energyRating: 1,
    powerConsumption: '1400 W (미세 가열 스팀 드라잉 가동 시)',
    hasSpecialBadge: '의류 혁신',
    imageUrl: 'https://images.unsplash.com/photo-1558882224-cca166733360?auto=format&fit=crop&w=800&q=80',
    iconName: 'Shirt',
    lifestyleTags: ['newlyweds', 'single', 'smart-home'],
    features: [
      '트리플 제트 에어: 흔들리지 않고 조용하게 미세 먼지를 아래로 완전 탈탈 털어내는 에어 행거',
      'UV 냄새 분해 필터: 담배, 땀, 삼겹살 탄내 유발 분자를 효과적으로 수집 분해',
      '아로마 시트 디퓨저: 케어가 끝난 옷깃에서 하루 종일 은은하게 흐르는 커스텀 향 전달 포켓',
      'AI 아웃도어 건조: 고급 가죽, 캐시미어, 등산복 등 섬세 기능 아웃도어 의류 기공 복원 케어'
    ],
    specs: [
      { label: '의류 수용량', value: '상의 5벌 + 하의 5벌 대용량 구성형' },
      { label: '내부 위생 관리', value: '스마트 자가 열풍 열세척 웰빙 건조 내부 케어' },
      { label: '필터 등급', value: '미세먼지 집진 디럭스 등급 청정 필터 탑재' },
      { label: '물보충 배수탱크 용량', value: '물보충 및 배수 각 1.5L 독립 밀폐형' }
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    title: '현재 살고 계신 곳의 가구 형태를 알려주세요',
    subtitle: '가장 적합한 가전의 용량과 맞춤 기능을 분석하는 첫 걸음입니다.',
    options: [
      { id: 'opt-single', label: '1인 가구 • 싱글 라이프', description: '공간 활용도가 높은 스마트하고 미니멀한 가전 위주로 필요해요.', tagValue: 'single' },
      { id: 'opt-couple', label: '신혼 가구 및 부부 부부', description: '모던한 신혼 인테리어와 다양한 맞춤 케어가 가능한 제품들을 선호해요.', tagValue: 'newlyweds' },
      { id: 'opt-family', label: '패밀리 하우스 가구', description: '대용량이 필수적이며 어린 자녀나 가족을 위한 위생 중심 가전이 필요해요.', tagValue: 'chef' }
    ]
  },
  {
    id: 2,
    title: '일상에서 가장 최우선으로 중요하게 다뤄졌으면 하는 가치는 무엇인가요?',
    subtitle: '사용자의 라이프스타일에 정확히 부합하는 스마트 시퀀스를 제안합니다.',
    options: [
      { id: 'opt-smart', label: '첨단 기술 연동과 편리함', description: '스마트폰 어플 하나로 모든 자사 가전을 자동 제어하는 미래형 집을 원해요.', tagValue: 'smart-home' },
      { id: 'opt-pet', label: '반려동물의 쾌적함과 청결', description: '반려동물의 미세 털 및 알레르기 물질 제거와 자동 쾌적 제어가 중요해요.', tagValue: 'pet' },
      { id: 'opt-chef', label: '요리와 홈다이닝 미식', description: '요리에 전문적이며 다채로운 요리 레시피 및 미식 생활에 보탬이 되고 싶어요.', tagValue: 'chef' }
    ]
  },
  {
    id: 3,
    title: '가장 해결하고 싶거나 혁신하고 싶은 집안 가사 영역은 인가요?',
    subtitle: '일상을 완벽히 바꾸어줄 고품격 홈 솔루션 제품군을 타게팅합니다.',
    options: [
      { id: 'opt-wash', label: '세탁건조 가사노동의 최소화', description: '세탁부터 빨래 널기, 건조까지의 과정이 항상 너무 귀찮고 힘듭니다.', tagValue: 'single' },
      { id: 'opt-clean', label: '언제나 빛나는 바닥과 위생 케어', description: '하루라도 청소기를 안 돌리면 바닥에 밟히는 집안 먼지가 스트레스입니다.', tagValue: 'pet' },
      { id: 'opt-cook', label: '신선한 영양 관리와 스마트 다이닝', description: '냉장고 속 식재료 관리와 신선한 식탁 구성이 항상 복잡하게 느껴집니다.', tagValue: 'chef' }
    ]
  }
];
