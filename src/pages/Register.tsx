import React, { useState } from 'react';
import axios from '../api/axios';
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await axios.post('/auth/register', { email, password });
      setSuccess('Registration successful! You can now login.');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-card text-card-foreground p-8 rounded shadow w-80">
        <h2 className="text-2xl mb-4">Register</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="mb-2 p-2 w-full border rounded bg-input text-foreground"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="mb-4 p-2 w-full border rounded bg-input text-foreground"
          required
        />
        {error && <div className="text-destructive mb-2">{error}</div>}
        {success && <div className="text-green-600 mb-2">{success}</div>}
        <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded w-full">Register</button>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="underline text-primary">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
