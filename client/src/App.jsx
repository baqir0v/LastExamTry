import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddPage from "./pages/Add";
import "./reset.scss"
import Wishlist from "./pages/Wishlist";
import Detail from "./pages/Detail";
import Basket from "./pages/Basket";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
