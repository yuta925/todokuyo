import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { GoodsList } from "./components/GoodsList/GoodsList";
import { Order } from "./pages/Order";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GoodsList />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
