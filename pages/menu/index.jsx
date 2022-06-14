import Btn from 'components/UI/Btn/Btn';
import Gallery from 'components/UI/Gallery/Gallery';
import { connect, useDispatch, useSelector } from 'react-redux';
import { wrapper } from 'store';
import { changeOpenedCategory, fetchBanquetsDishesList, fetchCategories, fetchCorporateCateringDishesList, fetchLunchesDishesList } from 'store/action-creators/dishes-actions-creator';
import styles from './menu.module.css';
import { fetchInterfaceSettings } from 'store/action-creators/interfaseSettings-action-creator';
import { useRouter } from 'next/router';
import { ROUTES } from 'utils/consts';
import { useEffect } from 'react';
import { setBanquetDishesActionCreator, setLaunshDishesActionCreator } from 'store/action-creators/dishes-list-action-creator';

function Menu() {
  const categories = useSelector((state) => state.dishes.categories);
  const categoriesError = useSelector((state) => state.dishes.categoriesError);

  const router = useRouter();

  // const launchesDishes = useSelector((state) => state.dishesList.launchesDishes);
  // const banquetsDishes = useSelector((state) => state.dishesList.banquetsDishes);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const { launchesDishes, banquetsDishes } = JSON.parse(localStorage.getItem("selectedDishesList"));
  //   dispatch(setLaunshDishesActionCreator(launchesDishes));
  //   dispatch(setBanquetDishesActionCreator(banquetsDishes));
  // }, [launchesDishes, banquetsDishes])

  const handleChangeOpenedCategory = (categoryName) => {
    categoryName === "Обеды"
      ? router.push(ROUTES.lunchesPath)
      : categoryName === "Банкеты"
        ? router.push(ROUTES.banquetsPath)
        : categoryName === "Корпоративное питание"
          ? router.push(ROUTES.corporateCateringPath)
          : null;
  }

  return (
    <div>
      <div className="container">
        <div className="page-title">Меню</div>
        <div className={styles["nav-bar"]}>
          {
            categories.length
              ?
              categories.map((category) => (
                <div
                  key={category.id}
                  className={`${styles["nav-bar__category"]}`}
                  onClick={() => handleChangeOpenedCategory(category.name)}
                >
                  {category.name}
                </div>
              ))
              : <div className="fetching-error-msg">{categoriesError}</div>
          }
          <br />
        </div>
      </div>
    </div >
  )
}
export default connect(state => state)(Menu);

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const dispatch = store.dispatch;
  await dispatch(fetchInterfaceSettings());
  await dispatch(fetchCategories());
});