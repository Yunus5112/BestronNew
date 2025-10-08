import Button from "./ui/Button";
import { Container } from "./ui/Container";
import { useT } from "../i18n/I18nProvider";

export const Hero = () => {
  const t = useT();
  return (
    <section className="relative overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-8 sm:pt-10 lg:pt-12 pb-4 sm:pb-6 lg:pb-8">
        <div className="order-2 lg:order-1">
          <h1
            className="text-[40px] sm:text-[48px] lg:text-[60px] leading-[1.24] font-semibold tracking-normal text-blue-950"
            style={{ fontFamily: "Inter, ui-sans-serif, system-ui" }}
          >
            {t("hero.titleLead")} {" "}
            <span className="font-bold">{t("hero.titleEmphasis")}</span>
          </h1>
          <div className="mt-10">
            <Button>{t("hero.cta")}</Button>
          </div>
        </div>
        <div className="order-1 lg:order-2 justify-self-center">
          <img
            src="/src/assets/images/firstScreenImage.svg"
            alt="Bestron teknoloji illüstrasyon"
            className="w-full h-auto max-w-[480px] sm:max-w-[520px] lg:max-w-[560px]"
            loading="eager"
          />
        </div>
      </Container>
      {/* Soft radial background accents */}
      <div className="pointer-events-none absolute -z-10 inset-0 bg-[radial-gradient(60%_60%_at_70%_30%,rgba(59,130,246,0.15)_0%,rgba(255,255,255,0)_70%)]" />
    </section>
  );
};

export default Hero;


