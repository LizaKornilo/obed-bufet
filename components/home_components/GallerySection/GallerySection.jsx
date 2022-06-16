import Btn from 'components/UI/Btn/Btn';
import EditableByInputElement from 'components/UI/EditComponents/EditableByInputElement/EditableByInputElement';
import ImagesEditor from 'components/UI/EditComponents/ImagesEditor/ImagesEditor';
import Gallery from 'components/UI/Gallery/Gallery';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { INTERFACE_SETTINGS } from 'utils/consts';
import styles from "components/home_components/GallerySection/GallerySection.module.css";

function GallerySection({ }) {
  const galleryTitle = useSelector((state) => state.interfaceSettings.galleryTitle);
  const gallerySubtitle = useSelector((state) => state.interfaceSettings.gallerySubtitle);
  const galleryImages = useSelector((state) => state.interfaceSettings.galleryImages);

  const isAdmin = useSelector((state) => state.user.isAdmin);

  const [isImagesEditMode, setIsImagesEditMode] = useState(false);
  const enableImagesEditMode = () => {
    setIsImagesEditMode(true)
  }
  const disableImagesEditMode = () => {
    setIsImagesEditMode(false);
  }

  return (
    <div>

      <div className="section">
        <EditableByInputElement
          element={<div className="section__subtitle">{gallerySubtitle}</div>}
          inputCssClass="section__subtitle"
          inputDefaultValue={gallerySubtitle}
          placeholderText='Введите подзаголовок'
          interfaseSettingKey={INTERFACE_SETTINGS.gallerySubtitle}
          componentCssClass="edit-wrapper-centre"
        />
        <EditableByInputElement
          element={<div className="section__title">{galleryTitle}</div>}
          inputCssClass="section__title"
          inputDefaultValue={galleryTitle}
          placeholderText='Введите заголовок'
          interfaseSettingKey={INTERFACE_SETTINGS.galleryTitle}
          componentCssClass="edit-wrapper-centre"
        />
        <Gallery images={galleryImages} />
        {
          isAdmin
          && <div className="container">
            {isImagesEditMode
              ? <>
                <div className="centre-btn-container">
                  <Btn text="Закрыть" cssClass={`grey-btn ${styles["grey-btn"]}`} onClickHandler={disableImagesEditMode} />
                </div>
                <ImagesEditor
                  imagesEditorTitle="Изменение фотографий слайдера"
                  minImagesCount={4}
                  interfaseSettingsKey={INTERFACE_SETTINGS.galleryImages}
                />
              </>
              : <div className="centre-btn-container">
                <Btn text="Изменить фотографии слайдера" cssClass={`grey-btn ${styles["grey-btn"]}`} onClickHandler={enableImagesEditMode} />
              </div>
            }
          </div>
        }
      </div>

    </div>
  );
}

export default GallerySection;