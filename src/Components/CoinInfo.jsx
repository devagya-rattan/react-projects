import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAPI } from "./Context";
const CoinInfo = () => {
  const { users } = useAPI();
  console.log(users);
  const [input, setInput] = useState("");
  const [filteredCoins, setFilteredCoins] = useState(users);
  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    const filteredItems = users.filter((currency) =>
      currency.id.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredCoins(filteredItems);
  };
  return (
    <>
      <div className="header">
        <div className="heading">Crypto Tracker</div>
        <div className="search-bar">
          <input
            value={input}
            placeholder="Search"
            type="text"
            id="search"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="coins">
        {filteredCoins.map((coin) => {
          const  coinId  = coin.name;
          return (
            <NavLink
              to={`/coin/${coinId}`}
              className="NavLink"
            >
              <div className="coin-data">
                <img id="coin-image" src={coin.image} alt={coin.image} />
                <div id="centre-data">
                  <h3>{coin.id}</h3>
                </div>
                <div id="centre-data">
                  <p>{coin.symbol}</p>
                </div>
                <div id="centre-data">
                  <p>{coin.market_cap}</p>
                </div>
                <div id="centre-data">
                  {coin.price_change_percentage_24h > 0 ? (
                    <p style={{ color: "green" }}>
                      {coin.price_change_percentage_24h}%
                    </p>
                  ) : (
                    <p style={{ color: "red" }}>
                      {coin.price_change_percentage_24h}%
                    </p>
                  )}
                </div>
                <div id="centre-data">
                  <p>
                    Mkt Cap: $
                    {coin.market_cap_change_24h > 0 ? (
                      <p style={{ color: "green" }}>
                        {coin.market_cap_change_24h}%
                      </p>
                    ) : (
                      <p style={{ color: "red" }}>
                        {coin.market_cap_change_24h}%
                      </p>
                    )}
                  </p>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default CoinInfo;