import { createBrowserRouter } from 'react-router-dom';

import ContainerLayout from '@/layouts/ContainerLayout';
import RootLayout from '@/layouts/RootLayout';
import Home from '@/pages/home';
import Login from '@/pages/Login';
import Quiz from '@/pages/Quiz';
import QuizMultipleChoice from '@/pages/QuizMultipleChoice';
import QuizShortAnswer from '@/pages/QuizShortAnswer';
import Settings from '@/pages/Settings';
import PATH from '@/routes/path';

const router = createBrowserRouter([
  {
    path: PATH.LOGIN,
    element: <RootLayout />,
    children: [
      {
        path: PATH.LOGIN,
        element: <Login />,
      },
    ],
  },
  {
    path: PATH.HOME,
    element: <ContainerLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: PATH.QUIZ,
        element: <Quiz />,
      },
      {
        path: PATH.QUIZ_MULTIPLE_CHOICE,
        element: <QuizMultipleChoice />,
      },
      {
        path: PATH.QUIZ_SHORT_ANSWER,
        element: <QuizShortAnswer />,
      },
      {
        path: PATH.SETTINGS,
        element: <Settings />,
      },
    ],
  },
]);

export default router;
