import { useRef } from "react";

// Framer Motion
import { motion, useInView } from "framer-motion";

// Styles
import s from "./AnimatedLetters.module.css";

// Framer motion Variants
const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

function AnimatedLetters({
  title,
  disabled,
}: {
  title: string;
  disabled?: boolean;
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <div className={s.banner_row}>
      <div className={s.row_col}>
        <motion.span
          className={s.row_title}
          variants={banner}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          ref={ref}
        >
          {[...title].map((letter, id) => (
            <motion.span key={id} className={s.row_letter} variants={letterAni}>
              {letter}
            </motion.span>
          ))}
          &nbsp;
        </motion.span>
      </div>
    </div>
  );
}

export default AnimatedLetters;
