import { useEffect, useRef } from "react";
import Image from "next/image";

// Button arrow image
import arrow from "/public/arrow.png";

import { motion, useAnimation, useInView } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// Styles
import s from "./styles/ProjectsCard.module.css";

type ProjectsCardProps = {
  linkPage?: string;
  linkGithub?: string;
  title: string;
  description: string;
  src: string;
  adi?: string;
  alt: string;
};

function ProjectsCard({
  linkPage,
  linkGithub,
  title,
  description,
  adi,
  src,
  alt,
}: ProjectsCardProps) {
  const boxVariant = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100, transition: { duration: 0 } },
  };

  const control = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
      className={s.projectsSection__container}
    >
      <div className={s.projectsSection__container__details}>
        <h2 className={s.projectsSection__container__details__h2}>{title}</h2>
        <p className={s.projectsSection__container__details__p}>
          {description}
        </p>
        {/* <p className={s.projectsSection__container__details__p__adi}>{adi}</p> */}

        {linkPage && (
          <a href={linkPage} target="_blank" rel="noopener noreferrer">
            <div className={s.projectsSection__container__details__button}>
              <div
                className={s.projectsSection__container__details__button_text}
              >
                Link to website
              </div>
              <Image src={arrow} width={20} height={20} alt="Arrow" priority />
            </div>
          </a>
        )}

        {linkGithub && (
          <a href={linkGithub} target="_blank" rel="noopener noreferrer">
            <div className={s.projectsSection__container__details__button}>
              <div
                className={s.projectsSection__container__details__button_text}
              >
                Link to Github
              </div>
              <Image src={arrow} width={20} height={20} alt="Arrow" priority />
            </div>
          </a>
        )}
      </div>
      <div className={s.projectsSection__container__image}>
        <Image src={src} alt={alt} width={640} height={540} priority />
      </div>
    </motion.div>
  );
}

export default ProjectsCard;
