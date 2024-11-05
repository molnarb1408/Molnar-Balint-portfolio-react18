export interface StyleContextType {
  isDark: boolean;
  changeTheme: () => void;
}

export interface StyleProviderProps {
  children: React.ReactNode;
  value: StyleContextType;
}
