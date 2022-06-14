import React, { useState } from "react";
import styles from "components/header-home/HeaderHome.module.css";
import MyBigBgSlider from "components/home_components/MyBigBgSlider/MyBigBgSlider";
import Btn from "components/UI/Btn/Btn";
import HeaderTop from "components/UI/HeaderTop/HeaderTop";
import HeaderNav from "components/UI/HeaderNav/HeaderNav";
import { useSelector } from "react-redux";
import Modal from "components/UI/Modal/Modal";
import RequestCall from "components/UI/RequestCall/RequestCall";
import { INTERFACE_SETTINGS } from "utils/consts";
import EditableByInputElement from "components/UI/EditComponents/EditableByInputElement/EditableByInputElement";
import ImagesEditor from "components/UI/EditComponents/ImagesEditor/ImagesEditor";

function HeaderHome() {
  const bgImages = useSelector((state) => state.interfaceSettings.bigSliderImages);
  const siteTitle = useSelector((state) => state.interfaceSettings.siteTitle);

  const isAdmin = useSelector((state) => state.user.isAdmin);

  const [isImagesEditMode, setIsImagesEditMode] = useState(false);
  const enableImagesEditMode = () => {
    setIsImagesEditMode(true)
  }
  const disableImagesEditMode = () => {
    setIsImagesEditMode(false);
  }

  const [modalActive, setModalActive] = useState(false);

  return (
    <div >
      <MyBigBgSlider images={bgImages} />
      <div className={styles.headerContent}>
        <div className="container">
          <HeaderTop />
          <HeaderNav />
          <EditableByInputElement
            element={<h1 className={styles["title"]}>{siteTitle}</h1>}
            inputCssClass={styles["title-input"]}
            inputDefaultValue={siteTitle}
            placeholderText='Введите заголовок'
            interfaseSettingKey={INTERFACE_SETTINGS.siteTitle}
            componentCssClass={styles["title-wrapper"]}
          />
          <Btn text="Заказать звонок" onClickHandler={() => setModalActive(true)} isSubmit={false} />
        </div>
      </div>

      {
        isAdmin
        && <div className="container">
          {isImagesEditMode
            ? <>
              <div className="centre-btn-container">
                <Btn text="Закрыть" cssClass="grey-btn" onClickHandler={disableImagesEditMode} />
              </div>
              <ImagesEditor
                imagesEditorTitle="Изменение фотографий хедера"
                minImagesCount={1}
                interfaseSettingsKey={INTERFACE_SETTINGS.bigSliderImages}
              />
            </>
            : <div className="centre-btn-container">
              <Btn text="Изменить фотографии хедера" cssClass="grey-btn" onClickHandler={enableImagesEditMode} />
            </div>
          }
        </div>
      }

      <Modal isActive={modalActive} setIsActive={setModalActive}>
        <RequestCall setModalActive={setModalActive}/>
      </Modal>
    </div >
  );
}

export default HeaderHome
