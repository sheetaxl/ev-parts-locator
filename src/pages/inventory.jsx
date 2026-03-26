import "../styles/inventory.css";

function Inventory() {
  return (
    <div className="inventory-page">

      <h1>Inventory</h1>
      <p>Track and manage part stock levels across locations</p>

      {/* FILTER BAR */}
      <div className="inventory-top">

        <input
          type="text"
          placeholder="Search parts..."
          className="inventory-search"
        />

        <select>
          <option>All Categories</option>
        </select>

        <select>
          <option>All Stock</option>
        </select>

        <button className="export-btn">Export</button>
        <button className="add-btn">+ Add Part</button>

      </div>

      {/* TABLE */}
      <div className="table-container">

        <table>
          <thead>
            <tr>
              <th>Part Name</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Variant</th>
              <th>Stock</th>
              <th>Dealer</th>
              <th>Location</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Ather 450X Battery Pack</td>
              <td>ATH-BAT-450X</td>
              <td><span className="tag">Batteries</span></td>
              <td>72V 3.7kWh</td>
              <td><span className="stock green">In Stock (24)</span></td>
              <td>Green Wheels Auto</td>
              <td>Delhi NCR</td>
              <td>₹24,500</td>
            </tr>

            <tr>
              <td>Tata Nexon EV Drive Belt</td>
              <td>TAT-DRB-NXN</td>
              <td><span className="tag">Motors</span></td>
              <td>Standard</td>
              <td><span className="stock orange">Low Stock (3)</span></td>
              <td>EV Parts Hub</td>
              <td>Mumbai</td>
              <td>₹3,200</td>
            </tr>

            <tr>
              <td>MG ZS EV Brake Pad Set</td>
              <td>MG-BRK-ZSF</td>
              <td><span className="tag">Suspension</span></td>
              <td>Front Set</td>
              <td><span className="stock green">In Stock (18)</span></td>
              <td>Electra Components</td>
              <td>Bangalore</td>
              <td>₹5,800</td>
            </tr>

            <tr>
              <td>Ola S1 Pro Controller Unit</td>
              <td>OLA-CTL-S1P</td>
              <td><span className="tag">Controllers</span></td>
              <td>Gen 2</td>
              <td><span className="stock red">Out of Stock</span></td>
              <td>Volt Supply Co.</td>
              <td>Chennai</td>
              <td>₹12,400</td>
            </tr>

          </tbody>
        </table>

      </div>

    </div>
  );
}

export default Inventory;