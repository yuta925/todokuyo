import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Order } from "./pages/Order";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
