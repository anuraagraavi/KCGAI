import { ComponentType, SVGProps } from 'react';

export interface Project {
  id: string;
  title: string;
  client: string;
  status: 'Ongoing' | 'Completed';
  category: string;
  value?: string;
  location: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface NavItem {
  label: string;
  path: string;
  subItems?: { label: string; hash: string }[];
}

export interface JobListing {
  id: string;
  title: string;
  location: string;
  type: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  source: string;
  image: string;
}