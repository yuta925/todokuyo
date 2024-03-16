import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

import Modal from "react-modal";

export const CartModal = () => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

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
      </Modal>
    </>
  );
};
