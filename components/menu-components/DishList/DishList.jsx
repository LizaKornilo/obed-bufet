import Modal from 'components/UI/Modal/Modal';
import Image from 'next/image';
import React, { useState } from 'react';
import Slider from 'react-slick/lib/slider';
import DishItem from '../DishItem/DishItem';
import styles from "./DishList.module.css"
import st from "./../DishItem/DishItem.module.css"
import { useSelector } from 'react-redux';
import Btn from 'components/UI/Btn/Btn';
import FileUploader from 'components/UI/FileUploader/FileUploader';
import { useDispatch } from 'react-redux';
import { addDishActionCreator, deleteDishActionCreator, editDishActionCreator } from 'store/action-creators/dishes-actions-creator';
import { useEffect } from 'react';
import Router from 'next/router'
import FallbackImage from 'components/UI/FallbackImage/FallbackImage';


const defaultDishImagePath = "/images/default_dish_image.jpg";

function DishList({ dishes, categoryId }) {

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

  const handleDelete = async (id) => {
    dispatch(deleteDishActionCreator(id, categoryId, token))
    //Router.reload(window.location.pathname)
  }

  const handleEdit = async (id, editData) => {
    const preliminaryImageRef = editData.image ? window.URL.createObjectURL(editData.image) : null;
    const updateDishDto = {
      imageRef: preliminaryImageRef,
      name: editData.name,
      description: editData.description,
      price: editData.price,
      weight: editData.weight,
      categoryId: categoryId
    }
    const formData = new FormData();
    formData.append('imageRef', editData.image);
    formData.append('name', editData.name);
    formData.append('description', editData.description);
    formData.append('price', editData.price);
    formData.append('weight', editData.weight);
    dispatch(editDishActionCreator(id, updateDishDto, formData, token));
    // Router.reload(window.location.pathname)
  }

  const [isCreateMode, setIsCreateMode] = useState(false);

  const [createdName, setCreatedName] = useState('');
  const [createdImage, setCreatedImage] = useState(null);
  const [createdDescription, setCreatedDescription] = useState('');
  const [createdPrice, setCreatedPrice] = useState(0);
  const [createdWeight, setCreatedWeight] = useState('');
  const changeName = (e) => {
    setCreatedName(e.target.value)
  }
  const changeDescription = (e) => {
    setCreatedDescription(e.target.value)
  }
  const changePrice = (e) => {
    setCreatedPrice(e.target.value)
  }
  const changeWeight = (e) => {
    setCreatedWeight(e.target.value)
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

  const handleCreate = async () => {
    const preliminaryImageRef = createdImage ? window.URL.createObjectURL(createdImage) : null;
    const createDishDto = {
      name: createdName || "Нет названия",
      description: createdDescription,
      price: createdPrice,
      weight: createdWeight,
      categoryId: categoryId,
    }
    const formData = new FormData();
    formData.append('imageRef', createdImage);
    formData.append('name', createdName || "Нет названия");
    formData.append('description', createdDescription);
    formData.append('price', createdPrice);
    formData.append('weight', createdWeight);
    formData.append('categoryId', categoryId,
    );

    dispatch(addDishActionCreator(createDishDto, formData, preliminaryImageRef, token))
    setCreatedName('');
    setCreatedImage(null);
    setCreatedDescription('');
    setCreatedPrice(0);
    setCreatedWeight('');
    // Router.reload(window.location.pathname)
  }

  return (
    <>
      <div className={styles["dish-list"]} >
        {
          !dishes.length
            ? null
            : dishes.map((dish, index) =>
              <div key={dish.id}>
                <DishItem
                  dish={dish}
                  onImageClick={() => {
                    setModalActive(true);
                    sliderRef.slickGoTo(index);
                  }}
                  onDelete={() => handleDelete(dish.id)}
                  onEdit={(editData) => handleEdit(dish.id, editData)}
                />
              </div>
            )
        }
        {
          isAdmin
          && (
            isCreateMode ?
              <div className={st["dish-item"]}>
                <FileUploader defaultImage={undefined} setImageFile={setCreatedImage} cssClass={st["file-uploader"]} />
                <div className={st["dish-info"]}>
                  <div>
                    <input className={st["dish-name"]} value={createdName} onChange={changeName} placeholder='Введите название' />
                    <input className={st["dish-weight"]} value={createdWeight} onChange={changeWeight} placeholder='Введите вес' />
                    <textarea className={st["dish-description"]} value={createdDescription} onChange={changeDescription} placeholder='Введите описание' />
                  </div>
                  <input className={st["dish-price"]} value={createdPrice} onChange={changePrice} placeholder='Введите цену' />
                </div>
                <div className={st["edit-delete_btns"]}>
                  <Btn text="Отмена" cssClass={`grey-btn ${st["grey-btn"]}`} onClickHandler={disableCreateMode} />
                  <Btn text="Ok" cssClass={`grey-btn ${st["grey-btn"]}`} onClickHandler={disableCreateModeAndCreate} />
                </div>
              </div >
              : (<div className="add-btn-container">
                <Btn text='Добавить блюдо' cssClass={`add-btn ${st["add-btn"]}`} onClickHandler={enableCreateMode} />
              </div>)
          )
        }
      </div>

      <Modal isActive={modalActive} setIsActive={setModalActive}>
        <Slider
          ref={setSliderRef}
          {...modalSliderSettings}
        >
          {
            dishes.map(function (dish, i) {
              return (
                <div key={`modal${i}`}>
                  <div className={styles.imageContainerMod} >
                    <FallbackImage
                      className={styles.image}
                      //src={dish.imageRef ? `${SERVER_URL}/${dish.imageRef}` : defaultDishImagePath}
                      src={dish.imageRef !== "null" ? dish.imageRef : defaultDishImagePath}
                      layout="fill"
                      objectFit="cover"
                      priority={true}
                      alt={dish.imageRef !== "null" ? dish.imageRef : defaultDishImagePath}
                    />
                  </div>
                  <div className={styles.textImage}
                    style={{ color: "white", textAlign: 'center' }}>
                    {dish.name}
                  </div>
                </div>);
            })
          }

        </Slider>
      </Modal>


    </>

  );
}

export default DishList;