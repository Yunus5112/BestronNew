import { Footer } from "../components/Footer";
import { ProjectHero } from "../components/projects/ProjectHero";
import { LazyProjectSection } from "../components/projects/LazyProjectSection";
import { useAssetUrl } from "../hooks/useAssetUrl";
import { projectSections } from "../data/projectSections";
import aboutBg from "../assets/images/about/aboutBg";

export const ProjectsPage = () => {
  const { projectImage } = useAssetUrl();

  return (
    <>
      {/* Hero Section */}
      <ProjectHero
        titleKey="projectsPage.mainTitle"
        descriptionKey="projectsPage.description"
        backgroundImageUrl={`data:image/svg+xml;utf8,${encodeURIComponent(aboutBg)}`}
        overlayImageUrl={projectImage("projectsPageImage.jpg")}
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
