import {useEffect} from 'react';
import axios from 'axios';

const Home = () => {
    
const getData=async()=>{
    const res=await axios.get( "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    console.log(res)
    
} ;

useEffect(() => {
   getData()
}, [])

    return (
        <div>
            <h1>pagina principal</h1>
        </div>
    );
};

export default Home;