
import { Building2, Users, HardHat, Trophy, ShieldCheck, Truck, Scale, Activity, FileText, Target, MapPin, Briefcase, Zap, Phone, Mail } from 'lucide-react';
import { NavItem, Project, Stat, JobListing, NewsItem } from './types';

// --- NAVIGATION & MEGA MENU DATA ---

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Careers', path: '/careers' },
  { label: 'Media', path: '/media' },
  { label: 'Contact', path: '/contact' },
];

export const MEGA_MENU_DATA = {
  'About Us': {
    sections: [
      {
        title: 'Company',
        items: [
          { label: 'Who We Are', href: '/about#overview', icon: Building2, desc: 'Our history & profile' },
          { label: 'Leadership', href: '/about#leadership', icon: Users, desc: 'Managing Partner Message' },
          { label: 'Vision & Mission', href: '/about#values', icon: Target, desc: 'Our guiding principles' },
        ]
      },
      {
        title: 'Capabilities',
        items: [
          { label: 'Quality Control', href: '/about#quality', icon: ShieldCheck, desc: 'ISO-aligned systems' },
          { label: 'Safety Standards', href: '/about#safety', icon: HardHat, desc: 'HSE Protocols' },
          { label: 'Machinery', href: '/about#machinery', icon: Truck, desc: 'Our Equipment Fleet' },
        ]
      }
    ],
    featured: {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop', // Construction Crane
      title: '24+ Years of Excellence',
      desc: 'Building public infrastructure since 1999.',
      link: '/about'
    }
  },
  'Projects': {
    sections: [
      {
        title: 'Portfolio',
        items: [
          { label: 'Ongoing Projects', href: '/projects#ongoing', icon: Activity, desc: 'Currently under execution' },
          { label: 'Completed Projects', href: '/projects#completed', icon: Trophy, desc: 'Delivered infrastructure' },
        ]
      },
      {
        title: 'Performance',
        items: [
          { label: 'Execution Metrics', href: '/projects#metrics', icon: Zap, desc: 'Quantities & Volume' },
          { label: 'Project Team', href: '/projects#metrics', icon: Users, desc: 'Workforce structure' },
        ]
      }
    ],
    featured: {
      image: 'https://images.unsplash.com/photo-1587351021759-3e566b9af923?q=80&w=600&auto=format&fit=crop', // Building
      title: 'Landmark Projects',
      desc: 'View our signature healthcare & education projects.',
      link: '/projects'
    }
  },
  'Careers': {
    sections: [
      {
        title: 'Join Us',
        items: [
          { label: 'Work Culture', href: '/careers#culture', icon: Users, desc: 'Why join Kakatiya?' },
          { label: 'Current Openings', href: '/careers#jobs', icon: Briefcase, desc: 'Explore active roles' },
          { label: 'Apply Now', href: '/careers#application-form', icon: FileText, desc: 'Submit your resume' },
        ]
      }
    ],
    featured: {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop', // Team Meeting
      title: 'Build Your Future',
      desc: 'Grow with a team that values commitment.',
      link: '/careers'
    }
  },
  'Contact': {
    sections: [
      {
        title: 'Get in Touch',
        items: [
          { label: 'Contact Info', href: '/contact', icon: Phone, desc: 'Phone & Email' },
          { label: 'Office Locations', href: '/contact', icon: MapPin, desc: 'Visit our HQ' },
          { label: 'Send Message', href: '/contact', icon: Mail, desc: 'Online Inquiry Form' },
        ]
      }
    ],
    featured: null
  }
};

export const KEY_STATS: Stat[] = [
  { label: 'Sq. Ft. Completed', value: '3.5M+', icon: Trophy },
  { label: 'Sq. Ft. Ongoing', value: '2.4M', icon: Building2 },
  { label: 'Years Experience', value: '24+', icon: HardHat },
  { label: 'Skilled Professionals', value: '150+', icon: Users },
];

