import { FC, useContext } from "react";
import { Button, Dialog } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../../pages/Order";

export const SimpleDialog: FC = () => {
  const navigate = useNavigate();
  const { open2 } = useContext(OrderContext);

  return (
    <>
      <Dialog open={open2}>
        <h1>注文を確定しました</h1>
        <Button onClick={() => navigate("/")}>Homeへ戻る</Button>
      </Dialog>
    </>
  );
};
