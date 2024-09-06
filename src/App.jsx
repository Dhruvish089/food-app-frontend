import React from "react";
import Routers from "./Routers";

function App() {
  return (
    <>
    {console.log("test Env", process.env.REACT_APP_BASE_URL)}
      <Routers />
    </>
  );
}

export default App;
