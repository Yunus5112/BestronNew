import { useT } from "../i18n/I18nProvider";
import { useAssetUrl } from "../hooks/useAssetUrl";
import { AboutHero } from "./about/AboutHero";
import { AboutSection } from "./about/AboutSection";
import { AboutTextSection } from "./about/AboutTextSection";
import { AboutContentBlock } from "./about/AboutContentBlock";
import { AboutList } from "./about/AboutList";
import { VisionMissionSection } from "./about/VisionMissionSection";
import { Colors, Typography } from "./lib/theme";

export const About = () => {
  const t = useT();
  const { aboutImage } = useAssetUrl();

  return (
    <>
      {/* Hero Section */}
      <AboutHero
        title={t("about.mainTitle")}
        description={t("about.description1")}
        backgroundImage={aboutImage("aboutBg.png")}
        overlayImage={aboutImage("aboutPageImage.png")}
      />

      {/* Additional Text Section */}
      <AboutSection useContainer={false}>
        <AboutTextSection
          paragraphs={[
            t("about.description2"),
            t("about.description3")
          ]}
        />
      </AboutSection>

      {/* Principles Section */}
      <AboutSection>
        <AboutContentBlock
          image={aboutImage("aboutPageImage2.png")}
          imagePosition="right"
        >
          <p 
            className={`${Typography.sizes.body} leading-[1.5]`}
            style={{ 
              fontFamily: Typography.fontFamily,
              color: Colors.primary
            }}
          >
            {t("about.section2Title")}
          </p>

          <p 
            className={`${Typography.sizes.body} leading-[1.5]`}
            style={{ 
              fontFamily: Typography.fontFamily,
              color: Colors.primary
            }}
          >
            {t("about.section2Desc1")}
          </p>

          <p 
            className={`${Typography.sizes.body} leading-[1.5]`}
            style={{ 
              fontFamily: Typography.fontFamily,
              color: Colors.primary
            }}
          >
            {t("about.section2Intro")}
          </p>

          <AboutList items={t<string[]>("about.principles")} />

          <p 
            className={`${Typography.sizes.body} leading-[1.5]`}
            style={{ 
              fontFamily: Typography.fontFamily,
              color: Colors.primary
            }}
          >
            {t("about.section2Desc2")}
          </p>
        </AboutContentBlock>
      </AboutSection>

      {/* Vision & Mission Section */}
      <AboutSection useContainer={false}>
        <VisionMissionSection
          vision={{
            title: t("about.vision.title"),
            text: t("about.vision.text")
          }}
          mission={{
            title: t("about.mission.title"),
            text: t("about.mission.text")
          }}
        />
      </AboutSection>

      {/* Team Section */}
      <AboutSection paddingTop="pt-8 lg:pt-12">
        <AboutContentBlock
          image={aboutImage("aboutPageImage3.png")}
          imagePosition="left"
          imageHeight="h-[200px] md:h-[250px] lg:h-[300px]"
        >
          <h2 
            className={`${Typography.sizes.h2} font-semibold`}
            style={{ 
              fontFamily: Typography.fontFamily,
              color: Colors.primary
            }}
          >
            {t("about.team.title")}
          </h2>

          <p 
            className={`${Typography.sizes.body} leading-[1.5]`}
            style={{ 
              fontFamily: Typography.fontFamily,
              color: Colors.primary
            }}
          >
            {t("about.team.text1")}
          </p>

          <p 
            className={`${Typography.sizes.body} leading-[1.5]`}
            style={{ 
              fontFamily: Typography.fontFamily,
              color: Colors.primary
            }}
          >
            {t("about.team.text2")}
          </p>
        </AboutContentBlock>
      </AboutSection>
    </>
  );
};

export default About;
