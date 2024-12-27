import React from 'react';
import Notification from './Notification';
import Profile from './Profile';

const Header = ({title}) => {
  return (
    <div className='d-flex justify-content-between align-item-center mt-4'>
      <div>
        <p className='fs-25 fw-600'>{title ? title : "Hello John! 👋"} </p>
      </div>
      <div className='d-flex justify-content-between align-item-center gap-2'>
        <Notification />
        <Profile />
      </div>
    </div>

  );
};

export default Header;
