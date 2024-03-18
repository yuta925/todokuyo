import { FC } from "react";
import { Button } from "@mui/material";
import { SimpleDialog } from "./OrderDialog";
import { OrderContext } from "../../pages/Order";
import { useContext, useState } from "react";

export const CheckDialog: FC = () => {
  const { setOpen1, setOpen2, setIsLoading, goods } = useContext(OrderContext);
  const [dense, setDense] = useState(false);

  const submitFn = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOpen2(true);
    }, 1000);
  };

  return (
    <div className="flex flex-col mx-4 mt-6 h-[100px]">
      <h1 className="h-[30%]">注文してもよろしいですか</h1>
      <div className="flex basis-14 flex-row justify-center items-center mb-4 h-[70%]">
        <Button variant="outlined" onClick={submitFn} >はい</Button>
        <Button variant="outlined" onClick={() => setOpen1(false)} color="error" >いいえ</Button>
      </div>
      <SimpleDialog />
    </div>
  );
};
