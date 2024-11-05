import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie.tsx";
import {greeting, splashScreen} from "../../portfolio.tsx";
import { useStyle } from "../../contexts/StyleContext.tsx";

export default function SplashScreen() {
  const { isDark } = useStyle();
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-title-container">
        <span className="grey-color"> &lt;</span>
        <span className="splash-title">{greeting.username}</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  );
}