// High quality Unsplash images with reliable IDs
const IMAGES = {
  hospital_gandhi: 'https://images.unsplash.com/photo-1587351021759-3e566b9af923?q=80&w=1200&auto=format&fit=crop', 
  hospital_sathupally: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop',
  college_khammam: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop',
  school_residential: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
  infra_generic: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ce84ac?q=80&w=1200&auto=format&fit=crop',
  news1: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop', 
  news2: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=800&auto=format&fit=crop',
  // Backgrounds
  hero_bg: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2560&auto=format&fit=crop', // Crane
  machinery_bg: 'https://images.unsplash.com/photo-1581094794329-cd1361d78639?q=80&w=2560&auto=format&fit=crop', // Machinery
  safety_bg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2560&auto=format&fit=crop', // Hard hat
  contact_bg: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2560&auto=format&fit=crop', // Building Abstract
  office_bg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop', // Office
  quality_bg: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2000&auto=format&fit=crop', // Blueprint
  careers_bg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2560&auto=format&fit=crop' // Construction Worker
};

export const BACKGROUNDS = {
  hero: IMAGES.hero_bg,
  capabilities: IMAGES.machinery_bg,
  safety: IMAGES.safety_bg,
  contact: IMAGES.contact_bg,
  office: IMAGES.office_bg,
  quality: IMAGES.quality_bg,
  careers: IMAGES.careers_bg
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: '1',
    title: '200 Bedded MCH Centre',
    client: 'Gandhi Hospital, Hyderabad',
    status: 'Completed',
    category: 'Healthcare',
    location: 'Secunderabad',
    image: IMAGES.hospital_gandhi
  },
  {
    id: '2',
    title: 'Govt. Medical College (Phase II)',
    client: 'TSMSIDC',
    status: 'Ongoing',
    category: 'Education',
    location: 'Khammam',
    image: IMAGES.college_khammam
  },
  {
    id: '3',
    title: '100 Bedded Area Hospital',
    client: 'TVVP',
    status: 'Completed',
    category: 'Healthcare',
    location: 'Sathupally',
    image: IMAGES.hospital_sathupally
  },
  {
    id: '4',
    title: 'Minority Residential Schools',
    client: 'TMREIS',
    status: 'Ongoing',
    category: 'Education',
    location: 'Zaheerabad & Algole',
    image: IMAGES.school_residential
  }
];

export const CAPABILITIES = [
  { title: 'Advanced Machinery', description: 'Tower Cranes, Batching Plants, Transit Mixers, Dozers, Excavators.', icon: Truck },
  { title: 'Quality Control', description: 'ISO-aligned systems ensuring durability and compliance.', icon: ShieldCheck },
  { title: 'Skilled Workforce', description: '150+ professionals including Project Managers, Engineers, and Surveyors.', icon: Users },
  { title: 'Strict Safety', description: 'Rigorous safety protocols and continuous staff training.', icon: HardHat },
];

export const EXECUTION_VOLUME = [
  { label: 'Earthwork', value: '6.79', unit: 'lakh m³' },
  { label: 'Concrete', value: '1.84', unit: 'lakh m³' },
  { label: 'Steel Used', value: '20,397', unit: 'MT' },
  { label: 'Brickwork', value: '1.78', unit: 'lakh m³' },
];

export const CLIENT_LIST = [
  'TSMSIDC', 'TSEWIDC', 'TWEIDC', 'TMREIS', 'CPWD', 'Roads & Buildings Dept', 'Tribal Welfare', 'ANGRAU', 'Telangana Govt.'
];

export const PROJECTS_DATA: Project[] = [
  ...FEATURED_PROJECTS,
  {
    id: '5',
    title: '100 Bedded Area Hospital',
    client: 'TVVP',
    status: 'Completed',
    category: 'Healthcare',
    value: '₹35 Cr',
    location: 'Madhira',
    image: IMAGES.hospital_sathupally
  },
  {
    id: '6',
    title: 'Public Infrastructure',
    client: 'Municipal Corp',
    status: 'Ongoing',
    category: 'Infrastructure',
    value: '₹120 Cr',
    location: 'Vijayawada',
    image: IMAGES.infra_generic
  },
];

export const JOBS: JobListing[] = [
  { id: '1', title: 'Senior Project Engineer', location: 'Hyderabad', type: 'Full-time' },
  { id: '2', title: 'Quantity Surveyor', location: 'Site Locations', type: 'Full-time' },
  { id: '3', title: 'Assistant Project Manager', location: 'Multiple Locations', type: 'Full-time' },
  { id: '4', title: 'Mechanical Engineer', location: 'West Godavari', type: 'Full-time' },
];

