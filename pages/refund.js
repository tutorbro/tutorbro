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
                <Header title="TutorBro | Refund Policy" />
                <main>
                    <div className="carrers__container">
                        <section className="carrers">
                            <h1>Refund Policy</h1>
                            <div className="profile">
                                <p>
                                    Thank you for trusting our tutors. We hope you are happy with our tutoring service. However, if you are not completely satisfied with it for any reason, you may request us for a full refund or an exchange. Please see below for more information on our refund policy.
                                </p>
                                <h4>Refund Eligibility</h4>
                                <p>
                                    (a) In the event that a Student wishes to cancel a Tutoring Service anytime before the starting of service, complete amount paid by a Student is refunded.<br></br>
                                    (b) If tutor is not available or not able to deliver the service on time, complete amount paid by a Student is refunded.<br></br>
                                    (c) After the complete delivery of service if Student feels tutor is not up to the expectation & service provided is not satisfactory, they can raise the issue by contacting us and their complaint will be looked into. Though our team tries best to resolve student’s complaints. If our team is satisfied with complainant’s case, a refund will be made and amount for the same will be decided by team as per the case.
                                </p>
                                <h4>Refund Process</h4>
                                <p>
                                    To apply for a refund, please email us at payment@tutorbro.com mentioning your refund eligibility & payment number.
                                    <br></br> <br></br>
                                    After receiving your refund request and inspecting the case, we will process your refund. Please allow at least seven (7) days from the receipt of your case to process your refund. We will notify you by email when your refund has been processed.
                                </p>
                                <h4>Questions</h4>
                                <p>
                                    If you have any questions concerning our return policy, please contact us at: info@tutorbro.com
                                </p>

                            </div>


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
              max-width: 900px;
              margin: 0 auto;
            }
            .carrers {
              padding: 20px;
              padding-bottom: 50px;
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
            }
          `}
                </style>
            </div>
        );
    }
}
