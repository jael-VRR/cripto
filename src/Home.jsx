import { useEffect, useState } from "react";
import axios from "axios";
import TableCoins from "./components/TableCoins.jsx";
import { Container } from "reactstrap";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    console.log(res.data);
    setCoins(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="wrapper-table">
      <h1>Tabla crypto monedas</h1>
      <Container>
        <div>
          <input
            type="text"
            placeholder="Search a coin"
            style={{ color: "white" }}
            className="form-control bg-dark text-ligth text-center"
            autoFocus
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <TableCoins coins={coins} search={search} />
      </Container>
    </div>
  );
};

export default Home;
