import { IRoutes } from '../interfaces/routes';
import { Home } from '../../pages/home/Home.component';
import { Details } from '../../pages/detail/Details.component';

export const ROUTES: IRoutes[] = [
  {
    path: '/',
    key: 'home',
    element: <Home />,
    name: 'Home'
  },
  {
    path: '/details/:id',
    key: 'details',
    element: <Details />,
    name: 'Details'
  }
];