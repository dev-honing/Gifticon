import { Gift } from "../../interface/interface";
import GiftLists from "../../components/GiftLists";

const GiftsPage = () => {
  const gifts: Gift[] = [
    {
      id: 1,
      name: "스타벅스 할인권",
      category: ["커피", "음료"],
      expiryDate: new Date("2022-12-31"),
      imgURL: "https://via.placeholder.com/150",
      used: "아직",
      store: "스타벅스",
      type: "할인권"
    },
    {
      id: 2,
      name: "버거킹 교환권",
      category: ["햄버거", "음식"],
      expiryDate: new Date("2024-12-31"),
      imgURL: "https://via.placeholder.com/150",
      used: "사용함",
      store: "버거킹",
      type: "교환권"
    },
    {
      id: 3,
      name: "메가커피 기프티콘",
      category: ["커피", "음료"],
      expiryDate: new Date("2026-12-31"),
      imgURL: "https://via.placeholder.com/150",
      used: "아직",
      store: "메가커피",
      type: "할인권"
    },
  ];
  return (
    <div>
      <h1>기프티콘 보기</h1>
      <GiftLists gifts={gifts} />
    </div>
  );
};

export default GiftsPage;
