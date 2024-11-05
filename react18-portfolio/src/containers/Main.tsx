import { useState, useEffect } from "react";
import Header from "../components/header/Header.tsx";
import Greeting from "./greeting/Greeting.tsx";
import Skills from "./skills/Skills.tsx";
import StackProgress from "./skillProgress/skillProgress.tsx";
import WorkExperience from "./workExperience/WorkExperience.tsx";
import Projects from "./projects/Projects.tsx";
import StartupProject from "./StartupProjects/StartupProject.tsx";
import Achievement from "./achievement/Achievement.tsx";
import Footer from "../components/footer/Footer.tsx";
import Education from "./education/Education.tsx";
import ScrollToTopButton from "./topbutton/Top.tsx";
import Profile from "./profile/Profile.tsx";
import SplashScreen from "./splashScreen/SplashScreen.tsx";
import { splashScreen } from "../portfolio.tsx";
import { StyleProvider } from "../contexts/StyleContext.tsx";
import { useLocalStorage } from "../hooks/useLocalStorage.tsx";
import "./Main.scss"; //it must load last to make itt work!!!

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
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
