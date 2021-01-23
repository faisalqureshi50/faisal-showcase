import React from "react";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { setUser } from "../../store/slice/userSlice";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const HomeForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();
  const onSubmit = handleSubmit((data) => {
    dispatch(setUser({ name: data.name }));
    router.push("/education");
  });

  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <p className="text-xl mb-4 text-center font-medium">Enter your name and press Submit</p>
        <form className="text-center" onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="John Doe"
            name="name"
            ref={register({ required: "Name is required", pattern: /^[a-z ,.'-]+$/i })}
            error={errors.name?.message}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default HomeForm;
