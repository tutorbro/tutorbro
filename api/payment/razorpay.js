import { RAZORPAY_KEY_ID } from "../../config";
import Razorpay from "razorpay";

// const razorpay = (request) => {
//   var options = {
//     key: RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
//     key_id: RAZORPAY_KEY_ID,
//     amount: request.amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//     currency: request.currencyCode,
//     name: "TUTORBRO PRIVATE LIMITED", //your business name
//     description: "TutorBro Transaction",
//     image:
//       "https://res.cloudinary.com/dtq6u9rp1/image/upload/v1711986571/tutorbro/tutorbro.png",
//     //order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//     callback_url: window.location.origin + "/payments/payment-success",
//     redirect: true,
//     handler: function (response) {
//       localStorage.setItem("payment_id", response.razorpay_payment_id);
//       console.log(response.razorpay_payment_id);
//     },
//     prefill: {
//       //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
//       name: request.name, //your customer's name
//       email: "",
//       contact: "", //Provide the customer's phone number for better conversion rates
//       address: request.address,
//       pincode: request.pincode,
//     },
//     notes: {
//       address: "Razorpay Corporate Office",
//     },
//     theme: {
//       color: "#2ca5ce",
//     },
//   };
//   var rzp1 = new Razorpay(options);
//   rzp1.on("payment.failed", function (response) {
//     //alert("code : " + response.error.code);
//     alert(response.error.description);
//     // alert("source : " + response.error.source);
//     // alert("step : " + response.error.step);
//     // alert("reason : " + response.error.reason);
//     // alert("order_id : " + response.error.metadata.order_id);
//     // alert("payment_id : " + response.error.metadata.payment_id);
//   });
//   rzp1.open();
// };

// export default razorpay;

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const displayRazorpay = (request) => {
  const res = loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  var options = {
    key: RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
    key_id: RAZORPAY_KEY_ID,
    amount: request.amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: request.currencyCode,
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

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

export default displayRazorpay;
