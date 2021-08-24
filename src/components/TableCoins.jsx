import React from "react";
import { Table } from "reactstrap";
import CoinRow from "./CoinRow";

const titles=["#", "Coin", "Price", "Price Change", "24h volume"]
const tableCoins = ({ coins }) => {
  return (
    <Table dark>
      <thead>
        <tr>
          {titles.map((title,i) =>(
            <td key={i}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {coins.map((coin,index) => (
          <CoinRow coin={coin} index={index+1} key={index}/>
       
        ))}
      </tbody>
    </Table>
  );
};

export default tableCoins;
