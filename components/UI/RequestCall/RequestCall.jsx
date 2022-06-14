import React, { useState } from 'react';
import styles from "../RequestCall/RequestCall.module.css";
import formatPhoneString from 'utils/formatPhoneString';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Btn from '../Btn/Btn';

function RequestCall({ setModalActive }) {
  const phone = useSelector((state) => state.interfaceSettings.phone);
  const carteByLink = 'https://carte.by/grodno/obed-bufet-delivery/';

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset
  } = useForm();

  // const [message, setMessage] = useState('');

  const onSubmit = handleSubmit(async (data) => {
    console.log("Hello from onSubmit");
    setModalActive(false);
    // setMessage('Ваш запрос успешно отправлен');
    reset();
    // const commentToAdd = {
    //   userName: data.userName,
    //   createTime: getDateString(new Date()),
    //   text: data.text,
    //   userEmail: data.email ? data.email : null,
    //   userPhone: data.phone,
    // }

    // try {
    //   await addCommentApi(commentToAdd);
    //   dispatch(fetchComments(false));

    //   router.push(ROUTES.commentsPath);
    //   // dispatch(addComment(commentToAdd));
    //   reset();
    // } catch (e) {
    //   setError('submit', {
    //     type: "serverError",
    //     message: e,
    //   });
    // }
  });

  return (
    <div className={styles["request-call"]}>
      <form className={styles["call-form"]} onSubmit={onSubmit}>
        <div className={styles["call__title"]}>Заказать звонок</div>

        <input
          className={styles["input"]}
          type="text"
          autoComplete="off"
          placeholder='Ваше имя:'
          {...register('userName', { required: true })}
        />
        {errors.userName?.type === 'required' && <div className={styles["err-mess"]}>Имя - обязательное поле</div>}

        <input
          className={styles["input"]}
          //type="tel"
          // pattern='^\+375 \((17|29|33|44)\) [0-9]{7}$'
          autoComplete="off"
          placeholder='Телефон:'
          {...register('phone', { required: true })}
        />
        {errors.phone?.type === 'required' && <div className={styles["err-mess"]}>Телефон - обязательное поле</div>}

        <Btn text='Отправить' cssClass={styles["submit-btn"]} isSubmit={true} />
        {/* {addCommentError && <div className={styles["err-mess"]} style={{ display: 'inline' }}>{addCommentError}</div>} */}
        {
          errors.submit?.type === "serverError"
          && <div className={styles["err-mess"]} style={{ display: 'inline' }}>
            {errors.submit.message}
          </div>
        }


      </form>

      <div className={styles["other-links"]}>
        Вы также можете оформить заказ:
        <p>{'- по телефону '}
          <a className={styles["other-links__link"]} href={`tel:${formatPhoneString(phone)}`}>{phone}</a>
        </p>
        <p>{'- через агрегатор '}
          <a className={styles["other-links__link"]} href={carteByLink} target="_blank" rel="noopener noreferrer">carte.by</a>
        </p>
      </div>

    </div>
  );
}

export default RequestCall;