import Hero from "./Hero";

const ComingSoon = () => {
  return (
    <div className="relative min-h-dvh bg-white">
      <div className="opacity-30 pointer-events-none select-none">
        <Hero />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-primary">
            Web Sitemiz
          </h1>
          <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-primary">
            Yapım Aşamasında
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Yakında burada olacağız.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;


