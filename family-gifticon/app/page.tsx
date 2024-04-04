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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      
      <Link href={"/gifts"}>조회</Link>
      <Link href={"/upload"}>업로드</Link>
    </div>
  );
}
