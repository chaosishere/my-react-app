// src/components/SnippetList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SnippetList = ({ token }) => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const response = await axios.get('http://localhost:8000/snippets/', {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setSnippets(response.data);
      } catch (error) {
        console.error('Error fetching snippets:', error);
      }
    };

    fetchSnippets();
  }, [token]);

  return (
    <div>
      <h1>Snippets</h1>
      <ul>
        {snippets.map(snippet => (
          <li key={snippet.id}>{snippet.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SnippetList;

