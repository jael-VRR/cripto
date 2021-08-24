import { useEffect,useState} from "react";
import axios from "axios";

import TableCoins from "./components/TableCoins.jsx";

const Home = () => {
  const [coins, setCoins] =useState([])
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
    <div>
      <h1>pagina principal</h1>
      <div>
        <TableCoins coins={coins} />
      </div>
    </div>
  );
};

export default Home;
