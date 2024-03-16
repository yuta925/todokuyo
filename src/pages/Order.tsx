import { useNavigate } from "react-router-dom";
import { GoodsList } from "../components/GoodsList/GoodsList";
import { Header } from "../components/Header/Header";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button } from "@mui/material";
import { CartModal } from "../components/CartModal/CartModal";
import { useState } from "react";
import { SimpleDialog } from "../components/Diaglog/Dialog";

export const Order = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const submitFn = () => {
    setOpen(true);
  };

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
        <Button variant="contained" color="error" onClick={submitFn}>
          確定
        </Button>
        <SimpleDialog open={open} />
        <CartModal />
      </div>
      <GoodsList />
    </>
  );
};
