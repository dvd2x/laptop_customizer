import React from "react";
import SummaryItem from "./SummaryItem";
import Currency from "./Currency";

function Summary(props) {
  const summary = Object.keys(props.selected).map(key => {
    const { name, cost } = props.selected[key];
    return <SummaryItem title={key} key={key} name={name} cost={cost} />;
  });

  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
  );

  return (
    <section className="main__summary">
      <h3>NEW GREENLEAF 2018</h3>
      {summary}
      <div className="summary__total">
        <div className="summary__total__label">Your Price: </div>
        <div className="summary__total__value">
          <Currency amount={total} />
        </div>
      </div>
    </section>
  );
}

export default Summary;
