import React, { FC } from "react";
import Modal, { Props as ModalProps } from "../atoms/Modal";
import Education from "../../interface/education";
import EducationForm from "../organisms/EducationForm";
import { useDispatch } from "react-redux";
import { addEducation, updateEducation } from "../../store/slice/educatiionSlice";

interface Props extends ModalProps {
  education?: Education;
  onRequestClose(): void;
}

const EducationModal: FC<Props> = ({ education, ...props }) => {
  const dispatch = useDispatch();
  const afterSubmit = (current: Education) => {
    if (!education) {
      dispatch(addEducation(current));
    } else {
      dispatch(updateEducation(current));
    }
    props.onRequestClose();
  };

  return (
    <Modal {...props}>
      <EducationForm education={education} afterSubmit={afterSubmit} />
    </Modal>
  );
};

export default EducationModal;
