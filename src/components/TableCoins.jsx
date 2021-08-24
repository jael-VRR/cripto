import React from "react";
import { Table } from "reactstrap";

const tableCoins = ({ coins }) => {
  return (
    <Table dark>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
  
          <th scope="row">1</th>
          {coins.map((coin) => (
            <tr>{coin.name}</tr>
          ))}
      
      </tbody>
    </Table>
  );
};

export default tableCoins;
