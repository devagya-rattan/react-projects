import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      );
      console.log(data);
      setUsers(data);
    }
    fetchData();
  }, []);
  return (
    <APIContext.Provider
      value={{
        users
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
