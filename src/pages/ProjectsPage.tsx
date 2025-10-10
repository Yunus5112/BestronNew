import { Footer } from "../components/Footer";
import { ProjectHero } from "../components/projects/ProjectHero";
import { LazyProjectSection } from "../components/projects/LazyProjectSection";
import { useAssetUrl } from "../hooks/useAssetUrl";
import { projectSections } from "../data/projectSections";

export const ProjectsPage = () => {
  const { projectImage, aboutImage } = useAssetUrl();

  return (
    <>
      {/* Hero Section */}
      <ProjectHero
        titleKey="projectsPage.mainTitle"
        descriptionKey="projectsPage.description"
        backgroundImageUrl={aboutImage("aboutBg.png")}
        overlayImageUrl={projectImage("projectsPageImage.png")}
      />

      {/* Project Sections */}
      {projectSections.map((section, index) => (
        <LazyProjectSection
          key={`project-section-${index}`}
          {...section}
          imageUrl={projectImage(section.imageFilename)}
        />
      ))}


      {/* Footer */}
      <Footer />
    </>
  );
};

export default ProjectsPage;
