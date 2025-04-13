import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

function StoreOwnerDashboard() {
  const [store, setStore] = useState(null);

  useEffect(() => {
    const fetchStoreRatings = async () => {
      const token = localStorage.getItem('token');
      const decoded = jwtDecode(token); 
      const storeId = decoded.storeId; 
      const res = await fetch(`http://localhost:5000/api/stores/${storeId}/ratings`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setStore(data);
    };
    fetchStoreRatings();
  }, []);

  const averageRating = store?.Ratings?.length
    ? (store.Ratings.reduce((acc, r) => acc + r.rating, 0) / store.Ratings.length).toFixed(2)
    : 'N/A';

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Store Owner Dashboard</h1>

      {store ? (
        <>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Store: {store.name}</h2>
            <p className="text-gray-600">Average Rating: <strong>{averageRating}</strong></p>
          </div>

          <table className="w-full border table-auto">
            <thead className="bg-gray-200">
              <tr><th>User</th><th>Email</th><th>Rating</th></tr>
            </thead>
            <tbody>
              {store.Ratings.map(r => (
                <tr key={r.id} className="text-center border-t">
                  <td>{r.User?.name}</td>
                  <td>{r.User?.email}</td>
                  <td>{r.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>Loading store data...</p>
      )}
    </div>
  );
}

export default StoreOwnerDashboard;