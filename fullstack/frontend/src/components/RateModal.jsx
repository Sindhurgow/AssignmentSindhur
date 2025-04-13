import { useState } from 'react';
import RatingStars from './RatingStars';

function RateModal({ open, onClose, store, onSubmit }) {
  const [confirmed, setConfirmed] = useState(false);

  if (!open) return null;

  const handleRate = (rating) => {
    onSubmit(store.id, rating);
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Rate {store.name}</h2>
        <p className="text-gray-600 mb-4">{store.address}</p>

        {confirmed ? (
          <div className="text-green-600 font-medium text-center">Thanks! Your rating has been submitted. ✅</div>
        ) : (
          <RatingStars value={store.userRating || 0} onChange={handleRate} />
        )}

        <div className="mt-6 flex justify-end">
          <button onClick={onClose} className="text-gray-600 hover:text-black">Close</button>
        </div>
      </div>
    </div>
  );
}

export default RateModal;
