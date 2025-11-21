export enum Category {
  CRAFTS = 'งานฝีมือ',
  AGRICULTURE = 'การเกษตร',
  FOOD = 'อาหารและขนม',
  CONSTRUCTION = 'การก่อสร้าง/ที่อยู่อาศัย',
  CULTURE = 'ศิลปวัฒนธรรม',
  OTHER = 'อื่นๆ'
}

export interface LearningActivity {
  id: string;
  title: string;
  description: string;
  category: Category;
  ownerName: string;
  location: string;
  imageUrl: string;
  contactInfo: string;
  createdAt: number;
}

export interface Technician {
  id: string;
  name: string;
  expertise: string; // e.g., "Plumbing", "Tree Cutting"
  description: string;
  location: string;
  contactInfo: string;
  priceDescription: string; // e.g., "Starting at 300 THB"
  imageUrl: string;
  isVerified?: boolean;
}

export type ViewState = 'HOME' | 'EXPLORE' | 'REGISTER_SELECTION' | 'ADD_LISTING' | 'ADD_TECHNICIAN' | 'ACTIVITY_DETAILS';