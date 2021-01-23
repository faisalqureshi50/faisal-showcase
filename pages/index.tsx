import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/atoms/Loader";
import HomeForm from "../components/molecules/HomeForm";
import { RootState } from "../store/reducer";

export default function IndexPage() {
  const { name } = useSelector((state: RootState) => state.user);
  const router = useRouter();

  useLayoutEffect(() => {
    if (name) {
      router.push("/education");
    }
  }, [name]);

  if (name) return <Loader />;

  return (
    <div>
      <h1 className="text-4xl text-center text-accent-1 mb-8">Welcome to Education Showcase</h1>
      <HomeForm />
    </div>
  );
}
