import { ImageList, ImageListItem } from "@mui/material";
// import golang from "src/golang.webp";

export const GoodsList = () => {
  return (
    <>
      <ImageList cols={3} gap={20}>
        {Goods.map((good) => (
          <ImageListItem key={good.goodname}>
            <img src={good.img} alt={good.goodname} />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

const Goods = [{ goodname: "good2", img: "src/img.png" }];
