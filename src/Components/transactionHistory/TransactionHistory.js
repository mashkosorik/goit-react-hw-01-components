import React from "react";
import s from "../transactionHistory/transactionHistory.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {transactions.map(({ type, amount, currency, id }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};


TransactionHistory.defaultProps = {
  type: "",
  amount: 0,
  currency: 0
};

TransactionHistory.propTypes = {
  ltype: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.number,
};

export default TransactionHistory;
