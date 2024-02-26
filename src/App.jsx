import { useState, useEffect } from "react";
import "./App.css";

/* images */

/* nav images */
import LogoImg from "./assets/images/logo.svg";
import MenuImg from "./assets/images/icon-hamburger.svg";

/* header images */
import HeaderImgDesktop from "./assets/images/desktop/image-header.jpg";
import HeaderImgMobile from "./assets/images/mobile/image-header.jpg";
import HeaderArrowDown from "./assets/images/icon-arrow-down.svg";

/* service images */
import TransformDesktop from "./assets/images/desktop/image-transform.jpg";
import StandOutDesktop from "./assets/images/desktop/image-stand-out.jpg";
import GraphicDesignDesktop from "./assets/images/desktop/image-graphic-design.jpg";
import PhotographyDesktop from "./assets/images/desktop/image-photography.jpg";
import TransformMobile from "./assets/images/mobile/image-transform.jpg";
import StandOutMobile from "./assets/images/mobile/image-stand-out.jpg";
import GraphicDesignMobile from "./assets/images/mobile/image-graphic-design.jpg";
import PhotographyMobile from "./assets/images/mobile/image-photography.jpg";

/* testimonials/projects images */
import ImageEmily from "./assets/images/image-emily.jpg";
import ImageThomas from "./assets/images/image-thomas.jpg";
import ImageJennie from "./assets/images/image-jennie.jpg";

/* gallery */
import GalleryMilkDesktop from "./assets/images/desktop/image-gallery-milkbottles.jpg";
import GalleryOrangeDesktop from "./assets/images/desktop/image-gallery-orange.jpg";
import GalleryConeDesktop from "./assets/images/desktop/image-gallery-cone.jpg";
import GallerySugarDesktop from "./assets/images/desktop/image-gallery-sugarcubes.jpg";
import GalleryMilkMobile from "./assets/images/mobile/image-gallery-milkbottles.jpg";
import GalleryOrangeMobile from "./assets/images/mobile/image-gallery-orange.jpg";
import GalleryConeMobile from "./assets/images/mobile/image-gallery-cone.jpg";
import GallerySugarMobile from "./assets/images/mobile/image-gallery-sugar-cubes.jpg";

/* social icons */
import IconFacebook from "./assets/images/icon-facebook.svg";
import IconInstagram from "./assets/images/icon-instagram.svg";
import IconTwitter from "./assets/images/icon-twitter.svg";
import IconPinterest from "./assets/images/icon-pinterest.svg";

