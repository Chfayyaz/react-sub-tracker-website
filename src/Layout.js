import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [headerTitle, setHeaderTitle] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 991);

  const isCloseSidebar = (props) => {
    setIsSidebar(props);
  };

  const getTitle = (props) => {
    console.log("header here", props);
    setHeaderTitle(props);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 991);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='container-fluid'>
      <div className='row'>
        {!isSmallScreen && (
          <div className={` ${isSidebar ? "col-1" : "col-3"} `}>
            <Sidebar isCloseSidebar={isCloseSidebar} getTitle={getTitle} />
          </div>
        )}
        <div className={`${isSmallScreen ? "col-12" : isSidebar ? "col-11" : "col-9"} px-5`}>
          <Header title={headerTitle} isShowIcon={isSmallScreen} />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
