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
        <h1 className="mx-[50px] my-[65px] text-[25px]">
          <span>注文を確定しました</span>
        </h1>
        <div className="flex justify-center mb-8  ">
          <Button className="w-[60%]" onClick={() => navigate("/")} >
            <span className="w-[80%] text-[23px]">Homeへ戻る</span>
          </Button>
        </div>
      </Dialog>
    </>
  );
};
