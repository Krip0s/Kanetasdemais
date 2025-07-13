import React, { useState, useEffect } from "react";
import classes from "../../Styles/Slide.module.scss";

function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={classes.slider}>
      <div className={classes.sliderContent}>
        <div className={`${classes.slideBox} ${activeSlide === 0 ? classes.active : ""}`}>
          <img
            className={classes.imgDesktop}
            src="https://picsum.photos/1920/1080?random=1"
            alt="imagem 1"
          />
          <img
            className={classes.imgMobile}
            src="https://picsum.photos/800/300?random=1"
            alt="imagem 1"
          />
        </div>

        <div className={`${classes.slideBox} ${activeSlide === 1 ? classes.active : ""}`}>
          <img
            className={classes.imgDesktop}
            src="https://picsum.photos/1920/1080?random=2"
            alt="imagem 2"
          />
          <img
            className={classes.imgMobile}
            src="https://picsum.photos/800/300?random=2"
            alt="imagem 2"
          />
        </div>

        <div className={`${classes.slideBox} ${activeSlide === 2 ? classes.active : ""}`}>
          <img
            className={classes.imgDesktop}
            src="https://picsum.photos/1920/1080?random=3"
            alt="imagem 3"
          />
          <img
            className={classes.imgMobile}
            src="https://picsum.photos/800/300?random=3"
            alt="imagem 3"
          />
        </div>

        <div className={classes.navManual}>
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`${classes.manualBtn} ${activeSlide === index ? classes.active : ""}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Slider;
