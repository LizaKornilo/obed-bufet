import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import NewsList from "components/news-components/NewsList/NewsList";
import SelectedDishesListContainer from "components/UI/SelectedDishesListContainer/SelectedDishesListContainer";
import { wrapper } from "store";
import { fetchInterfaceSettings } from "store/action-creators/interfaseSettings-action-creator";
import { fetchAllNews } from "store/action-creators/news-actions-creator";

export default function News() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="page-title">Новости</div>
        <div className="section">
          <NewsList />
        </div>
      </div>
      <SelectedDishesListContainer />
      <Footer />
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const dispatch = store.dispatch;
  await dispatch(await fetchInterfaceSettings());
  await dispatch(await fetchAllNews());
});