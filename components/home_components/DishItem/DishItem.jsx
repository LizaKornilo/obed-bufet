import React from 'react';
import styles from "./DishItem.module.css"
import FallbackImage from 'components/UI/FallbackImage/FallbackImage';

function DishItem({ dish, cssClass, onImageClick }) {
  return (
    <div className={styles["dish-item"]}>
      <div
        className={cssClass ? `${styles["dish-image"]} ${cssClass}` : `${styles["dish-image"]}`}
        onClick={() => onImageClick()}
      >
        <FallbackImage
          className={styles.image}
          src={dish.imageRef}
          layout="fill"
          objectFit="cover"
          priority={true}
          alt={dish.imageRef}
        />
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