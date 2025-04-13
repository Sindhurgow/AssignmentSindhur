import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({
    name: '', email: '', address: '', password: '', role: 'user',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      navigate(`/${data.user.role}`);
    } else {
      alert(data.message || 'Signup failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg w-96 shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>
        <input name="name" placeholder="Full Name" value={form.name}
          onChange={handleChange} required minLength={5}
          className="w-full p-2 mb-3 border rounded" />
        <input name="email" type="email" placeholder="Email" value={form.email}
          onChange={handleChange} required
          className="w-full p-2 mb-3 border rounded" />
        <input name="address" placeholder="Address" value={form.address}
          onChange={handleChange} required
          className="w-full p-2 mb-3 border rounded" />
        <input name="password" type="password" placeholder="Password" value={form.password}
          onChange={handleChange} required
          className="w-full p-2 mb-3 border rounded" />
        <select name="role" value={form.role} onChange={handleChange}
          className="w-full p-2 mb-4 border rounded">
          <option value="user">Normal User</option>
          <option value="owner">Store Owner</option>
        </select>
        <button className="bg-indigo-600 text-white w-full py-2 rounded hover:bg-indigo-700">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
