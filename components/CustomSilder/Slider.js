import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import CustomeSlide from "./CustomSlide";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [xCordinate, setXCordinate] = useState(0);
  const length = SliderData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
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
    <section
      className="slider"
      onTouchStart={(e) => {
        setXCordinate(e.changedTouches[0].clientX);
      }}
      onTouchEnd={(e) => {
        if (xCordinate + 50 < e.changedTouches[0].clientX) {
          nextSlide();
        } else if (xCordinate > 50 + e.changedTouches[0].clientX) {
          prevSlide();
        }
      }}
    >
      <div style={{ display: "flex" }}>
        <div className="left-arrow arrow">
          <KeyboardArrowLeftIcon
            fontSize="large"
            style={{
              borderRadius: 20,
              backgroundColor: "#2ca5ce",
              color: "white",
            }}
            onClick={prevSlide}
          />
        </div>
        <div>
          <ul className="subjects__list">
            {SliderData.map((slide, index) => {
              return (
                <div
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && <CustomeSlide subject={slide} />}
                </div>
              );
            })}
          </ul>
        </div>
        <div className="right-arrow arrow">
          <ChevronRightIcon
            fontSize="large"
            style={{
              borderRadius: 20,
              backgroundColor: "#2ca5ce",
              color: "white",
            }}
            onClick={nextSlide}
          />
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

          .right-arrow {
            position: absolute;
            top: 40%;
            right: 32px;
            font-size: 3rem;
            color: #000;
            z-index: 10;
            cursor: pointer;
            user-select: none;
          }

          .left-arrow {
            position: absolute;
            top: 40%;
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
          @media (max-width: 600px) {
            .arrow {
              display: none;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Slider;

const SliderData = [
  {
    heading: "Homework/Assignment Help",
    text: `Look no further. Find live, assignment help anytime, day or night with our tutor. Get solutions to the most challenging homework assignments.`,
    icon: "assignment",
    color: "#eadabd",
  },
  {
    heading: "LIVE Session for doubt clearance",
    text: "In case you do not understand any topic or getting stucked in solving a problem. A dedicated tutor will be assign for any kind of doubt. The tutor will be available <strong> 24/7 </strong> to help you.",
    icon: "livesession",
    color: "#d5f5ff",
  },
];
