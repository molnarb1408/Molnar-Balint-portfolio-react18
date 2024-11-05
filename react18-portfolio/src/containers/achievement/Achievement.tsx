import "./Achievement.scss";
import { Fade } from "react-awesome-reveal";
import { achievementSection } from "../../portfolio.tsx";
import { useStyle } from "../../contexts/StyleContext.tsx";
import AchievementCard from "../../components/achievementCard/AchievementCard.tsx";

export default function Achievement() {
  const { isDark } = useStyle();
  if (!achievementSection.display) {
    return null;
  }
  return (
    <Fade direction="up" duration={800} triggerOnce>
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {achievementSection.achievementsCards.map((card, i) => {
              return (
                <AchievementCard
                  key={i}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
