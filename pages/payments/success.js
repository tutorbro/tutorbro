import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import formattedDate from "../../utils/dateFormat";

export default class success extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payment_id: "",
      paid_on: "",
    };
  }
  componentDidMount() {
    this.setState({
      payment_id: localStorage.getItem("payment_id"),
    });
    this.setState({
      paid_on: formattedDate,
    });
  }
  render() {
    return (
      <div>
        <Header
          title="TutorBro | Payment"
          pathname={this.props?.url?.pathname}
        />
        <div className="main-container container">
          <div className="success-icon">&#10003;</div>
          <h3>Payment Successful!</h3>
          <span>
            Thank you for your purchase.
            <br /> Get more information to check your email.
          </span>
          {this.state.payment_id != null && (
            <>
              <hr className="custom-hr" />
              <strong>Payment Details</strong>
              <div className="payment-details">
                <div className="left">
                  <span>Payment Id</span>
                </div>
                <div className="right">
                  <span>{this.state.payment_id}</span>
                </div>
              </div>
              <div className="payment-details">
                <div className="left">
                  <span>Paid On</span>
                </div>
                <div className="right">
                  <span>{this.state.paid_on}</span>
                </div>
              </div>
            </>
          )}
          <a href="/payments" className="btn">
            Make New Payment
          </a>
        </div>
        <Footer />
        <style jsx>
          {`
            span {
              font-size: 0.8rem;
              color: #666;
            }
            .payment-details {
              display: flex;
              margin: 3%;
            }
            .left {
              text-align: left;
              width: 40%;
            }
            .right {
              text-align: right;
              width: 60%;
            }
            .main-container {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
              text-align: center;
            }
            .container {
              max-width: 600px;
              margin: 10px auto;
              background-color: #fff;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            h3 {
              color: #333;
            }

            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
            }

            th,
            td {
              padding: 10px;
              border-bottom: 1px solid #ddd;
            }

            th {
              background-color: #f2f2f2;
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

            .btn:hover {
              background-color: #0056b3;
            }

            .success-icon {
              font-size: 50px;
              color: #5cb85c;
            }

            p {
              color: #666;
              margin-top: 20px;
            }
            .custom-hr {
              border: none;
              border-top: 1px solid #999; /* color of the line */
              margin: 20px 0; /* adjust margin as needed */
            }
          `}
        </style>
      </div>
    );
  }
}
