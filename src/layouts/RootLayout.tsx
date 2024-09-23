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
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: ${theme.colors.white};
`;
export default RootLayout;
