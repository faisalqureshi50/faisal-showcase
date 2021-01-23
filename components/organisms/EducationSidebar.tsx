import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import EducationInfo from "../molecules/EducationInfo";
import EducationModal from "../molecules/EducationModal";

const EducationSidebar = () => {
  const [open, setOpen] = useState(false);
  const { educations } = useSelector((state: RootState) => state);

  const onRequestClose = () => {
    setOpen(false);
  };

  // Listing of Education details by descending order of StartYear
  const sortedEducation = useMemo(() => {
    return [...educations].sort((a, b) => (a.startYear > b.startYear ? -1 : 1));
  }, [educations]);

  return (
    <Card className="w-1/3 mr-4">
      <Button className="w-full truncate" onClick={() => setOpen(true)}>
        Add New Education
      </Button>
      <EducationModal title="Add New Education" isOpen={open} onRequestClose={onRequestClose} />
      <div className="mt-4">
        {sortedEducation.map((education) => (
          <EducationInfo key={education.id} {...education} />
        ))}
      </div>
    </Card>
  );
};

export default EducationSidebar;
