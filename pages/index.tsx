import Nav from "components/Nav";
import SEO from "components/SEO";
import type { NextPage } from "next";
import Image from "next/image";
import s from "../styles/Home.module.css";
import construction from "/public/construction.png";

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Nav />
      <div className={s.container}>
        <main className={s.main}>
          {/* <Image src={construction} width={500} height={500} />
          <h1>Page under construction. Coming soon...</h1> */}

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
        </main>
      </div>
    </>
  );
};

export default Home;
