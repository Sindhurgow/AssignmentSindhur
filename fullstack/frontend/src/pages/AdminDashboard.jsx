import { useEffect, useState } from 'react';

function AdminDashboard() {
  const [data, setData] = useState({ users: [], stores: [], ratings: [] });

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const [users, stores] = await Promise.all([
        fetch('http://localhost:5000/api/users', { headers: { Authorization: `Bearer ${token}` } }).then(res => res.json()),
        fetch('http://localhost:5000/api/stores', { headers: { Authorization: `Bearer ${token}` } }).then(res => res.json()),
      ]);
      setData({ users, stores, ratings: users.flatMap(u => u.Ratings || []) });
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <Stat label="Total Users" value={data.users.length} />
        <Stat label="Total Stores" value={data.stores.length} />
        <Stat label="Total Ratings" value={data.ratings.length} />
      </div>

      <Section title="All Users">
        <table className="w-full table-auto border">
          <thead className="bg-gray-200">
            <tr>
              <th>Name</th><th>Email</th><th>Address</th><th>Role</th>
            </tr>
          </thead>
          <tbody>
            {data.users.map(user => (
              <tr key={user.id} className="text-center border-t">
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section title="All Stores">
        <table className="w-full table-auto border">
          <thead className="bg-gray-200">
            <tr>
              <th>Name</th><th>Email</th><th>Address</th><th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {data.stores.map(store => (
              <tr key={store.id} className="text-center border-t">
                <td>{store.name}</td>
                <td>{store.email}</td>
                <td>{store.address}</td>
                <td>{store.averageRating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </div>
  );
}

const Stat = ({ label, value }) => (
  <div className="bg-white shadow rounded p-4 text-center">
    <p className="text-lg text-gray-600">{label}</p>
    <p className="text-2xl font-semibold">{value}</p>
  </div>
);

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    {children}
  </div>
);

export default AdminDashboard;
