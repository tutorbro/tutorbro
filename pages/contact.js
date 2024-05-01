import React from "react";
import Layout from "../components/Layout";
import Form from "../components/Form";
import TutorSvg from "../static/images/Tutor";
export default class contact extends React.Component {
  render() {
    return (
      <Layout title="TutorBro | Contact">
        <section className="contact" id="contact">
          <div className="contact__container">
            <div className="contact__desc">
              <div className="contact__title">
                Get Personal Tutor For Academics Help
              </div>
              <figure className="contact__figure">
                <TutorSvg />
                <figcaption className="contact__caption">
                  <div className="contact__captionTitle">
                    Get Personal Tutor For Your Academic Help
                  </div>
                  Boost Your Grades With Our Tutor.
                  <strong> Guaranteed…!!!</strong>
                </figcaption>
              </figure>
              <p className="contact__text">
                Our Expert Tutors are available 24x7 for your
                contactwork/Assignment/Project Help, Online Classes or Test
                Preparation with
                <strong> Zero Plagiarism</strong>. Our Tutors are known for
                getting the work done
                <strong> On Time </strong>
                with complete satisfaction.
              </p>
            </div>
            <div className="contact__query">
              <Form />
            </div>
          </div>
          <style jsx>
            {`
              .contact {
                position: relative;
              }
              .contact__container {
                max-width: 1280px;
                margin: 0 auto;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
              }
              .contact__desc,
              .contact__query {
                padding: 50px 20px;
                flex: 1;
                position: relative;
              }
              .contact__title,
              .contact__captionTitle {
                color: #607d8b;
                text-align: center;
                font-weight: bold;
                padding: 5px;
                font-size: 28px;
                margin-bottom: 30px;
              }
              .contact__captionTitle {
                display: none;
              }
              .contact__figure {
                text-align: center;
                margin: 0;
              }
              strong {
                font-size: 20px;
                color: #4183c4;
              }
              .contact__text {
                text-align: center;
              }
              @media (max-width: 1100px) {
                .contact__container {
                  flex-direction: column;
                  align-items: stretch;
                }
                .contact__desc {
                  padding-top: 20px;
                }
                .contact__query {
                  background: #fafafa;
                }
                .contact__text {
                  max-width: 600px;
                  margin: 16px auto;
                }
              }
              @media (max-width: 480px) {
                .contact__text {
                  text-align: center;
                  font-size: 14px;
                }
                .contact__captionTitle {
                  display: block;
                  font-size: 24px;
                  margin-bottom: 0;
                }
              }
            `}
          </style>
        </section>
      </Layout>
    );
  }
}
