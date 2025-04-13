import { useEffect, useState } from 'react';
import SortableTable from '../components/SortableTable';

function UserDashboard() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:5000/api/stores', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(setStores);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
      <SortableTable
        data={stores.map(store => ({
          id: store.id,
          name: store.name,
          address: store.address,
          averageRating: store.averageRating,
        }))}
        columns={[
          { key: 'name', label: 'Store Name' },
          { key: 'address', label: 'Address' },
          { key: 'averageRating', label: 'Avg Rating' },
        ]}
      />
    </div>
  );
}

export default UserDashboard;
