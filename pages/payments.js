import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import razorpaySdk from "../sdk/payments/razorpay.sdk";

const Payments = (props) => {
  const [fullname, setFullname] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const [address, setAddress] = React.useState("");
  const [zipcode, setzipcode] = React.useState("");

  const displayRazorpay = (request) => {
    razorpaySdk.open(request);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (!fullname) {
      alert("Your name is required");
      return;
    }
    if (fullname.length < 3) {
      alert("Enter a valid full name");
      return;
    }
    if (amount < 1) {
      alert("Enter valid amount.");
      return;
    }
    const request = {
      name: fullname,
      amount: amount,
      address: address,
      zipcode: zipcode,
    };
    displayRazorpay(request);
  };
  const isNumber = (e) => {
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    return e.target.value === "" || re.test(e.target.value);
  };

  return (
    <div>
      <Header title="TutorBro | Payment" pathname={props?.url?.pathname} />
      <main>
        <form
          id="form"
          className="form"
          autoComplete="off"
          onSubmit={handelSubmit.bind(this)}
        >
          <br />
          <div className="form__title">Pay Now</div>
          <div className="form__subTitle">
            Fill this form, you will hear from our payment gateway partner
          </div>
          <fieldset>
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
                  onChange={(e) => setFullname(e.target.value)}
                  value={fullname}
                />
              </span>
            </div>
            <div className="form__field">
              <label htmlFor="amount">
                Amount (in USD)<sup>*</sup>
              </label>
              <span>
                <input
                  className="js-subject"
                  type="tel"
                  name="amount"
                  id="amount"
                  placeholder="Enter amount"
                  autoComplete="off"
                  onChange={(e) => {
                    if (isNumber(e)) {
                      setAmount(e.target.value);
                    }
                  }}
                  pattern="\d*"
                  typeof="number"
                  value={amount}
                />
              </span>
            </div>
            <div className="form__field">
              <label htmlFor="zipcode">Zipcode</label>
              <span>
                <input
                  className="js-subject"
                  type="tel"
                  name="zipcode"
                  id="address"
                  placeholder="Enter zipcode"
                  autoComplete="off"
                  onChange={(e) => {
                    if (isNumber(e)) setzipcode(e.target.value);
                  }}
                  pattern="\d*"
                  typeof="number"
                  value={zipcode}
                />
              </span>
            </div>
            <div className="form__field bottom_field">
              <label htmlFor="address">Address</label>
              <span>
                <textarea
                  className="js-subject"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter address"
                  autoComplete="off"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />
              </span>
            </div>
          </fieldset>
          <footer>
            <div className="btns">
              <button className="btn" type="submit">
                Pay
              </button>
            </div>
          </footer>
          <style jsx>
            {`
              .bottom_field {
                border-bottom: 1px solid rgba(0, 0, 0, 0.15) !important;
              }
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
};

export default Payments;
