import s from "./styles/Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={s.footer}>
        <div className={s.contact__container}>
          <h1 className={s.contact__title}>Let's work together</h1>

          <hr />
          <div className={s.contact}>
            <div className={s.personal}>
              <div className={s.personal__item}>
                <a>kevcollazos@gmail.com</a>
              </div>
              <div className={s.personal__item}>
                <a>+1 908 404 8220</a>
              </div>
            </div>

            <div className={s.social}>
              <div className={s.social__item}>
                <a>Twitter</a>
              </div>
              <div className={s.social__item}>
                <a>Instagram</a>
              </div>
              <div className={s.social__item}>
                <a>GitHub</a>
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
