import React from "react";
import { useLocation } from "react-router-dom";
function Home() {
  console.log(useLocation());

  let a = 0;
  return <div className="Home">home</div>;
}
export default React.memo(Home);
