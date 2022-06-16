import React, { useState } from 'react';
import styles from "../RequestCall/RequestCall.module.css";
import formatPhoneString from 'utils/formatPhoneString';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Btn from '../Btn/Btn';
import { sendRequestToCall } from 'api/call';

function RequestCall({ setModalActive }) {
  const phone = useSelector((state) => state.interfaceSettings.phone);
  const carteByLink = 'https://carte.by/grodno/obed-bufet-delivery/';

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    // setModalActive(false);
    console.log(data)
    try {
      const selectedDishes = JSON.parse(localStorage.getItem("selectedDishesList"));
      const dishesToSend = [...selectedDishes.banquetsDishes.map(dish => dish.name),
      ...selectedDishes.launchesDishes.map(dish => dish.name)]
      const dataToSend = {
        name: data.userName,
        phone: data.phone,
        menu: (data.chooseCb && selectedDishes)
          ? dishesToSend
          : ["Пользователь не выбрал блюда"],
      }
      // console.log("dataToSend: ", dataToSend);
      await sendRequestToCall(dataToSend);
      setErrorMessage(null);
      setMessage('Ваш запрос успешно отправлен, мы Вам перезвоним');
      reset();
    } catch (e) {
      setMessage(null);
      setErrorMessage('Произошла ошибка при отправке запроса' + e);
    }
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

        <div className={styles["checkbox"]}>
          <input
            type="checkbox"
            name="selectCheckbox"
            id="selectCheckbox"
            {...register('chooseCb')}
          />
          <label htmlFor="chooseCb" className={styles["label"]}>
            Прикрепить список блюд
          </label>
        </div>

        <Btn text='Отправить' cssClass={styles["submit-btn"]} isSubmit={true} />
        {/* {addCommentError && <div className={styles["err-mess"]} style={{ display: 'inline' }}>{addCommentError}</div>} */}
        {errors.submit?.type === "serverError" && <div className="auth-change__err-mess">{errors.submit.message}</div>}
        <div className={styles["message"]}>{message}</div>
        <div className={styles["error-message"]}>{errorMessage}</div>

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