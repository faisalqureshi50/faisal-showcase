import { useRouter } from "next/router";
import React, { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/atoms/Loader";
import EducationList from "../components/organisms/EducationList";
import EducationSidebar from "../components/organisms/EducationSidebar";
import { RootState } from "../store/reducer";

const Education = () => {
  const { name } = useSelector((state: RootState) => state.user);
  const router = useRouter();

  useLayoutEffect(() => {
    if (!name) {
      router.push("/");
    }
  }, [name]);

  if (!name) return <Loader />;

  return (
    <div className="w-full">
      <div className="flex mb-5 justify-center text-2xl">
        Welcome to <p className="font-bold mr-1 ml-1">{name}&apos;s</p> education page...
      </div>
      <div className="flex">
        <EducationSidebar />
        <EducationList />
      </div>
    </div>
  );
};

export default Education;
