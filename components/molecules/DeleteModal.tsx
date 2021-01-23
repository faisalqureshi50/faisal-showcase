import React, { FC } from "react";
import Modal, { Props as ModalProps } from "../atoms/Modal";
import Button from "../atoms/Button";

interface Props extends ModalProps {
  onDelete(): void;
}

const DeleteModal: FC<Props> = ({ onDelete, ...props }) => {
  return (
    <Modal {...props}>
      <h2 className="text-gray-800 font-bold text-center text-xl mb-4">
        Are you sure you want to delete this data?
      </h2>
      <div className="text-right">
        <Button
          className="mr-2"
          color="bg-red-400 border-red-400 hover:bg-red-700 hover:border-red-700"
          onClick={onDelete}
        >
          Delete
        </Button>
        <Button
          color="bg-gray-400 border-gray-400 hover:bg-gray-700 hover:border-gray-700"
          onClick={props.onRequestClose}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
