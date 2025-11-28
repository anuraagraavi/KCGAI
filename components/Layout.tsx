import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, ArrowRight, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import { NAV_ITEMS, MEGA_MENU_DATA } from '../constants';
import { Button } from './Components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle Hover with Grace Period (Prevents menu flickering)
  const handleMouseEnter = (itemLabel: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredItem(itemLabel);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 200); // 200ms delay to allow moving mouse to dropdown
  };

  const navBgClass = scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg py-2' : 'bg-transparent py-4';
  const navTextClass = scrolled ? 'text-gray-900' : 'text-white';
  const itemHoverClass = scrolled ? 'hover:text-primary-600' : 'hover:text-accent-400';
  
  // Calculate top position for fixed mega menu
  const menuTopClass = scrolled ? 'top-[72px]' : 'top-[96px]';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center group relative z-50">
             <img 
               src={scrolled ? "/logo_main.png" : "/logo_white.png"} 
               alt="Kakatiya Constructions" 
               className="h-14 md:h-16 w-auto object-contain transition-all duration-300"
             />
          </Link>

          {/* DESKTOP NAV (MEGA MENU) */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => {
              const hasMegaMenu = MEGA_MENU_DATA[item.label as keyof typeof MEGA_MENU_DATA];
              
              return (
                <div 
                  key={item.label}
                  className="px-4 py-2"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
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
                      className={`fixed left-0 w-screen pt-4 transition-all duration-300 origin-top z-[100] ${menuTopClass} ${hoveredItem === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Inner Container to align with grid */}
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                                            onClick={() => setHoveredItem(null)} // Instant close on click
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
                                  <img 
                                    src={hasMegaMenu.featured.image} 
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                                    alt="Featured"
                                    loading="lazy" 
                                  />
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
          <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden ${navTextClass} p-2 focus:outline-none relative z-50`}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <div className={`fixed inset-0 top-0 bg-gray-900 z-40 transition-transform duration-300 lg:hidden pt-24 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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
                            onClick={() => setIsOpen(false)} // Explicitly close mobile menu on click
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
           <Button to="/contact" className="w-full justify-center" onClick={() => setIsOpen(false)}>Contact Us</Button>
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
             <Link to="/" className="inline-block mb-2">
                <img 
                   src="/logo_white.png" 
                   alt="Kakatiya Constructions" 
                   className="h-24 w-auto object-contain" 
                />
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