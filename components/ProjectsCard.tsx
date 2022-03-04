import Image from "next/image";
import Proyecto1 from "/public/Proyecto1.png";
import arrow from "/public/arrow.png";
import s from "./styles/ProjectsCard.module.css";

type ProjectsCardProps = {
  link: string;
  title: string;
  description: string;
  ubi: string;
  image: StaticImageData;
  alt: string;
};

function ProjectsCard({
  link,
  title,
  description,
  ubi,
  image,
  alt,
}: ProjectsCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className={s.projectsSection__container}>
        <div className={s.projectsSection__container__details}>
          <h2 className={s.projectsSection__container__details__h2}>{title}</h2>
          <p className={s.projectsSection__container__details__p}>
            {description}
          </p>
          <p className={s.projectsSection__container__details__p}>{ubi}</p>
          <div className={s.projectsSection__container__details__button}>
            <div className={s.projectsSection__container__details__button_text}>
              Link to the website
            </div>
            <Image src={arrow} width={20} height={20} alt="Arrow" />
          </div>
        </div>
        <div className={s.projectsSection__container__image}>
          <Image
            src={image}
            alt={alt}
            width={image.width}
            height={image.height}
          />
        </div>
      </div>
    </a>
  );
}

export default ProjectsCard;
