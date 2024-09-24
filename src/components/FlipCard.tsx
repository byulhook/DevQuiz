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
        <div className="card-front">
          <div className="card-front-img">
            <img src={`/src/assets/${type}.svg`} alt={type} />
          </div>
          <p>{typeText}</p>
        </div>
        <div className="card-back">
          <p>{typeText}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;

const card = (type: QuizCategory) => css`
  width: 250px;
  height: 250px;
  cursor: pointer;

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  &:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: ${type === 'javascript' || type === 'typescript' ? '40px' : '50px'};
      font-weight: 900;
      color: ${colorMap[type]};
    }
  }

  .card-front {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: ${theme.colors.gray100};
    .card-front-img {
      width: 150px;
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: 0px 0px 10px 5px ${theme.colors.gray300};
      border: 1px solid ${theme.colors.gray200};
      img {
        width: 88px;
        height: 88px;
      }
    }
    p {
      font-size: 30px;
      font-weight: 900;
      color: ${colorMap[type]};
    }
  }

  .card-back {
    color: white;
    transform: rotateY(180deg);
    background-color: ${theme.colors.gray300};
  }
`;