export const NEWS: NewsItem[] = [
  { 
    id: '1', 
    title: 'Kakatiya Constructions completes Gandhi Hospital MCH Centre', 
    date: 'March 15, 2024', 
    source: 'Medical Infra Weekly',
    image: IMAGES.news1
  },
  { 
    id: '2', 
    title: 'New projects awarded by Telangana State Medical Services', 
    date: 'Feb 10, 2024', 
    source: 'Infra Daily',
    image: IMAGES.news2
  },
];

// --- NEW DATA FOR ABOUT PAGE ---

export const MACHINERY_LIST = [
  { id: 1, name: 'Ajax', unit: '2 Cum', quantity: "4 No's" },
  { id: 2, name: 'Concrete pumps', unit: '-', quantity: "4 No's" },
  { id: 3, name: 'Dozzers (level tractors)', unit: '-', quantity: "3 No's" },
  { id: 4, name: 'Tower crane', unit: '-', quantity: "1 No's" },
  { id: 5, name: 'Fly ash Brick Make Machines', unit: '-', quantity: "4 No's" },
  { id: 6, name: 'CONCRETE BATCHING PLANT', unit: '30CUM/HR', quantity: "2 No's" },
  { id: 7, name: 'CONCRETE MIXTURES', unit: '-', quantity: "4 No's" },
  { id: 8, name: 'CB', unit: '-', quantity: "2 No's" },
  { id: 9, name: 'Excavators', unit: '-', quantity: "2 No's" },
  { id: 10, name: 'Centering Material', unit: '-', quantity: "80,000 sft" },
];

export const TEAM_STRUCTURE = [
  { role: 'Project Managers', count: 4, icon: Users },
  { role: 'Engineers (Civil, QS, Mech)', count: 12, icon: HardHat },
  { role: 'Surveyors', count: 5, icon: Scale },
  { role: 'Supervisors', count: 18, icon: ShieldCheck },
  { role: 'Skilled Workers', count: '150+', icon: Building2 },
];

export const QUALITY_POINTS = [
  "Strict compliance with approved drawings and specifications",
  "Daily inspection and multi-level approval workflows",
  "Material quality checks and supplier verification",
  "Documentation, reporting, and milestone tracking",
  "Continuous staff training and site audits"
];

export const SAFETY_POINTS = [
  "Mandatory PPE for all personnel",
  "Site-specific safety training and toolbox talks",
  "Risk assessment and incident prevention",
  "Waste management and eco-conscious site operations",
  "Emergency preparedness and first-aid availability"
];

export const QUALITY_POLICY_FULL = `Kakatiya Constructions strives to achieve enhanced customer satisfaction by delivering quality products through timely completion within a safe working environment. We dedicate ourselves:
1. To persistent improvement in all fields of our business.
2. To consistently deliver quality product by adhering to our client’s specifications, plus the contractual, regulatory and statutory requirements.
3. To achieve enhanced customer satisfaction through cost-effective and timely completion.
4. To motivate and train the staff to constantly improvise on our quality standards.
5. To update and implement the procedures complying with international standards.`;

export const SAFETY_POLICY_FULL = `For Kakatiya Constructions, the role of Health Safety & Environment Management is supreme. The company has therefore assigned the highest priority to safety. Kakatiya Constructions is thus committed to provide the safest possible environment at all our project sites and affirms the protection of all stakeholders against any kind of potential hazard.
1. To ensure safety leadership that commits all employees to take personal responsibility for ‘on and off job’ safety each day.
2. To provide requisite training to employees so that they develop sufficient competence to perform assigned tasks.
3. To minimize health and safety risks arising from performance of a given task.
4. To maintain the highest level of Safety at each project site.
5. To ensure safe handling in use of dangerous substances.
6. To provide and ensure safe and healthy working conditions.
7. To minimize damage to the environment at all project sites and promote sustainable practices.`;

// --- NEW DATA FOR PROJECTS TABLE FORMAT ---

