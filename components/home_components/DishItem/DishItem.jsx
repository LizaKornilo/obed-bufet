import React from 'react';
import Image from 'next/image';
import styles from "./DishItem.module.css"

const defaultDishImagePath = "/images/default_dish_image.jpg";

function DishItem({ dish, cssClass, onImageClick }) {
  return (
    <div
      //className={cssClass ? `${styles["dish-item"]} ${cssClass}` : `${styles["dish-item"]}`}
      className={styles["dish-item"]}
    >
      <div
        className={cssClass ? `${styles["dish-image"]} ${cssClass}` : `${styles["dish-image"]}`}
        onClick={() => onImageClick()}
      >
        <Image
          className={styles.image}
          src={dish.imageRef ? dish.imageRef : defaultDishImagePath}
          layout="fill"
          objectFit="cover"
          priority={true}
          alt={dish.imageRef}
        >
        </Image>
        <div className="glass-overlay"></div>
      </div>


      <div className={styles["dish-info"]}>
        <div>
          <div className={styles["dish-name"]}>{dish.name}</div>
          {
            dish.weight
            && <div className={styles["dish-weight"]}>{dish.weight}</div>
          }
          <div className={styles["dish-description"]}>{dish.description}</div>
        </div>
        <div className={styles["dish-price"]}>{dish.price}</div>
      </div>
    </div >
  );
}

export default DishItem;