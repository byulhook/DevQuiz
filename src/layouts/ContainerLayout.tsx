import { css, SerializedStyles } from '@emotion/react';

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
    </div>
  );
};

const containerStyle = css`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export default ContainerLayout;
