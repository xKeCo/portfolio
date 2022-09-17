import Link from "next/link";

// Styles
import s from "./styles/Nav.module.css";

function Nav() {
  return (
    <header className={s.header}>
      <div className={s.navcontainer}>
        <div className={s.navcontainer__code}>
          <Link href="/">
            <p className={s.codeBy}>Code by Kevin Collazos</p>
          </Link>
        </div>
        <div className={s.navcontainer__projects__link}>
          <Link href="/#projects" passHref>
            <div className={s.nav__item}>
              <p>Projects</p>
            </div>
          </Link>
          <Link href="/about2" passHref>
            <div className={s.nav__item}>
              <p>About</p>
            </div>
          </Link>
          <Link href="/#contact" passHref>
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
