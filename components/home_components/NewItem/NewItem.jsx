import FallbackImage from "components/UI/FallbackImage/FallbackImage";
import Image from "next/image";
import React from "react";
import JsxParser from "react-jsx-parser";
import { useSelector } from "react-redux";
import styles from './NewItem.module.css';

function NewItem({ newItem }) {
  const newsSliderBgColor = useSelector((state) => state.interfaceSettings.newsSliderBgColor);
  const newsSliderBgImage = useSelector((state) => state.interfaceSettings.newsSliderBgImage);

  return (
    <div className={styles['new-item']}>
      {newItem.imageRef &&
        <div className={styles['new__image']}>
          <FallbackImage
            className={styles.image}
            src={newItem.imageRef}
            layout="fill"
            objectFit="cover"
            priority={true}
            alt={newItem.imageRef}
          />
        </div>}
      <div
        className={styles['new__content']}
        style={{
          background: `linear-gradient(${newsSliderBgColor}, 
            ${newsSliderBgColor}), 
            url('${newsSliderBgImage}') 
            left 50% top 50% / cover no-repeat`,
        }}
      >
        {newItem.subtitle && <div className={styles['new__subtitle']}>{newItem.subtitle}</div>}
        <div className={styles['new__title']}>{newItem.title}</div>
        <div className={styles['new__description']}>
          <div className={styles["scroll-area"]}>
            {newItem.description}
          </div>
        </div>
      </div>

    </div>
  );
}

export default NewItem;