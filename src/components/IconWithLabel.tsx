import { ReactNode } from 'react';

import styled from '@emotion/styled';

interface IconWithLabelProps {
  icon: ReactNode;
  label: string;
}

function IconWithLabel({ icon, label }: IconWithLabelProps) {
  return (
    <Container>
      {icon}
      <span>{label}</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 20px;

  span {
    font-size: 13px;
  }
`;

export default IconWithLabel;
