import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white px-6">
      <h1 className="text-5xl font-extrabold mb-6">Welcome to RateSphere</h1>
      <p className="text-xl text-center max-w-2xl mb-10">
        Discover, rate, and explore top local stores powered by real user feedback. Join as a customer or a store owner and become part of the most trusted review network.
      </p>
      <div className="flex gap-6">
        <button
          onClick={() => navigate('/login')}
          className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold text-lg hover:bg-gray-100"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/signup')}
          className="bg-transparent border border-white px-6 py-3 rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-700"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Landing;
