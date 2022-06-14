import Btn from 'components/UI/Btn/Btn';
import React from 'react';
import Image from 'next/image';
import styles from "./EnticingCategory.module.css";
import { ROUTES, SERVER_URL } from 'utils/consts';
import Link from 'next/link';
import FallbackImage from 'components/UI/FallbackImage/FallbackImage';

function EnticingCategory({ category }) {
  const hrefToGo =
    category.name === "Обеды"
      ? ROUTES.lunchesPath
      : category.name === "Банкеты"
        ? ROUTES.banquetsPath
        : category.name === "Корпоративное питание"
          ? ROUTES.corporateCateringPath
          : null;

  return (
    <div className={styles["enticing-category"]}>
      <div className={styles["enticing-category__name"]}>{category.name}</div>
      <div className={styles["enticing-category__image"]}>
        <FallbackImage
          className={styles.image}
          //src={`${SERVER_URL}/${category.imageRef}`}
          src={category.imageRef}
          layout="fill"
          objectFit="cover"
          priority={true}
          alt={category.imageRef}
        />
      </div>
      <div className={styles["enticing-category__btn"]}>
        <Link href={hrefToGo}>
          <a>
            <Btn
              text="Подробнее"
            // onClickHandler={goToMenuPage(category.name)}
            />
          </a>
        </Link>
      </div>
    </div >
  );
}

export default EnticingCategory;