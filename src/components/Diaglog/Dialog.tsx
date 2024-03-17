import { FC } from "react";
import { Button, Dialog } from "@mui/material";
import { useNavigate } from "react-router-dom";

export type DialogProps = {
  open: boolean;
};

export const SimpleDialog: FC<DialogProps> = ({ open }) => {
  const navigate = useNavigate();
  return (
    <>
      <Dialog open={open}>
        <h1>注文を確定しました</h1>
        <Button onClick={() => navigate("/")}>Homeへ戻る</Button>
      </Dialog>
    </>
  );
};
