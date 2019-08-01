import React from "react";

function Currency(props) {
  const { locale = "en-US", currency = "USD", amount } = props;
  return (
    <span>
      {new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency
      }).format(amount)}
    </span>
  );
}

export default Currency;
