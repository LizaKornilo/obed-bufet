import React, { useEffect, useState } from 'react';
import styles from "./NewsList.module.css";
import st from "./../NewItem/NewItem.module.css";
import { useSelector } from 'react-redux';
import NewItem from '../NewItem/NewItem';
import Modal from 'components/UI/Modal/Modal';
import Slider from 'react-slick/lib/slider';
import Image from 'next/image';
import Btn from 'components/UI/Btn/Btn';
import FileUploader from 'components/UI/FileUploader/FileUploader';
import { addNewActionCreator, editNewActionCreator } from 'store/action-creators/news-actions-creator';
import { useDispatch } from 'react-redux';
import { deleteDishActionCreator } from 'store/action-creators/dishes-actions-creator';
import Router from 'next/router'
import FallbackImage from 'components/UI/FallbackImage/FallbackImage';

 const defaultDishImagePath = "/images/default_dish_image.jpg";

function NewsList() {
  const news = useSelector((state) => state.news.allNews);
  const error = useSelector((state) => state.news.fetchingAllNewsError);

  const [modalActive, setModalActive] = useState(false);
  const [sliderRef, setSliderRef] = useState(null)

  const modalSliderSettings = {
    arrows: false,
    fade: true,
    focusOnSelect: true,
  }

  const isAdmin = useSelector((state) => state.user.isAdmin);
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(window.localStorage.getItem('token'));
  }, [])

  const [isCreateMode, setIsCreateMode] = useState(false);

  const [createdImage, setCreatedImage] = useState(null);
  const [createdTitle, setCreatedTitle] = useState('');
  const [createdSubTitle, setCreatedSubTitle] = useState('');
  const [createdDescription, setCreatedDescription] = useState('');

  const changeTitle = (e) => {
    setCreatedTitle(e.target.value)
  }
  const changeSubTitle = (e) => {
    setCreatedSubTitle(e.target.value)
  }
  const changeDescription = (e) => {
    setCreatedDescription(e.target.value)
  }

  const enableCreateMode = () => {
    setIsCreateMode(true)
  }
  const disableCreateModeAndCreate = () => {
    setIsCreateMode(false)
    handleCreate();
  }
  const disableCreateMode = () => {
    setIsCreateMode(false)
  }

  const handleDelete = async (id) => {
    dispatch(deleteDishActionCreator(id, token));
    Router.reload(window.location.pathname)

  }

  const handleEdit = async (id, editData) => {
    const preliminaryImageRef = editData.image ? window.URL.createObjectURL(editData.image) : null;
    const updateNewDto = {
      imageRef: preliminaryImageRef,
      title: editData.title,
      subTitle: editData.subTitle,
      description: editData.description,
    }
    const formData = new FormData();
    formData.append('imageRef', editData.image);
    formData.append('title', createdTitle);
    formData.append('subTitle', createdSubTitle);
    formData.append('description', createdDescription);
    dispatch(editNewActionCreator(id, updateNewDto, formData, token));
    Router.reload(window.location.pathname)

  }

  const handleCreate = async () => {
    const preliminaryImageRef = createdImage ? window.URL.createObjectURL(createdImage) : null;
    const createNewDto = {
      imageRef: preliminaryImageRef,
      title: createdTitle,
      subTitle: createdSubTitle,
      description: createdDescription,
    }
    const formData = new FormData();
    formData.append('imageRef', createdImage);
    formData.append('title', createdTitle);
    formData.append('subTitle', createdSubTitle);
    formData.append('description', createdDescription);

    dispatch(addNewActionCreator(createNewDto, formData, token))
    setCreatedImage(null);
    setCreatedTitle('');
    setCreatedSubTitle('');
    setCreatedDescription('');
    Router.reload(window.location.pathname)

  }

  return news.length
    ? (
      <>
        <div className={styles["news-list"]}>
          {
            news.map((newItem, index) =>
              <div key={newItem.id}>
                <NewItem
                  newItem={newItem}
                  onImageClick={() => {
                    setModalActive(true);
                    sliderRef.slickGoTo(index);
                  }}
                  onDelete={() => handleDelete(newItem.id)}
                  onEdit={(editData) => handleEdit(newItem.id, editData)}
                />
              </div>
            )
          }
          {
            isAdmin
            && (
              isCreateMode ?
                <div className={st["new-item"]}>
                  <FileUploader defaultImage={undefined} setImageFile={setCreatedImage} cssClass={st["file-uploader"]} />
                  <input className={st["new-subtitle"]} value={createdSubTitle} onChange={changeSubTitle} placeholder='Введите подзаголовок' />
                  <input className={st["new-title"]} value={createdTitle} onChange={changeTitle} placeholder='Введите заголовок' />
                  <textarea className={st["new-description"]} value={createdDescription} onChange={changeDescription} placeholder='Введите описание' />
                  <div className={styles["cancel-ok-btns"]}>
                    <Btn text="Отмена" cssClass="grey-btn" onClickHandler={disableCreateMode} />
                    <Btn text="Ok" cssClass="grey-btn" onClickHandler={disableCreateModeAndCreate} />
                  </div>
                </div >
                : (<div className="add-btn-container" style={{ minHeight: 300 }}>
                  <Btn text='Добавить новость' cssClass="add-btn" onClickHandler={enableCreateMode} />
                </div>)
            )
          }
        </div >

        <Modal isActive={modalActive} setIsActive={setModalActive}>
          <Slider
            ref={setSliderRef}
            {...modalSliderSettings}
          >
            {
              news.map(function (newItem, i) {
                return (
                  <div key={`modal${i}`}>
                    <div className={styles.imageContainerMod} >
                      {(newItem.imageRef && newItem.imageRef!=="null")
                        && <FallbackImage
                          className={styles.image}
                          src={newItem.imageRef}
                          //src={defaultDishImagePath}
                          layout="fill"
                          objectFit="cover"
                          priority={true}
                          alt={defaultDishImagePath}
                          //alt={newItem.imageRef}
                        />
                      }
                    </div>
                  </div>);
              })
            }
          </Slider>
        </Modal>
      </>
    )
    : error
      ? <div className='fetching-error-msg'>{error}</div>
      : null;
}

export default NewsList;