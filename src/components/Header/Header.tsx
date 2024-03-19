import { FC } from "react";

type Title = {
  title: string;
};

export const Header: FC<Title> = ({ title }) => {
  return (
    <div className="grid grid-cols-8 mt-4 ">
      <img
        src="Icon.png"
        alt="app_icon"
        className="grid col-start-2 col-end-4 ml-2 w-[100px] h-[100px] justify-center content-center round rounded-full"
      />
      <h1 className="grid text-3xl col-start-4 col-end-8 justify-center content-center">
        {title}
      </h1>
    </div>
  );
};
