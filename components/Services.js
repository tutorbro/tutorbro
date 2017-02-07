const services = [
  {
    title: '24/7 Tutor Support',
    icon: '24hrs',
    desc: "Reach out to us at any time of the day, any day of the week/month/year; our dedicated tutor are always happy to assist you with your queries, be it technical or otherwise - so you don't have to wait!"
  },
  {
    title: 'Homework/Assignment Help',
    icon: 'homework',
    desc: 'Having trouble with a classroom task? Look no further. Find live, assignment help anytime, day or night with our tutor. Get solutions to most challenging homework assignments.'
  },
  {
    title: 'Examination/Test Preparation',
    icon: 'exam',
    desc: 'Nervous about an upcoming test? Our tutors provide personalized test preparation for any subject of your college with previous year questions & equip you for the best grade in class.'
  },
  {
    title: '100% Money Back Guarantee',
    icon: 'refund',
    desc: 'Your Bro is happy to refund your full fee - no questions asked - should, for any reason at all, you may feel that the tutor is not up to your expectations or delivering the value they were looking for!'
  }
]

export default () => (
  <section className='services' id='services'>
    <div className='services__container'>
      <div className='services__title'>
        <div className='title__text'>Services</div>
      </div>
      <ul className='services__list'>
        {services.map(service => {
          return (
            <li key={service.title} className='service'>
              <div className='service__title'>
                <div className='svg'>
                  <img
                    src={
                        `https://res.cloudinary.com/tutorbro/image/upload/v1486345678/${service.icon}.svg`
                      }
                    alt='icon'
                    />
                </div>
                <div className='text'>{service.title}</div>
              </div>
              <div className='service__desc'>
                {service.desc}
              </div>
            </li>
          )
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
          padding: 20px;
          padding-bottom: 50px;
        }
        .services__title {
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
          min-width: 100px;
          min-height: 100px;
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
            max-width: 600px;
            margin: 0 auto;
          }
          .service {
            width: calc(50% - 40px);
          }
        }
        @media (max-width: 800px) {
          .services {
            background: #FAFAFA;
          }
          .services__list {
            flex-direction: column;
          }
          .service {
            width: calc(100% - 40px);
            margin: 20px auto;
          }
        }
      `}
    </style>
  </section>
)
