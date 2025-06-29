import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProductListingPage } from "./pages/ProductListingPage";
import { ProductViewPage } from "./pages/ProductViewPage";
import { LayoutNav } from "./components/Layouts/layoutNav";
import { MeusPedidos } from "./pages/MeusPedidos";
import { Page404 } from "./pages/Page404";
import { GlobalStyles } from "./utils/globalStyles";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LayoutNav />}>
            <Route index element={<HomePage />} />
            <Route path="produtos" element={<ProductListingPage />} />
            <Route path="produtos/:id" element={<ProductViewPage />} />
            <Route path="meusPedidos" element={<MeusPedidos />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
