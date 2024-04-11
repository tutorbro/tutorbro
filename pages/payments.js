import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useRazorpay from "react-razorpay";
import { RAZORPAY_KEY_ID, RAZORPAY_SECRET_KEY } from "../config";

//import displayRazorpay from "../api/payment/razorpay";
import validate from "../utils/validate";

const Payments = (props) => {
  const [fullname, setFullname] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const [address, setAddress] = React.useState("");
  const [pincode, setPincode] = React.useState("");

  const [Razorpay] = useRazorpay();

  const displayRazorpay = (request) => {
    var options = {
      key: RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      key_secret: RAZORPAY_SECRET_KEY,
      amount: request.amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "USD",
      name: "TUTORBRO PRIVATE LIMITED", //your business name
      description: "TutorBro Transaction",
      image:
        "https://res.cloudinary.com/dtq6u9rp1/image/upload/v1711986571/tutorbro/tutorbro.png",
      //order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: window.location.origin + "/payments/payment-success",
      redirect: true,
      handler: function (response) {
        localStorage.setItem("payment_id", response.razorpay_payment_id);
        console.log(response.razorpay_payment_id);
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: request.name, //your customer's name
        email: "",
        contact: "", //Provide the customer's phone number for better conversion rates
        address: request.address,
        pincode: request.pincode,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#2ca5ce",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      //alert("code : " + response.error.code);
      alert(response.error.description);
      // alert("source : " + response.error.source);
      // alert("step : " + response.error.step);
      // alert("reason : " + response.error.reason);
      // alert("order_id : " + response.error.metadata.order_id);
      // alert("payment_id : " + response.error.metadata.payment_id);
    });
    rzp1.open();
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    //if (!validate("9999999999", "example@tutor.com", fullname, "+91")) return;
    if (amount < 1) {
      alert("Enter valid amount.");
      return;
    }
    const request = {
      name: fullname,
      amount: amount,
      address: address,
      pincode: pincode,
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
              <label htmlFor="pincode">Pincode</label>
              <span>
                <input
                  className="js-subject"
                  type="tel"
                  name="pincode"
                  id="address"
                  placeholder="Enter pincode"
                  autoComplete="off"
                  onChange={(e) => {
                    if (isNumber(e)) setPincode(e.target.value);
                  }}
                  pattern="\d*"
                  typeof="number"
                  value={pincode}
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
              <script
                type="text/plain"
                data-cookiescript="accepted"
                data-cookiecategory="functionality"
                referrerPolicy="no-referrer"
                rel="prefetch"
                src="https://checkout.razorpay.com/v1/checkout.js"
              ></script>
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

// export default class payments extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fullname: "",
//       amount: 0,
//       address: "",
//       currencyCode: "USD",
//     };
//   }
//   async handelSubmit(e) {
//     e.preventDefault();

//     const { fullname, amount, countryCode, address, pincode, currencyCode } =
//       this.state;
//     if (!validate("9999999999", "example@tutor.com", fullname, countryCode))
//       return;
//     if (amount < 1) {
//       alert("Enter valid amount.");
//       return;
//     }
//     const request = {
//       name: fullname,
//       amount: amount,
//       address: address,
//       pincode: pincode,
//       currencyCode: currencyCode,
//     };
//     displayRazorpay(request);
//   }
//   isNumber(e) {
//     const re = /^[0-9\b]+$/;

//     // if value is not blank, then test the regex

//     return e.target.value === "" || re.test(e.target.value);
//   }

//   render() {
//     return (
//       <div>
//         <Header
//           title="TutorBro | Payment"
//           pathname={this.props?.url?.pathname}
//         />
//         <main>
//           <form
//             id="form"
//             className="form"
//             autoComplete="off"
//             onSubmit={this.handelSubmit.bind(this)}
//           >
//             <br />
//             <div className="form__title">Pay Now</div>
//             <div className="form__subTitle">
//               Fill this form, you will hear from our payment gateway partner
//             </div>
//             <fieldset>
//               <div className="form__field">
//                 <label htmlFor="fullname">
//                   Full Name<sup>*</sup>
//                 </label>
//                 <span>
//                   <input
//                     className="js-fullname"
//                     type="text"
//                     name="fullname"
//                     id="fullname"
//                     placeholder="your name"
//                     autoComplete="off"
//                     onChange={(e) =>
//                       this.setState({ fullname: e.target.value })
//                     }
//                     value={this.state.fullname}
//                   />
//                 </span>
//               </div>
//               <div className="form__field">
//                 <label htmlFor="amount">
//                   Amount (in USD)<sup>*</sup>
//                 </label>
//                 <span>
//                   <input
//                     className="js-subject"
//                     type="tel"
//                     name="amount"
//                     id="amount"
//                     placeholder="Enter amount"
//                     autoComplete="off"
//                     onChange={(e) => {
//                       if (this.isNumber(e)) {
//                         this.setState({ amount: e.target.value });
//                       }
//                     }}
//                     pattern="\d*"
//                     typeof="number"
//                     value={this.state.amount}
//                   />
//                 </span>
//               </div>
//               <div className="form__field">
//                 <label htmlFor="pincode">Pincode</label>
//                 <span>
//                   <input
//                     className="js-subject"
//                     type="tel"
//                     name="pincode"
//                     id="address"
//                     placeholder="Enter pincode"
//                     autoComplete="off"
//                     onChange={(e) => {
//                       if (this.isNumber(e))
//                         this.setState({ pincode: e.target.value });
//                     }}
//                     pattern="\d*"
//                     typeof="number"
//                     value={this.state.pincode}
//                   />
//                 </span>
//               </div>
//               <div className="form__field bottom_field">
//                 <label htmlFor="address">Address</label>
//                 <span>
//                   <textarea
//                     className="js-subject"
//                     type="text"
//                     name="address"
//                     id="address"
//                     placeholder="Enter address"
//                     autoComplete="off"
//                     onChange={(e) => this.setState({ address: e.target.value })}
//                     value={this.state.address}
//                   />
//                 </span>
//               </div>
//             </fieldset>
//             <footer>
//               <div className="btns">
//                 <button className="btn" type="submit">
//                   Pay
//                 </button>
//                 <script
//                   type="text/plain"
//                   data-cookiescript="accepted"
//                   data-cookiecategory="functionality"
//                   referrerPolicy="no-referrer"
//                   rel="prefetch"
//                   src="https://checkout.razorpay.com/v1/checkout.js"
//                 ></script>
//               </div>
//             </footer>
//             {this.state.submitting && (
//               <div
//                 className={`overlay ${this.state.submitting && "submitting"}`}
//               />
//             )}
//             {this.state.submitting && <ReactSpinner className="spinner" />}
//             <style jsx>
//               {`
//                 .bottom_field {
//                   border-bottom: 1px solid rgba(0, 0, 0, 0.15) !important;
//                 }
//                 .overlay {
//                   background: #f9f9f9;
//                   position: absolute;
//                   top: 0;
//                   left: 0;
//                   bottom: 0;
//                   right: 0;
//                   opacity: 0.5;
//                   z-index: 999999999;
//                   display: none;
//                 }
//                 .submitting {
//                   display: block;
//                 }
//                 .form {
//                   position: relative;
//                   margin: 0 auto;
//                   max-width: 540px;
//                 }
//                 .form__title {
//                   color: #607d8b;
//                   font-size: 20px;
//                   text-align: center;
//                   font-weight: bold;
//                 }
//                 .form__subTitle {
//                   text-align: center;
//                   padding: 5px;
//                   font-size: 16px;
//                 }
//                 fieldset {
//                   margin: 0;
//                   border: none;
//                   position: relative;
//                 }
//                 .form__field {
//                   cursor: pointer;
//                   width: 100%;
//                   overflow: auto;
//                   position: relative;
//                   padding: 6px 24px;
//                   color: #444;
//                   border: 1px solid rgba(0, 0, 0, 0.15);
//                 }
//                 .form__field:nth-child(2n) {
//                   border-top: none;
//                   border-bottom: none;
//                 }
//                 label {
//                   cursor: pointer;
//                   display: block;
//                   line-height: 24px;
//                   color: #888;
//                   font-size: 14px;
//                 }
//                 input {
//                   height: 24px;
//                   display: block;
//                   border: none;
//                   width: 100%;
//                   border-radius: 0;
//                   font-size: 16px;
//                   outline: none;
//                   background: transparent;
//                 }
//                 textarea {
//                   display: block;
//                   width: 100%;
//                   border: none;
//                   outline: none;
//                   height: 50px;
//                   font-size: 16px;
//                   background: transparent;
//                 }
//                 ::-webkit-input-placeholder {
//                   /* Chrome/Opera/Safari */
//                   color: #e0e0e0;
//                 }
//                 ::-moz-placeholder {
//                   /* Firefox 19+ */
//                   color: #e0e0e0;
//                 }
//                 :-ms-input-placeholder {
//                   /* IE 10+ */
//                   color: #e0e0e0;
//                 }
//                 :-moz-placeholder {
//                   /* Firefox 18- */
//                   color: #e0e0e0;
//                 }
//                 footer {
//                   padding: 5px;
//                 }
//                 .uploaded__file {
//                   font-size: 12px;
//                   color: #888;
//                   border: 1px solid teal;
//                   border-radius: 17px;
//                   padding: 10px;
//                   text-align: center;
//                   max-width: 300px;
//                   margin: 5px auto;
//                 }
//                 .filename {
//                   color: teal;
//                   margin-right: 10px;
//                 }
//                 .btns {
//                   display: flex;
//                   justify-content: space-around;
//                   padding: 10px 5px;
//                 }
//                 .btn {
//                   -webkit-appearance: none;
//                   cursor: pointer;
//                   background: #2bc186;
//                   border: none;
//                   outline: none;
//                   padding: 6px 24px;
//                   border-radius: 17px;
//                   color: #fff;
//                   line-height: 24px;
//                   font-weight: 600;
//                   font-size: 14px;
//                   transition: all 0.2s ease;
//                 }
//                 .btn:hover {
//                   background: teal;
//                 }
//                 .fa {
//                   margin-right: 10px;
//                   font-size: 16px;
//                 }
//                 .fa-trash {
//                   float: right;
//                   font-size: 18px;
//                   color: red;
//                 }
//                 @media (max-width: 1200px) {
//                   .form {
//                     max-width: 600px;
//                     margin: 0 auto;
//                   }
//                 }
//               `}
//             </style>
//           </form>
//         </main>
//         <Footer />
//       </div>
//     );
//   }
// }
