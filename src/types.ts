export interface Product {
  id: string;
  name: string;
  category: 'kitchen' | 'living' | 'air' | 'cleaning';
  categoryLabel: string;
  description: string;
  price: number;
  energyRating: number; // 1등급 ~ 5등급
  powerConsumption: string; // e.g. "35.2 kWh/월"
  specs: { label: string; value: string }[];
  features: string[];
  lifestyleTags: string[];
  imageUrl: string; 
  iconName: string;
  hasSpecialBadge?: string;
}

export interface QuizQuestion {
  id: number;
  title: string;
  subtitle: string;
  options: {
    id: string;
    label: string;
    description: string;
    tagValue: string; // matching lifestyle tag
  }[];
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: Record<number, string>; // questionId -> optionId
}
