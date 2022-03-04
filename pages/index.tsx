import Nav from "components/Nav";
import ProjectsCard from "components/ProjectsCard";
import SEO from "components/SEO";
import type { NextPage } from "next";
import s from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Nav />
      <div className={s.container}>
        <main className={s.main}>
          <section className={s.intro}>
            <h1 className={s.intro__h1}>
              Hi, I&apos;m {""}
              <span className={s.intro__line__through}>
                <b>Kevin Collazos,</b>
              </span>{" "}
              a.k.a
              <b> xKeCo.</b>
            </h1>
            <h3 className={s.intro__h3}>
              I&apos;m a <b>Frontend Developer</b>
            </h3>
          </section>
          <section className={s.projectsSection} id="projects">
            <ProjectsCard
              link="https://www.borealclinicadental.com"
              title="Boreal Dental Clinic"
              description="Official website for Boreal Dental Clinic."
              ubi="Cali, Colombia. 🇨🇴"
              image={{
                src: "/Proyecto1.png",
                width: 640,
                height: 540,
              }}
              alt="Proyecto1"
            />
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
