import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
interface QuestionsProps {
  selectedQuestion: {
    id: string;
    question: string;
    options: string[];
    answer: string;
  };
  setStop: (stop: boolean) => void;
}

const Questions = ({ selectedQuestion, setStop }: QuestionsProps) => {
  const [checkedIndex, setCheckedIndex] = useState<number | null>(null);
  const [checkedOption, setCheckedOption] = useState<string | null>(null);
  const [correctIndex, setCorrectIndex] = useState<number | null>(null);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const { category } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const questionId = new URLSearchParams(location.search).get('questionId') || 1;

  useEffect(() => {
    setCheckedIndex(null);
    setCheckedOption(null);
    setCorrect(null);
  }, [questionId, category]);

  if (!category) {
    return <p>해당 데이터가 존재하지 않습니다.</p>;
  }

  const handleCheckboxChange = (index: number, option: string) => {
    setCheckedIndex(index);
    setCheckedOption(option);
  };

  const handleSubmit = () => {
    if (checkedOption === selectedQuestion.answer) {
      setCorrect(true);
      setStop(true);
    } else {
      setCorrect(false);
      setStop(true);
      setCorrectIndex(selectedQuestion.options.findIndex((o) => o === selectedQuestion.answer));
    }
  };

  const handleNext = () => {
    const nextId = Number(questionId) + 1;
    navigate(`/multipleChoice/${category}?questionId=${nextId}`);
  };
  return (
    <>
      <ul>
        {selectedQuestion.options.map((option, index) => (
          <li key={index}>
            <button
              css={itemWrapper(checkedIndex, index, correct, correctIndex)}
              onClick={() => handleCheckboxChange(index, option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      <div css={{ display: 'flex', justifyContent: 'end' }}>
        {correct ? (
          <button css={[submitBtn, { marginLeft: '10px' }]} onClick={handleNext}>
            다음
          </button>
        ) : (
          <button css={submitBtn} onClick={handleSubmit}>
            제출
          </button>
        )}
      </div>
    </>
  );
};

export default Questions;

const itemWrapper = (
  checkedIndex: number | null,
  index: number | null,
  correct: boolean | null,
  correctIndex: number | null,
) => css`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #d6d6d6;
  border-radius: 50px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  height: 3rem;
  width: 100%;
  padding-left: 2rem;
  margin: 1rem 0;
  transition: all 0.2s ease-in-out;
  ${checkedIndex === index &&
  correct === null &&
  `
    border: 2px solid #f75e43;
  `}
  ${checkedIndex === index &&
  correct === true &&
  `
    border: 1px solid #21c501;
  `}
  ${checkedIndex === index &&
  correct === false &&
  `
    border: 1px solid #ff0000;
  `}
  ${correctIndex === index &&
  correct === false &&
  `
    border: 1px solid #21c501;
  `}
`;

const submitBtn = css`
  background-color: #ff735e;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 20px;
  cursor: pointer;
  &:hover {
    background-color: #f75e43;
  }
`;
