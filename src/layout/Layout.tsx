import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import { useEffect } from 'react';
import { Main, Wrapper } from './LayoutCss';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const hideHeaderPaths = ['/volunteer-detail', '/center-detail'];
  const shouldShowHeader = !hideHeaderPaths.includes(location.pathname);

  return (
    <Wrapper>
      {shouldShowHeader && <Header />}
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Wrapper>
  );
}
