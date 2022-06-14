import React from 'react';
import { useState } from 'react';
import SelectedDishesList from '../SelectedDishesList/SelectedDishesList';
import styles from "./SelectedDishesListContainer.module.css"

function SelectedDishesListContainer() {
  const [isOpen, setIsOpen] = useState(false);

  const changeIsOpen = () => {
    isOpen
      ? setIsOpen(false)
      : setIsOpen(true)
  }

  return (
    <div className={styles["wrapperwrapper"]}>
      <div
        className={!isOpen ? styles["wrapper"] : styles["is-nav-open"]}>
        <div className={styles["nav"]}>
          <button
            className={styles["nav__icon"]}
            onClick={() => changeIsOpen()}>
          </button>
          <SelectedDishesList />
        </div>
      </div>
    </div>
  )
}

export default SelectedDishesListContainer;