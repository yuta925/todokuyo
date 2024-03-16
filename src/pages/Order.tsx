import { useNavigate } from "react-router-dom";
import { GoodsList } from "../components/GoodsList/GoodsList";
import { Header } from "../components/Header/Header";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button } from "@mui/material";
import { CartModal } from "../components/CartModal/CartModal";

export const Order = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 h-[100px] sticky top-0 z-20">
        <Button
          variant="contained"
          startIcon={<KeyboardBackspaceIcon />}
          onClick={() => navigate("/")}
        >
          戻る
        </Button>
        <Button variant="contained" color="error">
          確定
        </Button>
        <CartModal />
      </div>
      <GoodsList />
    </>
  );
};
