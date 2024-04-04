//import axios from "axios";
import { RAZORPAY_KEY_ID, RAZORPAY_SECRET_KEY } from "../../config";

const razorpay = (request) => {
  var options = {
    key: RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
    amount: request.amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "USD", //request.currencyCode,
    name: "TutorBro Pvt Ltd", //your business name
    description: "TutorBro Transaction",
    image:
      "https://res.cloudinary.com/dtq6u9rp1/image/upload/v1711986571/tutorbro/tutorbro.png",
    //order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    callback_url: window.location.origin + "/payments/payment-success",
    redirect: true,
    handler: function (response) {
      localStorage.setItem("payment_id", response.razorpay_payment_id);
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
  var res = rzp1.open();
  console.log("res : " + res);
};

export default razorpay;
