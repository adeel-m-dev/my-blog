import AuthNavbar from "./components/AuthNavbar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import SinglePost from "./components/SinglePost";

function App() {
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

  return (
    <div className='dark:bg-gray-900 dark:text-white'>
      <AuthNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/:slug/:id' element={<SinglePost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
