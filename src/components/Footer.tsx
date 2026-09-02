import { useStyle } from "../hooks/useStyle";

export default function Footer() {
  const { isDark } = useStyle();
  const year = new Date().getFullYear();

  return (
    <div className="footer-div">
      <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        © {year} Molnár Bálint – Minden jog fenntartva.
      </p>
    </div>
  );
}