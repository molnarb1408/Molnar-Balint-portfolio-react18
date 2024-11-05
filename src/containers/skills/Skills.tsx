import "./Skills.scss";
import { Fade } from "react-awesome-reveal";
import { illustration, skillsSection } from "../../portfolio.tsx";
import { useStyle } from "../../contexts/StyleContext.tsx";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill.tsx";
import codingPerson from "../../assets/lottie/codingPerson.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie.tsx";


export default function Skills() {
  const { isDark } = useStyle();
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade direction="left" duration={1000} triggerOnce>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="placeholder"
                src={require("../../assets/images/placeholder.webp")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade direction="right" duration={1000} triggerOnce>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