export const ONGOING_PROJECTS_LIST = [
  { id: 1, name: 'Construction of new Teaching Hospital at Mahabubabad in Mahabubabad District.', client: 'TGMSIDC', value: '156.60' },
  { id: 2, name: 'Construction of New Government Medical College (Phase - II) at Mahabubabad, Mahabubabad district Telangana', client: 'TG-R&B', value: '131.19' },
  { id: 3, name: 'Establishment of Governement Medical College with an intake capacity of 100 MBBS seats at Khammam in Telangana.', client: 'TG-R&B', value: '134.19' },
  { id: 4, name: 'Construction of (10+2) Court Building Complexes including Family and POCSO Court under Nyaya Nirman Plan in Mahabubnagar', client: 'TG-R&B', value: '67.06' },
  { id: 5, name: 'Establishment of (100) Bedded Area Hospital at Kusumanchi (V&M ) in Khammam District', client: 'TGMSIDC', value: '37.44' },
  { id: 6, name: 'Upgradation of Community Health Centre at Yellandu, Bhadradri Kothagudem district from 30 bedded to 100 bedded Area Hospital', client: 'TGMSIDC', value: '33.10' },
  { id: 7, name: 'Establishment of (50) Bedded Community Health Center at Mudhigonda in Khammam District', client: 'TGMSIDC', value: '18.21' },
  { id: 8, name: 'Establishment of (50) Bedded Community Health Center at Yerrupalem in Khammam District.', client: 'TGMSIDC', value: '18.67' },
  { id: 9, name: 'Establishment of new Government Nursing College at Sathupalli, Khammam District', client: 'TGMSIDC', value: '22.87' },
  { id: 10, name: 'Construction of Ramji Gond Tribal Freedom Fighters Museum at Abids, Hyderabad, Telangana.', client: 'TG-TWED', value: '17.23' },
  { id: 11, name: 'PROVIDING ADDITIONAL AMENITIES TO EMRS AT 3 WORK LOCATIONS GANDUGULAPALLY (V), PALVANCHA & KURAVI', client: 'TG-TWED', value: '18.43' },
];

export const COMPLETED_PROJECTS_LIST = [
  { id: 1, name: 'Construction of New 200 Bedded MCH Centre at Gandhi Hospital, Musheerabad, Secunderabad', client: 'TGMSIDC', value: '54.53' },
  { id: 2, name: 'Upgradation of Community Health Centre, Sathupalli, Khammam District from (50) bedded to (100) bedded hospital', client: 'TGMSIDC', value: '27.14' },
  { id: 3, name: 'Upgradation of Community Health Centre, Madhira, Khammam District from (30) bedded to (100) bedded hospital(2nd call)', client: 'TGMSIDC', value: '35.03' },
  { id: 4, name: 'Establishment of New Government Nursing College at Palair in Khammam District (2nd call).', client: 'TGMSIDC', value: '21.51' },
  { id: 5, name: 'Establishment of 50 bedded Critical Care Block at Mahabubabad in Mahabubabad District.', client: 'TGMSIDC', value: '14.37' },
  { id: 6, name: 'Establishment of 50 bedded Critical Care Block at Khammam in Khammam District', client: 'TGMSIDC', value: '14.53' },
  { id: 7, name: 'Establishment of 50 bedded Critical Care Block at Kothagudem in Bhadradri Kothagudem District', client: 'TGMSIDC', value: '13.05' },
  { id: 8, name: 'Upgradation of 100 Bedded Area Hospital to 200 Bedded Hospital at Bhadrachalam in Khammam District', client: 'TGMSIDC', value: '16.24' },
  { id: 9, name: 'Construction of B.C Residential School Complex for Boys at Thunki (V) Kowdipally (M) in Medak District', client: 'TGMSIDC', value: '16.93' },
  { id: 10, name: 'Construction of Maternity & Child Health Center of Excellence in the Permises of District Hospital Khammam in Khammam District', client: 'TGMSIDC', value: '14.46' },
  { id: 11, name: 'Upgradation of 30 Bedded to 100 Bedded Hospital at Narsapur in Medak District', client: 'TGMSIDC', value: '10.79' },
  { id: 12, name: 'Construction of Minority Residential School at Zaheerabad in Sangareddy District. (Buchinelly)', client: 'TGEWIDC', value: '17.76' },
  { id: 13, name: 'Construction of Minority Residential School at Zaheerabad (Girls) in Sangareddy District Under MSDP (Alogle)', client: 'TGEWIDC', value: '17.45' },
  { id: 14, name: 'Construction of Minorities Residential School Complex (Girls) at Sangareddy in Sangareddy District', client: 'TGEWIDC', value: '16.78' },
  { id: 15, name: 'Construction of Minorities Residential School Complex (Boys) at Bodhan in Nizamabad District', client: 'TGEWIDC', value: '19.28' },
  { id: 16, name: 'Construction of Permanent Social Welfare Residential School Complex for Kulcharam (V&M) in Medak District', client: 'TGEWIDC', value: '14.35' },
  { id: 17, name: 'Construction of Ekalavya Model Residential School at Gandugulapally (v) Dammapeta (M) in Bhadradri Kothagudem District', client: 'TG-TWED', value: '11.46' },
];

