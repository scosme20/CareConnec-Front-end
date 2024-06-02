import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/home.jsx';

export const useRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
      ],
    },
  ]);
};
