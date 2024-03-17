import { ImageList, ImageListItem } from "@mui/material";
import { useContext } from "react";
import { OrderContext } from "../../pages/Order";

export const GoodsList = () => {
  const { goods, setGoods } = useContext(OrderContext);

  const selectGood = ({ good }: { good: any }) => {
    // alert("登録されました");
    setGoods([...goods, { good: good.goodname, selected: true }]);
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
              return <>{good.selected ?? <h1>登録済み</h1>}</>;
            })}
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

const Goods = [
  { goodname: "鹿せんべい", img: "sikasenbei.png" },
  { goodname: "いちご", img: "itigo.png" },
  { goodname: "バナナ", img: "banana.png" },
  { goodname: "ヨーグルト", img: "yogurt.png" },
  { goodname: "牛乳", img: "gyunyu.png" },
  { goodname: "納豆", img: "natto.png" },
  { goodname: "沢庵", img: "takuwan.png" },
  { goodname: "味噌", img: "miso.png" },
];
