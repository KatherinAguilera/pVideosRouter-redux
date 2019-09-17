import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <section className='mainError'>
    <h1 className='error'>404 Error Page</h1>
    <section className='error-container'>
      <span>4</span>
      <span><span className='screen-reader-text'>0</span></span>
      <span>4</span>
    </section>
    <div className='link-container'>
      <Link to='/'>
        <h2 className='more-link'>Regresa al Home</h2>
      </Link>
    </div>
  </section>
);
export default NotFound;
