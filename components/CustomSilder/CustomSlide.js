const CustomeSlide = (props) => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div>
          <img
            src={`../static/images/${props.subject.icon}.jpeg`}
            alt="Snow"
            style={{
              width: "100%",
              aspectRatio: 8 / 3,
              top: 50,
            }}
          />
          <div className="desc">
            <div className="top-left">
              <div className="home__title">{props.subject.heading}</div>
              <p
                className="home__text"
                dangerouslySetInnerHTML={{ __html: props.subject.text }}
              ></p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home {
            position: relative;
          }
          .container {
            position: relative;
            text-align: center;
            color: white;
          }
          .top-left {
            position: absolute;
            top: 10%;
            left: 10%;
            max-width: 25em;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            padding: 1vw;
            background: ${props.subject.color};
          }

          .home__title {
            color: #607d8b;
            text-align: center;
            font-weight: bold;
            padding: 0.2vw;
            font-size: 1.5vw;
          }
          .home__text {
            text-align: center;
            font-size: 1vw;
          }
          strong {
            color: #4183c4;
          }
          @media (max-width: 1500px) {
            .home__text {
              max-width: 600px;
              margin: 16px auto;
            }
            .top-left {
              position: absolute;
              max-width: 25em;
              left: 10%;
            }
          }
          @media (max-width: 600px) {
            .top-left {
              position: relative;
              left: 0;
              max-width: 100%;
              padding: 30px 30px;
              box-shadow: none;
            }
            .home__title {
              font-size: 30px;
            }
            .home__text {
              font-size: 20px;
            }
            .home {
              background-color: ${props.subject.color};
            }
          }
        `}
      </style>
    </section>
  );
};

export default CustomeSlide;
