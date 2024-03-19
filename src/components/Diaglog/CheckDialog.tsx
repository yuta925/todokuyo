import { FC } from "react";
import {
  Avatar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
} from "@mui/material";
import { SimpleDialog } from "./OrderDialog";
import { OrderContext } from "../../pages/Order";
import { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export const CheckDialog: FC = () => {
  const { setOpen1, setOpen2, setIsLoading, goods, setGoods } =
    useContext(OrderContext);

  const submitFn = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOpen2(true);
    }, 1000);
  };

  return (
    <div className="flex flex-col mx-6 mt-6 h-auto w-auto">
      <List dense={true}>
        {goods.map((good) => (
          <ListItem
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    setGoods((prevGoods) =>
                      prevGoods.filter((a) => a.good !== good.good)
                    );
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemAvatar>
              <Avatar>{/* <FolderIcon /> */}</Avatar>
            </ListItemAvatar>
            <p className="text-lg">
              {good.good} {good.selectNum}個
            </p>
          </ListItem>
        ))}
      </List>
      <h1 className="h-[30%] flex basis-14 flex-row justify-center items-end text-xl pb-2 px-2">
        以上の内容で注文しますか？
      </h1>
      <div className="flex basis-14 flex-row justify-center items-end mb-4 h-[70%]">
        <Button
          variant="outlined"
          size="large"
          onClick={submitFn}
          className="w-[110px] h-[50px]"
        >
          <p className="text-xl">はい</p>
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => setOpen1(false)}
          color="error"
          className="w-[110px] h-[50px]"
        >
          <p className="text-xl">いいえ</p>
        </Button>
      </div>
      <SimpleDialog />
    </div>
  );
};
