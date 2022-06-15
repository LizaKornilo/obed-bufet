import CommentsForm from "components/comments-components/CommentsForm/CommentsForm";
import CommentsList from "components/comments-components/CommentsList/CommentsList";
import SelectedDishesListContainer from "components/UI/SelectedDishesListContainer/SelectedDishesListContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "store";
import { fetchComments } from "store/action-creators/comments-actions-creator";
import { fetchInterfaceSettings } from "store/action-creators/interfaseSettings-action-creator";

export default function Comments() {
  const fetchingCommentsError = useSelector((state) => state.comments.fetchingCommentsError);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const dispatch = useDispatch();

  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(localStorage.getItem('token'));
    isAdmin
      ? dispatch(fetchComments(token))
      : dispatch(fetchComments());
  }, [isAdmin, dispatch, token])

  return (
    <div>
      <div className="container">
        <div className="page-title">Отзывы</div>
      </div>
      {
        fetchingCommentsError
          ? <div className='fetching-error-msg' style={{ marginTop: 30 }}>
            {fetchingCommentsError}
          </div>
          : <>
            <div className="container">
              <CommentsList />
              <CommentsForm />
            </div>
          </>
      }
      <SelectedDishesListContainer />
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const dispatch = store.dispatch;
  await dispatch(await fetchInterfaceSettings());
});