import React from 'react';
import styles from "./NewItem.module.css"
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Btn from 'components/UI/Btn/Btn';
import FileUploader from 'components/UI/FileUploader/FileUploader';
import FallbackImage from 'components/UI/FallbackImage/FallbackImage';

function NewItem({ newItem, onImageClick, onDelete, onEdit }) {

  const isAdmin = useSelector((state) => state.user.isAdmin);

  const [isEditMode, setIsEditMode] = useState(false);

  const [editedImage, setEditedImage] = useState(null);
  const [editedTitle, setEditedTitle] = useState(newItem.title);
  const [editedSubTitle, setEditedSubTitle] = useState(newItem.subTitle);
  const [editedDescription, setEditedDescription] = useState(newItem.description);

  const changeTitle = (e) => {
    setEditedTitle(e.target.value)
  }
  const changeSubTitle = (e) => {
    setEditedSubTitle(e.target.value)
  }
  const changeDescription = (e) => {
    setEditedDescription(e.target.value)
  }

  const enableEditMode = () => {
    setIsEditMode(true)
  }

  const disableEditModeAndEdit = () => {
    setIsEditMode(false)
    onEdit(newItem.id, {
      image: editedImage,
      title: editedTitle,
      subTitle: editedSubTitle,
      description: editedDescription,
    })
  }

  const disableEditMode = () => {
    setIsEditMode(false)
  }

  return (
    <div className={styles["new-item"]}>
      {
        isEditMode ?
          <FileUploader defaultImage={newItem ? newItem.imageRef : undefined} setImageFile={setEditedImage} cssClass={styles["file-uploader"]} />
          : (newItem.imageRef && newItem.imageRef !== "null") && < div
            className={styles["new-image"]}
            onClick={() => onImageClick()}
          >
            && <FallbackImage
              className={styles.image}
              src={newItem.imageRef}
              layout="fill"
              objectFit="cover"
              priority={true}
              alt={newItem.imageRef}
            />
            <div className="glass-overlay"></div>
          </div>
      }
      {
        isEditMode ?
          <input className={styles["new-subtitle"]} value={editedSubTitle} onChange={changeSubTitle} placeholder='Введите подзаголовок' />
          : newItem.subTitle
          && <div className={styles["new-subtitle"]}>{newItem.subTitle}</div>
      }
      {
        isEditMode ?
          <input className={styles["new-title"]} value={editedTitle} onChange={changeTitle} placeholder='Введите заголовок' />
          : <div className={styles["new-title"]}>{newItem.title}</div>
      }
      {
        isEditMode ?
          <textarea className={styles["new-description"]} value={editedDescription} onChange={changeDescription} placeholder='Введите описание' />
          : <div className={styles["new-description"]}>{newItem.description}</div>
      }

      {
        isAdmin
        && (
          <div className={styles["edit-delete_btns"]}>
            {
              isEditMode ?
                <>
                  <Btn text="Отмена" cssClass={`grey-btn ${styles["grey-btn"]}`} onClickHandler={disableEditMode} />
                  <Btn text="Ok" cssClass={`grey-btn ${styles["grey-btn"]}`} onClickHandler={disableEditModeAndEdit} />
                </>
                : <Btn text="Изменить" cssClass={`grey-btn ${styles["grey-btn"]}`} onClickHandler={enableEditMode} />
            }
            <Btn text="Удалить" cssClass={`red-btn ${styles["red-btn"]}`} onClickHandler={onDelete} />
          </div>
        )
      }
    </div >
  );
}

export default NewItem;