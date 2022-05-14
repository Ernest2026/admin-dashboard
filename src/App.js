import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Nopage from "./pages/Nopage";
import Render from "./components/Render";
import Logout from "./pages/Logout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/" element={<Render />}>
            <Route index element={<Dashboard />} />
            <Route path="product" element={<Products />} />
            <Route path="logout" element={<Logout />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
