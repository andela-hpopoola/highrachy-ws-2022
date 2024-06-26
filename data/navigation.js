import { convertToSlug } from '@/helpers/string';
import servicesText from './services';

export const home = {
  title: 'Home',
  url: '',
  children: {},
};

export const currentServices = Object.values(servicesText).reduce(
  (acc, { title }) => {
    acc[`services#${convertToSlug(title)}`] = title;
    return acc;
  },
  {}
);

export const services = {
  title: 'Services',
  url: 'services',
  children: {
    services: 'Our Services',
    ...currentServices,
  },
};

export const projects = {
  title: 'Projects',
  url: 'projects',
  children: {},
};

export const about = {
  title: 'About Us',
  url: 'about-us',
  children: {
    'about-us': 'About Us',
    'our-culture': 'Our Culture',
    'our-culture#our-team': 'Our Team',
    'contact-us': 'Contact Us',
    careers: 'Careers',
  },
};

const navigation = [services, projects, about];

export default navigation;
