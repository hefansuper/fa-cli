import { Redirect } from 'react-router-dom';
import { ReactNode } from 'react';

import Home from '../pages/Home/index';
import Hello from '../pages/Hello/index';

const _routes = [
  // 重置路由
  {
    path: '/',
    exact: true,
    render: (): ReactNode => <Redirect to={'/home'} />,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/hello',
    component: Hello,
  },
];

export default _routes;
