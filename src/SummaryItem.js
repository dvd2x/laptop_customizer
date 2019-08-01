import React from "react";
import Currency from "./Currency";

function SummaryItem(props) {
  const { title, name, cost } = props;
  return (
    <div className="summary__option" key={title}>
      <div className="summary__option__label">{title} </div>
      <div className="summary__option__value">{name}</div>
      <div className="summary__option__cost">
        <Currency amount={cost} />
      </div>
    </div>
  );
}

export default SummaryItem;
