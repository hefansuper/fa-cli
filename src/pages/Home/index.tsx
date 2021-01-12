import React from "react";
import { useLocation } from "react-router-dom";
function Home() {
  console.log(useLocation());













  
  return <div className="Home">home</div>;
}
export default React.memo(Home);
