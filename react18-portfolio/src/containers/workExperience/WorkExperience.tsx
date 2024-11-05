import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.tsx";
import { workExperiences } from "../../portfolio.tsx";
import { Fade } from "react-awesome-reveal";

export default function WorkExperience() {
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade direction="up" duration={800} triggerOnce>
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Munka Tapasztalat</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets,
                      }}
                      backgroundColor={card.backgroundColor}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
