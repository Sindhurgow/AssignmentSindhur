function RatingStars({ value, onChange }) {
    const stars = [1, 2, 3, 4, 5];
  
    return (
      <div className="flex space-x-1 mt-1">
        {stars.map((star) => (
          <button
            key={star}
            className={`text-xl ${value >= star ? 'text-yellow-500' : 'text-gray-300'}`}
            onClick={() => onChange(star)}
          >
            ★
          </button>
        ))}
      </div>
    );
  }
  
  export default RatingStars;
  