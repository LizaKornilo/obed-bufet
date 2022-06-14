import React from "react";
import FooterSchedule from "components/UI/FooterSchedule/FooterSchedule";
import styles from "components/Footer/Footer.module.css";
import formatPhoneString from 'utils/formatPhoneString';
import { useSelector } from "react-redux";
import Social from "components/UI/Social/Social";
import JsxParser from 'react-jsx-parser'
import Link from "next/link";
import { INTERFACE_SETTINGS, ROUTES } from "utils/consts";
import { useRouter } from "next/router";
import { useEffect } from "react";
import EditableByInputElement from "components/UI/EditComponents/EditableByInputElement/EditableByInputElement";
import EditableByTextareaElement from "components/UI/EditComponents/EditableByTextareaElement/EditableByTextareaElement";
import ImageEditor from "components/UI/EditComponents/ImageEditor/ImageEditor";
import ColorEditor from "components/UI/EditComponents/ColorEditor/ColorEditor";

function Footer() {
  const footerBgImage = useSelector((state) => state.interfaceSettings.footerBgImage);
  const footerTitle = useSelector((state) => state.interfaceSettings.footerTitle);
  const footerText = useSelector((state) => state.interfaceSettings.footerText);
  const address = useSelector((state) => state.interfaceSettings.address);
  const phone = useSelector((state) => state.interfaceSettings.phone);
  const email = useSelector((state) => state.interfaceSettings.email);
  const mapIframe = useSelector((state) => state.interfaceSettings.mapIframe);

  const isAdmin = useSelector((state) => state.user.isAdmin);
  const router = useRouter();
  const logOut = () => {
    localStorage.removeItem('token');
    router.push(ROUTES.homePath);
  }

  return (
    <>
      {
        isAdmin
        && <div className="container" style={{ marginBottom: -40 }}>
          <ImageEditor
            imageEditorTitle={"Изменение фона футера"}
            btnText={"Измененить фон футера"}
            interfaseSettingsKey={INTERFACE_SETTINGS.footerBgImage}
          />
          <ImageEditor
            imageEditorTitle={"Изменение фона расписания"}
            btnText={"Измененить фон расписания"}
            interfaseSettingsKey={INTERFACE_SETTINGS.footerScheduleBgImage}
          />
          {/* <ColorEditor
            imageEditorTitle={"Изменение цвета фона расписания"}
            btnText={"Измененить цвет фона расписания"}
            interfaseSettingsKey={INTERFACE_SETTINGS.footerScheduleBgColor}
          /> */}

        </div>
      }
      <div
        className={styles["footer"]}
        style={{
          background: `linear-gradient(rgba(41, 41, 41, 0.9), rgba(41, 41, 41, 0.9)),
        url('${footerBgImage}') 
        left 50% top 50% / cover no-repeat fixed`,
        }}
      >
        <div className="container">
          <div className={styles["flex-wrapper"]}>
            <div className={styles["footer__content"]}>
              <EditableByInputElement
                element={<div className={styles["footer__title"]}>{footerTitle}</div>}
                inputCssClass={`${styles["footer__title-input"]} ${styles["footer__title"]}`}
                inputDefaultValue={footerTitle}
                placeholderText='Введите заголовок'
                interfaseSettingKey={INTERFACE_SETTINGS.footerTitle}
                componentCssClass="edit-wrapper"
              />

              <EditableByTextareaElement
                element={<div className={styles["footer__text"]}>{footerText}</div>}
                textareaCssClass={`${styles["footer__text-input"]} ${styles["footer__text"]}`}
                textareaDefaultValue={footerText}
                placeholderText='Введите текст'
                interfaseSettingKey={INTERFACE_SETTINGS.footerText}
                componentCssClass="edit-wrapper"
              />

              <div className={styles["footer__contacts"]}>
                <EditableByInputElement
                  element={<div className={styles["address"]}>{address}</div>}
                  inputCssClass={styles["address"]}
                  inputDefaultValue={address}
                  placeholderText='Введите адрес'
                  interfaseSettingKey={INTERFACE_SETTINGS.address}
                  componentCssClass="edit-wrapper"
                />

                <EditableByInputElement
                  element={<a className={styles["phone"]} href={`tel:${formatPhoneString(phone)}`}>{phone}</a>}
                  inputCssClass={styles["phone"]}
                  inputDefaultValue={phone}
                  placeholderText='Введите телефон'
                  interfaseSettingKey={INTERFACE_SETTINGS.phone}
                  componentCssClass="edit-wrapper"
                />

                <EditableByInputElement
                  element={<a className={styles["email"]} href={`mailto:${email}`}>{email}</a>}
                  inputCssClass={styles["email"]}
                  inputDefaultValue={email}
                  placeholderText='Введите email'
                  interfaseSettingKey={INTERFACE_SETTINGS.email}
                  componentCssClass="edit-wrapper"
                />

                <Social cssClass={styles["social"]} />
              </div>

              <EditableByTextareaElement
                element={<JsxParser
                  className={styles["footer__map"]}
                  jsx={mapIframe}
                />}
                textareaCssClass={styles["footer__map"]}
                textareaDefaultValue={mapIframe}
                placeholderText='Введите HTML'
                interfaseSettingKey={INTERFACE_SETTINGS.mapIframe}
                componentCssClass={styles["map__wrapper"]} />

            </div>
            <div className={styles["footer__schedule"]}>
              <FooterSchedule />
            </div>
          </div>
        </div>
        <div>

          {
            isAdmin ?
              <div className={styles["to-admin_link"]} onClick={() => logOut()}>выйти</div>
              : <Link
                href={ROUTES.loginPath}>
                <a className={styles["to-admin_link"]}>войти как администратор</a>
              </Link>

          }
        </div>
      </div >
    </>
  );
}

export default Footer;