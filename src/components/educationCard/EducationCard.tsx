import "./EducationCard.scss";
import { Fade, Slide } from "react-awesome-reveal";
import { useStyle } from "../../contexts/StyleContext";
import { useRef } from "react";
import { EducationCardProps } from "../../types/EducationCard.types";

export default function EducationCard({ school }: EducationCardProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const { isDark } = useStyle();

  const GetDescBullets = ({ descBullets }: { descBullets?: string[] }) => (
    <>
      {descBullets &&
        descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))}
    </>
  );

  if (!school.logo) {
    console.error(`Image of ${school.schoolName} is missing in education section`);
  }

  return (
    <div>
      <Fade direction="left" duration={1000} className="education-card" triggerOnce>
        <div className="education-card">
          {school.logo && (
            <div className="education-card-left">
              <img
                crossOrigin="anonymous"
                ref={imgRef}
                className="education-roundedimg"
                src={school.logo}
                alt={school.schoolName}
              />
            </div>
          )}
          <div className="education-card-right">
            <h5 className="education-text-school">{school.schoolName}</h5>
            <div className="education-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {school.subHeader}
              </h5>
              <p className={`${isDark ? "dark-mode" : ""} education-text-duration`}>
                {school.duration}
              </p>
              <p className="education-text-desc">{school.desc}</p>
              <div className="education-text-bullets">
                <ul>
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <Slide direction="left" duration={2000} delay={1000} triggerOnce className="education-card-border">
        <div></div>
      </Slide>
    </div>
  );
}
