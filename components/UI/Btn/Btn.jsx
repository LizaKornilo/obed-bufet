import React from 'react';
import styles from "./Btn.module.css"

function Btn({ text, cssClass, onClickHandler, isSubmit = false }) {
  return (
    <button
      className={cssClass ? `${cssClass}` : `${styles.btn}`}
      onClick={onClickHandler ? () => onClickHandler() : null}
      isSubmit = {isSubmit}
    >
      {text}
    </button>
  );
}

export default Btn;