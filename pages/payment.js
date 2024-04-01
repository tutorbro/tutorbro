import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { initGA, logPageView } from "../utils/analytics";
import razorpay from "../api/payment/razorpay";
import validate from "../utils/validate";
import axios from "axios";

export default class chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      mobilenumber: "",
      amount: 0,
      address: "",
      countryCode: "",
    };
  }
  componentDidMount() {
    initGA();
    logPageView();
    axios
      .get("https://ip-info.now.sh/")
      .then(({ data }) => {
        this.setState({ countryCode: data.country_code });
      })
      .catch((err) => console.log(err));
  }
  async handelSubmit(e) {
    e.preventDefault();

    const { fullname, email, mobilenumber, amount, countryCode, address } =
      this.state;
    if (!validate(mobilenumber, email, fullname, countryCode)) return;
    if (amount < 1) {
      alert("Enter valid amount.");
      return;
    }
    const request = {
      name: fullname,
      contact: countryCode + mobilenumber,
      email: email,
      amount: amount,
      address: address,
    };
    razorpay(request);
  }
  render() {
    return (
      <div>
        <Header
          title="TutorBro | Payment"
          pathname={this.props?.url?.pathname}
        />
        <main>
          <form
            id="form"
            className="form"
            autoComplete="off"
            onSubmit={this.handelSubmit.bind(this)}
          >
            <br />
            <div className="form__title">Pay Now</div>
            <br />
            <div className="form__subTitle">
              Fill this form, you will hear from our tutor in 5 mins or less
            </div>
            <fieldset>
              <div className="form__field">
                <label htmlFor="mobilenumber">
                  Mobile Number<sup>*</sup>
                </label>
                <span>
                  <input
                    ref={(node) => {
                      global.firstInput = node;
                    }}
                    className="js-mobilenumber"
                    type="tel"
                    name="mobilenumber"
                    id="mobilenumber"
                    placeholder="9999988888"
                    autoComplete="off"
                    onChange={(e) =>
                      this.setState({ mobilenumber: e.target.value })
                    }
                    maxLength={10}
                    value={this.state.mobilenumber}
                  />
                </span>
              </div>
              <div className="form__field">
                <label htmlFor="email">
                  Email<sup>*</sup>
                </label>
                <span>
                  <input
                    className="js-email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@example.com"
                    autoComplete="off"
                    onChange={(e) => this.setState({ email: e.target.value })}
                    value={this.state.email}
                  />
                </span>
              </div>
              <div className="form__field">
                <label htmlFor="fullname">
                  Full Name<sup>*</sup>
                </label>
                <span>
                  <input
                    className="js-fullname"
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="your name"
                    autoComplete="off"
                    onChange={(e) =>
                      this.setState({ fullname: e.target.value })
                    }
                    value={this.state.fullname}
                  />
                </span>
              </div>
              <div className="form__field">
                <label htmlFor="amount">Amount (in INR)</label>
                <span>
                  <input
                    className="js-subject"
                    type="number"
                    name="amount"
                    id="amount"
                    placeholder="Enter amount"
                    autoComplete="off"
                    onChange={(e) => this.setState({ amount: e.target.value })}
                    value={this.state.amount}
                  />
                </span>
              </div>
              <div className="form__field">
                <label htmlFor="address">Address</label>
                <span>
                  <input
                    className="js-subject"
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter address"
                    autoComplete="off"
                    onChange={(e) => this.setState({ address: e.target.value })}
                    value={this.state.address}
                  />
                </span>
              </div>
            </fieldset>
            <footer>
              <div className="btns">
                <button className="btn" type="submit">
                  <i className="fa fa-send-o" />
                  Pay
                </button>
                <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
              </div>
            </footer>
            {this.state.submitting && (
              <div
                className={`overlay ${this.state.submitting && "submitting"}`}
              />
            )}
            {this.state.submitting && <ReactSpinner className="spinner" />}
            <style jsx>
              {`
                .overlay {
                  background: #f9f9f9;
                  position: absolute;
                  top: 0;
                  left: 0;
                  bottom: 0;
                  right: 0;
                  opacity: 0.5;
                  z-index: 999999999;
                  display: none;
                }
                .submitting {
                  display: block;
                }
                .form {
                  position: relative;
                  margin: 0 auto;
                  max-width: 540px;
                }
                .form__title {
                  color: #607d8b;
                  font-size: 20px;
                  text-align: center;
                  font-weight: bold;
                }
                .form__subTitle {
                  text-align: center;
                  padding: 5px;
                  font-size: 16px;
                }
                fieldset {
                  margin: 0;
                  border: none;
                  position: relative;
                }
                .form__field {
                  cursor: pointer;
                  width: 100%;
                  overflow: auto;
                  position: relative;
                  padding: 6px 24px;
                  color: #444;
                  border: 1px solid rgba(0, 0, 0, 0.15);
                }
                .form__field:nth-child(2n) {
                  border-top: none;
                  border-bottom: none;
                }
                label {
                  cursor: pointer;
                  display: block;
                  line-height: 24px;
                  color: #888;
                  font-size: 14px;
                }
                input {
                  height: 24px;
                  display: block;
                  border: none;
                  width: 100%;
                  border-radius: 0;
                  font-size: 16px;
                  outline: none;
                  background: transparent;
                }
                textarea {
                  display: block;
                  width: 100%;
                  border: none;
                  outline: none;
                  height: 50px;
                  font-size: 16px;
                  background: transparent;
                }
                ::-webkit-input-placeholder {
                  /* Chrome/Opera/Safari */
                  color: #e0e0e0;
                }
                ::-moz-placeholder {
                  /* Firefox 19+ */
                  color: #e0e0e0;
                }
                :-ms-input-placeholder {
                  /* IE 10+ */
                  color: #e0e0e0;
                }
                :-moz-placeholder {
                  /* Firefox 18- */
                  color: #e0e0e0;
                }
                footer {
                  padding: 5px;
                }
                .uploaded__file {
                  font-size: 12px;
                  color: #888;
                  border: 1px solid teal;
                  border-radius: 17px;
                  padding: 10px;
                  text-align: center;
                  max-width: 300px;
                  margin: 5px auto;
                }
                .filename {
                  color: teal;
                  margin-right: 10px;
                }
                .btns {
                  display: flex;
                  justify-content: space-around;
                  padding: 10px 5px;
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
                }
                .btn:hover {
                  background: teal;
                }
                .fa {
                  margin-right: 10px;
                  font-size: 16px;
                }
                .fa-trash {
                  float: right;
                  font-size: 18px;
                  color: red;
                }
                @media (max-width: 1200px) {
                  .form {
                    max-width: 600px;
                    margin: 0 auto;
                  }
                }
              `}
            </style>
          </form>
        </main>
        <Footer />
      </div>
    );
  }
}