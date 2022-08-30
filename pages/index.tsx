import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import Image from "next/image";

// Local Components
import Nav from "components/Nav/Nav";
import ProjectsCard from "components/ProjectsCard/ProjectsCard";

// Framer Motion
import { motion, useInView } from "framer-motion";

// Button Arrow Image
import more from "/public/more.png";

// Styles
import s from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "components/Footer/Footer";
import AnimatedLetters from "components/AnimatedLetters/AnimatedLetters";

const Home: NextPage = () => {
  const homeVariant = {
    hidden: { opacity: 0, y: 35, transition: { duration: 0 } },
    visible: { opacity: 1, y: 0 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <>
      <Nav />
      <div className={s.container}>
        <main className={s.main}>
          <section className={s.hero}>
            <div className={s.hero__intro}>
              <AnimatedLetters title="Kevin&nbsp;Collazos" />
              {/* <img
                className={s.image__hero}
                src="/feliz.svg"
                alt="feliz"
                width="200px"
                height="250px"
              /> */}
            </div>
            <div className={s.hero__intro__dev}></div>
            <AnimatedLetters title="Frontend&nbsp;Developer" />
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 0.4,
              }}
              className="row-col"
            ></motion.div>
          </section>
          <div id="projects" />

          <section className={s.projectsSection}>
            <p className={s.projectsSection__title}>01 - Projects</p>

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
            <a
              href="https://github.com/xkeco/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={s.projectsSection__container__details__button}>
                <div
                  className={s.projectsSection__container__details__button_text}
                >
                  More Projects ...
                </div>
                {/* <Image src={more} width={20} height={20} alt="Arrow" priority /> */}
              </div>
            </a>
          </section>

          <p className={s.aboutMe__title}>02 - A Lil bit About me</p>

          <section className={s.aboutMe}>
            <div className={s.aboutMe__hobbies__title}>
              <AnimatedLetters title="CrossFit," />
              <AnimatedLetters title="Gaming," />
              <AnimatedLetters title="Music." />
            </div>

            <motion.div
              variants={homeVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 0.4,
              }}
              ref={ref}
              className={s.aboutMe__hobbies__details}
            >
              <p className={s.aboutMe__hobbies__details__text}>
                I currently reside in Cali, Colombia. My hobbies occupy a good
                part of my leisure time, especially training sports such as
                swimming and CrossFit. I also play games like Call of Duty,
                Valorant, League of Legends and FIFA.
              </p>
              <div className={s.aboutMe__hobbies__details__line}>
                <Link href="/about2" passHref>
                  <p className={s.aboutMe__hobbies__details__link}>
                    More about me
                  </p>
                </Link>
              </div>
            </motion.div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
