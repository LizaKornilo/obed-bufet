import React from 'react';
import styles from "./ImagesEditor.module.css"
import { useSelector } from 'react-redux';
import Image from 'next/image';
import FilesUploader from '../FilesUploader/FilesUploader';
import Btn from 'components/UI/Btn/Btn';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { editInterfaceSettings, editInterfaceSettingsWithImages } from 'store/action-creators/interfaseSettings-action-creator';

function ImagesEditor({ imagesEditorTitle, minImagesCount, interfaseSettingsKey }) {
  const imageRefs = useSelector((state) => state.interfaceSettings[interfaseSettingsKey]);

  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(window.localStorage.getItem('token'));
  }, [])

  const [addedImages, setAddedImages] = useState(null);

  const [isAddMode, setIsAddMode] = useState(false);

  const enableAddMode = () => {
    setIsAddMode(true);
  }
  const disableAddMode = () => {
    setIsAddMode(false);
  }
  const disableAddModeAndAdd = () => {
    disableAddMode();
    handleAdd();
  }

  const handleDeleteOne = (imageRef) => {
    if (imageRefs.length > minImagesCount) {
      const imageRefsCopy = JSON.parse(JSON.stringify(imageRefs));
      const newImageRefs = imageRefsCopy.filter((imRef) => imRef !== imageRef);
      dispatch(editInterfaceSettings(interfaseSettingsKey, newImageRefs, token));
    } else {
      alert(`Количество фото должно быть не меньше ${minImagesCount}`);
    }
  }

  const handleAdd = () => {
    const imageRefsCopy = JSON.parse(JSON.stringify(imageRefs));
    if (addedImages) {
      for (let i = 0; i < addedImages.length; i++) {
        imageRefsCopy.push(window.URL.createObjectURL(addedImages[i]));
        dispatch(editInterfaceSettingsWithImages(interfaseSettingsKey, imageRefsCopy, addedImages, token));
      }
    }
  }

  return (<div className={styles["images-editor"]}>
    <h3 className={styles["images-editor__title"]}>{imagesEditorTitle}</h3>
    <div className={styles["images-editor__grid"]}>
      {
        imageRefs
          ? imageRefs.map((imageRef, i) =>
            <span key={i}>
              <div className={styles["image-wrapper"]}>
                <Image
                  className={styles["image"]}
                  src={imageRef} // serverRef='http://localhost:5000' {`${serverRef}/${imagePath}`}
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                  alt={imageRef}
                >
                </Image>
              </div>
              <div className={styles["edit-delete_btns"]}>
                <Btn
                  text="Удалить"
                  cssClass={`red-btn ${styles["red-btn"]}`}
                  onClickHandler={() => handleDeleteOne(imageRef)}
                />
              </div>
            </span>)
          : null
      }
      {
        isAddMode
          ? <div>
            <FilesUploader
              setImageFiles={setAddedImages}
              cssClass={styles["files-uploader"]} />
            <div className={styles["edit-delete_btns"]}>
              <Btn text="Отмена" cssClass={`grey-btn ${styles["grey-btn"]}`} onClickHandler={disableAddMode} />
              <Btn text="Ok" cssClass={`grey-btn ${styles["grey-btn"]}`} onClickHandler={disableAddModeAndAdd} />
            </div>
          </div>
          : (<div className="add-btn-container">
            <Btn
              text='Добавить фотографии'
              cssClass={`add-btn ${styles["add-btn"]}`}
              onClickHandler={enableAddMode} />
          </div>)
      }
    </div>
  </div>
  );
}

export default ImagesEditor;