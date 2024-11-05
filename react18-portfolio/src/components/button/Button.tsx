import "./Button.scss";
import { ButtonProps } from "./Button.types";

export default function Button({
  text,
  className = "",
  href = "#",
  newTab = false,
  isDownload = false,
  downloadFile
}: ButtonProps) {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : undefined}
        download={isDownload ? downloadFile : undefined}
      >
        {text}
      </a>
    </div>
  );
}
