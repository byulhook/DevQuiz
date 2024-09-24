import { css, SerializedStyles } from '@emotion/react';
import { Outlet } from 'react-router-dom';

import theme from '@/styles/theme';

interface RootLayoutProps {
  customStyle?: SerializedStyles;
}

const RootLayout: React.FC<RootLayoutProps> = ({ customStyle }) => {
  return (
    <>
      <main css={[mainStyle, customStyle]}>
        <Outlet />
      </main>
    </>
  );
};

export const mainStyle = css`
  /* display: flex; flex를 사용한 이유가 있다면 연락주십쇼 -하은-  */
  height: 100vh;
  width: 100%;
  padding-left: 240px;
  background-color: ${theme.colors.white};
`;
export default RootLayout;
