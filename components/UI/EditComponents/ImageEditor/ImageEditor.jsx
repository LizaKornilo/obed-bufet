import React from 'react';
import styles from "./ImageEditor.module.css"
import { useSelector } from 'react-redux';
import Btn from 'components/UI/Btn/Btn';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { editInterfaceSettings, editInterfaceSettingsWithImage, editInterfaceSettingsWithImages } from 'store/action-creators/interfaseSettings-action-creator';
import FileUploader from 'components/UI/FileUploader/FileUploader';

function ImageEditor({ imageEditorTitle, btnText, interfaseSettingsKey }) {
  const imageRef = useSelector((state) => state.interfaceSettings[interfaseSettingsKey]);

  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(window.localStorage.getItem('token'));
  }, [])

  const [editedImage, setEditedImage] = useState(null);

  const [isEditMode, setIsEditMode] = useState(false);

  const enableEditMode = () => {
    setIsEditMode(true);
  }
  const disableEditMode = () => {
    setIsEditMode(false);
  }
  const disableEditModeAndEdit = () => {
    disableEditMode();
    handleEdit();
  }

  const handleEdit = () => {
    if (editedImage) {
      const preliminaryImageRef = window.URL.createObjectURL(editedImage);
      dispatch(editInterfaceSettingsWithImage(interfaseSettingsKey, preliminaryImageRef, editedImage, token));
    }
  }

  return (<div className={styles["images-editor"]}>
    {
      isEditMode
        ? <>
          <h3 className={styles["image-editor__title"]}>{imageEditorTitle}</h3>
          <div className={styles["image-editor__work-area"]}>
            <FileUploader
              defaultImage={imageRef ? imageRef : undefined}
              setImageFile={setEditedImage}
              cssClass={styles["file-uploader"]} />
            <div className={styles["edit-delete_btns"]}>
              <Btn text="Отмена" cssClass="grey-btn" onClickHandler={disableEditMode} />
              <Btn text="Ok" cssClass="grey-btn" onClickHandler={disableEditModeAndEdit} />
            </div>
          </div>
        </>
        : (
          <div className="centre-btn-container">
            <Btn text={btnText} cssClass="grey-btn" onClickHandler={enableEditMode} />
          </div>
        )
    }
  </div>
  );
}

export default ImageEditor;