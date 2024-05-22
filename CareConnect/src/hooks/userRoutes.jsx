import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/home.jsx';
// outras importações para rotas

export const useRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        // outras rotas
      ],
    },
  ]);
};
