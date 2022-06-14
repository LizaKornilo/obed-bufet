import React from 'react';
import styles from "./Social.module.css"
import Instagram from "public/images/social/instagram.svg";
import Viber from "public/images/social/viber.svg";
import Google from "public/images/social/google.svg";
import { useSelector } from 'react-redux';
import { INTERFACE_SETTINGS } from 'utils/consts';
import EditableByInputElement from '../EditComponents/EditableByInputElement/EditableByInputElement';

function Social({ cssClass }) {
  const instagramLink = useSelector((state) => state.interfaceSettings.instagramLink);
  const viberLink = useSelector((state) => state.interfaceSettings.viberLink);
  const googleLink = useSelector((state) => state.interfaceSettings.googleLink);

  return (
    <div className={cssClass ? `${styles["social"]} ${cssClass}` : styles["social"]}>
      <EditableByInputElement
        element={<a className={styles["socialLink"]} href={instagramLink} target="_blank" rel="noreferrer">
          <Instagram className={styles["icon"]} />
        </a>}
        inputCssClass={styles["social-input"]}
        inputDefaultValue={instagramLink}
        placeholderText='Введите Instagram'
        interfaseSettingKey={INTERFACE_SETTINGS.instagramLink}
      />
      <EditableByInputElement
        element={<a className={styles["socialLink"]} href={viberLink} target="_blank" rel="noreferrer">
          <Viber className={styles["icon"]} />
        </a>}
        inputCssClass={styles["social-input"]}
        inputDefaultValue={viberLink}
        placeholderText='Введите Viber'
        interfaseSettingKey={INTERFACE_SETTINGS.viberLink}
      />
      <EditableByInputElement
        element={<a className={styles["socialLink"]} href={googleLink} target="_blank" rel="noreferrer">
          <Google className={styles["icon"]} />
        </a>}
        inputCssClass={styles["social-input"]}
        inputDefaultValue={googleLink}
        placeholderText='Введите Google'
        interfaseSettingKey={INTERFACE_SETTINGS.googleLink}
      />
    </div>
  );
}

export default Social;