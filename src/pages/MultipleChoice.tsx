import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { useLocation, useParams } from 'react-router-dom';
import Questions from '@/components/multipleChoice/Questions';
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

const data = {
  javascript: [
    {
      id: '1',
      question: '다음 중 JavaScript에서 원시 타입(primitive type)이 아닌 것은 무엇입니까?',
      options: ['문자열(String)', '숫자(Number)', '객체(Object)', '불리언(Boolean)'],
      answer: '객체(Object)',
    },
    {
      id: '2',
      question: "JavaScript에서 `2 + '2'`의 결과는 무엇입니까?",
      options: ['4', "'22'", 'NaN', 'undefined'],
      answer: "'22'",
    },
    {
      id: '3',
      question: '다음 중 JavaScript에서 변수를 선언하는 키워드는 무엇입니까?',
      options: ['var', 'let', 'const', '모두 포함'],
      answer: '모두 포함',
    },
    {
      id: '4',
      question: 'JavaScript에서 배열의 길이를 확인하는 속성은 무엇입니까?',
      options: ['length', 'size', 'count', 'total'],
      answer: 'length',
    },
    {
      id: '5',
      question: '다음 중 JavaScript의 비동기 처리 방법이 아닌 것은 무엇입니까?',
      options: ['콜백(callback)', '프로미스(Promise)', 'async/await', '반복문'],
      answer: '반복문',
    },
  ],
  html: [
    {
      id: '1',
      question: '다음 중 HTML에서 문서의 제목을 나타내는 태그는 무엇입니까?',
      options: ['<title>', '<header>', '<h1>', '<meta>'],
      answer: '<title>',
    },
    {
      id: '2',
      question:
        'HTML5에서 새롭게 추가된 입력 필드 속성 중 이메일 주소를 입력받기 위한 속성은 무엇입니까?',
      options: [
        '<input type="email">',
        '<input type="text">',
        '<input type="password">',
        '<input type="url">',
      ],
      answer: '<input type="email">',
    },
  ],
};

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
