import type { NextPage } from "next";
import Image from "next/image";

// Local Components
import Nav from "components/Nav/Nav";
import ProjectsCard from "components/ProjectsCard/ProjectsCard";

// Button Arrow Image
import more from "/public/more.png";

// Styles
import s from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <div className={s.container}>
        <main className={s.main}>
          <section className={s.hero}>
            <div className={s.hero__intro}>
              <Link href="/about" passHref>
                <h1 className={s.hero__intro__h1}>XXXXXX</h1>
              </Link>
            </div>
            <div className={s.hero__intro__image}>
              {/* <img src="/foto.png" alt="" width="100%" /> */}
            </div>
            <div className={s.hero__intro__dev}>
              <div className={s.hero__intro__dev__imageContainer}>
                <img src="/arrow.svg" alt="arrow" width="100%" />
              </div>
              <h1 className={s.hero__intro__dev__h1}>XXXXXX</h1>
            </div>
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
          </section>

          <p className={s.aboutMe__title}>02 - A Lil bit About me</p>

          <section className={s.aboutMe}>
            <div className={s.aboutMe__hobbies__title}>
              <h1 className={s.aboutMe__h1}>CrossFit,</h1>
              <h1 className={s.aboutMe__h1}>Gaming,</h1>
              <h1 className={s.aboutMe__h1}>Music.</h1>
            </div>

            <div className={s.aboutMe__hobbies__details}>
              <p className={s.aboutMe__hobbies__details__text}>
                I currently reside in Cali, Colombia. My hobbies occupy a good
                part of my leisure time, especially training sports such as
                swimming and CrossFit. I also play games like Call of Duty,
                League of Legends and FIFA.
              </p>
              <div className={s.aboutMe__hobbies__details__line}>
                <Link href="/about" passHref>
                  <p className={s.aboutMe__hobbies__details__link}>
                    More about me
                  </p>
                </Link>
              </div>
              {/* <Link href="/about" passHref>
                <div className={`${s.custom__button}`}>
                  <div className={s.custom__button_text}>More about me</div>
                  <Image src={more} width={20} height={20} alt="Arrow" />
                </div>
              </Link> */}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
