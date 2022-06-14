import Gallery from 'components/UI/Gallery/Gallery';
import DishList from 'components/menu-components/DishList/DishList';
import { connect, useSelector } from 'react-redux';
import { wrapper } from 'store';
import { fetchBanquetsDishesList, fetchCategories } from 'store/action-creators/dishes-actions-creator';
import styles from '../menu.module.css'
import { fetchInterfaceSettings } from 'store/action-creators/interfaseSettings-action-creator';
import { useRouter } from 'next/router';
import BanquetsGallerySection from 'components/menu-components/BanquetsGallerySection/BanquetsGallerySection';
import { ROUTES } from 'utils/consts';
import SelectedDishesListContainer from 'components/UI/SelectedDishesListContainer/SelectedDishesListContainer';

function Banquets() {
  const categories = useSelector((state) => state.dishes.categories);
  const categoriesError = useSelector((state) => state.dishes.categoriesError);
  const banquets = useSelector((state) => state.dishes.banquetsDishesList);
  const error = useSelector((state) => state.dishes.banquetsError);

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

  // const handleClick = () => {
  //   alert("Файл отсутствует");
  // }

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
                  className={category.name === "Банкеты" ? `${styles["nav-bar__category"]} ${styles["nav-bar__active"]}` : `${styles["nav-bar__category"]}`}
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
          <div className={styles["some-info"]}>
            <p>Нам под силу торжество любого формата!</p>
            <p>Приглашаем вас отметить день рождения, юбилей, корпоратив, свадьбу или любое другое важное событие вместе с нами!</p>
            <div>
              <p>Вас ждет:</p>
              <p>- уютный и просторный зад до 80 посадочных мест</p>
              <p>- разнообразное банкетное меню с широким ассортиментом блюд</p>
              <p>- обслуживание на уровне ресторана</p>
              <p>-демократичные цены и индивидуальный подход при составлении заказа</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section">
          {banquets.length
            ?
            <DishList dishes={banquets} categoryId={2} />
            : error
              ?
              <div className='fetching-error-msg'>
                {error}
              </div>
              : null
          }
        </div>
      </div>

      {/* <div className="container">
        <div className="section">
          <div className={styles["download-btn"]}>
            <Btn
              text="Скачать банкетное меню"
              onClickHandler={handleClick}
            />
          </div>
        </div>
      </div> */}

      <BanquetsGallerySection />

      <SelectedDishesListContainer />
    </div >
  )
}
export default connect(state => state)(Banquets);

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const dispatch = store.dispatch;
  await dispatch(await fetchInterfaceSettings());
  await dispatch(await fetchCategories());
  await dispatch(await fetchBanquetsDishesList());
});