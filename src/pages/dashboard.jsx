import "../styles/dashboard.css";
import { NavLink } from "react-router-dom";
function Dashboard() {
  return (
    <div className="dashboard">

      {/* MAIN CONTENT */}
      <div className="main">

        {/*  TOP BAR */}
        <div className="topbar">

          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search parts, dealers, orders..."
              className="search-bar"
            />
          </div>

          <div className="topbar-right">

            <span className="admin-badge">Admin</span>
            <span className="icon">🔔</span>
            <span className="icon">⚙️</span>
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

          <div className="threeline">
            <div className="card">

              {/* TOP */}
              <div className="card-top">
                <div className="card-icon">💰</div>
                <div className="card-arrow">↗</div>
              </div>

              {/* VALUE */}
              <h2 className="card-value">₹12.4Cr</h2>

              {/* BOTTOM */}
              <div className="card-bottom">
                <p className="card-title">changes Gross Merchandise Value</p>
                <span className="card-sub">Total sales value</span>
              </div>

            </div>

            <div className="card">

              {/* TOP */}
              <div className="card-top">
                <div className="card-icon">💰</div>
                <div className="card-arrow">↗</div>
              </div>

              {/* VALUE */}
              <h2 className="card-value">₹2.4Cr</h2>

              {/* BOTTOM */}
              <div className="card-bottom">
                <p className="card-title">changes Gross Merchandise Value</p>
                <span className="card-sub">Total sales value</span>
              </div>

            </div>

            <div className="card">

              {/* TOP */}
              <div className="card-top">
                <div className="card-icon">💰</div>
                <div className="card-arrow">↗</div>
              </div>

              {/* VALUE */}
              <h2 className="card-value">₹18.6L</h2>

              {/* BOTTOM */}
              <div className="card-bottom">
                <p className="card-title">changes Gross Merchandise Value</p>
                <span className="card-sub">Total sales value</span>
              </div>

            </div>


            <div className="card">

              {/* TOP */}
              <div className="card-top">
                <div className="card-icon">💰</div>
                <div className="card-arrow">↗</div>
              </div>

              {/* VALUE */}
              <h2 className="card-value">₹4.2L</h2>

              {/* BOTTOM */}
              <div className="card-bottom">
                <p className="card-title">changes Gross Merchandise Value</p>
                <span className="card-sub">Total sales value</span>
              </div>

            </div>
          </div>

          <div className="threeline">
            <div className="card">

              {/* TOP */}
              <div className="card-top">
                <div className="card-icon">💰</div>
                <div className="card-arrow">↗</div>
              </div>

              {/* VALUE */}
              <h2 className="card-value">847</h2>

              {/* BOTTOM */}
              <div className="card-bottom">
                <p className="card-title">changes Gross Merchandise Value</p>
                <span className="card-sub">Total sales value</span>
              </div>

            </div>

            <div className="card">

              {/* TOP */}
              <div className="card-top">
                <div className="card-icon">💰</div>
                <div className="card-arrow">↗</div>
              </div>

              {/* VALUE */}
              <h2 className="card-value">12,458</h2>

              {/* BOTTOM */}
              <div className="card-bottom">
                <p className="card-title">changes Gross Merchandise Value</p>
                <span className="card-sub">Total sales value</span>
              </div>

            </div>

            <div className="card">

              {/* TOP */}
              <div className="card-top">
                <div className="card-icon">💰</div>
                <div className="card-arrow">↗</div>
              </div>

              {/* VALUE */}
              <h2 className="card-value">3.8%</h2>

              {/* BOTTOM */}
              <div className="card-bottom">
                <p className="card-title">changes Gross Merchandise Value</p>
                <span className="card-sub">Total sales value</span>
              </div>

            </div>

            <div className="card">

              {/* TOP */}
              <div className="card-top">
                <div className="card-icon">💰</div>
                <div className="card-arrow">↗</div>
              </div>

              {/* VALUE */}
              <h2 className="card-value">156</h2>

              {/* BOTTOM */}
              <div className="card-bottom">
                <p className="card-title">changes Gross Merchandise Value</p>
                <span className="card-sub">Total sales value</span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;