import styles from './CommentItem.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAdminAnswerActionCreator, fetchComments } from 'store/action-creators/comments-actions-creator';
import Btn from 'components/UI/Btn/Btn';
import { useState } from 'react';

function CommentItem({ comment, cssClass }) {
  const isAdmin = useSelector((state) => state.user.isAdmin);

  const [adminAnswer, setAdminAnswer] = useState(comment.adminAnswer ? comment.adminAnswer : '');
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(window.localStorage.getItem('token'));
  }, [])

  const [isWriteAnswerMode, setIsWriteAnswerMode] = useState(false);
  const enableIsWriteAnswerMode = () => {
    setIsWriteAnswerMode(true);
  }
  const disableIsWriteAnswerMode = () => {
    setAdminAnswer(comment.adminAnswer ? comment.adminAnswer : '');
    setIsWriteAnswerMode(false);
  }
  const change = (e) => {
    setAdminAnswer(e.target.value)
  }

  const disableIsWriteAnswerModeAndAnswer = () => {
    if (adminAnswer) {
      const adminAnswerDto = { text: adminAnswer };
      dispatch(changeAdminAnswerActionCreator(comment.id, adminAnswerDto, token));
    }
    disableIsWriteAnswerMode();
  }


  return <>
    <div className={cssClass}>
      <div className={styles["comment__top"]}>
        <div className={styles["comment__username"]}>{comment.userName}</div>
        <div className={styles["comment__create-time"]}>{comment.createTime}</div>
      </div>
      {
        isAdmin
        && (
          <div className={styles["comment__for-admin"]}>
            {/* {comment.userEmail && } */}
            <div className={styles["comment__user-email"]}>E-mail: {comment.userEmail}</div>
            <div className={styles["comment__user-phone"]}>Телефон: {comment.userPhone}</div>
          </div>
        )
      }
      <div className={styles["comment__text"]}>{comment.text}</div>
    </div>

    {
      comment.adminAnswer && !isWriteAnswerMode
      &&
      <div className={styles["admin-answer"]}>
        <div className={styles["admin-answer_title"]}>Администратор</div>
        <div className={styles["admin-answer_text"]}>{comment.adminAnswer}</div>
      </div>
    }

    {
      isAdmin
      && (
        isWriteAnswerMode
          ? (
            <>
              <textarea
                className={`${styles["admin-textarea"]} ${styles["admin-answer_text"]}`}
                type='text'
                autoFocus
                placeholder="Введите ответ админа"
                value={adminAnswer}
                onChange={change}
              />
              <div className={styles["cancel-ok-btns"]}>
                <Btn text="Отмена" cssClass="grey-btn" onClickHandler={disableIsWriteAnswerMode} />
                <Btn text="Ок" cssClass="grey-btn" onClickHandler={disableIsWriteAnswerModeAndAnswer} />
              </div>
            </>
          )
          : <div className={styles["admin-btn"]} >
            <Btn
              text={!comment.adminAnswer ? "Ответить" : "Изменить ответ"}
              cssClass="grey-btn"
              onClickHandler={enableIsWriteAnswerMode}
            />
          </div>
      )
    }
  </>
}

export default CommentItem;