
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, ArrowRight, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import { NAV_ITEMS, MEGA_MENU_DATA } from '../constants';
import { Button } from './Components';

// Custom SVG Logo Component to match the uploaded image
const KakatiyaLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Sun */}
    <circle cx="72" cy="28" r="10" fill="#f97316" />
    
    {/* Buildings */}
    <g transform="translate(0, 5)">
      {/* Left Building */}
      <path d="M38 35 L38 75 L48 75 L48 30 L38 35Z" stroke="#059669" strokeWidth="1.5" fill="white"/>
      <line x1="38" y1="45" x2="48" y2="40" stroke="#059669" strokeWidth="0.5"/>
      <line x1="38" y1="55" x2="48" y2="50" stroke="#059669" strokeWidth="0.5"/>
      <line x1="38" y1="65" x2="48" y2="60" stroke="#059669" strokeWidth="0.5"/>
      
      {/* Middle Building */}
      <path d="M50 20 L50 75 L60 75 L60 25 L50 20Z" stroke="#059669" strokeWidth="1.5" fill="white"/>
      <line x1="50" y1="30" x2="60" y2="35" stroke="#059669" strokeWidth="0.5"/>
      <line x1="50" y1="40" x2="60" y2="45" stroke="#059669" strokeWidth="0.5"/>
      <line x1="50" y1="50" x2="60" y2="55" stroke="#059669" strokeWidth="0.5"/>
      <line x1="50" y1="60" x2="60" y2="65" stroke="#059669" strokeWidth="0.5"/>
      
      {/* Right Building */}
      <path d="M62 35 L62 75 L72 75 L72 40 L62 35Z" stroke="#059669" strokeWidth="1.5" fill="white"/>
      <line x1="62" y1="45" x2="72" y2="50" stroke="#059669" strokeWidth="0.5"/>
      <line x1="62" y1="55" x2="72" y2="60" stroke="#059669" strokeWidth="0.5"/>
      <line x1="62" y1="65" x2="72" y2="70" stroke="#059669" strokeWidth="0.5"/>
    </g>

    {/* Crescent / Swoosh */}
    <path d="M35 78 C 15 75 10 40 45 15 C 42 15 15 40 25 78" fill="#059669"/>
    
    {/* Bottom Leaf */}
    <path d="M25 75 Q 50 95 85 75 Q 50 85 25 75 Z" fill="#059669"/>
    <path d="M28 76 Q 50 88 82 76" stroke="white" strokeWidth="1" fill="none" opacity="0.6"/>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const scrollToHash = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navBgClass = scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg py-2' : 'bg-transparent py-6';
  const navTextClass = scrolled ? 'text-gray-900' : 'text-white';
  const itemHoverClass = scrolled ? 'hover:text-primary-600' : 'hover:text-accent-400';
  
  // Calculate top position for fixed mega menu
  const menuTopClass = scrolled ? 'top-[72px]' : 'top-[100px]';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          
          {/* LOGO (ICON ONLY) */}
          <Link to="/" className="flex items-center group relative z-50">
            <div className={`transition-all duration-300 ${scrolled ? '' : 'bg-white/95 rounded-full p-2 shadow-xl'}`}>
               <KakatiyaLogo className="w-12 h-12" />
            </div>
          </Link>

          {/* DESKTOP NAV (MEGA MENU) */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => {
              const hasMegaMenu = MEGA_MENU_DATA[item.label as keyof typeof MEGA_MENU_DATA];
              
              return (
                <div 
                  key={item.label}
                  className="px-4 py-2"
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link 
                    to={item.path} 
                    className={`text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${navTextClass} ${itemHoverClass} flex items-center`}
                  >
                    {item.label}
                    {hasMegaMenu && <ChevronDown className={`ml-1 w-3 h-3 transition-transform duration-300 ${hoveredItem === item.label ? 'rotate-180' : ''}`} />}
                  </Link>

                  {/* MEGA MENU DROPDOWN - FIXED POSITIONING TO PREVENT OVERFLOW */}
                  {hasMegaMenu && (
                    <div 
                      className={`fixed left-1/2 -translate-x-1/2 w-[800px] pt-2 transition-all duration-300 origin-top z-[100] ${menuTopClass} ${hoveredItem === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                      onMouseEnter={() => setHoveredItem(item.label)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 p-0 grid grid-cols-12 max-h-[80vh] overflow-y-auto">
                         
                         {/* Content Sections */}
                         <div className="col-span-8 p-8 bg-white grid grid-cols-2 gap-8">
                            {hasMegaMenu.sections.map((section, idx) => (
                              <div key={idx}>
                                 <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">{section.title}</h4>
                                 <ul className="space-y-3">
                                    {section.items.map((subItem, sIdx) => (
                                      <li key={sIdx}>
                                        <Link 
                                          to={subItem.href} 
                                          onClick={() => {
                                            if (location.pathname === item.path && subItem.href.includes('#')) {
                                              scrollToHash(subItem.href.split('#')[1]);
                                            }
                                            setHoveredItem(null);
                                          }}
                                          className="group flex items-start p-2 -ml-2 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                           <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 mr-3 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                              <subItem.icon size={16} />
                                           </div>
                                           <div>
                                              <div className="text-sm font-bold text-gray-800 group-hover:text-primary-700">{subItem.label}</div>
                                              <div className="text-xs text-gray-500 line-clamp-1">{subItem.desc}</div>
                                           </div>
                                        </Link>
                                      </li>
                                    ))}
                                 </ul>
                              </div>
                            ))}
                         </div>

                         {/* Featured Section */}
                         <div className="col-span-4 bg-gray-50 p-6 flex flex-col justify-end relative overflow-hidden group">
                            {hasMegaMenu.featured && (
                              <>
                                <img src={hasMegaMenu.featured.image} className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" alt="Featured" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent"></div>
                                <div className="relative z-10 text-white">
                                   <h5 className="font-bold text-lg mb-1">{hasMegaMenu.featured.title}</h5>
                                   <p className="text-xs text-gray-200 mb-3">{hasMegaMenu.featured.desc}</p>
                                   <Link 
                                      to={hasMegaMenu.featured.link} 
                                      onClick={() => setHoveredItem(null)}
                                      className="text-xs font-bold uppercase tracking-wider flex items-center hover:text-accent-400"
                                    >
                                      Learn More <ArrowRight className="w-3 h-3 ml-1" />
                                   </Link>
                                </div>
                              </>
                            )}
                         </div>

                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <div className="pl-6">
              <Button to="/contact" variant={scrolled ? 'primary' : 'white'} size="sm">Get Quote</Button>
            </div>
          </nav>

          {/* MOBILE MENU TOGGLE */}
          <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden ${navTextClass} p-2 focus:outline-none`}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <div className={`fixed inset-0 top-[88px] bg-gray-900 z-40 transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full overflow-y-auto pb-20 p-6 space-y-6">
           {NAV_ITEMS.map((item) => (
             <div key={item.label} className="border-b border-gray-800 pb-4">
               <Link 
                 to={item.path} 
                 onClick={() => setIsOpen(false)}
                 className="text-2xl font-bold text-white mb-4 block"
               >
                 {item.label}
               </Link>
               {MEGA_MENU_DATA[item.label as keyof typeof MEGA_MENU_DATA] && (
                 <div className="grid grid-cols-1 gap-3 pl-4">
                    {MEGA_MENU_DATA[item.label as keyof typeof MEGA_MENU_DATA].sections.map((section, secIdx) => (
                      <div key={secIdx}>
                        {section.items.map((sub, subIdx) => (
                          <Link 
                            key={subIdx} 
                            to={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center text-gray-400 text-sm py-2 hover:text-white"
                          >
                             <sub.icon size={14} className="mr-3" /> {sub.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                 </div>
               )}
             </div>
           ))}
           <Button to="/contact" className="w-full justify-center">Contact Us</Button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
             <Link to="/" className="inline-block bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <KakatiyaLogo className="w-16 h-16" />
             </Link>
             <p className="text-gray-400 leading-relaxed text-sm pr-6">
               Since 1999, Kakatiya Constructions has been a trusted partner in building Telangana's public infrastructure. From hospitals to residential schools, we deliver quality with precision.
             </p>
             <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white hover:border-primary-500 transition-all">
                    <Icon size={18} />
                  </a>
                ))}
             </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
             <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-8 flex items-center">
               <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span> Company
             </h4>
             <ul className="space-y-4">
               {['About Us', 'Leadership', 'Careers', 'Media', 'Legal'].map(item => (
                 <li key={item}>
                   <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors text-sm block hover:translate-x-1 duration-300">
                     {item}
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          {/* Column 3: Projects (3 cols) */}
          <div className="lg:col-span-3">
             <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-8 flex items-center">
               <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span> Portfolio
             </h4>
             <ul className="space-y-4">
               {['Healthcare', 'Education', 'Tribal Welfare', 'Public Infra', 'View All Projects'].map(item => (
                 <li key={item}>
                   <Link to="/projects" className="text-gray-400 hover:text-white transition-colors text-sm block hover:translate-x-1 duration-300">
                     {item}
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          {/* Column 4: Contact (3 cols) */}
          <div className="lg:col-span-3">
             <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-8 flex items-center">
               <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span> Contact
             </h4>
             <ul className="space-y-6">
               <li className="flex items-start">
                 <MapPin className="w-5 h-5 text-gray-500 mt-1 mr-3 shrink-0" />
                 <span className="text-gray-400 text-sm">Flat No. 205, Sumos Sri Sai Residency, Nizampet, Hyderabad 500090</span>
               </li>
               <li className="flex items-center">
                 <Phone className="w-5 h-5 text-gray-500 mr-3 shrink-0" />
                 <span className="text-gray-400 text-sm">040 – 48501128</span>
               </li>
               <li className="flex items-center">
                 <Mail className="w-5 h-5 text-gray-500 mr-3 shrink-0" />
                 <span className="text-gray-400 text-sm">kakatiyaho@gmail.com</span>
               </li>
             </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
           <p>&copy; {new Date().getFullYear()} M/S Kakatiya Constructions. All rights reserved.</p>
           <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/legal" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
              <Link to="/legal" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
              <Link to="/legal" className="hover:text-gray-400 transition-colors">Sitemap</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};
