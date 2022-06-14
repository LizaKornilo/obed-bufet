import React from 'react';
import { useSelector } from 'react-redux';
import EnticingCategory from '../EnticingCategory/EnticingCategory';
import styles from "./EnticingCategories.module.css"

function EnticingCategories() {
  const categories = useSelector((state) => state.dishes.categories);
  const categoriesError = useSelector((state) => state.dishes.categoriesError);

  return categories.length
    ? (
      <div className={styles["enticing-categories"]}>
        <EnticingCategory category={categories[0]} />
        <EnticingCategory category={categories[1]} />
        <EnticingCategory category={categories[2]} />
      </div>
    )
    : <div className="fetching-error-msg">{categoriesError}</div>;
}

export default EnticingCategories;