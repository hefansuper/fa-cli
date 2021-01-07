import { Redirect } from "react-router-dom";

import Home from "../pages/Home/index";
import Hello from "../pages/Hello/index";

const _routes = [
  // 重置路由
  {
    path: "/",
    exact: true,
    render: () => <Redirect to={"/home"} />,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/hello",
    component: Hello,
  },
];

export default _routes;
