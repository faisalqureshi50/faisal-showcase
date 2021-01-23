import { Pencil, Trash } from "heroicons-react";
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import Education from "../../interface/education";
import { deleteEducation } from "../../store/slice/educatiionSlice";
import DeleteModal from "./DeleteModal";
import EducationModal from "./EducationModal";

const EducationInfo: FC<Education> = (education) => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteEducation(education.id));
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onEditClose = () => {
    setEditOpen(false);
  };

  return (
    <div className="font-bold pt-3 pb-3 flex justify-between overflow-scroll border-b-2">
      <span>{education.school}</span>{" "}
      <div className="flex">
        <Pencil onClick={() => setEditOpen(true)} className="cursor-pointer" />
        <Trash onClick={() => setOpen(true)} className="cursor-pointer" />
      </div>
      <DeleteModal onRequestClose={handleClose} onDelete={handleDelete} isOpen={open} />
      <EducationModal
        title="Update Education"
        education={education}
        isOpen={editOpen}
        onRequestClose={onEditClose}
      />
    </div>
  );
};

export default EducationInfo;
