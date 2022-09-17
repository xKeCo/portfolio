// Local Components
import Footer from "components/Footer/Footer";
import Nav from "components/Nav/Nav";

// Images

// Styles
import s from "../styles/About.module.css";
function about() {
  return (
    <>
      <Nav />
      {/*About section  */}
      <div className={s.massiveAboutContainer1}>
        <div className={s.aboutContainer1}>
          <h1 className={s.aboutContainer1__title}>
            Hi again, I&apos;m Kevin Collazos. I am Jr Frontend Developer with a
            passion for creating beautiful and intuitive experiences. Waiting
            for a new challenge.
          </h1>
          <img
            className={s.about2__image}
            src="/aboutImage.JPG"
            alt="Imagen"
            width="40%"
          />
        </div>
        <div className={s.moreAbout}>
          <p className={s.aboutContainer__p}>
            As a developer, I enjoy being able to create experiences and tools
            that allow people to not only work efficiently, but also carve out a
            place in the digital world. I love the concept of entering and
            feeling that in this digital world each of the ideas that our mind
            proposes can be captured and made a reality.
          </p>
          <p className={s.aboutContainer__p}>
            Outside of development, I love spending time with my family and
            friends doing different types of activities. Also I love doing high
            intensity sports like CrossFit and Swimming and of course as a good
            athlete... I love food, all kinds of food in general but in my
            opinion... Latin food is the best, especially colombian food haha.
            Sorry not sorry.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default about;