export const EXECUTION_STATS_TABLE = [
  { id: 1, name: 'Earth Work Excavation', unit: 'Cum.', quantity: '2,52,003.00' },
  { id: 2, name: 'Concrete', unit: 'Cum.', quantity: '3,13,113.00' },
  { id: 3, name: 'HYSD Steel', unit: 'MT.', quantity: '40,000.00' },
  { id: 4, name: 'Brick Work', unit: 'Cum.', quantity: '11,25,264.00' },
  { id: 5, name: 'Plastering', unit: 'Sqm.', quantity: '25,11,662.00' },
  { id: 6, name: 'Flooring', unit: 'Sqm.', quantity: '17,52,514.00' },
  { id: 7, name: 'Electrical', unit: 'rs', quantity: '40crores' },
  { id: 8, name: 'Sanitary & plumbing', unit: 'rs', quantity: '30crore' },
  { id: 9, name: 'Painting', unit: 'SFT', quantity: '25,64,520.00' },
  { id: 10, name: 'ACP Cladding', unit: 'SFT', quantity: '2,20,225.00' },
];

export const TEAM_STATS_TABLE = [
  { id: 1, role: 'Project Managers', count: 7 },
  { id: 2, role: 'ASSISTANT PROJECT MANAGERS', count: 5 },
  { id: 3, role: 'Engineers', count: 5 },
  { id: 4, role: 'Technical Consultants', count: 3 },
  { id: 5, role: 'Quantity surveyor', count: 2 },
  { id: 6, role: 'Quality surveyor', count: 2 },
  { id: 7, role: 'Supervisors', count: 15 },
  { id: 8, role: 'Accounts', count: 10 },
  { id: 9, role: 'Administrative Staff', count: 8 },
  { id: 10, role: 'Skilled Electricians', count: 5 },
  { id: 11, role: 'Skilled Welders', count: 5 },
  { id: 12, role: 'Skilled Workers', count: 100 },
  { id: 13, role: 'Unskilled Workers', count: 150 },
];

// --- CAREERS DATA ---

export const CAREER_OPPORTUNITIES = [
  {
    id: '1',
    title: 'Senior Project Engineer',
    experience: '5–7 years',
    description: 'Responsible for site execution, project coordination, quality control, and ensuring adherence to engineering standards.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop' // Crane
  },
  {
    id: '2',
    title: 'Quantity Surveyor',
    experience: '5+ years',
    description: 'Responsible for preparing BOQs, cost estimation, billing, coordinating with engineering and accounts, and managing measurement sheets.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop' // Calculator/Plans
  },
  {
    id: '3',
    title: 'Assistant Project Manager',
    experience: '7+ years',
    description: 'Supports overall site execution, manages timelines, supervises site engineers, and ensures compliance with quality and safety requirements.',
    image: 'https://images.unsplash.com/photo-1507208773393-40275f9f8e07?q=80&w=800&auto=format&fit=crop' // Engineer on site
  },
  {
    id: '4',
    title: 'Project Manager',
    experience: '10–12+ years',
    description: 'Oversees end-to-end project delivery, interfaces with government departments, manages contractors, ensures compliance, and leads site teams.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop' // Meeting
  },
  {
    id: '5',
    title: 'Mechanical Engineer',
    experience: '5+ years',
    description: 'Manages mechanical works including HVAC, plumbing, fire systems, equipment installation, and coordination with civil teams.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop' // Blueprints
  },
];
