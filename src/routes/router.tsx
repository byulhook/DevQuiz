import { createBrowserRouter } from 'react-router-dom';

import ContainerLayout from '@/layouts/ContainerLayout';
import RootLayout from '@/layouts/RootLayout';
import Home from '@/pages/home';
import Login from '@/pages/Login';
import Quiz from '@/pages/Quiz';
import Settings from '@/pages/Settings';
import PATH from '@/routes/path';

import Message from '../pages/Message';

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
        element: <div>주관식 퀴즈</div>,
      },
      {
        path: PATH.SETTINGS,
        element: <Settings />,
      },
    ],
  },
]);

export default router;
