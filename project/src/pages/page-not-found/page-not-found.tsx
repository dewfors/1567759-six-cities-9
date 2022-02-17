import React from 'react';
import {Link} from 'react-router-dom';

function PageNotFound() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <h1>Page not found</h1>
          <Link to={'/'}>return to main page</Link>
        </div>
      </div>
    </header>
  );
}

export default PageNotFound;
