import { useStyle } from "../../contexts/StyleContext";
import "./AchievementCard.scss";
import { AchievementCardProps } from "../../types/AchievementCard.types";

export default function AchievementCard({ cardInfo }: AchievementCardProps) {
  const { isDark } = useStyle();

  function openUrlInNewTab(url?: string, name?: string) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    const win = window.open(url, "_blank");
    win?.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        />
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title " : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle " : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => (
          <span
            key={i}
            className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
            onClick={() => openUrlInNewTab(v.url, v.name)}
          >
            {v.name}
          </span>
        ))}
      </div>
    </div>
  );
}
