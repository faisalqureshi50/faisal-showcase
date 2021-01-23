import { X } from "heroicons-react";
import React, { FC } from "react";
import RCModal, { Props as ModalProps } from "react-modal";

export interface Props extends ModalProps {
  title?: string;
}

RCModal.setAppElement("#modal");

const Modal: FC<Props> = ({ children, title, ...props }) => {
  return (
    <RCModal
      overlayClassName="outline-none bg-black flex justify-center items-center fixed inset-0 overflow-y-auto overflow-x-hidden bg-opacity-25"
      className="outline-none max-w-3xl relative overflow-y-auto bg-white rounded m-4 mt-12 flex flex-col w-full"
      {...props}
    >
      <div className="flex justify-between border-b p-3">
        {title && <p>{title}</p>}
        <X onClick={props.onRequestClose} className="cursor-pointer" />
      </div>
      <div className="p-3">{children}</div>
    </RCModal>
  );
};

export default Modal;
