import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button } from "@mui/material";

import { CartModal } from "../components/CartModal/CartModal";
import { GoodsList } from "../components/GoodsList/GoodsList";

import ReactLoading from "react-loading";
import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { CheckDialog } from "../components/Diaglog/CheckDialog";

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
  open1: boolean;
  setOpen1: React.Dispatch<React.SetStateAction<boolean>>;
  open2: boolean;
  setOpen2: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}>(
  {} as {
    goods: GoodProps[];
    setGoods: React.Dispatch<React.SetStateAction<GoodProps[]>>;
    editModalIsOpen: boolean;
    setEditModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    open1: boolean;
    setOpen1: React.Dispatch<React.SetStateAction<boolean>>;
    open2: boolean;
    setOpen2: React.Dispatch<React.SetStateAction<boolean>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  }
);

export const Order = () => {
  const navigate = useNavigate();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [goods, setGoods] = useState<GoodProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const submitFn = () => {
    setOpen1(true);
  };

  return (
    <OrderContext.Provider
      value={{
        goods: goods,
        setGoods: setGoods,
        editModalIsOpen: editModalIsOpen,
        setEditModalIsOpen: setEditModalIsOpen,
        open1: open1,
        setOpen1: setOpen1,
        open2: open2,
        setOpen2: setOpen2,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
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
        <CheckDialog />
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
