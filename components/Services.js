const services = [
  {
    title: "24/7 Tutor Support",
    icon: "24hrs",
    desc: "Reach out to us at any time of the day, any day of the week/month/year; our dedicated tutors are always happy to assist you with your queries, be it technical or otherwise - so you don't have to wait!",
  },
  {
    title: "Homework/Assignment Help",
    icon: "homework",
    desc: "Having trouble with a classroom task? Look no further. Find live, assignment help anytime, day or night with our tutor. Get solutions to the most challenging homework assignments.",
  },
  {
    title: "Examination/Test Preparation",
    icon: "exam",
    desc: "Nervous about an upcoming test? Our tutors provide personalized test preparation for any subject of your college with previous year questions & equip you for the best grade in class.",
  },
  {
    title: "LIVE Session for doubt clearance",
    icon: "refund",
    desc: "In case you do not understand any topic or getting stucked in solving a problem. A dedicated tutor will be assign for any kind of doubt. The tutor will be available 24/7 to help you. ",
  },
];
export default () => (
  <section className="services" id="services">
    <div className="services__container">
      <div className="services__title">
        <div className="title__text">Services</div>
      </div>
      <ul className="services__list">
        {services.map((service) => {
          return (
            <li key={service.title} className="service">
              <div className="service__title">
                <div className="svg">
                  <img
                    src={`https://res.cloudinary.com/tutorbro/image/upload/v1486345678/${service.icon}.svg`}
                    alt="icon"
                  />
                </div>
                <div className="text">{service.title}</div>
              </div>
              <div className="service__desc">{service.desc}</div>
            </li>
          );
        })}
      </ul>
    </div>
    <style jsx>
      {`
        .services {
          position: relative;
          background: #fff;
        }
        .services__container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 50px 20px;
        }
        .services__title {
          color: #607d8b;
          text-align: center;
          font-weight: bold;
          padding: 5px;
          font-size: 28px;
          margin-bottom: 15px;
        }
        .title__text {
          display: inline-block;
          text-transform: uppercase;
        }
        .services__list {
          margin: 0;
          padding: 0;
          list-style-type: none;
          display: flex;
          flex-wrap: wrap;
        }
        .service {
          width: calc(25% - 40px);
          margin: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .service__title {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
          font-weight: bold;
          font-size: 16px;
          padding: 10px 0;
          text-align: center;
        }
        .service__desc {
          text-align: center;
          font-size: 12px;
        }
        @media (max-width: 1200px) {
          .services__list {
            max-width: 800px;
            margin: 0 auto;
          }
          .service {
            width: calc(50% - 80px);
            margin: 20px 40px;
          }
        }
        @media (max-width: 800px) {
          .services {
            background: #efebe9;
          }
          .services__list {
            flex-direction: column;
          }
          .service {
            width: calc(100% - 40px);
            margin: 30px auto;
          }
          .service__desc {
            max-width: 300px;
            margin: 0 auto;
          }
        }
      `}
    </style>
  </section>
);
