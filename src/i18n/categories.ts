export const PROJECT_CATEGORY_SLUGS: Record<string, string> = {
  "Web Apps": "webApps",
  "Web App": "webApps",
  "UI Components": "uiComponents",
  "Full Stack": "fullStack",
  "Mobile App": "mobileApp",
};

export const FILTER_CATEGORY_SLUGS = [
  "all",
  "webApps",
  "uiComponents",
  "fullStack",
] as const;

export type FilterCategorySlug = (typeof FILTER_CATEGORY_SLUGS)[number];

export const FILTER_TO_DATA_CATEGORY: Record<
  FilterCategorySlug,
  string | null
> = {
  all: null,
  webApps: "Web Apps",
  uiComponents: "UI Components",
  fullStack: "Full Stack",
};

export const matchesCategoryFilter = (
  projectCategory: string,
  activeSlug: FilterCategorySlug,
): boolean => {
  if (activeSlug === "all") {
    return true;
  }

  const dataCategory = FILTER_TO_DATA_CATEGORY[activeSlug];
  if (!dataCategory) {
    return true;
  }

  return (
    projectCategory === dataCategory ||
    PROJECT_CATEGORY_SLUGS[projectCategory] === activeSlug
  );
};
