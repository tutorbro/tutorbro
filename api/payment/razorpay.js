const razorpay = (request) => {
  console.log(request);
  var options = {
    key: "rzp_live_XzyAfLeHVMcrlS", // Enter the Key ID generated from the Dashboard
    amount: request.amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "TutorBro Pvt Ltd", //your business name
    description: "TutorBro Transaction",
    image:
      "https://res.cloudinary.com/dtq6u9rp1/image/upload/v1711986571/tutorbro/tutorbro.png",
    //order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    callback_url: window.location.href,
    prefill: {
      //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
      name: request.name, //your customer's name
      email: request.email,
      contact: request.contact, //Provide the customer's phone number for better conversion rates
      address: request.address,
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#2ca5ce",
    },
  };
  var rzp1 = new Razorpay(options);
  rzp1.open();
};

export default razorpay;
