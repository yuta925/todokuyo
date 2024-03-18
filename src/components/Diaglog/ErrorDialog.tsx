import { Button } from "@mui/material";
import { FC, useContext } from "react";
import { OrderContext } from "../../pages/Order";

export const ErrorDialog: FC = () => {
  const { setOpen1 } = useContext(OrderContext);
  return (
    <div className="flex flex-col m-4">
      <h1 className = "m-4">カートに商品が登録されていません</h1>
      <Button onClick={() => setOpen1(false)} 
      >OK</Button>
    </div>
  );
};
