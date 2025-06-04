import { useState } from 'react';
import {
  ChartBarIcon,
  UsersIcon,
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  CurrencyDollarIcon,
  TruckIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  BellIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import './AdminDashboard.css'; 


const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Mock data - replace with API calls
  const platformStats = [
    { title: 'Total Orders', value: '2,345', change: '+12.5%', icon: ShoppingCartIcon, color: 'purple' },
    { title: 'Monthly Revenue', value: '$34,545', change: '+8.2%', icon: CurrencyDollarIcon, color: 'green' },
    { title: 'Active Users', value: '1,234', change: '+4.1%', icon: UsersIcon, color: 'blue' },
    { title: 'Registered Restaurants', value: '189', change: '+3.2%', icon: BuildingStorefrontIcon, color: 'yellow' },
    { title: 'Active Riders', value: '56', change: '-2.1%', icon: TruckIcon, color: 'red' },
  ];

  const recentOrders = [
    { id: '#1234', customer: 'John Doe', total: '$45', status: 'Delivered', restaurant: 'McDonald\'s' },
    { id: '#1235', customer: 'Jane Smith', total: '$85', status: 'Preparing', restaurant: 'Pizza Hut' },
    { id: '#1236', customer: 'Mike Johnson', total: '$32', status: 'Pending', restaurant: 'Burger King' },
  ];

  const restaurants = [
    { name: 'McDonald\'s', status: 'Active', orders: 234, rating: 4.5 },
    { name: 'Pizza Hut', status: 'Active', orders: 189, rating: 4.2 },
    { name: 'Burger King', status: 'Inactive', orders: 156, rating: 4.0 },
  ];

  const deliveryRiders = [
    { name: 'Rider 1', status: 'Available', deliveries: 12, rating: 4.8 },
    { name: 'Rider 2', status: 'Busy', deliveries: 8, rating: 4.5 },
    { name: 'Rider 3', status: 'Offline', deliveries: 15, rating: 4.7 },
  ];

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>
            <img src="\components\asset\" alt="Logo" />
            FoodAdmin Pro
          </h2>
        </div>
        <nav>
          <button>
            <ChartBarIcon />
            <span>Dashboard</span>
          </button>
          <button>
            <ShoppingCartIcon />
            <span>Orders</span>
            <span className="badge">32</span>
          </button>
          <button>
            <BuildingStorefrontIcon />
            <span>Restaurants</span>
          </button>
          <button>
            <TruckIcon />
            <span>Riders</span>
          </button>
          <button>
            <ChartPieIcon />
            <span>Analytics</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {/* Header */}
        <div className="header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, Admin!</p>
          </div>
          <div className="header-actions">
            <div className="search-bar">
              <MagnifyingGlassIcon />
              <input type="text" placeholder="Search..." />
            </div>
            <button>
              <BellIcon />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {platformStats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: `var(--${stat.color}-100)` }}>
                <stat.icon />
              </div>
              <div className="stat-details">
                <p>{stat.title}</p>
                <h3>{stat.value}</h3>
                <span style={{ color: stat.change.startsWith('+') ? 'var(--green-600)' : 'var(--red-600)' }}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="charts-section">
          <div className="chart-card">
            <h3>Revenue Trend</h3>
            {/* <RevenueChart /> */}
          </div>
          <div className="chart-card">
            <h3>Order Analytics</h3>
            {/* <OrderTrendChart /> */}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="recent-orders">
          <h3>Recent Orders</h3>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Restaurant</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.restaurant}</td>
                  <td>{order.total}</td>
                  <td>
                    <span className={`status-badge ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Restaurants & Riders */}
        <div className="restaurants-riders">
          <div className="restaurants">
            <h3>Restaurants</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Orders</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {restaurants.map((restaurant, index) => (
                  <tr key={index}>
                    <td>{restaurant.name}</td>
                    <td>
                      <span className={`status-badge ${restaurant.status.toLowerCase()}`}>
                        {restaurant.status}
                      </span>
                    </td>
                    <td>{restaurant.orders}</td>
                    <td>{restaurant.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="riders">
            <h3>Delivery Riders</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Deliveries</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {deliveryRiders.map((rider, index) => (
                  <tr key={index}>
                    <td>{rider.name}</td>
                    <td>
                      <span className={`status-badge ${rider.status.toLowerCase()}`}>
                        {rider.status}
                      </span>
                    </td>
                    <td>{rider.deliveries}</td>
                    <td>{rider.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;