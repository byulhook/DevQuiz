import { css, SerializedStyles } from '@emotion/react';

import Header from '@/components/Header';
import LeftNav from '@/components/LeftNav';
import RootLayout from '@/layouts/RootLayout';

interface ContainerLayoutProps {
  customStyle?: SerializedStyles;
}

const ContainerLayout: React.FC = ({ customStyle }: ContainerLayoutProps) => {
  return (
    <div css={[containerStyle, customStyle]}>
      <RootLayout />
      <LeftNav />
      <Header />
    </div>
  );
};

const containerStyle = css`
  /* display: flex; flex를 사용한 이유가 있다면 연락주십쇼 -하은-  */
  height: 100vh;
  width: 100%;
`;

export default ContainerLayout;
