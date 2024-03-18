import { FC } from "react";
import {
  Avatar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { SimpleDialog } from "./OrderDialog";
import { OrderContext } from "../../pages/Order";
import { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import FolderIcon from "@mui/icons-material/Folder";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

export const CheckDialog: FC = () => {
  const { setOpen1, setOpen2, setIsLoading, goods, setGoods } =
    useContext(OrderContext);
  const [dense, setDense] = useState(false);

  const submitFn = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOpen2(true);
    }, 1000);
    const goodsRef = collection(db, "goods");
    goods.forEach(async (good) => {
      await addDoc(goodsRef, { goodName: good.good, num: good.selectNum });
    });
  };

  return (
    <div className="flex flex-col mx-4 mt-6 h-auto w-auto">
      <List dense={true}>
        {goods.map((good) => (
          <ListItem
            secondaryAction={
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
            }
          >
            <ListItemAvatar>
              <Avatar>
                {/** ここのアイコン変える */}
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <p className="text-2xl">{good.good}</p>
            <p className="text-2xl pl-3 justify-end">{good.selectNum}</p>
          </ListItem>
        ))}
      </List>
      <h1 className="h-[30%] flex basis-14 flex-row justify-center items-end text-2xl pb-2">
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
