import React from "react";
import "../styles/coinRow.css";

const CoinRow = ({ coin, index }) => {
  console.log(coin, index);
  return (
    <tr>
      <td>{index} </td>
      <td className="icon-title">
        <img
          src={coin.image}
          alt="coin"
          style={{ width: "5%" }}
          className="me-4"
        />
        <span className="badge badge-light">{coin.name}</span>
        <span className="ms-2 text-muted ">{coin.symbol}</span>
      </td>
      <td>{coin.current_price}</td>
      <td
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }
      >
        {coin.price_change_percentage_24h}
      </td>
      <td>{coin.total_volume}</td>
    </tr>
  );
};

export default CoinRow;
