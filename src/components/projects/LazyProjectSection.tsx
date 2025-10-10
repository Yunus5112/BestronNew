import { lazy, Suspense } from 'react';
import { ProjectSectionConfig } from '../../data/projectSections';
import { Colors } from '../lib/theme';

// Lazy load ProjectSection component for better performance
const ProjectSection = lazy(() => import('./ProjectSection').then(module => ({ 
  default: module.ProjectSection 
})));

interface LazyProjectSectionProps extends ProjectSectionConfig {
  imageUrl: string;
}

export const LazyProjectSection = (props: LazyProjectSectionProps) => {
  return (
    <Suspense fallback={
      <section 
        className="py-4 lg:py-8" 
        style={{ backgroundColor: Colors.background }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="animate-pulse">
              <div className="h-[400px] lg:h-[700px] bg-gray-200 rounded-2xl"></div>
            </div>
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </section>
    }>
      <ProjectSection {...props} />
    </Suspense>
  );
};
