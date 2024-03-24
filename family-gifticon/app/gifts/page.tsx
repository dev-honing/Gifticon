"use client";
// app/gifts/page.tsx
import GiftLists from "../../components/GiftLists";
import Link from "next/link";

const GiftsPage = () => {
  return (
    <div>
      <h1>기프티콘 보기</h1>
      <h2 style={{display: "flex", justifyContent: "center"}}>카테고리</h2>
      <span style={{display: "flex", justifyContent: "space-around", }}>
        <p style={{fontSize: "2rem", border: "1px solid #000"}}>
          <Link href="/gifts/food">음식</Link>
        </p>
        <p style={{fontSize: "2rem", border: "1px solid #000"}}>
          <Link href="/gifts/drink">음료</Link>
        </p>
      </span>
      {/* <GiftLists /> */}
    </div>
  );
};

export default GiftsPage;
