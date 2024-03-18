import { FC } from "react";
import { Button, Dialog } from "@mui/material";
import { SimpleDialog } from "./OrderDialog";
import { OrderContext } from "../../pages/Order";
import { useContext } from "react";

export const CheckDialog: FC = () => {
  const { open1, setOpen1, setOpen2, setIsLoading } = useContext(OrderContext);

  const submitFn = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOpen2(true);
    }, 1000);
  };

  return (
    <>
      <Dialog open={open1}>
        <h1>注文してもよろしいですか</h1>
        <Button onClick={submitFn}>はい</Button>
        <Button onClick={() => setOpen1(false)}>いいえ</Button>
      </Dialog>
      <SimpleDialog />
    </>
  );
};
