import React from "react";
import { SelectLocation } from "../components/SelectLocation/SelectLocation";
import { Header } from "../components/Header/Header";

export const Home = () => {
  return (
    <>
      <Header title="移動販売ページ" />
      <SelectLocation />
    </>
  );
};
