import AuthNavbar from "./components/AuthNavbar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import SinglePost from "./components/SinglePost";
import NotFound from "./components/NotFound";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsConditions } from "./components/TermsConditions";
import { Contact } from "./components/Contact";
import { About } from "./components/About";

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
    <>
      <AuthNavbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/terms' element={<TermsConditions />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/:slug/:id' element={<SinglePost />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
