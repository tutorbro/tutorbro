import Form from './Form'
import TutorSvg from './Tutor'

export default () => (
  <section className='home' id='home'>
    <div className='home__container'>
      <div className='home__desc'>
        <div className='home__title'>
          Get Personal Tutor For Homework Help
        </div>
        <figure className='home__figure'>
          <TutorSvg />
          <figcaption className='home__caption'>
            Boost Your Grades With Our Tutor.
            <strong> Guaranteed…!!!</strong>
          </figcaption>
        </figure>
        <p className='home__text'>
          Our Expert Tutor are available 24x7 for your Homework/Assignment Help, Online Classes or Test Preparation with
          <strong> Zero Plagiarism</strong>
          . Our Tutor are known for getting the work done
          <strong> On Time </strong>
          with complete satisfaction.
        </p>
      </div>
      <div className='home__query'>
        <Form />
      </div>
    </div>
    <style jsx>
      {`
        .home {
          position: relative;
        }
        .home__container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }
        .home__desc, .home__query {
          padding: 50px 20px;
          flex: 1;
          position: relative;
        }
        .home__title {
          text-align: center;
          font-weight: bold;
          padding: 5px;
          font-size: 28px;
          margin-bottom: 15px;
        }
        .home__figure {
          text-align: center;
          margin: 0;
        }
        strong {
          font-size: 20px;
          color: #4183C4;
        }
        .home__text {
          text-align: center;
        }
        @media (max-width: 800px) {
          .home__container {
            flex-direction: column;
            align-items: stretch;
          }
          .home__query {
            background: #f9f9f9;
          }
        }
        @media (max-width: 480px) {
          .home__text {
            text-align: center;
            font-size: 14px;
          }
          .home__title {
            display: none;
          }
        }
      `}
    </style>
  </section>
)
