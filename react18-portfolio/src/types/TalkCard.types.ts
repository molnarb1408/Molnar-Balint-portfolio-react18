export interface TalkDetailsType {
    isDark: boolean;
    title: string;
    subtitle: string;
    slides_url: string;
    event_url: string;
}

export interface TalkCardProps {
    talkDetails: TalkDetailsType;
}
