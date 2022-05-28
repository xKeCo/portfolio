import type { NextPage } from "next";
import Image from "next/image";

// Local Components
import Nav from "components/Nav";
import ProjectsCard from "components/ProjectsCard";

// Button Arrow Image
import more from "/public/more.png";

// Styles
import s from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <div className={s.container}>
        <main className={s.main}>
          <section className={s.hero}>
            <div className={s.hero__intro}>
              <h1 className={s.hero__intro__h1}>
                I&apos;m{" "}
                <Link href="/about" passHref>
                  <span className={s.hero__intro__line__through}>
                    Kevin Collazos
                  </span>
                </Link>
              </h1>
              <a
                href="https://drive.google.com/u/0/uc?id=1RM6pUAdYK_JnnjToKWvM_weWYhZbr9XO&export=download"
                download="Resume"
                target="_blank"
                rel="noopener noreferrer"
                className={s.hero__intro__button__resume}
              >
                Download CV
              </a>
            </div>
            <div className={s.hero__intro__image}>
              <img src="/Rectangle.png" alt="" width="100%" />
            </div>
            <div className={s.hero__intro__dev}>
              <div className={s.hero__intro__dev__imageContainer}>
                <img src="/arrow.svg" alt="arrow" width="100%" />
              </div>
              <h1 className={s.hero__intro__dev__h1}>Frontend Developer</h1>
            </div>
          </section>
          <div id="projects" />
          <section className={s.projectsSection}>
            <p className={s.projectsSection__title}>01 - Not my Projects</p>
            <ProjectsCard
              linkPage="https://fitjoe.vercel.app/"
              title="FitJoe Clothing"
              description="Official Product Portfolio Concept for Fitjoe Clothing."
              adi="Next.js | TypeScript | GraphCMS | GraphQL | NextUI "
              src="/imgProjects/fitjoe.png"
              alt="fitjoe-image"
            />
            <ProjectsCard
              linkPage="https://www.borealclinicadental.com"
              title="Boreal Dental Clinic"
              description="Official website for Boreal Dental Clinic. Cali, Colombia. 🇨🇴"
              adi="Next.js | Firebase | NextUI | MaterialUI | Typed.js"
              src="/imgProjects/boreal.png"
              alt="Boreal-image"
            />
            <ProjectsCard
              linkPage="https://interactive-map-eight.vercel.app/"
              linkGithub="https://github.com/xKeCo/interactive-map"
              title="Parqueventos"
              description="Functional prototype that allows the registration and visualization of the different events available in the city of Cali, Colombia. (Optimized web view only)."
              adi="Next.js | Firebase | NextUI | Material-UI | Mapbox | React Hot Toast"
              src="/imgProjects/map.png"
              alt="interactiveMap-image"
            />
            <ProjectsCard
              linkPage="https://sinapsis-uao.vercel.app/"
              linkGithub="https://www.github.com/xKeCo/sinapsis-uao"
              title="Sinapsis UAO"
              description="Functional prototype for the Faculty of Entrepreneurship of the Universidad Autónoma de Occidente."
              adi="React.js  | Firebase | Material-UI | Bootstrap"
              src="/imgProjects/sinapsis.png"
              alt="sinapsis-image"
            />
            <ProjectsCard
              linkPage="https://simon-says-eta.vercel.app/"
              linkGithub="https://github.com/xKeCo/Simon-Says-Game"
              title="Simon Says Game"
              description="This is an implementation of the famous color sequence memory game called Simon Says."
              adi="HTML | CSS | JavaScript"
              src="/imgProjects/simonsays.png"
              alt="simonsays-image"
            />
            <a
              href="https://www.github.com/xKeCo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={s.projectsSection__container__details__button}>
                <div
                  className={s.projectsSection__container__details__button_text}
                >
                  More Projects
                </div>
                <Image src={more} width={20} height={20} alt="Arrow" />
              </div>
            </a>
            <Link href="/about" passHref>
              <div
                className={`${s.projectsSection__container__details__button} ${s.final_button}`}
              >
                <div
                  className={s.projectsSection__container__details__button_text}
                >
                  About me
                </div>
                <Image src={more} width={20} height={20} alt="Arrow" />
              </div>
            </Link>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
