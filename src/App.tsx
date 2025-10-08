import Header from "./components/Header";
import Hero from "./components/Hero";
import { I18nProvider } from "./i18n/I18nProvider";
import Services from "./components/Services";

const App = () => {
  return (
    <I18nProvider>
      <div className="min-h-dvh flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Services />
        </main>
        <footer className="py-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} Bestron Technology</footer>
      </div>
    </I18nProvider>
  );
};

export default App;
