import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { useLocation, useParams } from 'react-router-dom';
import Questions from '@/components/multipleChoice/Questions';
import { data } from '@/data/mockData';
import MessagePage from '@/pages/Message';

interface QuestionData {
  id: string;
  question: string;
  options: string[];
  answer: string;
}

interface DataType {
  javascript: QuestionData[];
  html: QuestionData[];
}

const MultipleChoice = () => {
  const [stop, setStop] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const { category } = useParams();
  const location = useLocation();

  const questionId = new URLSearchParams(location.search).get('questionId') || 1;

  useEffect(() => {
    setStartTime(performance.now());
    setStop(false);
  }, [questionId]);

  useEffect(() => {
    if (stop) {
      const currentTime = performance.now();
      const timeElapsed = Math.min((currentTime - (startTime || 0)) / 1000, 60);
      setElapsedTime(timeElapsed);
    }
  }, [stop, startTime]);

  const calcualteWidth = () => {
    const percent = (elapsedTime / 60) * 100;
    return (percent / 100) * 100;
  };

  let width = 0;
  if (stop) {
    width = calcualteWidth();
  }
  if (!category) {
    return <p>해당 데이터가 존재하지 않습니다.</p>;
  }

  const selectedQuestion = data[category as keyof DataType].find(
    (q) => q.id === String(questionId),
  );

  if (!selectedQuestion) {
    return <p>해당 질문이 존재하지 않습니다.</p>;
  }
  return (
    <section css={pageWarapper}>
      <div css={{ display: 'flex' }}>
        <div css={questionArea}>
          <div css={timeBar(stop, width)}> </div>
          <h1 css={{ fontSize: '20px' }}>Question {selectedQuestion.id}</h1>
          <h1 css={{ padding: '20px' }}>{selectedQuestion.question}</h1>
          <Questions selectedQuestion={selectedQuestion} setStop={setStop} />
        </div>
        {/* <div css={{ height: '500px' }}> */}
        <MessagePage />
        {/* </div> */}
      </div>
    </section>
  );
};

export default MultipleChoice;
const pageWarapper = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const timeBar = (stop: boolean | null, width: number) => css`
  position: relative;
  background: #d6d6d6;
  width: 100%;
  height: 4px;
  border-radius: 3px;
  margin-bottom: 20px;
  ${stop
    ? `
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${width}%;
    height: 100%;
    background-color: #ff735e;
    border-radius: 3px;
  }
  `
    : `
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #ff735e;
    border-radius: 3px;
    animation: growBar 60s linear forwards;
  }
  `}
  @keyframes growBar {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
`;

const questionArea = css`
  width: 100%;
  padding: 20px;
  border-radius: 5px;
`;
