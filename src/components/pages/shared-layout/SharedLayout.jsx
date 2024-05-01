import { Suspense } from 'react';
import { Background, Container } from './SharedLayout.styles';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/common/components/loader/Loader';

const SharedLayout = () => {
  return (
    <Container>
      <Background>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Background>
    </Container>
  );
};

export default SharedLayout;
