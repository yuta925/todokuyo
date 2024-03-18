import { ImageList, ImageListItem } from "@mui/material";
import { useContext } from "react";
import { OrderContext } from "../../pages/Order";
import { Goods } from "../../assets/Goods";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const GoodsList = () => {
  const { goods, setGoods } = useContext(OrderContext);

  const selectGood = ({ good }: { good: any }) => {
    const existingGoodIndex = goods.findIndex((g) => g.good === good.goodname);

    if (existingGoodIndex !== -1) {
      const newGoods = [...goods];
      newGoods[existingGoodIndex] = {
        ...newGoods[existingGoodIndex],
        selectNum: newGoods[existingGoodIndex].selectNum + 1,
      };
      setGoods(newGoods);
    } else {
      setGoods([
        ...goods,
        { name: good.name, good: good.goodname, selected: true, selectNum: 1 },
      ]);
    }
  };

  return (
    <div className="-z-1 sticky top-[120px]">
      <ImageList cols={2} gap={20}>
        {Goods.map((good) => (
          <ImageListItem key={good.goodname} className="border border-teal-600">
            <img
              src={good.img}
              alt={good.goodname}
              onClick={() => {
                selectGood({ good });
                good.selected = true;
              }}
            />
            {goods.map((good) => {
              return (
                <>{good.selected ?? <h1 className="bg-black">登録済み</h1>}</>
              );
            })}
            <div className="grid grid-cols-7">
              <p className="border border-t-zinc-950 col-start-1 col-end-5">
                {good.goodname}
              </p>
              {good.selected && (
                <CheckCircleIcon className="col-start-7 col-end-8" />
              )}
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};
