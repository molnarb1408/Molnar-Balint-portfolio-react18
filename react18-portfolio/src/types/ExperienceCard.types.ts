export interface CardInfo {
    company: string;
    companylogo: string;
    role: string;
    date: string;
    desc: string;
    descBullets?: string[];
  }
  
  export interface ExperienceCardProps {
    cardInfo: CardInfo;
    backgroundColor?: number[]; 
  }
  