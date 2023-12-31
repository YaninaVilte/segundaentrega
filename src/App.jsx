import Layout from "./components/layout/Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { menuRoutes } from "./components/routes/menuRoutes";

import CartContextProvider from "./components/context/CartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {menuRoutes.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))}
          </Route>
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;