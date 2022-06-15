import React, { useState } from 'react';
import Image from 'next/image';
import styles from "./DishItem.module.css"
import { useSelector } from 'react-redux';
import Btn from 'components/UI/Btn/Btn';
import FileUploader from 'components/UI/FileUploader/FileUploader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBanquetDishActionCreator, addLaunshDishActionCreator, deleteBanquetDishActionCreator, deleteLaunshDishActionCreator, setBanquetDishesActionCreator, setLaunshDishesActionCreator } from 'store/action-creators/dishes-list-action-creator';
import FallbackImage from 'components/UI/FallbackImage/FallbackImage';

const defaultDishImagePath = "/images/default_dish_image.jpg";

function DishItem({ dish, onImageClick, onDelete, onEdit }) {
  const isAdmin = useSelector((state) => state.user.isAdmin);

  const [isEditMode, setIsEditMode] = useState(false);

  const [editedName, setEditedName] = useState(dish.name);
  const [editedImage, setEditedImage] = useState(null);
  const [editedDescription, setEditedDescription] = useState(dish.description);
  const [editedPrice, setEditedPrice] = useState(dish.price);
  const [editedWeight, setEditedWeight] = useState(dish.weight);

  const changeName = (e) => {
    setEditedName(e.target.value)
  }
  const changeDescription = (e) => {
    setEditedDescription(e.target.value)
  }
  const changePrice = (e) => {
    setEditedPrice(e.target.value)
  }
  const changeWeight = (e) => {
    setEditedWeight(e.target.value)
  }

  const enableEditMode = () => {
    setIsEditMode(true)
  }
  const disableEditModeAndEdit = () => {
    setIsEditMode(false)
    onEdit({
      image: editedImage,
      name: editedName || "Нет названия",
      description: editedDescription,
      price: editedPrice,
      weight: editedWeight,
    })
  }
  const disableEditMode = () => {
    setIsEditMode(false)
  }

  const launchesDishes = useSelector((state) => state.dishesList.launchesDishes);
  const banquetsDishes = useSelector((state) => state.dishesList.banquetsDishes);
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if ((launchesDishes && launchesDishes.some(e => e.id === dish.id))
      || (banquetsDishes && banquetsDishes.some(e => e.id === dish.id))) {
      setIsChecked(true);
    }
    else
      setIsChecked(false)
  }, [launchesDishes, banquetsDishes]);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    const { launchesDishes, banquetsDishes } = JSON.parse(localStorage.getItem("selectedDishesList"));
    if (!isChecked) {
      const dishToAdd = {
        id: dish.id,
        name: dish.name,
        price: dish.price,
      }
      if (dish.categoryId === 1) {
        dispatch(addLaunshDishActionCreator(dishToAdd))
        launchesDishes.push(dishToAdd);
        let uniqueLaunchesDishes = launchesDishes.filter((element, index) => {
          return launchesDishes.indexOf(element) === index;
        });
      }
      if (dish.categoryId === 2) {
        dispatch(addBanquetDishActionCreator(dishToAdd))
        banquetsDishes.push(dishToAdd);
        let uniqueBanquetsDishes = banquetsDishes.filter((element, index) => {
          return banquetsDishes.indexOf(element) === index;
        });
      }
      localStorage.setItem("selectedDishesList", JSON.stringify({ launchesDishes, banquetsDishes }))
    } else {
      const dishToCompare = {
        id: dish.id,
        name: dish.name,
        price: dish.price,
      }
      if (dish.categoryId === 1) {
        dispatch(deleteLaunshDishActionCreator(dish.id))
        const newList = launchesDishes.filter((f) => { return JSON.stringify(f) !== JSON.stringify(dishToCompare) })
        localStorage.setItem("selectedDishesList", JSON.stringify({ launchesDishes: newList, banquetsDishes }))
      }
      if (dish.categoryId === 2) {
        dispatch(deleteBanquetDishActionCreator(dish.id))
        const newList = banquetsDishes.filter((f) => { return JSON.stringify(f) !== JSON.stringify(dishToCompare) })
        localStorage.setItem("selectedDishesList", JSON.stringify({ launchesDishes, banquetsDishes: newList }))
      }
    }
  };

  return (
    <div className={styles["dish-item"]}>
      <input
        type="checkbox"
        id="topping"
        name="topping"
        value="Paneer"
        checked={isChecked}
        onChange={handleOnChange}
        className={styles["checkbox"]}
      />
      {
        isEditMode ?
          <FileUploader defaultImage={
            dish ? dish.imageRef :
              undefined} setImageFile={setEditedImage} cssClass={styles["file-uploader"]} />
          :
          <div
            className={styles["dish-image"]}
            onClick={() => onImageClick()}
          >
            <FallbackImage
              className={styles.image}
              src={dish.imageRef !== "null" ? dish.imageRef : defaultDishImagePath}
              layout="fill"
              objectFit="cover"
              priority={true}
              alt={dish.imageRef !== "null" ? dish.imageRef : defaultDishImagePath}
            />
            <div className="glass-overlay"></div>
          </div>
      }

      <div className={styles["dish-info"]}>
        <div>
          {
            isEditMode ?
              <input className={styles["dish-name"]} value={editedName} onChange={changeName} placeholder='Введите название' required />
              : <div className={styles["dish-name"]}>{dish.name}</div>
          }
          {
            isEditMode ?
              <input className={styles["dish-weight"]} value={editedWeight} onChange={changeWeight} placeholder='Введите вес' />
              : dish.weight
              && <div className={styles["dish-weight"]}>{dish.weight}</div>
          }
          {
            isEditMode ?
              <textarea className={styles["dish-description"]} value={editedDescription} onChange={changeDescription} placeholder='Введите описание' />
              : <div className={styles["dish-description"]}>{dish.description}</div>
          }
        </div>
        {
          isEditMode ?
            <input className={styles["dish-price"]} value={editedPrice} onChange={changePrice} placeholder='Введите цену' />
            : <div className={styles["dish-price"]}>{dish.price}</div>
        }
      </div>

      {
        isAdmin
        && (
          <div className={styles["edit-delete_btns"]}>
            {
              isEditMode ?
                <>
                  <Btn text="Отмена" cssClass="grey-btn" onClickHandler={disableEditMode} />
                  <Btn text="Ok" cssClass="grey-btn" onClickHandler={disableEditModeAndEdit} />
                </>
                : <Btn text="Изменить" cssClass="grey-btn" onClickHandler={enableEditMode} />
            }
            <Btn text="Удалить" cssClass="red-btn" onClickHandler={onDelete} />
          </div>
        )
      }

    </div >
  );
}

export default DishItem;