import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useContext } from "react";
import { OrderContext } from "../../pages/Order";
import Modal from "react-modal";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const CartModal = () => {
  const [dense, setDense] = useState(false);
  const { goods, setGoods, editModalIsOpen, setEditModalIsOpen } =
    useContext(OrderContext);

  const clickFn = () => {
    setEditModalIsOpen(true);
  };

  return (
    <>
      <Button
        variant="contained"
        endIcon={<ShoppingCartIcon />}
        onClick={clickFn}
      >
        カート
      </Button>

      <Modal
        isOpen={editModalIsOpen}
        className="mt-20 bg-green h-[50%] "
        ariaHideApp={false}
      >
        <Button onClick={() => setEditModalIsOpen(false)}>閉じる</Button>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            注文リスト
          </Typography>
          {goods.length === 0 ? (
            <h1>買い物かごに何も入っていません</h1>
          ) : (
            <Demo>
              <List dense={dense}>
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
                    <ListItemText primary={good.good} />
                  </ListItem>
                ))}
              </List>
            </Demo>
          )}
        </Grid>
      </Modal>
    </>
  );
};
