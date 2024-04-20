const CustomeSlider = (props) => {
  return (
    <li key={props.subject.name} className="subject">
      <div className="subject__title">
        <div className="svg">
          <img
            src={`https://res.cloudinary.com/tutorbro/image/upload/v1486345678/${props.subject.icon}.svg`}
            alt="icon"
          />
        </div>
        <div className="text">{props.subject.name}</div>
      </div>
      <ul className="subject__lessons">
        {props.subject.lessons.map((lesson) => (
          <li key={lesson} className="subject__lesson">
            {lesson}
          </li>
        ))}
      </ul>
      <div className="subject__cta">
        <div className="btns">
          <a
            onClick={() => logEvent("CTA", "Call Us btn is clicked")}
            href="tel:+91-9685517208"
            className="btn show-s"
          >
            Call Us
          </a>
          <a className="btn">Get A Quote</a>
        </div>
      </div>
      <style jsx>
        {`
          .subject {
            width: calc(25% - 40px);
            margin: 20px;
            background: #fff;
            box-shadow: 0 24px 32px 0 rgba(60, 71, 81, 0.1);
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transform: scale(1);
            transition: box-shadow 0.35s ease-out, transform 0.3s ease-out,
              opacity 0.2s ease-out;
            will-change: transform;
            cursor: pointer;
          }
          .subject:hover {
            box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);
            transform: translate(0, -5px);
          }
          .subject__title {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background: #fafafa;
            padding: 10px;
            border-radius: 8px 8px 0 0;
          }
          .svg {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: #ccc;
          }
          .svg img {
            width: 100%;
          }
          .text {
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            text-transform: uppercase;
            margin-top: 10px;
          }
          .subject__lessons {
            list-style-type: circle;
            margin: 20px 0;
          }
          .btns {
            display: flex;
            flex-direction: column;
            padding: 0 30px;
            padding-bottom: 10px;
          }
          .btn {
            -webkit-appearance: none;
            cursor: pointer;
            background: #2bc186;
            border: none;
            outline: none;
            padding: 6px 24px;
            border-radius: 17px;
            color: #fff;
            line-height: 24px;
            font-weight: 600;
            font-size: 14px;
            transition: all 0.2s ease;
            margin: 10px 0;
            text-align: center;
            text-decoration: none;
          }
          .btn:hover {
            background: teal;
          }
          .show-s {
            display: none;
          }
          @media (max-width: 1200px) {
            .subject {
              width: calc(50% - 80px);
              margin: 30px 40px;
            }
          }
          @media (max-width: 800px) {
            .subjects {
              background: #fff;
            }
            .subject {
              width: calc(320px - 20px);
              margin: 30px auto;
            }
          }
          @media (max-width: 480px) {
            .show-s {
              display: block;
            }
            .subject:hover {
              transform: scale(1);
            }
            .subject {
              box-shadow: 0 2px 4px 0 rgba(60, 71, 81, 0.1);
            }
          }
        `}
      </style>
    </li>
  );
};

export default CustomeSlider;
