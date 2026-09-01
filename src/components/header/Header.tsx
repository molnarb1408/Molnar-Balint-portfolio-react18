import "./Header.scss";
import Headroom from "react-headroom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.tsx";
import { useStyle } from "../../contexts/StyleContext";
import { greeting, workExperiences, skillsSection, openSource, achievementSection, resumeSection } from "../../portfolio.tsx";

// CJS/ESM interop workaround Vite 8 alatt:
const HeadroomComponent = (Headroom as unknown as { default?: typeof Headroom }).default ?? Headroom;

function Header() {
  const { isDark } = useStyle();
  const viewExperience: boolean = workExperiences.display;
  const viewOpenSource: boolean = openSource.display;
  const viewSkills: boolean = skillsSection.display;
  const viewAchievement: boolean = achievementSection.display;
  const viewResume: boolean = resumeSection.display;

  return (
    <HeadroomComponent>
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
    </HeadroomComponent>
  );
}
export default Header;
