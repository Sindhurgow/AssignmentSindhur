import { useNavigate } from 'react-router-dom';

function Navbar({ role }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white shadow flex justify-between items-center p-4 sticky top-0 z-30">
      <h1 className="text-xl font-bold text-indigo-600">RateSphere</h1>
      <div className="flex gap-4">
        {role === 'admin' && <button onClick={() => navigate('/admin')}>Dashboard</button>}
        {role === 'user' && <button onClick={() => navigate('/user')}>Rate Stores</button>}
        {role === 'owner' && <button onClick={() => navigate('/owner')}>My Store</button>}
        <button
          onClick={() => {
            localStorage.removeItem('token');
            navigate('/');
          }}
          className="text-red-500 hover:underline"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
