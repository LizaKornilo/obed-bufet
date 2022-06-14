import React, { useState } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import styles from "components/home_components/MyBigBgSlider/MyBigBgSlider.module.css";
import LongArrows from "../LongArrows/LongArrows";

function MyBigBgSlider({ images }) {
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <>
      <Slider ref={setSliderRef} {...sliderSettings} className={styles.slider} >
        {
          images.map(function (imgPath, i) {
            return (
              <div key={i} className={styles.imageContainer}>
                <Image className={styles.image}
                  src={imgPath}
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                  alt={imgPath}
                  >
                </Image>
              </div>);
          })
        }
      </Slider >

      <div className={styles.arrowsWrapper}>
        <div className="container">
          <div className={styles.arrowsContainer}>
            <LongArrows
              className={styles.arrows}
              onLeftArrowClick={sliderRef?.slickPrev}
              onRightArrowClick={sliderRef?.slickNext} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MyBigBgSlider