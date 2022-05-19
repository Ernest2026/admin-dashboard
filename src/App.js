import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Clients from "./pages/Clients";
import Teams from "./pages/Teams";
import Nopage from "./pages/Nopage";
import Page from "./components/Layout/Page";
import Logout from "./pages/Logout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Products />} />
            <Route path="client" element={<Clients />} />
            <Route path="team" element={<Teams />} />
            <Route path="logout" element={<Logout />} />
          </Route>
          <Route path="/login" element={<Auth />} />
          <Route path="/*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
