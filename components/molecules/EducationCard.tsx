import React, { FC } from "react";
import Education from "../../interface/education";
import Card from "../atoms/Card";

const EducationCard: FC<Education> = ({
  school,
  degree,
  field,
  startYear,
  endYear,
  grade,
  description,
}) => {
  return (
    <Card className="mb-4 cursor-pointer edu-card-list">
      <p className="text-lg	font-bold">{school}</p>
      <p>
        {degree} <span>{field} </span>
        <span>
          ({startYear} - {endYear})
        </span>
      </p>
      <p>Grade: {grade}</p>
      <p>{description}</p>
    </Card>
  );
};

export default EducationCard;
