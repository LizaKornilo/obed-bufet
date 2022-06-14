import React from 'react';
import styles from "./LongArrows.module.css"
import LongArrowLeft from "public/images/arrows/LongArrowLeft.svg";
import LongArrowRight from "public/images/arrows/LongArrowRight.svg";


function LongArrows({ onLeftArrowClick, onRightArrowClick }) {
  return (
    <div className={styles.arrows}>
      <button
        className={styles.button}
        onClick={() => onLeftArrowClick ? onLeftArrowClick() : null}>
        <LongArrowLeft className={styles.arrow} />
      </button>

      <button
        className={styles.button}
        onClick={() => onRightArrowClick ? onRightArrowClick() : null}>
        <LongArrowRight className={styles.arrow} />
      </button>
    </div>
  );
}

export default LongArrows;