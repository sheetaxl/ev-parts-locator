import "../styles/inventory.css";

function Inventory() {
  return (
    <>

      {/* TOP BAR (same as dashboard) */}
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
            <img src="https://i.pravatar.cc/40" alt="profile" />
            <span>Prabhanshu</span>
          </div>
        </div>

      </div>

      {/* PAGE CONTENT */}
      <div className="inventory-page">

        {/* HEADER */}
        <div className="inventory-header">
          <div>
            <h1>Inventory</h1>
            <p>Track and manage part stock levels across locations</p>
          </div>

          <div className="header-actions">
            <button className="export-btn">Export</button>
            <button className="add-btn">+ Add Part</button>
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="inventory-top">

          <input
            type="text"
            placeholder="Search parts..."
            className="inventory-search"
          />

          <select className="filter">
            <option>All Categories</option>
          </select>

          <select className="filter">
            <option>All Stock</option>
          </select>

        </div>

        {/* TABLE */}
        <div className="table-container">

          <table>
            <thead>
              <tr>
                <th>PART NAME</th>
                <th>SKU</th>
                <th>CATEGORY</th>
                <th>VARIANT</th>
                <th>STOCK</th>
                <th>DEALER</th>
                <th>LOCATION</th>
                <th>PRICE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Ather 450X Battery Pack</td>
                <td>ATH-BAT-450X</td>
                <td><span className="tag">Batteries</span></td>
                <td><span className="variant">72V 3.7kWh</span></td>
                <td><span className="stock green">In Stock (24)</span></td>
                <td>Green Wheels Auto</td>
                <td>📍 Delhi NCR</td>
                <td>₹24,500</td>
                <td className="actions">👁 ✏️ 🗑</td>
              </tr>

              <tr>
                <td>Tata Nexon EV Drive Belt</td>
                <td>TAT-DRB-NXN</td>
                <td><span className="tag">Motors</span></td>
                <td><span className="variant">Standard</span></td>
                <td><span className="stock orange">Low Stock (3)</span></td>
                <td>EV Parts Hub</td>
                <td>📍 Mumbai</td>
                <td>₹3,200</td>
                <td className="actions">👁 ✏️ 🗑</td>
              </tr>

              <tr>
                <td>MG ZS EV Brake Pad Set</td>
                <td>MG-BRK-ZSF</td>
                <td><span className="tag">Suspension</span></td>
                <td><span className="variant">Front Set</span></td>
                <td><span className="stock green">In Stock (18)</span></td>
                <td>Electra Components</td>
                <td>📍 Bangalore</td>
                <td>₹5,800</td>
                <td className="actions">👁 ✏️ 🗑</td>
              </tr>

              <tr>
                <td>Ola S1 Pro Controller Unit</td>
                <td>OLA-CTL-S1P</td>
                <td><span className="tag">Controllers</span></td>
                <td><span className="variant">Gen 2</span></td>
                <td><span className="stock red">Out of Stock</span></td>
                <td>Volt Supply Co.</td>
                <td>📍 Chennai</td>
                <td>₹12,400</td>
                <td className="actions">👁 ✏️ 🗑</td>
              </tr>

              <tr>
                <td>Tata Tigor EV Charger 7.4kW</td>
                <td>TAT-CHG-TIG</td>
                <td><span className="tag">Chargers</span></td>
                <td><span className="variant">Type 2 AC</span></td>
                <td><span className="stock green">In Stock (42)</span></td>
                <td>Charge Point Store</td>
                <td>📍 Hyderabad</td>
                <td>₹8,900</td>
                <td className="actions">👁 ✏️ 🗑</td>
              </tr>

              <tr>
                <td>Hero Vida V1 Mirror Set</td>
                <td>HRO-MIR-V1</td>
                <td><span className="tag">Body Panels</span></td>
                <td><span className="variant">Matte Black</span></td>
                <td><span className="stock orange">Low Stock (5)</span></td>
                <td>EV Direct</td>
                <td>📍 Pune</td>
                <td>₹1,650</td>
                <td className="actions">👁 ✏️ 🗑</td>
              </tr>

            </tbody>
          </table>

        </div>

      </div>
    </>
  );
}

export default Inventory;