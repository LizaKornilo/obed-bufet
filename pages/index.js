import { useSelector } from 'react-redux';
import DishesSlider from 'components/home_components/DishesSlider/DishesSlider';
import EnticingCategories from 'components/home_components/EnticingCategories/EnticingCategories';
import BistroInfo from 'components/home_components/BistroInfo/BistroInfo';
import NewsSlider from 'components/home_components/NewsSlider/NewsSlider';
import { wrapper } from 'store';
import { fetchSomeNews } from 'store/action-creators/news-actions-creator';
import { fetchCategories, fetchExampleDishes } from 'store/action-creators/dishes-actions-creator';
import { fetchInterfaceSettings } from 'store/action-creators/interfaseSettings-action-creator';
import { INTERFACE_SETTINGS } from 'utils/consts';
import EditableByInputElement from 'components/UI/EditComponents/EditableByInputElement/EditableByInputElement';
import GallerySection from 'components/home_components/GallerySection/GallerySection';
import ImageEditor from 'components/UI/EditComponents/ImageEditor/ImageEditor';
import SelectedDishesListContainer from 'components/UI/SelectedDishesListContainer/SelectedDishesListContainer';
import HeaderHome from 'components/Header-home/HeaderHome';
import Footer from 'components/Footer/Footer';

export default function Home() {
  const exampleDishesError = useSelector((state) => state.dishes.exampleDishesError);
  const categoriesError = useSelector((state) => state.dishes.categoriesError);

  const dishSliderTitle = useSelector((state) => state.interfaceSettings.dishSliderTitle);
  const dishSliderSubtitle = useSelector((state) => state.interfaceSettings.dishSliderSubtitle);

  const isAdmin = useSelector((state) => state.user.isAdmin);

  return (
    <div>
      <HeaderHome />
      <div className="section">
        <EditableByInputElement
          element={<div className="section__subtitle">{dishSliderSubtitle}</div>}
          inputCssClass="section__subtitle"
          inputDefaultValue={dishSliderSubtitle}
          placeholderText='Введите подзаголовок'
          interfaseSettingKey={INTERFACE_SETTINGS.dishSliderSubtitle}
          componentCssClass="edit-wrapper-centre"
        />
        <EditableByInputElement
          element={<div className="section__title">{dishSliderTitle}</div>}
          inputCssClass="section__title"
          inputDefaultValue={dishSliderTitle}
          placeholderText='Введите заголовок'
          interfaseSettingKey={INTERFACE_SETTINGS.dishSliderTitle}
          componentCssClass="edit-wrapper-centre"
        />
        {
          exampleDishesError
            ? null
            : <DishesSlider />
        }
      </div>

      <div className="section">
        <div className="container">
          <EnticingCategories />
        </div>
      </div>

      {
        categoriesError
          ? null
          : (
            <div className="section">
              <div className="container">
                <BistroInfo />
              </div>
            </div>
          )
      }

      <GallerySection />

      <div className="section">
        <NewsSlider />
        {
          isAdmin
          &&
          <div className="container">
            <ImageEditor
              imageEditorTitle={"Изменение фона слайдера"}
              btnText={"Измененить фон слайдера"}
              interfaseSettingsKey={INTERFACE_SETTINGS.newsSliderBgImage}
            />
          </div>
        }
      </div>

      <SelectedDishesListContainer />

      <Footer />
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const dispatch = store.dispatch;
  await dispatch(await fetchInterfaceSettings());
  await dispatch(await fetchCategories());
  await dispatch(await fetchExampleDishes());
  await dispatch(await fetchSomeNews());
});
