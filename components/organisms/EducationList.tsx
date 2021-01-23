import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import EducationCard from "../molecules/EducationCard";

const EducationList = () => {
  const { educations } = useSelector((state: RootState) => state);

  const sortedEducation = useMemo(() => {
    return [...educations].sort((a, b) => (a.startYear > b.startYear ? -1 : 1));
  }, [educations]);

  return (
    <div className="w-2/3 ">
      {sortedEducation.map((education) => (
        <EducationCard key={education.id} {...education} />
      ))}
    </div>
  );
};

export default EducationList;
