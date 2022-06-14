import Btn from 'components/UI/Btn/Btn';
import EditableByInputElement from 'components/UI/EditComponents/EditableByInputElement/EditableByInputElement';
import ImagesEditor from 'components/UI/EditComponents/ImagesEditor/ImagesEditor';
import Gallery from 'components/UI/Gallery/Gallery';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { INTERFACE_SETTINGS } from 'utils/consts';

function BanquetsGallerySection({ }) {
  const galleryBanquetsTitle = useSelector((state) => state.interfaceSettings.galleryBanquetsTitle);
  const galleryBanquetsSubtitle = useSelector((state) => state.interfaceSettings.galleryBanquetsSubtitle);
  const banquetsGalleryImages = useSelector((state) => state.interfaceSettings.banquetsGalleryImages)

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
          element={<div className="section__subtitle">{galleryBanquetsSubtitle}</div>}
          inputCssClass="section__subtitle"
          inputDefaultValue={galleryBanquetsSubtitle}
          placeholderText='Введите подзаголовок'
          interfaseSettingKey={INTERFACE_SETTINGS.galleryBanquetsSubtitle}
          componentCssClass="edit-wrapper-centre"
        />
        <EditableByInputElement
          element={<div className="section__title">{galleryBanquetsTitle}</div>}
          inputCssClass="section__title"
          inputDefaultValue={galleryBanquetsTitle}
          placeholderText='Введите заголовок'
          interfaseSettingKey={INTERFACE_SETTINGS.galleryBanquetsTitle}
          componentCssClass="edit-wrapper-centre"
        />
        <Gallery images={banquetsGalleryImages} />

        {
          isAdmin
          && <div className="container">
            {isImagesEditMode
              ? <>
                <div className="centre-btn-container">
                  <Btn text="Закрыть" cssClass="grey-btn" onClickHandler={disableImagesEditMode} />
                </div>
                <ImagesEditor
                  imagesEditorTitle="Изменение фотографий слайдера"
                  minImagesCount={4}
                  interfaseSettingsKey={INTERFACE_SETTINGS.banquetsGalleryImages}
                />
              </>
              : <div className="centre-btn-container">
                <Btn text="Изменить фотографии слайдера" cssClass="grey-btn" onClickHandler={enableImagesEditMode} />
              </div>
            }
          </div>
        }
      </div>

    </div>
  );
}

export default BanquetsGallerySection;