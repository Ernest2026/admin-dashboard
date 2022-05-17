import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
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
          <Route path="/login" element={<Auth />} />
          <Route path="/*" element={<Nopage />} />
          <Route path="/" element={<Page />}>
            <Route index element={<Dashboard />} />
            <Route path="product" element={<Products />} />
            <Route path="client" element={<Clients />} />
            <Route path="team" element={<Teams />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
