import { useT } from "../i18n/I18nProvider";
import { useAssetUrl } from "../hooks/useAssetUrl";
import projectBackgroundImage from "../assets/images/projectBackgroundImage";
import { ProjectSection } from "./projects/ProjectSection";
import { ProjectHeader } from "./projects/ProjectHeader";
import { NavigationArrow } from "./projects/NavigationArrow";
import { ProjectCarousel } from "./projects/ProjectCarousel";

export const Projects = () => {
  const t = useT();
  const { projectImage } = useAssetUrl();
  
  const images = [
    projectImage("image1.png"),
    projectImage("image2.png"),
    projectImage("image3.png")
  ];

  return (
    <ProjectSection backgroundSvg={projectBackgroundImage}>
      <ProjectHeader
        title={t("projects.title") || "Projeler"}
        description={t("projects.description")}
      >
        <NavigationArrow 
          direction="prev" 
          onClick={() => (window as unknown as { projectCarouselNavigation?: { prev: () => void } }).projectCarouselNavigation?.prev()} 
          className="ml-16 sm:ml-28 lg:ml-40"
        />
        <NavigationArrow 
          direction="next" 
          onClick={() => (window as unknown as { projectCarouselNavigation?: { next: () => void } }).projectCarouselNavigation?.next()} 
          className="mr-16 sm:mr-28 lg:mr-40"
        />
      </ProjectHeader>

      <ProjectCarousel images={images} />
    </ProjectSection>
  );
};

export default Projects;


