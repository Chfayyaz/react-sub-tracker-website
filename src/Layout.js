import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [headerTitle, setHeaderTitle] = useState('');

  const isCloseSidebar = (props) => {
    setIsSidebar(props);
  };

  const getTitle = (props) => {
    console.log("header here", props);
    setHeaderTitle(props);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 991px)').matches) {
        console.log("Small screen - tablet or mobile");
      } else {
        console.log("Large screen - desktop");
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className={`${isSidebar ? "col-1" : "col-3"} `}>
          <Sidebar isCloseSidebar={isCloseSidebar} getTitle={getTitle} />
        </div>
        <div className={`${isSidebar ? "col-11" : "col-9"} ps-5`}>
          <Header title={headerTitle} />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
