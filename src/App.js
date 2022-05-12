import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Nopage from "./pages/Nopage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/" element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path="product" element={<Products />} />
          </Route>
          <Route path="/*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
