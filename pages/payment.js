import React from "react";
import { RAZORPAY_PAYMENT_PAGE } from "../config";

export default class payment extends React.Component {
  componentDidMount() {
    window.location.href = RAZORPAY_PAYMENT_PAGE;
  }
  render() {
    return <></>;
  }
}
