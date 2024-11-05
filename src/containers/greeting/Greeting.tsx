import "./Greeting.scss";
import { Fade } from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import landingPerson from "../../assets/lottie/landingPerson.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie.tsx";
import SocialMedia from "../../components/socialMedia/SocialMedia.tsx";
import Button from "../../components/button/Button.tsx";
import { illustration, greeting } from "../../portfolio.tsx";
import { useStyle } from "../../contexts/StyleContext.tsx";
import CV_hu from './CV_molnarB_HU.pdf';
import CV_en from './CV_molnarB_EN.pdf';

export default function Greeting() {
  const { isDark } = useStyle();

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade direction="up" duration={2000} triggerOnce>
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="elérhetőségem" href="#contact" className={undefined} newTab={undefined} isDownload={undefined} downloadFile={undefined} />
                {greeting.resumeLink && (
                  <Button
                    text="Önéletrajz HU"
                    href={CV_hu}
                    isDownload
                    downloadFile="CV_molnarB_HU.pdf" className={undefined} newTab={undefined} />
                )}
                {greeting.resumeLink && (
                  <Button
                    text="Önéletrajz EN"
                    href={CV_en}
                    isDownload
                    downloadFile="CV_molnarB_EN.pdf" className={undefined} newTab={undefined} />
                )}
              </div>
            </div>
          </div>
          <Fade direction="right" duration={3000} triggerOnce>
            <div className="greeting-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={landingPerson} />
              ) : (
                <img
                  alt="placeholder"
                  src="../../assets/images/placeholder.webp"
                ></img>
              )}
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
}
