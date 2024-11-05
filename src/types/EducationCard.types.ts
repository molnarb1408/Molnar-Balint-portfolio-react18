export interface School {
    logo?: string;
    schoolName: string;
    subHeader: string;
    duration: string;
    desc: string;
    descBullets?: string[];
}

export interface EducationCardProps {
    school: School;
}
