import "./Footer.scss";
import { useStyle } from "../../hooks/useStyle";

export default function Footer() {
  const { isDark } = useStyle();
  return (
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        </p>
      </div>
  );
}
