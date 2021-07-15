import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { initGA, logPageView } from '../utils/analytics';


export default class chat extends React.Component {
  componentDidMount() {
    initGA();
    logPageView();
  }
  render() {
    return (
      <div>
        <Header title="TutorBro | About Us" />
        <main>
          <div className="carrers__container">
            <section className="carrers">

              <h1>About Us</h1>
              <p>

                TutorBro aims to provide well-rounded online tutoring by being the hub of academic experts. Our mission is to help students improve their overall grades by providing quality tutoring at pocket-friendly prices.  We believe there are millions of teachers in the world that are teaching. We want to connect such teachers to the students across the globe in order to empower more people to learn from each other. Our platform enables thousands of tutors to share their knowledge with students across the globe. Whether you need help with high school algebra or you want to learn how to program in Python, we have a perfect tutor for you. At TutorBro, we want to change the way you learn.  We provide one-to-one live session with a subject expert as every student is unique and each one of them learns at a different pace. Our online experts are available 24/7 and have been making coursework comprehensive for every student.
              </p>
              <br></br><br></br>
              <p>
                Along the way, we have served thousands of students across the globe and they are doing well in their career. Till now we have more than 100000+ happy students from the 1000+ college and universities from different corner of the world. We have provided exact contents and assisted them throughout their academic years to achieve them what they are today. I can proudly say that TUTORBRO contributed extensively in making of career and academics of several students which are doing really great in their life.<br></br>
                <b>Be a part of TUTORBRO and shine with confidence in your academic arena.</b>

              </p>
            </section>
          </div>
          <Footer />
        </main>
        <style jsx>
          {`
            main {
              padding-top: 10px;
            }
            .carrers__container {
              max-width: 60%;
              margin: 0 auto;
            }
            .carrers {
              padding: 20px;
              padding-bottom: 50px;
            }
            .aboutbanner{
                width:100%;
                height:50vh;
                background-image: url("about.jpg)
            }
            h1 {
              text-align: center;
              font-size: 3.1875rem;
              margin: 0;
            }
            ul {
              list-style-type: circle;
              padding: 10px;
              padding-left: 25px;
              margin: 0;
            }
            h4 {
              color: #4183c4;
              margin-bottom: 0;
              font-size: 1.3125rem;
            }
            h4 span {
              font-size: 1.125rem;
              color: #888;
              letter-spacing: 2px;
              line-height: 1.8;
            }
            p {
              margin: 0;
              margin-top: 10px;
            }
            .cta {
              display: flex;
              justify-content: center;
              padding: 20px;
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
            @media (max-width: 480px) {
              h1 {
                font-size: 32px;
              }
              .carrers__container {
              max-width: 100%;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
