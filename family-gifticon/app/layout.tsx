import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "기프티콘",
  description: "기프티콘 통합 관리",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}