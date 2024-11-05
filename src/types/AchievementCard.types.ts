export interface CardInfo {
    image: string;
    imageAlt?: string;
    title: string;
    description: string;
    footer: { name: string; url?: string }[];
  }
  
  export interface AchievementCardProps {
    cardInfo: CardInfo;
  }
  