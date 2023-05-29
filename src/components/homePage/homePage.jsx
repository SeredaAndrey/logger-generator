import { Outlet } from 'react-router-dom';

import { PrimaryHomeContainer } from 'components/AppStyled';

export default function HomePage() {
  return (
    <PrimaryHomeContainer>
      <Outlet />
    </PrimaryHomeContainer>
  );
}
