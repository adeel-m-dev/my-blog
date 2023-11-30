import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import { PublicRoutes } from "./routes";

function App() {
  return (
    <>
      <Routes>
        {PublicRoutes.map((route, key) => (
          <Route key={key} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </>
  );
}

export default App;
