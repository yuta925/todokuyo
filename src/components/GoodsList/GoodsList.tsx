import { ImageList, ImageListItem } from "@mui/material";
import { useContext } from "react";
import { OrderContext } from "../../pages/Order";
import { Goods } from "../../assets/Goods";

export const GoodsList = () => {
  const { goods, setGoods } = useContext(OrderContext);

  const selectGood = ({ good }: { good: any }) => {
    const existingGoodIndex = goods.findIndex((g) => g.good === good.goodname);

    if (existingGoodIndex !== -1) {
      // The good already exists in the array, so we'll increase its selectNum
      const newGoods = [...goods];
      newGoods[existingGoodIndex] = {
        ...newGoods[existingGoodIndex],
        selectNum: newGoods[existingGoodIndex].selectNum + 1,
      };
      setGoods(newGoods);
    } else {
      // The good doesn't exist in the array, so we'll add it
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
          <ImageListItem
            key={good.goodname}
            className="border border-x-cyan-950"
          >
            <img
              src={good.img}
              alt={good.goodname}
              onClick={() => selectGood({ good })}
            />
            {goods.map((good) => {
              return (
                <>{good.selected ?? <h1 className="bg-black">登録済み</h1>}</>
              );
            })}
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};
