import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import Ranking from '../pages/ranking';
import Message from '../pages/Message';
import User from '../pages/user';

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
    path: 'message',
    element: <Message />,
  },
  {
    path: 'user',
    element: <User />,
  },
]);

export default router;
