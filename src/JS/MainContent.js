import React from 'react';
import { Link } from 'react-router-dom';

function MainContent() {
  return (
    <main>
      <p>Welcome to my basic website. This is the main content.</p>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </main>
  );
}

export default MainContent;
