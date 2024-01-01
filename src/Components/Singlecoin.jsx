import React from "react";
import { useParams } from "react-router-dom";
import { useAPI } from "./Context";

const Singlecoin = () => {
  const { users } = useAPI();
  const { name } = useParams();
  console.log(name);
  // const find  = users.id===id?"true":"false";
  const filteredItems = users.filter((currency) =>
    currency.name.includes(name)
  );
  console.log(filteredItems);
  return (
    <>
      {filteredItems.map((items) => {
        return (
          <>
            <h1
              style={{
                color: "white",
                textTransform: "capitalize",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              {items.id} Data
            </h1>
            <div class="grid-container">
              <div class="grid-item">
                {" "}
                <img id="coin-image" src={items.image} alt={items.image} />
                Name: {items.id}
              </div>
              <div class="grid-item">Symbol: {items.symbol}</div>
              <div class="grid-item"> Capital: {items.market_cap}</div>
              <div class="grid-item">
                Market Capital Change: {items.market_cap_change_percentage_24h}
              </div>
              <div class="grid-item">Market_Cap_Rank: {items.market_cap_rank}</div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Singlecoin;
