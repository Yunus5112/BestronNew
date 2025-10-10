import { useT } from "../i18n/I18nProvider";
import firstScreenImage from "../assets/images/firstScreenImage";
import heroBackground from "../assets/images/heroBackground";
import { HeroSection } from "./hero/HeroSection";
import { HeroContent } from "./hero/HeroContent";
import { HeroImage } from "./hero/HeroImage";

export const Hero = () => {
  const t = useT();
  const handleCtaClick = () => {
    // CTA button click handler
    console.log('CTA clicked');
  };

  return (
    <HeroSection backgroundSvg={heroBackground}>
      <HeroContent
        titleLead={t("hero.titleLead")}
        titleEmphasis={t("hero.titleEmphasis")}
        ctaText={t("hero.cta")}
        onCtaClick={handleCtaClick}
      />

      <HeroImage imageSvg={firstScreenImage} />
    </HeroSection>
  );
};

export default Hero;


