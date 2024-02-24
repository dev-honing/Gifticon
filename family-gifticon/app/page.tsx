// app/page.tsx
import Header from "../components/Layouts/Header";
import Container from "../components/Layouts/Container";
import Footer from "@/components/Layouts/Footer";

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
      <Header />
      <Container />
      <Footer />
    </div>
  );
}
