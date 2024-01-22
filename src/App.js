// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import SnippetList from './components/SnippetList';
import UserList from './components/UserList';

function App() {
  const [token, setToken] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api-token-auth/', {
        username: 'your_username',
        password: 'your_password',
      });
      setToken(response.data.token);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="App">
      <button onClick={handleLogin}>Login</button>
      <SnippetList token={token} />
      <UserList token={token} />
    </div>
  );
}

export default App;

