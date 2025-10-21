/**
 * Project sections configuration for maintainable data structure
 */
export interface ProjectSectionConfig {
  titleKey: string;
  sections: Array<{
    subtitleKey?: string;
    contentKeys: string[];
  }>;
  imageFilename: string;
  imagePosition: 'left' | 'right';
  imageHeight?: string;
}

export const projectSections: ProjectSectionConfig[] = [
  {
    titleKey: "projectsPage.electronicsSection.title",
    sections: [
      {
        subtitleKey: "projectsPage.electronicsSection.telemetry.title",
        contentKeys: ["projectsPage.electronicsSection.telemetry.description"]
      },
      {
        subtitleKey: "projectsPage.electronicsSection.vehicleTracking.title",
        contentKeys: [
          "projectsPage.electronicsSection.vehicleTracking.description",
          "projectsPage.electronicsSection.vehicleTracking.details",
          "projectsPage.electronicsSection.vehicleTracking.benefits",
          "projectsPage.electronicsSection.vehicleTracking.features"
        ]
      }
    ],
    imageFilename: "projectsPageImage1.jpg",
    imagePosition: "right",
    imageHeight: "h-[400px] md:h-[600px] lg:h-[750px]"
  },
  {
    titleKey: "projectsPage.electronicsSection.motorcycleTracking.title",
    sections: [
      {
        contentKeys: [
          "projectsPage.electronicsSection.motorcycleTracking.description",
          "projectsPage.electronicsSection.motorcycleTracking.applications",
          "projectsPage.electronicsSection.motorcycleTracking.features",
          "projectsPage.electronicsSection.motorcycleTracking.advancedFeatures"
        ]
      }
    ],
    imageFilename: "projectsPageImage2.jpg",
    imagePosition: "left",
    imageHeight: "h-[300px] md:h-[400px] lg:h-[450px]"
  },
  {
    titleKey: "projectsPage.electronicsSection.coldChainTracking.title",
    sections: [
      {
        contentKeys: [
          "projectsPage.electronicsSection.coldChainTracking.description",
          "projectsPage.electronicsSection.coldChainTracking.details",
          "projectsPage.electronicsSection.coldChainTracking.benefits"
        ]
      },
      {
        subtitleKey: "projectsPage.electronicsSection.tachographTaximeter.title",
        contentKeys: [
          "projectsPage.electronicsSection.tachographTaximeter.description",
          "projectsPage.electronicsSection.tachographTaximeter.tachographDetails",
          "projectsPage.electronicsSection.tachographTaximeter.taximeterDetails"
        ]
      }
    ],
    imageFilename: "projectsPageImage3.jpg",
    imagePosition: "right",
    imageHeight: "h-[350px] md:h-[500px] lg:h-[650px]"
  },
  {
    titleKey: "projectsPage.electronicsSection.aggressiveDrivingAnalysis.title",
    sections: [
      {
        contentKeys: [
          "projectsPage.electronicsSection.aggressiveDrivingAnalysis.description",
          "projectsPage.electronicsSection.aggressiveDrivingAnalysis.technology",
          "projectsPage.electronicsSection.aggressiveDrivingAnalysis.benefits",
          "projectsPage.electronicsSection.aggressiveDrivingAnalysis.reporting"
        ]
      },
      {
        subtitleKey: "projectsPage.electronicsSection.mpptChargeControl.title",
        contentKeys: [
          "projectsPage.electronicsSection.mpptChargeControl.description",
          "projectsPage.electronicsSection.mpptChargeControl.technology",
          "projectsPage.electronicsSection.mpptChargeControl.operation"
        ]
      }
    ],
    imageFilename: "projectsPageImage4.jpg",
    imagePosition: "left",
    imageHeight: "h-[400px] md:h-[550px] lg:h-[700px]"
  },
  {
    titleKey: "projectsPage.electronicsSection.cgmSensorIntegration.title",
    sections: [
      {
        contentKeys: [
          "projectsPage.electronicsSection.cgmSensorIntegration.description",
          "projectsPage.electronicsSection.cgmSensorIntegration.applications",
          "projectsPage.electronicsSection.cgmSensorIntegration.technology",
          "projectsPage.electronicsSection.cgmSensorIntegration.benefits"
        ]
      },
      {
        subtitleKey: "projectsPage.electronicsSection.autoGlassMeasurement.title",
        contentKeys: [
          "projectsPage.electronicsSection.autoGlassMeasurement.description",
          "projectsPage.electronicsSection.autoGlassMeasurement.technology",
          "projectsPage.electronicsSection.autoGlassMeasurement.dataAnalysis",
          "projectsPage.electronicsSection.autoGlassMeasurement.benefits",
          "projectsPage.electronicsSection.autoGlassMeasurement.implementation"
        ]
      }
    ],
    imageFilename: "projectsPageImage5.jpg",
    imagePosition: "right",
    imageHeight: "h-[500px] md:h-[750px] lg:h-[1000px]"
  },
  {
    titleKey: "projectsPage.electronicsSection.vehicleSecurity.title",
    sections: [
      {
        contentKeys: [
          "projectsPage.electronicsSection.vehicleSecurity.description",
          "projectsPage.electronicsSection.vehicleSecurity.technology",
          "projectsPage.electronicsSection.vehicleSecurity.security",
          "projectsPage.electronicsSection.vehicleSecurity.benefits"
        ]
      }
    ],
    imageFilename: "projectsPageImage6.jpg",
    imagePosition: "left",
    imageHeight: "h-[300px] md:h-[400px] lg:h-[450px]"
  },
  {
    titleKey: "projectsPage.electronicsSection.rfCommunicationSystems.title",
    sections: [
      {
        subtitleKey: "projectsPage.electronicsSection.rfCommunicationSystems.rfConverter.title",
        contentKeys: [
          "projectsPage.electronicsSection.rfCommunicationSystems.rfConverter.description",
          "projectsPage.electronicsSection.rfCommunicationSystems.rfConverter.technology",
          "projectsPage.electronicsSection.rfCommunicationSystems.rfConverter.applications"
        ]
      },
      {
        subtitleKey: "projectsPage.electronicsSection.rfCommunicationSystems.remoteControl.title",
        contentKeys: [
          "projectsPage.electronicsSection.rfCommunicationSystems.remoteControl.description",
          "projectsPage.electronicsSection.rfCommunicationSystems.remoteControl.technology",
          "projectsPage.electronicsSection.rfCommunicationSystems.remoteControl.applications",
          "projectsPage.electronicsSection.rfCommunicationSystems.remoteControl.benefits"
        ]
      }
    ],
    imageFilename: "projectsPageImage7.jpg",
    imagePosition: "right",
    imageHeight: "h-[400px] md:h-[600px] lg:h-[750px]"
  },
  {
    titleKey: "projectsPage.electronicsSection.opticalSecuritySystems.title",
    sections: [
      {
        subtitleKey: "projectsPage.electronicsSection.opticalSecuritySystems.laserSystems.title",
        contentKeys: [
          "projectsPage.electronicsSection.opticalSecuritySystems.laserSystems.description"
        ]
      },
      {
        subtitleKey: "projectsPage.electronicsSection.opticalSecuritySystems.cameraSecuritySystems.title",
        contentKeys: [
          "projectsPage.electronicsSection.opticalSecuritySystems.cameraSecuritySystems.description",
          "projectsPage.electronicsSection.opticalSecuritySystems.cameraSecuritySystems.technology",
          "projectsPage.electronicsSection.opticalSecuritySystems.cameraSecuritySystems.security"
        ]
      }
    ],
    imageFilename: "projectsPageImage8.jpg",
    imagePosition: "left",
    imageHeight: "h-[400px] md:h-[600px] lg:h-[750px]"
  },
  {
    titleKey: "projectsPage.electronicsSection.occupationalHealthSafetySystems.title",
    sections: [
      {
        subtitleKey: "projectsPage.electronicsSection.occupationalHealthSafetySystems.cameraSystems.title",
        contentKeys: [
          "projectsPage.electronicsSection.occupationalHealthSafetySystems.cameraSystems.description",
          "projectsPage.electronicsSection.occupationalHealthSafetySystems.cameraSystems.features",
          "projectsPage.electronicsSection.occupationalHealthSafetySystems.cameraSystems.benefits"
        ]
      },
      {
        subtitleKey: "projectsPage.electronicsSection.occupationalHealthSafetySystems.windowSecurityBarriers.title",
        contentKeys: [
          "projectsPage.electronicsSection.occupationalHealthSafetySystems.windowSecurityBarriers.description",
          "projectsPage.electronicsSection.occupationalHealthSafetySystems.windowSecurityBarriers.detection",
          "projectsPage.electronicsSection.occupationalHealthSafetySystems.windowSecurityBarriers.securityLevel"
        ]
      }
    ],
    imageFilename: "projectsPageImage9.jpg",
    imagePosition: "right",
    imageHeight: "h-[400px] md:h-[550px] lg:h-[700px]"
  }
];
