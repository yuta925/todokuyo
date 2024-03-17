import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button } from "@mui/material";
import { SimpleDialog } from "../components/Diaglog/OrderDialog";

import { CartModal } from "../components/CartModal/CartModal";
import { GoodsList } from "../components/GoodsList/GoodsList";

import ReactLoading from "react-loading";
import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export type GoodProps = {
  name: string;
  good: string;
  selected: boolean;
};

export const OrderContext = createContext<{
  goods: GoodProps[];
  setGoods: React.Dispatch<React.SetStateAction<GoodProps[]>>;
  editModalIsOpen: boolean;
  setEditModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>(
  {} as {
    goods: GoodProps[];
    setGoods: React.Dispatch<React.SetStateAction<GoodProps[]>>;
    editModalIsOpen: boolean;
    setEditModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
);

export const Order = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [goods, setGoods] = useState<GoodProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const submitFn = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOpen(true);
    }, 1000);
  };

  return (
    <OrderContext.Provider
      value={{
        goods: goods,
        setGoods: setGoods,
        editModalIsOpen: editModalIsOpen,
        setEditModalIsOpen: setEditModalIsOpen,
      }}
    >
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
      {isLoading ?? (
        <ReactLoading
          type="spin"
          color="black"
          height="200px"
          width="20px"
          className="mx-auto mt-[200px] z-30"
        />
      )}
      <GoodsList />
    </OrderContext.Provider>
  );
};
