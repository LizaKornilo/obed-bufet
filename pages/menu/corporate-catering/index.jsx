import { connect, useSelector } from 'react-redux';
import { wrapper } from 'store';
import { fetchCategories } from 'store/action-creators/dishes-actions-creator';
import styles from '../menu.module.css'
import { fetchInterfaceSettings } from 'store/action-creators/interfaseSettings-action-creator';
import { useRouter } from 'next/router';
import { ROUTES } from 'utils/consts';
import Image from 'next/image';
import SelectedDishesListContainer from 'components/UI/SelectedDishesListContainer/SelectedDishesListContainer';

const ccImage1 = "/photos/cc_pages/ccIm1.jpg";
const ccImage2 = "/photos/cc_pages/ccIm2.jpg";

function CorporateCatering() {
  const categories = useSelector((state) => state.dishes.categories);
  const categoriesError = useSelector((state) => state.dishes.categoriesError);

  const router = useRouter();

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
                  className={category.name === "Корпоративное питание" ? `${styles["nav-bar__category"]} ${styles["nav-bar__active"]}` : `${styles["nav-bar__category"]}`}
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

      <div className="container">
        <div className="section">
          {/* <img src={ccImage1} alt={ccImage1}
            style={{
              height: 840,
              width: 600,
            }} /> */}
          <div className={styles["cc_image-container"]}>

            <Image src={ccImage1} layout="fill" alt={ccImage1} priority={true} />
          </div>

          {/* <img src={ccImage2} alt={ccImage2}
            style={{
              height: 840,
              width: 600,
            }} /> */}
          <div className={styles["cc_image-container"]}>
            <Image src={ccImage2} layout="fill" alt={ccImage2} priority={true} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className={styles["some-info"]}>Мы сотрудничаем с:</div>
          <p>
            <div className={styles["some-info"]}>ЗОВ</div>
            <div className={styles["some-info"]}>Кайман</div>
          </p>
        </div>
      </div>

      <SelectedDishesListContainer />

    </div >
  )
}
export default connect(state => state)(CorporateCatering);

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const dispatch = store.dispatch;
  await dispatch(await fetchInterfaceSettings());
  await dispatch(await fetchCategories());
  // await dispatch(await fetchCorporateCateringDishesList());
});