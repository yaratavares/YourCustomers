import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { SetStateAction } from "react";

const style = {
  box: {
    overflow: "auto",
    height: "100vh",
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  },
};

interface Props {
  children: React.ReactNode;
  activeModal: boolean;
  setActiveModal: React.Dispatch<SetStateAction<boolean>>;
}

export default function BasicModal({
  children,
  activeModal,
  setActiveModal,
}: Props) {
  return (
    <Modal
      open={activeModal}
      onClose={() => setActiveModal(!activeModal)}
      aria-labelledby="modal"
    >
      <Box sx={style.box}>
        <div>{children}</div>
      </Box>
    </Modal>
  );
}
