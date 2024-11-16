import { Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <p>헤더입니다.</p>
      <main>
        <Outlet />
      </main>
    </>
  );
}
