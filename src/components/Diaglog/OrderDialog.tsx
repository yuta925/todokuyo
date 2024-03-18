import { FC, useContext } from "react";
import { Button, Dialog } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../../pages/Order";

export const SimpleDialog: FC = () => {
  const navigate = useNavigate();
  const { open2 } = useContext(OrderContext);

  return (
    <>
      <Dialog open={open2} className="flex flex-row justify-center">
        <h1 className="mx-[20px] my-[40px] text-[25px]">
          <span>注文を確定しました</span>
        </h1>
        <div className="flex justify-center mb-6">
          <Button className="w-[60%]" onClick={() => navigate("/")} >
            <span className="w-[80%] text-[18px]">Homeへ戻る</span>
          </Button>
        </div>
      </Dialog>
    </>
  );
};
