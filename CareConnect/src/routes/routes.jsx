import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../components/home/home.jsx';
import Overview from '../components/overview/overview.jsx';
import Families from '../components/families/families.jsx';
import Donation from '../components/donations/donation.jsx';
import Volunteer from '../components/volunteers/volunteer.jsx';
import Hostel from '../components/hostel/hostel.jsx';
import Homeless from '../components/homeless/homeless.jsx';
import Root from '../root.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '',
    element: <Root />,
    children: [
      {
        path: '/overview',
        element: <Overview />,
      },
      {
        path: '/families',
        element: <Families />,
      },
      {
        path: '/donation',
        element: <Donation />,
      },
      {
        path: '/volunteer',
        element: <Volunteer />,
      },
      {
        path: '/homeless',
        element: <Homeless />,
      },
      {
        path: '/hostel',
        element: <Hostel />,
      },
    ],
  },
]);
