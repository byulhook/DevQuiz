import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import Ranking from '../pages/ranking';
import Dictionary from '../pages/dictionary';
import User from '../pages/user';
import Login from '../pages/Login';
import Quiz from '../components/Quiz';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'ranking',
    element: <Ranking />,
  },
  {
    path: 'dictionary',
    element: <Dictionary />,
  },
  {
    path: 'user',
    element: <User />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'quiz-v1',
    element: <Quiz />,
  },
]);

export default router;
