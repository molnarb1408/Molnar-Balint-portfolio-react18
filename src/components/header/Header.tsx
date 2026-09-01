import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.tsx";
import { useHeadroom } from "../../hooks/useHeadroom";
import { useStyle } from "../../hooks/useStyle";
import { greeting, workExperiences, skillsSection, openSource, achievementSection, resumeSection } from "../../portfolio.tsx";

function Header() {
  const visible = useHeadroom(50); // 50px után kezd reagálni
  const { isDark } = useStyle();
  const viewExperience: boolean = workExperiences.display;
  const viewOpenSource: boolean = openSource.display;
  const viewSkills: boolean = skillsSection.display;
  const viewAchievement: boolean = achievementSection.display;
  const viewResume: boolean = resumeSection.display;

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Képességeim</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Munka Tapasztalat</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Eredmények</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">Önéletrajz</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Github</a>
            </li>
          )}
          <li>
            <a href="#contact">Elérhetőségem</a>
          </li>
          <li>
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
export default Header;
