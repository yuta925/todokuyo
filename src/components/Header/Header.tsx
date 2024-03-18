import { FC } from "react";

type Title = {
  title: string;
};

export const Header: FC<Title> = ({ title }) => {
  return (
    <div className="min-h-32 flex items-center justify-center">
      <h1 className="text-2xl h-[50px]">{title}</h1>
    </div>
  );
};
