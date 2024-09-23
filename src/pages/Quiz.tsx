import { Link } from 'react-router-dom';

import PATH from '@/routes/path';

const Quiz = () => {
  return (
    <>
      <h1>Quiz</h1>
      <ul>
        <li>
          <Link to={PATH.QUIZ_MULTIPLE_CHOICE}>Multiple Choice</Link>
        </li>
        <li>
          <Link to={PATH.QUIZ_SHORT_ANSWER}>Short Answer</Link>
        </li>
      </ul>
    </>
  );
};

export default Quiz;
