import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>⚡ EV Parts</h2>

        <ul>
        <h4>CORE</h4>

          <li className="active">Dashboard</li>
          <li>Orders</li>
          <li>Inventory</li>
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

      {/* MAIN CONTENT */}
      <div className="main">

        {/*  TOP BAR */}
        <div className="topbar">

          <input
            type="text"
            placeholder="Search parts, dealers, orders..."
            className="search-bar"
          />

          <div className="topbar-right">

            <span className="admin-badge">Admin</span>

            <div className="profile">
              <img
                src="https://i.pravatar.cc/40"
                alt="profile"
              />
              <span>Prabhanshu</span>
            </div>

          </div>

        </div>

        {/* HEADING */}
        <h1>Good evening, Prabhanshu</h1>
        <p>Here's what's happening with your marketplace today.</p>

        {/* CARDS */}
        <div className="cards">

          <div className="card">
            <p>Gross Merchandise Value</p>
            <h2>₹2.4Cr</h2>
          </div>

          <div className="card">
            <p>Net Revenue</p>
            <h2>₹18.6L</h2>
          </div>

          <div className="card">
            <p>Platform Commission</p>
            <h2>₹4.2L</h2>
          </div>

          <div className="card">
            <p>Active Dealers</p>
            <h2>847</h2>
          </div>

          <div className="card">
            <p>Active Listings</p>
            <h2>12,458</h2>
          </div>

          <div className="card">
            <p>Order Conversion</p>
            <h2>3.8%</h2>
          </div>

          <div className="card">
            <p>Low Stock Alerts</p>
            <h2>156</h2>
          </div>

          <div className="card">
            <p>Regional Coverage</p>
            <h2>28</h2>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;