function App() {
  const [menuState, setMenuState] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const mobileBreakpoint = 800;

  useEffect(() => {
    const resizeWindow = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeWindow);

    // clean up
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  const handleMenuClick = () => {
    setMenuState(!menuState);
  };

  const createNavItems = (footer, modal) => {
    return (
      <div
        className={
          "nav-items-container" +
          (footer ? " footer-container" : "") +
          (modal ? " modal-container" : "")
        }
      >
        <a
          className={"nav-item" + (footer ? " footer-text" : "")}
          href="#hero"
          onClick={() => setMenuState(false)}
        >
          About
        </a>
        <a
          className={"nav-item" + (footer ? " footer-text" : "")}
          href="#services"
          onClick={() => setMenuState(false)}
        >
          Services
        </a>
        <a
          className={"nav-item" + (footer ? " footer-text" : "")}
          href="#projects"
          onClick={() => setMenuState(false)}
        >
          Projects
        </a>
        {footer ? null : (
          <button
            className={
              "contact-button" + (modal ? " modal-contact-button" : "")
            }
            onClick={() => setMenuState(false)}
          >
            contact
          </button>
        )}
      </div>
    );
  };

  return (
    <>
      <nav>
        <img className="logo-img" src={LogoImg} alt="logo img"></img>
        {windowWidth <= mobileBreakpoint ? (
          <img
            className="mobile-menu-icon"
            src={MenuImg}
            alt="menu icon"
            onClick={handleMenuClick}
          ></img>
        ) : (
          createNavItems(false)
        )}
      </nav>
      {menuState && windowWidth <= mobileBreakpoint ? (
        <div className="mobile-menu-modal">
          <div className="triangle"></div>
          {createNavItems(false, true)}
        </div>
      ) : null}
      <header id="hero">
        <img
          className="header-img"
          src={
            windowWidth > mobileBreakpoint ? HeaderImgDesktop : HeaderImgMobile
          }
          alt="header img"
        ></img>
        <div className="header-content-container">
          <h1>we are creatives</h1>
          <img
            className="header-arrow-down"
            src={HeaderArrowDown}
            alt="header arrow down"
          ></img>
        </div>
      </header>
      <main>
        <section id="services">
          <div className="service-container flex-reverse">
            <div className="service-content">
              <h2>Transform your brand</h2>
              <p className="service-text">
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>
              <div className="service-link-container">
                <a className="service-link">learn more</a>
                <div className="service-link-line transform-color"></div>
              </div>
            </div>
            <img
              className="service-img"
              src={
                windowWidth > mobileBreakpoint
                  ? TransformDesktop
                  : TransformMobile
              }
              alt="transform img"
            ></img>
          </div>
          <div className="service-container">
            <img
              className="service-img"
              src={
                windowWidth > mobileBreakpoint
                  ? StandOutDesktop
                  : StandOutMobile
              }
              alt="transform img"
            ></img>
            <div className="service-content">
              <h2>Stand out to the right audience</h2>
              <p className="service-text">
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we’ll build and
                extend your brand in digital places.
              </p>
              <div className="service-link-container">
                <a className="service-link">learn more</a>
                <div className="service-link-line stand-out-color"></div>
              </div>
            </div>
          </div>
          <div className="service-container">
            <div className="service-content-with-img">
              <img
                className="service-img overlay-img"
                src={
                  windowWidth > mobileBreakpoint
                    ? GraphicDesignDesktop
                    : GraphicDesignMobile
                }
                alt="graphic design img"
              ></img>
              <div className="service-overlay-text-container">
                <h2 className="graphic-design-text">Graphic Design</h2>
                <p className="graphic-design-text">
                  Great design makes you memorable. We deliver artwork that
                  underscores your brand message and captures potential clients’
                  attention.
                </p>
              </div>
            </div>
            <div className="service-content-with-img">
              <img
                className="service-img overlay-img"
                src={
                  windowWidth > mobileBreakpoint
                    ? PhotographyDesktop
                    : PhotographyMobile
                }
                alt="graphic design img"
              ></img>
              <div className="service-overlay-text-container">
                <h2 className="photography-text">Photography</h2>
                <p className="photography-text">
                  Increase your credibility by getting the most stunning,
                  high-quality photos that improve your business image.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <h3>client testimonials</h3>
          <div className="client-testimonials-container">
            <div className="client-testimonial">
              <img
                className="client-img"
                src={ImageEmily}
                alt="emily img"
              ></img>
              <p>
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
              <div className="client-name-title-container">
                <div className="client-name">Emily R.</div>
                <div className="client-title">Marketing Director</div>
              </div>
            </div>
            <div className="client-testimonial">
              <img
                className="client-img"
                src={ImageThomas}
                alt="thomas img"
              ></img>
              <p>
                Sunnyside’s enthusiasm coupled with their keen interest in our
                brand’s success made it a satisfying and enjoyable experience.
              </p>
              <div className="client-name-title-container">
                <div className="client-name">Thomas S.</div>
                <div className="client-title">Client Operating Officer</div>
              </div>
            </div>
            <div className="client-testimonial">
              <img
                className="client-img"
                src={ImageJennie}
                alt="jennie img"
              ></img>
              <p>
                {" "}
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </p>
              <div className="client-name-title-container">
                <div className="client-name">Jennie F.</div>
                <div className="client-title">Business Owner</div>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery">
          <img
            className="gallery-img"
            src={
              windowWidth > mobileBreakpoint
                ? GalleryMilkDesktop
                : GalleryMilkMobile
            }
            alt="gallery milk img"
          ></img>
          <img
            className="gallery-img"
            src={
              windowWidth > mobileBreakpoint
                ? GalleryOrangeDesktop
                : GalleryOrangeMobile
            }
            alt="gallery orange img"
          ></img>
          <img
            className="gallery-img"
            src={
              windowWidth > mobileBreakpoint
                ? GalleryConeDesktop
                : GalleryConeMobile
            }
            alt="gallery cone img"
          ></img>
          <img
            className="gallery-img"
            src={
              windowWidth > mobileBreakpoint
                ? GallerySugarDesktop
                : GallerySugarMobile
            }
            alt="gallery sugar cubes img"
          ></img>
        </section>
      </main>
      <footer>
        <img
          className="logo-img logo-footer"
          src={LogoImg}
          alt="logo img footer"
        ></img>
        {createNavItems(true)}
        <div className="socials-container">
          <img
            className="social-icon"
            src={IconFacebook}
            alt="facebook icon"
          ></img>
          <img
            className="social-icon"
            src={IconInstagram}
            alt="instagram icon"
          ></img>
          <img
            className="social-icon"
            src={IconTwitter}
            alt="twitter icon"
          ></img>
          <img
            className="social-icon"
            src={IconPinterest}
            alt="pinterest icon"
          ></img>
        </div>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/exchyphen" target="_blank">
            exc
          </a>
          .
        </div>
      </footer>
    </>
  );
}

export default App;
