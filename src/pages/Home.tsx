import { css } from '@emotion/react';

import FlipCard from '@/components/FlipCard';
import { QuizCategory } from '@/types/quizCate';

const quizCategory: QuizCategory[] = ['html5', 'css3', 'javascript', 'react', 'typescript', 'next'];

function Home() {
  return (
    <div css={grid}>
      {quizCategory.map((item) => (
        <FlipCard type={item} />
      ))}
    </div>
  );
}

const grid = css`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export default Home;
