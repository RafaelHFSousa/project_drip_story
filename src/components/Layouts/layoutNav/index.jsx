import { Outlet } from "react-router-dom";
// import { Header } from "../../Header";
import { Footer } from "../../Footer";
import { Header } from "../../Header";

export const LayoutNav = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
