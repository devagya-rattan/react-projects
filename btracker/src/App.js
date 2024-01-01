import "./App.css";
import CoinInfo from "./Components/CoinInfo";
// import Header from "./Components/Header";
import { APIContextProvider } from "./Components/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Singlecoin from "./Components/Singlecoin";
function App() {
  return (
    <>
      <APIContextProvider>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<CoinInfo />} />
            <Route path="/coin/:name" element={<Singlecoin />} />
          </Routes>
        </BrowserRouter>
      </APIContextProvider>
    </>
  );
}

export default App;
