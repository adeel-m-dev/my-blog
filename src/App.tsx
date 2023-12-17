import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import { PublicRoutes } from "./routes";
// import { useContentFullHook } from "./utils/contentfullHook";
// import { useEffect, useState } from "react";

function App() {
  // const [posts, setPosts] = useState<any>([]);
  // const { getPosts } = useContentFullHook();
  // console.log(posts);

  // useEffect(() => {
  //   getPosts().then((res) => setPosts(res));
  // }, []);

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
