import { FC } from "react";
import { Button } from "@mui/material";
import { SimpleDialog } from "./OrderDialog";
import { OrderContext } from "../../pages/Order";
import { useContext } from "react";

export const CheckDialog: FC = () => {
  const { setOpen1, setOpen2, setIsLoading } = useContext(OrderContext);

  const submitFn = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOpen2(true);
    }, 1000);
  };

  return (
    <>
      <h1>注文してもよろしいですか</h1>
      <Button onClick={submitFn}>はい</Button>
      <Button onClick={() => setOpen1(false)}>いいえ</Button>
      <SimpleDialog />
    </>
  );
};
