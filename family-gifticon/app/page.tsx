// app/page.tsx
import Link from "next/link";

export default function MainPage() {
  return (
    <div
      id="root"
      style={{
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        background: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={"/gifts"}>기프티콘 보기</Link>
    </div>
  );
}
