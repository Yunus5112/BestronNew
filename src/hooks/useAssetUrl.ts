/**
 * Custom hook for generating asset URLs with type safety
 */
export const useAssetUrl = () => {
  const createAssetUrl = (category: string, filename: string): string => {
    return new URL(`../assets/images/${category}/${filename}`, import.meta.url).href;
  };

  return {
    projectImage: (filename: string) => createAssetUrl('projects', filename),
    aboutImage: (filename: string) => createAssetUrl('about', filename),
    servicesImage: (filename: string) => createAssetUrl('services', filename),
    sectorsImage: (filename: string) => createAssetUrl('sectors', filename),
    whyUsImage: (filename: string) => createAssetUrl('whyUs', filename),
  };
};
