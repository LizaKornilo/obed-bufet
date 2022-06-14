import React from 'react';
import styles from "./EditPencil.module.css"
import { useSelector } from 'react-redux';
import Pencil from "public/images/pencil.svg";

function EditPencil({ onClickHandler }) {
  const isAdmin = useSelector((state) => state.user.isAdmin);

  return (
    isAdmin
      ? <Pencil
        className={styles["pencil-icon"]}
        onClick={onClickHandler ? () => onClickHandler() : null}
      />
      : null
  );
}

export default EditPencil;
