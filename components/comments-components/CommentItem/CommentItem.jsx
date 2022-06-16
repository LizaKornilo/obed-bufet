import styles from './CommentItem.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAdminAnswerActionCreator } from 'store/action-creators/comments-actions-creator';
import Btn from 'components/UI/Btn/Btn';
import { useState } from 'react';
import { getDateString } from 'utils/dateFormatter';

function CommentItem({ comment, cssClass }) {
  const isAdmin = useSelector((state) => state.user.isAdmin);

  const [adminMessage, setAdminMessage] = useState(comment.adminMessage ? comment.adminMessage : '');
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
    setAdminMessage(comment.adminMessage ? comment.adminMessage : '');
    setIsWriteAnswerMode(false);
  }
  const change = (e) => {
    setAdminMessage(e.target.value)
  }

  const disableIsWriteAnswerModeAndAnswer = () => {
    if (adminMessage) {
      const adminMessageDto = { adminMessage: adminMessage };
      dispatch(changeAdminAnswerActionCreator(comment.id, adminMessageDto, token));
    }
    comment.adminMessage = adminMessage;
    disableIsWriteAnswerMode();
  }

  return <>
    <div className={cssClass}>
      <div className={styles["comment__top"]}>
        <div className={styles["comment__username"]}>{comment.name}</div>
        <div className={styles["comment__create-time"]}>{(getDateString(new Date(comment.createdAt)))}</div>
      </div>
      {
        isAdmin
        && (
          <div className={styles["comment__for-admin"]}>
            {/* {comment.userEmail && } */}
            {/* <div className={styles["comment__user-email"]}>E-mail: {comment.userEmail}</div> */}
            <div className={styles["comment__user-phone"]}>Телефон: {comment.phone}</div>
          </div>
        )
      }
      <div className={styles["comment__text"]}>{comment.message}</div>
    </div>

    {
      comment.adminMessage && !isWriteAnswerMode
      &&
      <div className={styles["admin-answer"]}>
        <div className={styles["admin-answer_title"]}>Администратор</div>
        <div className={styles["admin-answer_text"]}>{comment.adminMessage}</div>
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
                value={adminMessage}
                onChange={change}
              />
              <div className={styles["cancel-ok-btns"]}>
                <Btn text="Отмена" cssClass={`grey-btn ${styles["grey-btn"]}`} onClickHandler={disableIsWriteAnswerMode} />
                <Btn text="Ок" cssClass={`grey-btn ${styles["grey-btn"]}`} onClickHandler={disableIsWriteAnswerModeAndAnswer} />
              </div>
            </>
          )
          : <div className={styles["admin-btn"]} >
            <Btn
              text={!comment.adminMessage ? "Ответить" : "Изменить ответ"}
              cssClass={`grey-btn ${styles["grey-btn"]}`}
              onClickHandler={enableIsWriteAnswerMode}
            />
          </div>
      )
    }
  </>
}

export default CommentItem;