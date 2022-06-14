import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { INTERFACE_SETTINGS } from 'utils/consts';
import formatPhoneString from 'utils/formatPhoneString';
import Btn from '../Btn/Btn';
import EditableByInputElement from '../EditComponents/EditableByInputElement/EditableByInputElement';
import EditableScheduleElement from '../EditComponents/EditableScheduleElement/EditableScheduleElement';
import Modal from '../Modal/Modal';
import RequestCall from '../RequestCall/RequestCall';
import styles from "./FooterSchedule.module.css"

function FooterSchedule() {
  const footerScheduleBgImage = useSelector((state) => state.interfaceSettings.footerScheduleBgImage);
  const footerScheduleBgColor = useSelector((state) => state.interfaceSettings.footerScheduleBgColor);
  const schedule = useSelector((state) => state.interfaceSettings.schedule);
  const phone = useSelector((state) => state.interfaceSettings.phone);

  const [modalActive, setModalActive] = useState(false);

  return (
    <div
      className={styles["footer-schedule"]}
      style={{
        background: `linear-gradient(${footerScheduleBgColor}, ${footerScheduleBgColor}), url('${footerScheduleBgImage}') left 50% top 50% / cover no-repeat`,
      }}
    >
      <div className={styles["footer-schedule__title"]}>График работы</div>
      <div className={styles["schedule-items"]}>
        {
          schedule.map((scheduleItem, i) => (
            <div key={i}>
              <div className={styles["schedule-item"]}>
                <div className={styles["schedule-item__day"]}>{scheduleItem.day}</div>
                {/* <div className={styles["schedule-item__hours"]}>{scheduleItem.hours}</div> */}
                <EditableScheduleElement
                  element={<div className={styles["schedule-item__hours"]}
                  >{scheduleItem.hours}</div>}
                  inputCssClass={styles["schedule-input"]}
                  inputDefaultValue={scheduleItem.hours}
                  placeholderText='Введите часы работы'
                  dayIndex={i}
                  fieldName={'hours'}
                  componentCssClass="edit-wrapper"
                />
                {/* {scheduleItem.additional
                  && <div className={styles["schedule-item__additionaly"]}>{scheduleItem.additional}</div>} */}
                <EditableScheduleElement
                  element={scheduleItem.additional
                    && <div className={styles["schedule-item__additionaly"]}>{scheduleItem.additional}</div>}
                  inputCssClass={styles["schedule-input"]}
                  inputDefaultValue={scheduleItem.additional}
                  placeholderText='Введите доп. информацию'
                  dayIndex={i}
                  fieldName={'additional'}
                  componentCssClass="edit-wrapper"
                />
                <hr />
              </div>
            </div>
          ))
        }
      </div>
      <EditableByInputElement
        element={<a className={styles["footer-schedule__phone"]} href={`tel:${formatPhoneString(phone)}`}>
          {phone}
        </a>}
        inputCssClass={styles["footer-schedule__phone"]}
        inputDefaultValue={phone}
        placeholderText='Введите телефон'
        interfaseSettingKey={INTERFACE_SETTINGS.phone}
        componentCssClass="edit-wrapper-centre"
      />

      <div className={styles["footer-schedule__btn"]}>
        <Btn text="Заказать звонок" onClickHandler={() => setModalActive(true)} />
      </div>

      <Modal isActive={modalActive} setIsActive={setModalActive}>
        <RequestCall setModalActive={setModalActive}/>
      </Modal>
    </div>
  );
}

export default FooterSchedule;