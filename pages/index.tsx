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
          <section className={s.intro}>
            <Link href="/about" passHref>
              <h1 className={s.intro__h1}>
                Hi, I&apos;m {""}
                <span className={s.intro__line__through}>Kevin Collazos</span>,
              </h1>
            </Link>
            <h1 className={s.intro__h1}>
              a.k.a{" "}
              <a
                href="https://www.github.com/xKeCo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>xKeCo</b>.
              </a>
            </h1>
            <h2 className={s.intro__h3}>
              I&apos;m a <b>Frontend Developer</b>
            </h2>
            <a
              href="https://drive.google.com/u/0/uc?id=1RM6pUAdYK_JnnjToKWvM_weWYhZbr9XO&export=download"
              download="Resume"
              target="_blank"
              rel="noopener noreferrer"
              className={s.intro__button__resume}
            >
              Download CV
            </a>
          </section>
          <div id="projects" />
          <section className={s.projectsSection}>
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
