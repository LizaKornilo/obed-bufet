import Btn from 'components/UI/Btn/Btn';
import EditableByInputElement from 'components/UI/EditComponents/EditableByInputElement/EditableByInputElement';
import EditableByTextareaElement from 'components/UI/EditComponents/EditableByTextareaElement/EditableByTextareaElement';
import ImageEditor from 'components/UI/EditComponents/ImageEditor/ImageEditor';
import React from 'react';
import { useState } from 'react';
import JsxParser from 'react-jsx-parser';
import { useSelector } from 'react-redux';
import { INTERFACE_SETTINGS } from 'utils/consts';
import styles from "./BistroInfo.module.css"

function BistroInfo({ }) {
  const bistroInfoBgImage = useSelector((state) => state.interfaceSettings.bistroInfoBgImage);
  const bistroInfoTitle = useSelector((state) => state.interfaceSettings.bistroInfoTitle);;
  const bistroInfoSubtitle = useSelector((state) => state.interfaceSettings.bistroInfoSubtitle);;
  const bistroInfoText = useSelector((state) => state.interfaceSettings.bistroInfoText);

  const isAdmin = useSelector((state) => state.user.isAdmin);

  return (
    <>
      <div
        className={styles["bistro-info"]}
        style={{ backgroundImage: `url('${bistroInfoBgImage}')` }}
      >
        <div className={styles["bistro-info__content"]}>
          <EditableByInputElement
            element={<div className="section__subtitle">{bistroInfoSubtitle}</div>}
            inputCssClass="section__subtitle"
            inputDefaultValue={bistroInfoSubtitle}
            placeholderText='Введите подзаголовок'
            interfaseSettingKey={INTERFACE_SETTINGS.bistroInfoSubtitle}
            componentCssClass="edit-wrapper-centre"
          />
          <EditableByInputElement
            element={<div className="section__title">{bistroInfoTitle}</div>}
            inputCssClass="section__title"
            inputDefaultValue={bistroInfoTitle}
            placeholderText='Введите заголовок'
            interfaseSettingKey={INTERFACE_SETTINGS.bistroInfoTitle}
            componentCssClass="edit-wrapper-centre"
          />
          <EditableByTextareaElement
            element={<div className={styles["bistro-info__text"]}>
              <JsxParser jsx={bistroInfoText} />
            </div>}
            textareaCssClass={`${styles["bistro-info__text"]} ${styles["bistro-info__input"]}`}
            textareaDefaultValue={bistroInfoText}
            placeholderText='Введите текст'
            interfaseSettingKey={INTERFACE_SETTINGS.bistroInfoText}
            componentCssClass="edit-wrapper"
          />
        </div>
      </div>
      {
        isAdmin
        && <div className="container">
          <ImageEditor
            imageEditorTitle={"Изменение фона секции"}
            btnText={"Измененить фон секции"}
            interfaseSettingsKey={INTERFACE_SETTINGS.bistroInfoBgImage}
          />
        </div>
      }
    </>
  );
}

export default BistroInfo;