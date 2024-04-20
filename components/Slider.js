import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import CustomeSlider from "./CustomSlider";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <div style={{ display: "flex" }}>
        <div className="left-arrow">
          <KeyboardArrowLeftIcon fontSize="large" onClick={prevSlide} />
        </div>
        <div>
          <ul className="subjects__list">
            {SliderData.map((slide, index) => {
              return (
                <div
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <CustomeSlider subject={slide} />
                    // <img
                    //   src={slide.image}
                    //   alt="travel image"
                    //   className="image"
                    // />
                  )}
                </div>
              );
            })}
          </ul>
        </div>
        <div className="right-arrow">
          <ChevronRightIcon fontSize="large" onClick={nextSlide} />
        </div>
      </div>

      <style jsx>
        {`
          .subjects__list {
            margin: 0;
            padding: 0;
            list-style-type: none;
            display: flex;
            flex-wrap: wrap;
          }
          .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
          }
          .slider {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .image {
            width: 1000px;
            height: 600px;
            border-radius: 10px;
          }

          .right-arrow {
            position: absolute;
            top: 50%;
            right: 32px;
            font-size: 3rem;
            color: #000;
            z-index: 10;
            cursor: pointer;
            user-select: none;
          }

          .left-arrow {
            position: absolute;
            top: 50%;
            left: 32px;
            font-size: 3rem;
            color: #000;
            z-index: 10;
            cursor: pointer;
            user-select: none;
          }

          .slide {
            opacity: 0;
            transition-duration: 1s ease;
          }

          .slide.active {
            opacity: 1;
            transition-duration: 1s;
            transform: scale(1.08);
          }
          @media (max-width: 1200px) {
            .subjects__list {
              max-width: 800px;
              margin: 0 auto;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Slider;

const SliderData = [
  { name: "Physics", icon: "physics", lessons: ["Physics-I", "Physics-II"] },
  {
    name: "Statistics",
    icon: "statistics",
    lessons: ["Business Statistics", "Elementary Statistics"],
  },
  {
    name: "Other Subjects",
    icon: "others",
    lessons: ["Biology", "Essay Writing"],
  },
];
