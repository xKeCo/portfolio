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
            <Link href="/about">
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
            <h3 className={s.intro__h3}>
              I&apos;m a <b>Frontend Developer</b>
            </h3>
          </section>
          <div id="projects" />
          <section className={s.projectsSection}>
            <ProjectsCard
              linkPage="https://www.borealclinicadental.com"
              title="Boreal Dental Clinic"
              description="Official website for Boreal Dental Clinic. Cali, Colombia. 🇨🇴"
              adi="Next.js | Firebase | NextUI | MaterialUI | Typed.js"
              image={{
                src: "/Proyecto1.png",
                width: 640,
                height: 540,
              }}
              alt="Proyecto1"
            />
            <ProjectsCard
              linkPage="https://sinapsis-uao.vercel.app/"
              linkGithub="https://www.github.com/xKeCo/sinapsis-uao"
              title="Sinapsis UAO"
              description="Functional prototype for the Faculty of Entrepreneurship of the Universidad Autónoma de Occidente."
              adi="React.js  | Firebase | Material-UI | Bootstrap"
              image={{
                src: "/Proyecto2.png",
                width: 640,
                height: 540,
              }}
              alt="Proyecto2"
            />
            <ProjectsCard
              linkPage="https://interactive-map-eight.vercel.app/"
              linkGithub="https://github.com/xKeCo/interactive-map"
              title="Parqueventos"
              description="Functional prototype that allows the registration and visualization of the different events available in the city of Cali, Colombia. (Optimized web view only)."
              adi="Next.js | Firebase | NextUI | Material-UI | Mapbox | React Hot Toast"
              image={{
                src: "/Proyecto3.png",
                width: 640,
                height: 540,
              }}
              alt="Proyecto3"
            />
            <ProjectsCard
              linkPage="https://simon-says-eta.vercel.app/"
              linkGithub="https://github.com/xKeCo/Simon-Says-Game"
              title="Simon Says Game"
              description="This is an implementation of the famous color sequence memory game called Simon Says."
              adi="HTML | CSS | JavaScript"
              image={{
                src: "/Proyecto4.png",
                width: 640,
                height: 540,
              }}
              alt="Proyecto4"
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
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
