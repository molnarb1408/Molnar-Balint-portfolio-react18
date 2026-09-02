import { useState, useEffect, useMemo } from "react";
import Header from "../components/Header.tsx";
import Greeting from "./Greeting.tsx";
import Skills from "./Skills.tsx";
import StackProgress from "./skillProgress.tsx";
import WorkExperience from "./WorkExperience.tsx";
import Projects from "./Projects.tsx";
import StartupProject from "./StartupProject.tsx";
import Achievement from "./Achievement.tsx";
import Footer from "../components/Footer.tsx";
import Education from "./Education.tsx";
import ScrollToTopButton from "./Top.tsx";
import Profile from "./Profile.tsx";
import SplashScreen from "./SplashScreen.tsx";
import { splashScreen } from "../portfolio.tsx";
import { StyleProvider } from "../contexts/StyleProvider.tsx";
import { useLocalStorage } from "../hooks/useLocalStorage.tsx";

const Main = () => {
  const darkPref = useMemo(() => window.matchMedia("(prefers-color-scheme: dark)"), []);
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : undefined}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            <StackProgress />
            <Education />
            <WorkExperience />
            <StartupProject />
            <Achievement />
            <Projects />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
