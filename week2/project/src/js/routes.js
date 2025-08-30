
import HomePage from '../week2/home.f7';
import profilePage from '../week2/profile.f7';

import NotFoundPage from '../pages/404.f7';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/profile',
    component: profilePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;