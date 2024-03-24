import type { Metadata } from "next";
import Link from "next/link";

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
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <span style={{ fontSize: "2rem" }}>
            <Link href="/">메인 페이지</Link>
          </span>
          <span
            style={{
              backgroundColor: "#d9d9d9",
              display: "flex",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <Link href="/auth/login">로그인</Link>
            <span style={{ margin: "0 1rem" }}>|</span>
            <Link href="/auth/signup">회원가입</Link>
          </span>
        </header>
        {children}
        <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
