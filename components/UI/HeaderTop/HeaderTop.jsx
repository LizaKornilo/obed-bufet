import React from 'react';
import styles from "components/UI/HeaderTop/HeaderTop.module.css"
import formatPhoneString from 'utils/formatPhoneString';
import { useSelector } from 'react-redux';
import Social from '../Social/Social';
import { INTERFACE_SETTINGS } from 'utils/consts';
import EditableByInputElement from '../EditComponents/EditableByInputElement/EditableByInputElement';

function HeaderTop() {
  const phone = useSelector((state) => state.interfaceSettings.phone);
  const city = useSelector((state) => state.interfaceSettings.city);

  return (
    <div className={styles.top}>
      <EditableByInputElement
        element={<div className={styles["city"]}>{city}</div>}
        inputCssClass={styles["city"]}
        inputDefaultValue={city}
        placeholderText='Введите город'
        interfaseSettingKey={INTERFACE_SETTINGS.city}
      />
      <EditableByInputElement
        element={<a className={styles["phone"]} href={`tel:${formatPhoneString(phone)}`}> {phone} </a>}
        inputCssClass={styles["phone"]}
        inputDefaultValue={phone}
        placeholderText='Введите телефон'
        interfaseSettingKey={INTERFACE_SETTINGS.phone}
      />
      <Social cssClass={styles["social"]} />
    </div>
  );
}

export default HeaderTop;
