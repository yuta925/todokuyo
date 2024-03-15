import { FC } from "react";

type Title = {
  title: string;
};

export const Header: FC<Title> = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};
