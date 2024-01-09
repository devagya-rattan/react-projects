import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=ae10929e6242461799f62217240801&q=London&aqi=no`
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