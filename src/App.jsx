import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Dashboard from "./pages/dashboard";
import Inventory from "./pages/inventory";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* LAYOUT ROUTES */}
        <Route path="/" element={<Layout />}>

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;