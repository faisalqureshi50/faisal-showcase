import React, { FC, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { debounce } from "../../utils/debounce";
import Button from "../atoms/Button";
import Input from "../molecules/Input";
import Select from "../molecules/Select";
import Textarea from "../molecules/Textarea";
import { nanoid } from "nanoid";
import Education from "../../interface/education";

const dates = (isEndDate: boolean) => {
  const startDate = new Date("1900-01-01");
  const endDate = new Date();
  if (isEndDate) {
    endDate.setFullYear(2030);
  }
  const dates = [];
  while (startDate < endDate) {
    dates.push({
      label: `${endDate.getFullYear()}`,
      value: `${endDate.getFullYear()}`,
    });
    endDate.setFullYear(endDate.getFullYear() - 1);
  }
  return dates;
};

const listUrl = "http://universities.hipolabs.com/search";
export const loadColleges = async (search: string) => {
  const result = await fetch(`${listUrl}?name=${search}`);
  const colleges = await result.json();
  return colleges.map((college: any) => ({
    label: college.name,
    value: college.name,
  }));
};

export const loadOptions = debounce(async (inputValue: string, callback) => {
  if (inputValue.length < 2) {
    return callback([]);
  }
  callback(await loadColleges(inputValue));
}, 1000);

type FormType = {
  school: { label: string; value: string };
  degree: string;
  field: string;
  startYear: { label: string; value: string };
  endYear: { label: string; value: string };
  grade?: string;
  description?: string;
};

interface Props {
  afterSubmit(education: Education): void;
  education?: Education;
}

const EducationForm: FC<Props> = ({ afterSubmit, education }) => {
  const { register, handleSubmit, errors, control, watch, setValue } = useForm();
  const { startYear } = watch(["startYear"]);

  useEffect(() => {
    if (education) {
      setValue("degree", education.degree);
      setValue("field", education.field);
      setValue("description", education.description);
      setValue("grade", education.grade);
      setValue("startYear", { label: `${education.startYear}`, value: `${education.startYear}` });
      setValue("endYear", { label: `${education.endYear}`, value: `${education.endYear}` });
      setValue("school", { label: `${education.school}`, value: `${education.school}` });
    }
  }, [setValue, education]);

  const onSubmit = handleSubmit((data: FormType) => {
    const payload = {
      ...data,
      id: education?.id ?? nanoid(),
      school: data.school.value,
      startYear: +data.startYear.value,
      endYear: +data.endYear.value,
    };
    afterSubmit(payload);
  });

  return (
    <form onSubmit={onSubmit}>
      <Controller
        name="school"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <Select
            value={value}
            options={dates(false)}
            isMulti={false}
            isAsync={true}
            placeholder="eg: Harvard"
            label="School"
            required
            onChange={onChange}
            cacheOptions
            loadOptions={loadOptions}
            error={errors.school?.message}
          />
        )}
        rules={{
          validate: (data) => {
            if (!data) {
              return "School is required";
            }
          },
        }}
      />
      <Input
        label="Degree"
        type="text"
        placeholder="eg: Bachelor's"
        name="degree"
        ref={register({ required: "Degree is required", pattern: /^[a-z ,.'-]+$/i })}
        error={errors.degree?.message}
        required
      />
      <Input
        label="Field"
        type="text"
        placeholder="eg: Computer Engineering"
        name="field"
        ref={register({ required: "Field is required", pattern: /^[a-z ,.'-]+$/i })}
        error={errors.field?.message}
        required
      />
      <div>
        <Controller
          name="startYear"
          control={control}
          defaultValue=""
          render={({ onChange, value }) => (
            <Select
              value={value}
              options={dates(false)}
              isMulti={false}
              placeholder="eg: 2020"
              label="Start Year"
              required
              onChange={onChange}
              error={errors.startYear?.message}
            />
          )}
          rules={{
            validate: (data) => {
              if (!data) {
                return "Start Year is required";
              }
            },
          }}
        />
        <Controller
          name="endYear"
          control={control}
          defaultValue=""
          render={({ onChange, value }) => (
            <Select
              value={value}
              options={dates(true)}
              isMulti={false}
              placeholder="eg: 2024"
              label="End Year"
              required
              onChange={onChange}
              error={errors.endYear?.message}
            />
          )}
          rules={{
            validate: (data) => {
              if (!data) {
                return "End Year is required";
              }
              if (data.value < startYear?.value) {
                return "End Year cannot be less than start year";
              }
            },
          }}
        />
      </div>
      <Input label="Grade" type="text" placeholder="3.5" name="grade" ref={register()} />
      <Textarea label="Description" placeholder="about you" name="description" ref={register()} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default EducationForm;
