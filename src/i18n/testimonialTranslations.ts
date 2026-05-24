import type { Testimonial } from "@/data/testimonials";

const ROLE_KEYS: Record<string, string> = {
  CEO: "testimonials.roleCeo",
  CTO: "testimonials.roleCto",
  "Lead Designer": "testimonials.roleDesigner",
  "Product Manager": "testimonials.rolePm",
  Engineer: "testimonials.roleEngineer",
  Founder: "testimonials.roleFounder",
};

export const translateTestimonial = (
  testimonial: Testimonial,
  t: (key: string) => string,
): Testimonial => ({
  ...testimonial,
  quote: t(`testimonials.q${testimonial.id}`),
  role: t(ROLE_KEYS[testimonial.role] ?? testimonial.role),
});
