import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Finance Tracker</h1>
      <nav>
        <Link
          style={linkStyle}
          className="hover:text-blue-500 transition-colors duration-300"
          to="/"
        >
          Dashboard
        </Link>
        |
        <Link
          style={linkStyle}
          className="hover:text-blue-500 transition-colors duration-300"
          to="/accounts"
        >
          Manage Accounts
        </Link>
        |
        <Link
          style={linkStyle}
          className="hover:text-blue-500 transition-colors duration-300"
          to="/suggestions"
        >
          Suggestions
        </Link>
      </nav>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px',
  textAlign: 'center',
};

const linkStyle = {
  margin: '0 10px',
  textDecoration: 'none',
  color: 'white',
};

export default Header;
