import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import NotFoundImage from '@/assets/notFound.svg';
import theme from '@/styles/theme';

export const NotFoundPage = () => {
  return (
    <Container>
      <div className="img-container">
        <img src={NotFoundImage} alt="404 Not Found" />
      </div>
      <Title>원하시는 페이지를 찾을 수 없습니다.</Title>
      <Description>
        원하시는 페이지를 찾을 수 없습니다.
        <br />
        찾으려는 페이지의 주소가 잘못 입력되었거나,
        <br />
        주소의 변경 혹은 삭제로 인해 사용할 수 없습니다.
      </Description>
      <StyledLink to="/">홈으로 가기</StyledLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background-color: white;
  padding: 20px;
  text-align: center;

  .img-container {
    width: 60%;
    img {
      width: 100%;
      margin-bottom: 24px;
    }
  }

  @media (min-width: 400px) {
    .img-container {
      max-width: 300px;
    }
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 0;
  color: black;
  margin-bottom: 16px;

  @media (min-width: 400px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  margin: 0;
  margin-bottom: 24px;
  color: gray;
  line-height: 1.6;
  @media (min-width: 400px) {
    font-size: 20px;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  background-color: ${theme.colors.primary};
  padding: 10px 28px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  font-weight: bold;

  &:visited {
    color: white;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 400px) {
    font-size: 20px;
  }
`;

export default NotFoundPage;
