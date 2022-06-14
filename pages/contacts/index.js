import Schedule from "components/contacts-components/Schadule/Schedule";
import { useSelector } from "react-redux";
import { wrapper } from "store";
import { fetchInterfaceSettings } from "store/action-creators/interfaseSettings-action-creator";
import formatPhoneString from "utils/formatPhoneString";
import Instagram from "public/images/social/instagram-colored.svg";
import Viber from "public/images/social/viber.svg";
import styles from './contacts.module.css';
import JsxParser from "react-jsx-parser";
import EditableByInputElement from "components/UI/EditComponents/EditableByInputElement/EditableByInputElement";
import { INTERFACE_SETTINGS } from "utils/consts";
import EditableByTextareaElement from "components/UI/EditComponents/EditableByTextareaElement/EditableByTextareaElement";
import SelectedDishesListContainer from "components/UI/SelectedDishesListContainer/SelectedDishesListContainer";

export default function Contacts() {
  const aboutAs = useSelector((state) => state.interfaceSettings.aboutAs);
  const phone = useSelector((state) => state.interfaceSettings.phone);
  const email = useSelector((state) => state.interfaceSettings.email);
  const address = useSelector((state) => state.interfaceSettings.address);
  const instagramLink = useSelector((state) => state.interfaceSettings.instagramLink);
  const viberLink = useSelector((state) => state.interfaceSettings.viberLink);
  const mapIframe = useSelector((state) => state.interfaceSettings.mapIframe);

  return (
    <div>
      <div className="container">
        <div className="page-title">Контакты</div>
      </div>
      <div className="container">
        <div className={styles["constacts-subtitle"]}>График работы</div>
        <Schedule />

        <div className={styles["constacts-subtitle"]}>О нас</div>
        <EditableByTextareaElement
          element={<div className={styles["about-as"]}>{aboutAs}</div>}
          textareaCssClass={`${styles["about-as"]} ${styles["about-as-input"]}`}
          textareaDefaultValue={aboutAs}
          placeholderText='Введите "О нас"'
          interfaseSettingKey={INTERFACE_SETTINGS.aboutAs}
          componentCssClass="edit-wrapper"
        />

        <div className={styles["phone-label"]}>Телефон</div>
        <EditableByInputElement
          element={<a className={styles["phone"]} href={`tel:${formatPhoneString(phone)}`}>{phone}</a>}
          inputCssClass={styles["phone"]}
          inputDefaultValue={phone}
          placeholderText='Введите телефон'
          interfaseSettingKey={INTERFACE_SETTINGS.phone}
          componentCssClass="edit-wrapper"
        />

        <div className={styles["email-label"]}>E-mail</div>
        <EditableByInputElement
          element={<a className={styles["email"]} href={`mailto:${email}`}>{email}</a>}
          inputCssClass={styles["email"]}
          inputDefaultValue={email}
          placeholderText='Введите email'
          interfaseSettingKey={INTERFACE_SETTINGS.email}
          componentCssClass="edit-wrapper"
        />

        <div className={styles["address-label"]}>Адрес</div>
        <EditableByInputElement
          element={<div className={styles["address"]}>{address}</div>}
          inputCssClass={styles["address"]}
          inputDefaultValue={address}
          placeholderText='Введите адрес'
          interfaseSettingKey={INTERFACE_SETTINGS.address}
          componentCssClass="edit-wrapper"
        />

        <div className={styles["social-links"]}>
          <div>
            <div className={styles["instagram-label"]}>Instagram</div>
            <EditableByInputElement
              element={<a className={styles["social-link"]} href={instagramLink} target="_blank" rel="noreferrer">
                <Instagram className={styles["icon"]} />
              </a>}
              inputCssClass={styles["social-input"]}
              inputDefaultValue={instagramLink}
              placeholderText='Введите Instagram'
              interfaseSettingKey={INTERFACE_SETTINGS.instagramLink}
              componentCssClass="edit-wrapper"
            />

          </div>
          <div>
            <div className={styles["viber-label"]}>Viber</div>
            <EditableByInputElement
              element={<a className={styles["social-link"]} href={viberLink} target="_blank" rel="noreferrer">
                <Viber className={styles["icon"]} />
              </a>}
              inputCssClass={styles["social-input"]}
              inputDefaultValue={viberLink}
              placeholderText='Введите Viber'
              interfaseSettingKey={INTERFACE_SETTINGS.viberLink}
              componentCssClass="edit-wrapper"
            />
          </div>
        </div>

        <EditableByTextareaElement
          element={<JsxParser
            className={styles["map"]}
            jsx={mapIframe}
          />}
          textareaCssClass={styles["map"]}
          textareaDefaultValue={mapIframe}
          placeholderText='Введите HTML'
          interfaseSettingKey={INTERFACE_SETTINGS.mapIframe}
          componentCssClass={styles["map__wrapper"]} />
      </div>

      <SelectedDishesListContainer />
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const dispatch = store.dispatch;
  await dispatch(await fetchInterfaceSettings());
});