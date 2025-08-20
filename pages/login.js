import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, { username, password });
      setMessage("Login successful! Token: " + res.data.token);
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>
        <input className="w-full p-2 border mb-3 rounded" placeholder="Username"
          value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="w-full p-2 border mb-3 rounded" placeholder="Password" type="password"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin} className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Login</button>
        <p className="mt-3 text-sm text-center text-gray-600">{message}</p>
      </div>
    </div>
  );
}