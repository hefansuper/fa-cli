import { renderRoutes } from "react-router-config"; // renderRoutes读取路由配置文件转化为 router标签。
import { HashRouter } from "react-router-dom";

import routes from "./routes/index";

function App(): JSX.Element {
  return <HashRouter>{renderRoutes(routes)}</HashRouter>;
}

export default App;
