import EditableScheduleElement from 'components/UI/EditComponents/EditableScheduleElement/EditableScheduleElement';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Schedule.module.css';

function Schedule() {
  const schedule = useSelector((state) => state.interfaceSettings.schedule);

  return (
    <div className={styles["schedule"]}>
      {
        schedule.map((scheduleItem, i) => (
          <div key={i}>
            <div className={styles["schedule-item"]}>
              <div className={styles["schedule-item__day"]}>{scheduleItem.day}:</div>
              <EditableScheduleElement
                element={<div className={styles["schedule-item__hours"]}>{scheduleItem.hours}</div>}
                inputCssClass={styles["schedule-input"]}
                inputDefaultValue={scheduleItem.hours}
                placeholderText='Введите часы работы'
                dayIndex={i}
                fieldName={'hours'}
                componentCssClass="edit-wrapper"
              />
              {/* <div className={styles["schedule-item__hours"]}>{scheduleItem.hours}</div> */}
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
            </div>
          </div>
        ))
      }
    </div >
  );
}

export default Schedule;