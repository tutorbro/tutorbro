import React from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { initGA, logPageView } from '../utils/analytics';

export default class chat extends React.Component {
  componentDidMount() {
    initGA();
    logPageView();
    let form = document.getElementById("payment");
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id","pl_J6ykVBO4H4Z19B");
    script.async = true;
    form.appendChild(script);

  }
  render() {
    return (
        
      <div>
        <Header title="TutorBro | Careers" />
        <main>
          <div className="carrers__container">
            <section className="carrers">
                <div className="paynow">
                    <h4>Click the button to pay</h4>                      
                    <form id="payment">
                      </form> 
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
              max-width: 600px;
              margin: 0 auto;
            }
            .carrers {
              padding: 20px;
              padding-bottom: 50px;
            }
            
            h4 {
              color: #4183c4;
              margin-bottom: 0;
              font-size: 1.3125rem;
              margin-bottom: 80px;
            }
            .paynow{
                width: 500px;
                height: 63vh;
                border: 1px solid greenyellow;
                background: #f5f5f5;
                text-align: center;
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
              .paynow{
                  width: 360px;
                  height: 45vh;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
