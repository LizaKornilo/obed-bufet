import React from 'react';
import styles from "./ColorEditor.module.css"
import { useSelector } from 'react-redux';
import Btn from 'components/UI/Btn/Btn';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { editInterfaceSettings, editInterfaceSettingsWithImage, editInterfaceSettingsWithImages } from 'store/action-creators/interfaseSettings-action-creator';
import FileUploader from 'components/UI/FileUploader/FileUploader';


function ColorEditor({ imageEditorTitle, btnText, interfaseSettingsKey }) {
  const defColor = useSelector((state) => state.interfaceSettings[interfaseSettingsKey]);
  const rgba = defColor.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
  const hex = `#${((1 << 24) + (parseInt(rgba[0]) << 16) + (parseInt(rgba[1]) << 8) + parseInt(rgba[2])).toString(16).slice(1)}`;

  console.log("rgba: ", rgba);
  console.log("hex: ", hex);


  // const alpha = ", 0.9";
  // const defVal = defColor.replace(alpha, '');
  // const defValue = defVal.replace('rgba', '');
  // // alert(defValue);

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

  return (<div className={styles["color-editor"]}>
    {
      isEditMode
        ? <>
          <h3 className={styles["color-editor__title"]}>{imageEditorTitle}</h3>
          <div className={styles["color-editor__work-area"]}>
            <div className={styles["color-uploader"]}>
              <input type="color" id="color-ed" name="head"
                value={hex}
                style={{ height: 100, width: 100 }}
              />
              <label
                htmlFor="color-ed"
              >Head</label>
            </div>
            {/* <FileUploader
              defaultImage={imageRef ? imageRef : undefined}
              setImageFile={setEditedImage}
              cssClass={styles["file-uploader"]} /> */}
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

export default ColorEditor;