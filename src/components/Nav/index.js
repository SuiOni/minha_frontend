import React from 'react';
import Navbar from './Navbar';
// import Sidebar from './Sidebar';
// import { DocsSidebarMenu, SimpleSidebarMenu } from './SidebarMenus';

const Nav = props => {
  const {
    isSideFolded,
    isSecondNavFolded,
    onSideToggle,
    onSecondNavToggle,
    onRouteChange,
    showSideNav,
    useDocsSidebarMenu,
    transparent,
    pages,
    secondNavColor,
  } = props;

  return (
    <div>
      <Navbar
        showSideNav={showSideNav}
        transparent={transparent}
        isSideFolded={isSideFolded}
        isSecondNavFolded={isSecondNavFolded}
        onSideToggle={onSideToggle}
        onSecondNavToggle={onSecondNavToggle}
        secondNavColor={secondNavColor}
      />

      {/* {showSideNav !== false && (
        <Sidebar isFolded={isSideFolded}>
          {useDocsSidebarMenu !== false ? (
            <DocsSidebarMenu onRouteChange={onRouteChange} />
          ) : (
            <SimpleSidebarMenu onRouteChange={onRouteChange} pages={pages} />
          )}
        </Sidebar>
      )} */}
    </div>
  );
};

export default Nav;
