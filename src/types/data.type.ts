export interface Section {
  title: string;
  href: string;
}

export interface HomeSection {
  key: string;
  title: string;
  image: string;
}

export interface AboutSection {
  key: string;
  name: string;
  header: string;
  description: string;
  image_movil: string;
  image_tablet: string;
  image_web: string;
  recognitions: string[];
  littleMessage: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
}

export interface ServicesSection {
  key: string;
  header: string;
  littleMessage: string;
  services: Service[];
}

export interface Testimonial {
  name: string;
  profession: string;
  feedback: string;
  image: string;
}

export interface Inputs {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  isRequired?: boolean;
}

export interface Textatera {
  id: string;
  label: string;
  placeholder: string;
}

export interface TestimonialsSection {
  key: string;
  header: string;
  littleMessage: string;
  testimonials: Testimonial[];
}

export interface Contact {
  key: string;
  title: string;
  header?: string;
  littleMessage?: string;
  subtitle: string;
  contactText: string;
  contactLink: string;
  inputs: Inputs[];
  textarea: Textatera;
}

export interface LanguageContent {
  sections: Section[];
  home: HomeSection;
  about: AboutSection;
  services: ServicesSection;
  testimonials: TestimonialsSection;
  contact: Contact;
}

export interface Translations {
  es: LanguageContent;
  en: LanguageContent;
}

export interface TranslationsContent {
  [key: string]: LanguageContent;
}

export interface FormData {
  full_name: string;
  email: string;
  website: string;
  share_your_message: string;
}
