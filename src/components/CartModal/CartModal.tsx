import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState, cloneElement } from "react";
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

import Modal from "react-modal";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    cloneElement(element, {
      key: value,
    })
  );
}

export const CartModal = () => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);
  return (
    <>
      <Button
        variant="contained"
        endIcon={<ShoppingCartIcon />}
        onClick={() => setEditModalIsOpen(true)}
      >
        カート
      </Button>
      <Modal
        isOpen={editModalIsOpen}
        className="mt-20 bg-green h-[50%] "
        ariaHideApp={false}
      >
        <h2>カート</h2>
        <Button onClick={() => setEditModalIsOpen(false)}>閉じる</Button>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text and icon
          </Typography>
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid>
      </Modal>
    </>
  );
};
