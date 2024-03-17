import { FC } from "react";

type Title = {
  title: string;
};

export const Header: FC<Title> = ({ title }) => {
  return (
    <>
      <h1 className="text-2xl h-[50px]">{title}</h1>
    </>
  );
};
