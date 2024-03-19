import { Button } from "@mui/material";
import { FC, useContext } from "react";
import { OrderContext } from "../../pages/Order";

export const ErrorDialog: FC = () => {
  const { setOpen1 } = useContext(OrderContext);
  return (
    <div className="flex flex-col m-9">
      <h1 className = "m-3 text-2xl" >
        <span>カートに商品が登録</span>
        <br />
        <span className="flex justify-center">されていません</span>
      </h1>
      <Button variant="outlined" onClick={() => setOpen1(false) } 
      >OK</Button>
    </div>
  );
};
