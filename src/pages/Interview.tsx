import { useState, useRef, useEffect } from 'react';
import { css, CSSObject } from '@emotion/react';
import ChatBotBtn from '@/components/chatbot/ChatBotBtn';
import {
  htmlQuiz,
  cssQuiz,
  javascriptQuiz,
  typescriptQuiz,
  reactQuiz,
  csQuiz,
  browserQuiz,
  networkQuiz,
  testsQuiz,
} from '@/data/mockQuiz';

const topics = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'cs',
  'browser',
  'network',
  'test',
];

const Interview = () => {
  const [activeTab, setActiveTab] = useState<string>('HTML');
  const [indicatorStyle, setIndicatorStyle] = useState<CSSObject>({});
  const [searchQuery, setSearchQuery] = useState<string>('');
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeTabIndex = topics.indexOf(activeTab);
    const activeTabElement = tabsRef.current[activeTabIndex];
    if (activeTabElement) {
      setIndicatorStyle({
        left: `${activeTabElement.offsetLeft}px`,
        width: `${activeTabElement.offsetWidth}px`,
      });
    }
  }, [activeTab]);

  const handleTabClick = (topic: string) => {
    setActiveTab(topic);
    setSearchQuery('');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const renderQuestions = () => {
    const questionsByTopic: { [key: string]: string[] } = {
      HTML: htmlQuiz,
      CSS: cssQuiz,
      JavaScript: javascriptQuiz,
      TypeScript: typescriptQuiz,
      React: reactQuiz,
      cs: csQuiz,
      browser: browserQuiz,
      network: networkQuiz,
      test: testsQuiz,
    };

    const filteredQuestions = questionsByTopic[activeTab].filter((question) =>
      question.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return filteredQuestions.map((question, index) => (
      <div key={index} css={QuestionContainer}>
        <div css={QuestionItem}>
          <h2>{`${index + 1}. ${question}`}</h2>
        </div>
        <hr />
      </div>
    ));
  };

  const getQuestionCount = () => {
    const questionsByTopic: { [key: string]: string[] } = {
      HTML: htmlQuiz,
      CSS: cssQuiz,
      JavaScript: javascriptQuiz,
      TypeScript: typescriptQuiz,
      React: reactQuiz,
      cs: csQuiz,
      browser: browserQuiz,
      network: networkQuiz,
      test: testsQuiz,
    };

    // 검색어가 있을 경우 필터링된 질문 수 반환
    const filteredQuestions = questionsByTopic[activeTab].filter((question) =>
      question.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return filteredQuestions.length;
  };

  return (
    <>
      <div css={SubjectiveQuizContainer}>
        <div css={Container}>
          <h1>모의 면접</h1>
          <p>DevQuiz AI 면접관과 실제 면접 질문을 활용해 모의 면접을 진행해보세요.</p>
          <input
            type="text"
            placeholder="검색"
            value={searchQuery}
            onChange={handleSearchChange} // 입력 변경 핸들러 추가
          />
          <div css={TabsContainer}>
            {topics.map((topic, index) => (
              <button
                key={topic}
                ref={(el) => (tabsRef.current[index] = el)}
                css={TabButton(activeTab === topic)}
                onClick={() => handleTabClick(topic)}
              >
                {topic}
              </button>
            ))}
            <div css={TabIndicator(indicatorStyle)} />
          </div>
          <span>{getQuestionCount()}개의 질문이 있어요</span>
          {renderQuestions()}
        </div>
      </div>
      <ChatBotBtn />
    </>
  );
};

export default Interview;

const SubjectiveQuizContainer = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
  cursor: pointer;
  margin-left: 100px;
`;

const Container = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;

  h1 {
    font-size: 26px;
    font-weight: 500;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: #7a7a7a;
    margin-bottom: 20px;
  }

  input {
    width: 800px;
    height: 40px;
    border: 1px solid #c5c5c5;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 20px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    color: #7a7a7a;
    margin-bottom: 20px;
  }
`;

const TabsContainer = css`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  position: relative;
  font-size: 15px;
  font-weight: 500;
`;

const TabButton = (isActive: boolean) => css`
  padding: 10px 20px;
  background-color: transparent;
  color: ${isActive ? '#FF735E' : '#000'};
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff735e;
  }
`;

const TabIndicator = (style: CSSObject) =>
  css({
    position: 'absolute',
    bottom: '0px',
    height: '2px',
    backgroundColor: '#ff735e',
    transition: 'all 0.3s ease',
    ...style,
  });

const QuestionContainer = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  cursor: pointer;

  h2 {
    font-size: 16px;
    font-weight: 400;
    color: #444;
    margin-bottom: 14px;
  }

  hr {
    width: 800px;
    height: 1px;
    background-color: #c5c5c5;
    margin-bottom: 20px;
  }
`;

const QuestionItem = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  input {
    width: 20px;
    height: 20px;
    border: 1px solid #c5c5c5;
    border-radius: 50%;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;
