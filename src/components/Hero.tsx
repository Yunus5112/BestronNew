import Button from "./ui/Button";
import { Container } from "./ui/Container";
import { useT } from "../i18n/I18nProvider";
import firstScreenImage from "../assets/images/firstScreenImage";
import heroBackground from "../assets/images/heroBackground";

export const Hero = () => {
  const t = useT();
  return (
    <section className="relative overflow-hidden">
      {/* full-bleed background image */}
      <div 
        className="absolute inset-0 -z-10 w-full h-full object-cover"
        dangerouslySetInnerHTML={{ __html: heroBackground }}
      />
      {/* top fade to blend with header */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-10 sm:h-12 bg-gradient-to-b from-white/60 to-transparent" />
      <Container className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-6 sm:pt-8 lg:pt-10 pb-2 sm:pb-4 lg:pb-6">
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
              <div 
                className="w-full h-auto max-w-[480px] sm:max-w-[520px] lg:max-w-[560px]"
                dangerouslySetInnerHTML={{ __html: firstScreenImage }}
              />
            </div>
      </Container>
      {/* bottom fade to blend into services */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
};

export default Hero;


