import { createBrowserRouter } from 'react-router-dom';
import ContainerLayout from '@/layouts/ContainerLayout';
import RootLayout from '@/layouts/RootLayout';
import Home from '@/pages/Home';
import Interview from '@/pages/Interview';
import Login from '@/pages/Login';
import Message from '@/pages/Message';
import MultipleChoice from '@/pages/MultipleChoice';
import Quiz from '@/pages/Quiz';
import PATH from '@/routes/path';
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
            path: 'quiz/multiple-choice/:category',
            element: <MultipleChoice />,
          },
          {
            path: 'interview',
            element: (
              <div>
                <Interview />
              </div>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
