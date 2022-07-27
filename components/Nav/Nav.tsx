import Image from "next/image";
import Link from "next/link";

// Styles
import s from "./styles/Nav.module.css";

// Images and Svgs
import logo from "/public/1.png";
import twitter from "../../public/imgSocialLinks/twitter.svg";
import github from "../../public/imgSocialLinks/github.svg";
import instagram from "../../public/imgSocialLinks/instagram.svg";
import linkedin from "../../public/imgSocialLinks/linkedin.svg";

function Nav() {
  return (
    <header className={s.header}>
      <div className={s.navcontainer}>
        <div className={s.navcontainer__code}>
          <Link href="/">
            <p>Code by Kev</p>
          </Link>
        </div>
        <div className={s.navcontainer__projects__link}>
          <Link href="/#projects" passHref>
            <div className={s.nav__item}>
              <p>Projects</p>
            </div>
          </Link>
          <Link href="/about" passHref>
            <div className={s.nav__item}>
              <p>About</p>
            </div>
          </Link>
          <Link href="/" passHref>
            <div className={s.nav__item}>
              <p>Contact</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Nav;
