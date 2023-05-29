import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <>
      <Suspense fallback={null}>
        <h2>Home</h2>
        <Outlet />
      </Suspense>
    </>
  );
}
