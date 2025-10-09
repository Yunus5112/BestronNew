import Header from "./components/Header";
import Hero from "./components/Hero";
import { I18nProvider } from "./i18n/I18nProvider";
import Services from "./components/Services";
import ServicesOverview from "./components/ServicesOverview";
import Projects from "./components/Projects";
import ComingSoon from "./components/ComingSoon";

const App = () => {
  const isComingSoon = import.meta.env.VITE_COMING_SOON === "true";
  return (
    <I18nProvider>
      {isComingSoon ? (
        <ComingSoon />
      ) : (
        <div className="min-h-dvh flex flex-col">
          <Header />
          <main className="flex-1">
            <Hero />
          <Services />
          <Projects />
          <ServicesOverview />
          </main>
          <footer className="py-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} Bestron Technology</footer>
        </div>
      )}
    </I18nProvider>
  );
};

export default App;
