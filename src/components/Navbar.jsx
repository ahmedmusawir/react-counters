import React from 'react';

const Navbar = (props) => {
  return (
    <div>
      <nav className='navbar navbar-light bg-primary mb-2'>
        <span className='navbar-brand mb-0 text-light'>React Counter</span>
        <span className='navbar-brand mb-0 text-light'>
          Total Count
          <span className='badge badge-pill badge-warning ml-2'>
            {props.totalCounters}
          </span>
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
