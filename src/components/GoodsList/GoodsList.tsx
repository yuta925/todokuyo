import { ImageList, ImageListItem } from "@mui/material";
import { useContext } from "react";
import { OrderContext } from "../../pages/Order";
import { Goods } from "../../assets/Goods";

export const GoodsList = () => {
  const { goods, setGoods } = useContext(OrderContext);

  const selectGood = ({ good }: { good: any }) => {
    // alert("登録されました");
    setGoods([
      ...goods,
      { name: good.name, good: good.goodname, selected: true },
    ]);
    console.log(goods);
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
