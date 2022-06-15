import styles from './CommentsForm.module.css';
import React from 'react';
import Btn from 'components/UI/Btn/Btn';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentActionCreator, fetchComments } from 'store/action-creators/comments-actions-creator';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';

// const emailRegex = /(?:[a-z0-9!#$%&' * +/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

function CommentsForm() {
  const router = useRouter();

  const addCommentError = useSelector((state) => state.comments.addCommentError);

  const dispatch = useDispatch();

  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(window.localStorage.getItem('token'));
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const commentToAdd = {
      name: data.name,
      // createTime: getDateString(new Date()),
      message: data.message,
      // userEmail: data.email ? data.email : null,
      phone: data.phone,
    }

    try {
      dispatch(addCommentActionCreator(commentToAdd));
      dispatch(fetchComments(token));
      // router.push(ROUTES.commentsPath);
      reset();
    } catch (e) {
      setError('submit', {
        type: "serverError",
        message: e,
      });
    }
  });

  return (
    <form className={styles["comments-form"]} onSubmit={onSubmit}>
      <div className={styles["comments__title"]}>Оставить отзыв</div>

      <label className={`${styles["input-label"]} ${styles["req__input-label"]}`}>Имя</label>
      <input
        className={styles["input"]}
        type="text"
        autoComplete="off"
        {...register('name', { required: true })}
      />
      {errors.userName?.type === 'required' && <div className={styles["err-mess"]}>Имя - обязательное поле</div>}

      {/* <label className={styles["input-label"]}>E-mail</label>
      <input
        className={styles["input"]}
        type="text"
        autoComplete="off"
        {...register('email', {
          pattern: emailRegex,
        })}
      />
      {errors.email?.type === 'pattern' && <div className={styles["err-mess"]}>Неверный формат e-mail</div>} */}

      <label className={`${styles["input-label"]} ${styles["req__input-label"]}`}>Текст</label>
      <textarea
        className={`${styles["input"]} ${styles["text-input"]}`}
        type="textarea"
        autoComplete="off"
        {...register('message', { required: true })}
      />
      {errors.text?.type === 'required' && <div className={styles["err-mess"]}>Текст - обязательное поле</div>}

      <label className={`${styles["input-label"]} ${styles["req__input-label"]}`}>Контактный номер</label>
      <input
        className={styles["input"]}
        type="text"
        autoComplete="off"
        {...register('phone', { required: true })}
      />
      {errors.phone?.type === 'required' && <div className={styles["err-mess"]}>Контактный номер - обязательное поле</div>}

      <Btn text='Отправить' cssClass={styles["submit-btn"]} isSubmit={true} />
      {addCommentError && <div className={styles["err-mess"]} style={{ display: 'inline' }}>{addCommentError}</div>}
      {errors.submit?.type === "serverError" &&
        <div
          className={styles["err-mess"]}
          style={{ display: 'inline' }}
        >
          {errors.submit.message}</div>}

    </form>
  );
}

export default CommentsForm;