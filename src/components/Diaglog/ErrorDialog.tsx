import { Button } from "@mui/material";
import { FC, useContext } from "react";
import { OrderContext } from "../../pages/Order";

export const ErrorDialog: FC = () => {
  const { setOpen1 } = useContext(OrderContext);
  return (
    <>
      <h1>テスト</h1>
      <Button onClick={() => setOpen1(false)} />
    </>
  );
};
