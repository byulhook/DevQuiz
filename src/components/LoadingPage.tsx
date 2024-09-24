import { css } from '@emotion/react';

import Loading from '@/components/Loading';

const LoadingPage = () => {
  return (
    <div css={loadingPageContainer}>
      <Loading />
    </div>
  );
};

export default LoadingPage;

const loadingPageContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
`;
