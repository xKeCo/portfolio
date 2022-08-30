import s from "./styles/Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={s.footer} id="contact">
        <div className={s.contact__container}>
          <h1 className={s.contact__title}>Let&apos;s work together</h1>

          <hr />
          <div className={s.contact}>
            <div className={s.personal}>
              <div className={s.personal__item}>
                <a
                  href="mailto:kevcollazos@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kevcollazos@gmail.com
                </a>
              </div>
              <div className={s.personal__item}>
                <a>+57 313 641 5647</a>
              </div>
            </div>

            <div className={s.social}>
              <div className={s.social__item}>
                <a
                  href="https://twitter.com/kcollazos_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </div>
              <div className={s.social__item}>
                <a
                  href="https://www.instagram.com/kcollazos_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
              <div className={s.social__item}>
                <a
                  href="https://github.com/xkeco/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={s.extraInfo__container}>
        <div className={s.extraInfo}>
          <div className={s.version}>
            <p className={s.version__title}>VERSION</p>
            <p className={s.version__number}>2022 &copy; Edition</p>
          </div>
          <a
            href="https://drive.google.com/u/0/uc?id=1RM6pUAdYK_JnnjToKWvM_weWYhZbr9XO&export=download"
            download="Resume"
            target="_blank"
            rel="noopener noreferrer"
            className={s.hero__intro__button__resume}
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
