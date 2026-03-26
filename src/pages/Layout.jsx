{/* SIDEBAR */}
import { Outlet, NavLink } from "react-router-dom";
import "../styles/dashboard.css";

function Layout() {
  return (
    <div className="dashboard">

      {/* SIDEBAR (FIXED) */}
      <div className="sidebar">
        <h2>⚡ EV Parts</h2>

        <ul>
          <h4>CORE</h4>

          <li>
            <NavLink to="/dashboard" className="sidebar-link">Dashboard</NavLink>
          </li>

          <li>Orders</li>

          <li>
            <NavLink to="/inventory" className="sidebar-link" >Inventory</NavLink>
          </li>

          <li>Dealers</li>

          <h4>COMMERCE</h4>
          <li>Categories</li>
          <li>Parts</li>
          <li>Pricing Rules</li>

          <h4>FINANCE</h4>
          <li>Settlements</li>

          <h4>SYSTEM</h4>
          <li>Users</li>
          <li>Settings</li>
        </ul>

        {/* ROLE SWITCH */}
        <div className="role-switch">
          <button className="role-btn active">Admin</button>
          <button className="role-btn">Dealer</button>
          <button className="role-btn">Finance</button>
        </div>
      </div>

      {/* RIGHT SIDE (DYNAMIC) */}
      <div className="main">
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;