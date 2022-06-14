import React, { useEffect, useState, useRef } from "react";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "components/UI/Modal/Modal";

import GalleryArrowLeft from "public/images/arrows/left-arrow-svgrepo-com.svg";
import GalleryArrowRight from "public/images/arrows/right-arrow-svgrepo-com.svg";
import DishItem from "components/home_components/DishItem/DishItem";
import styles from './DishesSlider.module.css'
import { useSelector } from "react-redux";
import FallbackImage from "components/UI/FallbackImage/FallbackImage";

const defaultDishImagePath = "/images/default_dish_image.jpg";

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={styles.galeryLeftArrow}
      onClick={() => { onClick(); }}
    >
      <GalleryArrowLeft className={styles.arrow} />
    </div>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={styles.galeryRightArrow}
      onClick={(e) => { e.stopPropagation(); onClick(); }}>
      <GalleryArrowRight className={styles.arrow} />
    </div>
  );
}

export default function DishesSlider() {
  const dishes = useSelector((state) => state.dishes.exampleDishes);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const [modalActive, setModalActive] = useState(false);
  let [slider1, setSlider1] = useRef(null);
  let [slider2, setSlider2] = useRef(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]) //[]

  const sliderSettings = {
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
    dots: true,
    dotsClass: styles.button__bar,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  }

  const modalSliderSettings = {
    arrows: false,
    fade: true
  }

  return (
    <div className={styles.sliderSection}>
      <Slider asNavFor={nav1}
        ref={slider => (slider2 = slider)}
        className={styles.slider} {...sliderSettings}>
        {
          dishes.map(function (dish, i) {
            return (
              <div
                key={dish.id}
                className={styles.sliderItem}>
                <DishItem
                  dish={dish}
                  cssClass={styles["dish-slider__image"]}
                  onImageClick={() => setModalActive(true)}
                />
              </div>);
          })
        }
      </Slider>

      <Modal isActive={modalActive} setIsActive={setModalActive}>
        <Slider
          asNavFor={nav2}
          ref={slider => (slider1 = slider)}
          {...modalSliderSettings}
        >
          {
            dishes.map(function (dish, i) {
              return (
                <div key={`modal${i}`}>
                  <div className={styles.imageContainerMod} >
                    <FallbackImage
                      className={styles.image}
                      src={dish.imageRef ? dish.imageRef : defaultDishImagePath}
                      layout="fill"
                      objectFit="cover"
                      priority={true}
                      alt={dish.imageRef}
                    />
                  </div>
                  <div className={styles.textImage}>
                    {dish.name}
                  </div>
                </div>);
            })
          }
        </Slider>
      </Modal>
    </div >
  );
}