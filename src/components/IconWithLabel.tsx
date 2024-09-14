import styled from '@emotion/styled';
import { ReactNode } from 'react';

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
  flex-direction: column;
  gap: 6px;

  span {
    font-size: 14px;
  }
`;

export default IconWithLabel;
