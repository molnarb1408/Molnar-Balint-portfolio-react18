import { Fade } from "react-awesome-reveal";
import { illustration, contactInfo } from "../portfolio.tsx";
import { useStyle } from "../hooks/useStyle.tsx";
import SocialMedia from "../components/SocialMedia.tsx";
import email from "../assets/lottie/email.json";
import DisplayLottie from "../components/DisplayLottie.tsx";

export default function Contact() {
  const { isDark } = useStyle();
  return (
    <Fade direction="up" duration={800} triggerOnce>
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man Working"
                src={new URL("../../assets/images/placeholder.webp", import.meta.url).href}
              />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
