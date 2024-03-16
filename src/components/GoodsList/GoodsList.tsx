import { ImageList, ImageListItem } from "@mui/material";
import { useState } from "react";
// import golang from "src/golang.webp";

export const GoodsList = () => {
  const [goods, setGoods] = useState<string[]>([]);
  return (
    <div className="-z-1 sticky top-[120px]">
      <ImageList cols={2} gap={20}>
        {Goods.map((good) => (
          <ImageListItem key={good.goodname}>
            <img
              src={good.img}
              alt={good.goodname}
              onClick={() => setGoods([good.goodname])}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

const Goods = [
  { goodname: "good2", img: "sikasenbei.png" },
  { goodname: "good2", img: "sikasenbei.png" },
  { goodname: "good2", img: "sikasenbei.png" },
  { goodname: "good2", img: "sikasenbei.png" },
  { goodname: "good2", img: "sikasenbei.png" },
  { goodname: "good2", img: "sikasenbei.png" },
  { goodname: "good2", img: "sikasenbei.png" },
  { goodname: "good2", img: "sikasenbei.png" },
  { goodname: "good2", img: "sikasenbei.png" },
  { goodname: "good2", img: "sikasenbei.png" },
];
