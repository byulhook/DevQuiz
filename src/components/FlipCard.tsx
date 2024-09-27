import { css } from '@emotion/react';

import theme from '@/styles/theme';
import { QuizCategory } from '@/types/quizCate';

interface IFlipCardProps {
  type: QuizCategory;
}

const typeTextArr = ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Next'];
const colorMap = {
  html5: '#f16529',
  css3: '#1b73ba',
  javascript: '#e4a126',
  react: '#61dafb',
  typescript: '#3178c6',
  next: '#000000',
};

function FlipCard({ type }: IFlipCardProps) {
  const typeText = typeTextArr.filter((item) => item.toLocaleLowerCase() === type).toString();

  return (
    <div css={card(type)}>
      <div className="card-inner">
        <div className="card-img">
          <img src={`/src/assets/${type}.svg`} alt={type} />
        </div>
        <p>{typeText}</p>
      </div>
    </div>
  );
}

export default FlipCard;

const card = (type: QuizCategory) => css`
  width: 200px;
  height: 250px;
  cursor: pointer;

  .card-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: ${theme.colors.gray100};
    border-radius: 10px;
    text-align: center;
    transition: transform 0.3;
    .card-img {
      width: 130px;
      height: 130px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: 0px 0px 10px 5px ${theme.colors.gray300};
      border: 1px solid ${theme.colors.gray200};
      img {
        width: 66px;
        height: 66px;
      }
    }
    p {
      font-size: 30px;
      font-weight: 900;
      color: ${colorMap[type]};
    }
  }

  &:hover .card-inner {
    transform: scale(1.02);
  }
`;
