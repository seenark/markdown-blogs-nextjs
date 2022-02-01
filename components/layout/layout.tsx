import * as React from 'react';
import MainNavigation from './main-navigation';

interface ILayoutProps {
}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  return (
      <>
        <MainNavigation />
        <main>{props.children}</main>
      </>
  )
};

export default Layout;
