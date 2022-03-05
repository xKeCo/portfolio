import Image from "next/image";

// Local Components
import Nav from "components/Nav";

// Images
import Imagen from "../public/fotoPerfil1.png";
import Imagen2 from "../public/fotoPerfil3.png";
import Imagen3 from "../public/fotoPerfil2.jpeg";

// Styles
import s from "../styles/About.module.css";
function about() {
  return (
    <>
      <Nav />
      {/*About section  */}
      <div className={s.aboutContainer}>
        <div className={s.aboutContainer__imageContainer}>
          <Image
            className={s.aboutContainer__imageContainer__image1}
            src={Imagen}
            width={220}
            height={320}
            alt="Imagen 1"
            priority
            placeholder="blur"
          />
          <Image
            className={s.aboutContainer__imageContainer__image2}
            src={Imagen2}
            width={400}
            height={470}
            alt="Imagen 2"
            priority
            placeholder="blur"
          />
          <Image
            className={s.aboutContainer__imageContainer__image3}
            src={Imagen3}
            width={250}
            height={260}
            alt="Imagen 3"
            priority
            placeholder="blur"
          />
        </div>
        <h1 className={s.aboutContainer__h1}>
          Hi Again, I&apos;m Kevin Collazos.
        </h1>

        <p className={s.aboutContainer__p}>
          I am a frontend developer living in New York 🗽. I am currently
          enjoying the process of working as a freelancer for different people,
          communities and companies around the world.
        </p>
        <p className={s.aboutContainer__p}>
          As a developer, I enjoy being able to create experiences and tools
          that allow people to not only work efficiently, but also carve out a
          place in the digital world. I love the concept of entering and feeling
          that in this digital world each of the ideas that our mind proposes
          can be captured and made a reality.
        </p>
        <p className={s.aboutContainer__p}>
          Outside of development, I love spending time with my family and
          friends doing different types of activities. Also I love doing high
          intensity sports like CrossFit and Swimming and of course as a good
          athlete... I love food, all kinds of food in general but in my
          opinion... Latin food is the best, especially colombian food haha. 🇨🇴
        </p>
      </div>
    </>
  );
}

export default about;
