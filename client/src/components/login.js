import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loginUser] = useMutation(LOGIN_USER);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await loginUser({ variables: formData });
      const token = data.loginUser.token;
      console.log('Logged in with token:', token);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={LOGIN_USER.email}
            onChange={LOGIN_USER}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={LOGIN_USER.password}
            onChange={LOGIN_USER}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
