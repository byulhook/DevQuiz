import { createBrowserRouter } from 'react-router-dom';

import SubjectiveQuiz from '@/components/SubjectiveQuiz';
import ContainerLayout from '@/layouts/ContainerLayout';
import RootLayout from '@/layouts/RootLayout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Message from '@/pages/Message';
import Quiz from '@/pages/Quiz';
import Settings from '@/pages/Settings';
import PATH from '@/routes/path';
import { ProtectedRoute } from '@/routes/ProtectedRoute';
import PublicRoute from '@/routes/PublicRoute';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: PATH.LOGIN,
        element: <PublicRoute />,
        children: [{ index: true, element: <Login /> }],
      },
    ],
  },
  {
    element: <ContainerLayout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          { path: PATH.HOME, element: <Home /> },
          {
            path: 'message',
            element: <Message />,
          },
          {
            path: PATH.QUIZ,
            element: <Quiz />,
          },
          {
            path: PATH.QUIZ_MULTIPLE_CHOICE,
            element: <div>객관식 퀴즈</div>,
          },
          {
            path: PATH.QUIZ_SHORT_ANSWER,
            element: (
              <div>
                <SubjectiveQuiz />
              </div>
            ),
          },
          {
            path: PATH.SETTINGS,
            element: <Settings />,
          },
        ],
      },
    ],
  },
]);

export default router;
