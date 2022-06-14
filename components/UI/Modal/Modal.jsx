import React from "react";
import styles from "./Modal.module.css"

function Modal({ isActive, setIsActive, children }) {
  return (
    <div className={isActive ? `${styles.modal} ${styles.active}` : styles.modal} onClick={() => setIsActive(false)}>
      <div className={isActive ? `${styles.modalContent} ${styles.active}` : styles.modalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
export default Modal;