import Image from "next/image";
import Link from "next/link";

// Styles
import s from "./styles/Nav.module.css";

// Images and Svgs
import logo from "/public/1.png";
import twitter from "../public/imgSocialLinks/twitter.svg";
import github from "../public/imgSocialLinks/github.svg";
import instagram from "../public/imgSocialLinks/instagram.svg";
import linkedin from "../public/imgSocialLinks/linkedin.svg";

function Nav() {
  return (
    <header className={s.header}>
      <div className={s.navcontainer}>
        <Link href="/" passHref>
          <div className={s.navcontainer__logo}>
            <Image src={logo} width={35} height={45} alt="Logo" />
          </div>
        </Link>
        <div className={s.navcontainer__social}>
          <Link href="https://twitter.com/kcollazos_">
            <a className={s.navcontainer__social__links} target="_blank">
              <Image src={twitter} width={30} height={30} alt="Twitter" />
            </a>
          </Link>
          <Link href="https://github.com/xKeCo">
            <a className={s.navcontainer__social__links} target="_blank">
              <Image src={github} width={30} height={30} alt="Github" />
            </a>
          </Link>
          <Link href="https://instagram.com/kcollazos_">
            <a className={s.navcontainer__social__links} target="_blank">
              <Image src={instagram} width={30} height={30} alt="Instagram" />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/kevcollazos/">
            <a className={s.navcontainer__social__links} target="_blank">
              <Image src={linkedin} width={30} height={30} alt="Instagram" />
            </a>
          </Link>
        </div>
        <div className={s.navcontainer__projects__link}>
          <Link href="/#projects" passHref>
            <p>Projects</p>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Nav;
