import { Routes, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";

import { PublicRoutes } from "./routes";
import AuthNavbar from "./components/AuthNavbar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
// import { useContentFullHook } from "./utils/contentfullHook";
// import { useEffect, useState } from "react";

function App() {
  const location = useLocation().pathname;
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme")!);

  useEffect(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const paths = ["/", "/single", "/about", "/contact", "/terms", "/privacy"];

  if (!paths.includes(location)) return <h1>NOT FOUND</h1>;

  return (
    <div className='dark:bg-gray-900 dark:text-white'>
      <AuthNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <Routes>
        {PublicRoutes.map((route, key) => (
          <Route key={key} path={route.path} element={<route.component />} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
