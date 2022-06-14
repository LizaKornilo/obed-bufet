import CommentsForm from "components/comments-components/CommentsForm/CommentsForm";
import CommentsList from "components/comments-components/CommentsList/CommentsList";
import SelectedDishesListContainer from "components/UI/SelectedDishesListContainer/SelectedDishesListContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "store";
import { fetchComments } from "store/action-creators/comments-actions-creator";
import { fetchInterfaceSettings } from "store/action-creators/interfaseSettings-action-creator";
import { setIsAdmin } from "store/action-creators/user-actions-creator";

export default function Comments() {
  const fetchingCommentsError = useSelector((state) => state.comments.fetchingCommentsError);
  //  const comments = useSelector((state) => state.comments.comments);


  // useEffect(async () => {
  //   await dispatch(fetchComments(
  //     localStorage.getItem('token')
  //   ))
  //   const isAdmin = !!localStorage.getItem('token');
  //   dispatch(setIsAdmin(isAdmin));
  // }, []);
  const isAdmin = useSelector((state) => state.user.isAdmin);

  const dispatch = useDispatch();
  // let token = null;
  const [token, setToken] = useState(null);
  useEffect(() => {
    //token = localStorage.getItem('token');
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
          // : comments.length === 0
          //   ? <div className='fetching-error-msg' style={{ marginTop: 30 }}>
          //     Коментариев пока нет
          //   </div>
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