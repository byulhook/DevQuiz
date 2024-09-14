import { useState } from 'react';
import { css } from '@emotion/react';
import { ArrowLeft } from 'lucide-react';
import { SelectedButton } from './SelectedButton';
import theme from '../styles/theme';

const Quiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<number>(-1);

  const quizQuestion = 'If a car travels 200 miles in 4 hours, what is its average speed?';
  const quizAnswers = ['45 vh', '45 vh', '45 vh', '45 vh'];

  return (
    <div css={pageStyles}>
      <header css={headerStyles}>
        <ArrowLeft size={24} />
        <div css={titleStyles}>HTML</div>
      </header>

      <div css={progressBarContainerStyles}>
        <div css={progressBarStyles}></div>
      </div>

      <main css={mainStyles}>
        <h2 css={questionStyles}>${quizQuestion}</h2>

        <div>
          {quizAnswers.map((answer, index) => (
            <SelectedButton
              key={index}
              text={answer}
              isSelected={selectedAnswer === index}
              onClick={() => setSelectedAnswer(index)}
            />
          ))}
        </div>
      </main>

      <footer css={footerStyles}>
        <button css={nextButtonStyles}>Next</button>
      </footer>
    </div>
  );
};

export default Quiz;

const pageStyles = css`
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const headerStyles = css`
  padding: 16px;
  display: flex;
  align-items: center;
`;

const titleStyles = css`
  margin-left: 16px;
  font-weight: 600;
`;

const progressBarContainerStyles = css`
  width: 100%;
  background-color: #e5e7eb;
  height: 4px;
`;

const progressBarStyles = css`
  background-color: ${theme.colors.primary};
  height: 100%;
  width: 25%;
`;

const mainStyles = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const questionStyles = css`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 24px;
`;

const footerStyles = css`
  padding: 24px;
`;

const nextButtonStyles = css`
  width: 100%;
  background-color: ${theme.colors.primary};
  color: white;
  padding: 12px;
  border-radius: 9999px;
  font-weight: 600;
`;
