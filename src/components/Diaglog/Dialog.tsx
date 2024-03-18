import { useContext } from "react";
import { CheckDialog } from "./CheckDialog";
import { ErrorDialog } from "./ErrorDialog";
import { OrderContext } from "../../pages/Order";
import { Dialog } from "@mui/material";

export const Dialog1 = () => {
  const { open1, goods } = useContext(OrderContext);

  return (
    <div className="h-[40%]">
      <Dialog open={open1}>
      {goods.length === 0 ? <ErrorDialog /> : <CheckDialog />}
    </Dialog>
    </div>
  );
};
