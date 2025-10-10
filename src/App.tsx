import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { I18nProvider } from "./i18n/I18nProvider";
import ComingSoon from "./components/ComingSoon";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";

const App = () => {
  const isComingSoon = import.meta.env.VITE_COMING_SOON === "true";
  
  return (
    <I18nProvider>
      <Router>
        <ScrollToTop />
        {isComingSoon ? (
          <ComingSoon />
        ) : (
          <div className="min-h-dvh flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
              </Routes>
            </main>
          </div>
        )}
      </Router>
    </I18nProvider>
  );
};

export default App;
