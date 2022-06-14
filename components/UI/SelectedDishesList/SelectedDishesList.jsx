import DishList from 'components/menu-components/DishList/DishList';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteBanquetDishActionCreator, deleteLaunshDishActionCreator, setBanquetDishesActionCreator, setLaunshDishesActionCreator } from 'store/action-creators/dishes-list-action-creator';
import styles from "./SelectedDishesList.module.css"

function SelectedDishesList({ dishes }) {
  const launchesDishes = useSelector((state) => state.dishesList.launchesDishes);
  const banquetsDishes = useSelector((state) => state.dishesList.banquetsDishes);

  const banquets = useSelector((state) => state.dishes.banquetsDishesList);
  const lunches = useSelector((state) => state.dishes.lunchesDishesList);

  const dispatch = useDispatch();

  const checkIsDishIsAvaable = () => {
    const { launchesDishes, banquetsDishes } = JSON.parse(localStorage.getItem("selectedDishesList"));
    for (let i = 0; i < launchesDishes.length; i++) {
      if (lunches && !lunches.some(e => e.id === launchesDishes[i].id))
        dispatch(deleteLaunshDishActionCreator(launchesDishes[i].id));
    }
    const newLD = launchesDishes.filter((dish) => lunches && lunches.some(e => e.id === dish.id))
    localStorage.setItem("selectedDishesList", JSON.stringify({ launchesDishes: newLD, banquetsDishes }))

    for (let i = 0; i < banquetsDishes.length; i++) {
      if (banquets && !banquets.some(e => e.id === banquetsDishes[i].id))
        dispatch(deleteBanquetDishActionCreator(banquetsDishes[i].id));
    }
    const newBD = banquetsDishes.filter((dish) => banquets && banquets.some(e => e.id === dish.id))
    localStorage.setItem("selectedDishesList", JSON.stringify({ launchesDishes, banquetsDishes: newBD }))
  }

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("selectedDishesList"))) {
      localStorage.setItem("selectedDishesList", JSON.stringify({
        launchesDishes: [], banquetsDishes: []
      }))
    }
    const { launchesDishes, banquetsDishes } = JSON.parse(localStorage.getItem("selectedDishesList"));
    dispatch(setLaunshDishesActionCreator(launchesDishes));
    dispatch(setBanquetDishesActionCreator(banquetsDishes));
    // checkIsDishIsAvaable();
  }, [dispatch])

  const removeItem = (dish, categoryId) => {
    if (categoryId === 1) {
      dispatch(deleteLaunshDishActionCreator(dish.id))
      const newList = launchesDishes.filter((f) => { return JSON.stringify(f) !== JSON.stringify(dish) })
      localStorage.setItem("selectedDishesList", JSON.stringify({ launchesDishes: newList, banquetsDishes }))
    }
    if (categoryId === 2) {
      dispatch(deleteBanquetDishActionCreator(dish.id))
      const newList = banquetsDishes.filter((f) => { return JSON.stringify(f) !== JSON.stringify(dish) })
      localStorage.setItem("selectedDishesList", JSON.stringify({ launchesDishes, banquetsDishes: newList }))
    }
  }

  return (
    <div className={styles["selected-dishes-list"]}>
      <div className={styles["list__title"]}>Список отмеченных блюд</div>
      <div className={styles["list"]}>
        {launchesDishes.length || banquetsDishes.length
          ? <>
            {launchesDishes.length
              && <div>
                <div className={styles["title"]}>Обеды</div>
                {launchesDishes.map((dish) =>
                  <div key={dish.id} className={styles["list-item"]}>
                    <div className={styles["dish"]} key={dish.id}>
                      <div className={styles["name"]}>{dish.name ? dish.name : "Нет названия"}</div>
                      <div className={styles["price"]}>{dish.price ? dish.price : 0}</div>
                    </div>
                    <button className='grey-btn' style={{ alignItems: "end" }} onClick={() => removeItem(dish, 1)}>удалить</button>
                  </div>
                )}
              </div>}
            {banquetsDishes.length
              && <div>
                <div className={styles["title"]}>Банкеты</div>
                {banquetsDishes.map((dish) =>
                  <div key={dish.id} className={styles["list-item"]}>
                    <div className={styles["dish"]} >
                      <div className={styles["name"]}>{dish.name ? dish.name : "Нет названия"}</div>
                      <div className={styles["price"]}>{dish.price ? dish.price : 0}</div>
                    </div>
                    <button className='grey-btn' onClick={() => removeItem(dish, 2)}>удалить</button>
                  </div>
                )}
              </div>}
          </>
          : <div className={styles["splash-text"]}>Выберите блюда на странице «Меню», чтобы они отобразились здесь</div>
        }
      </div>
    </div >
  );
}

export default SelectedDishesList;