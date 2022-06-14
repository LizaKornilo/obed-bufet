import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useSelector } from 'react-redux';
import styles from "./NewsSlider.module.css"
import NewItem from '../NewItem/NewItem';
import LongArrows from '../LongArrows/LongArrows';

function NewsSlider({ }) {
  const news = useSelector((state) => state.news.someNews);
  const error = useSelector((state) => state.news.fetchingSomeNewsError);

  const [sliderR, setSliderR] = useState(null);

  const sliderSettings = {
    slidesToShow: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    autoplay: false,
    dots: true,
    dotsClass: styles.button__bar,
    arrows: false,
    infinite: true,
    speed: 900,
    slidesToScroll: 1,
    fade: true,
  }

  return (
    news.length
      ? <div className="container">
        <div className={styles["news-slider"]}>
          <Slider
            ref={setSliderR}
            className={styles.slider}
            {...sliderSettings}
          >
            {
              news.map((n, i) => (
                <div key={i}>
                  <NewItem newItem={n} />
                </div>
              ))
            }
          </Slider>

          {
            news.length > 1 &&
            <div className={styles.arrowsContainer}>
              <LongArrows
                onLeftArrowClick={sliderR?.slickPrev}
                onRightArrowClick={sliderR?.slickNext} />
            </div>
          }
        </div>
      </div>
      : error
        ? <div className='fetching-error-msg'>{error}</div>
        : null
  );
}

export default NewsSlider;