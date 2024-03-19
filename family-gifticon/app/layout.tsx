import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "기프티콘",
  description: "기프티콘 통합 관리",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <header style={{ backgroundColor: "lightblue", padding: "1rem", display: "flex", justifyContent:"space-between" }}>
          <a href="/" style={{fontWeight: "bolder", fontSize: "1rem"}}>Home</a>
          <a href="/login" style={{backgroundColor: "black", color: "white"}}>로그인</a>
        </header>
        {children}
        <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
