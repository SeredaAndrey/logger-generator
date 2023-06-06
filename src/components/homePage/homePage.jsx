import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';

import { PrimaryHomeContainer } from 'components/AppStyled';

export default function HomePage() {
  return (
    <PrimaryHomeContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </PrimaryHomeContainer>
  );
}
