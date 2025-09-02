import { Outlet } from '@solidjs/router';
import AppBar from './shared/AppBar.shared';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

export default Layout;
