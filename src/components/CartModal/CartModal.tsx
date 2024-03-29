import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import { useContext } from "react";
import { OrderContext } from "../../pages/Order";
import Modal from "react-modal";
import { useModalScrollLock } from "../../hooks/useModalScrollLock";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const MODAL_ID = "modal";

export const CartModal = () => {
  const { goods, setGoods, editModalIsOpen, setEditModalIsOpen } =
    useContext(OrderContext);

  useModalScrollLock({ isModalOpen: editModalIsOpen });

  return (
    <div id={MODAL_ID}>
      <Modal
        isOpen={editModalIsOpen}
        className="mt-[50px] bg-white h-[100%] px-5"
        ariaHideApp={false}
      >
        <div className="flex justify-end -p-5 -mb-7 pl-5">
          <Button onClick={() => setEditModalIsOpen(false)}>
            <CancelIcon fontSize="large" />
            <p className="text-3xl">閉じる</p>
          </Button>
        </div>

        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            <p className="text-5xl font-bold">注文リスト</p>
            <hr className="h-2 bg-gray-200 border-0 dark:bg-gray-700 rounded"></hr>
          </Typography>
          {goods.length === 0 ? (
            <h1 className="text-2xl">買い物かごに何も入っていません</h1>
          ) : (
            <Demo>
              <List dense={true}>
                {goods.map((good) => {
                  return (
                    good.selected && (
                      <ListItem
                        secondaryAction={
                          <>
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              onClick={() => {
                                setGoods((prevGoods) =>
                                  prevGoods.map((prevGood) =>
                                    prevGood === good
                                      ? {
                                          ...prevGood,
                                          selectNum: prevGood.selectNum + 1,
                                        }
                                      : prevGood
                                  )
                                );
                              }}
                              className="pl-4"
                            >
                              <ArrowUpwardIcon />
                            </IconButton>
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              onClick={() => {
                                setGoods((prevGoods) =>
                                  prevGoods.map((prevGood) =>
                                    prevGood === good
                                      ? {
                                          ...prevGood,
                                          selectNum: prevGood.selectNum - 1,
                                        }
                                      : prevGood
                                  )
                                );
                              }}
                              className="pl-2"
                            >
                              <ArrowDownwardIcon />
                            </IconButton>
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
                          <Avatar>
                            {/** ここのアイコン変える */}
                            <FolderIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <div className="flex space-x-4 grow">
                          <div>
                            <p className="text-2xl">
                              {good.good} {good.selectNum}個
                            </p>
                          </div>
                        </div>
                      </ListItem>
                    )
                  );
                })}
              </List>
            </Demo>
          )}
        </Grid>
      </Modal>
    </div>
  );
};
