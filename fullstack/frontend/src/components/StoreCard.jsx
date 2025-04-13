import { useState } from 'react';
import RatingStars from './RatingStars';

function StoreCard({ store }) {
  const [rating, setRating] = useState(store.userRating || 0);

  const handleSubmit = async (newRating) => {
    const token = localStorage.getItem('token');
    await fetch('http://localhost:5000/api/ratings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ storeId: store.id, rating: newRating }),
    });
    setRating(newRating);
  };

  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-semibold">{store.name}</h2>
      <p className="text-gray-600">{store.address}</p>
      <p className="mt-2">Overall Rating: {store.averageRating || 'Not rated yet'}</p>
      <div className="mt-2">
        <span className="text-sm text-gray-700">Your Rating:</span>
        <RatingStars value={rating} onChange={handleSubmit} />
      </div>
    </div>
  );
}

export default StoreCard;
