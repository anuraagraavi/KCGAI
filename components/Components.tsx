import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'white';
  children: ReactNode;
  to?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', children, to, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center border font-semibold rounded-none tracking-wider uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };

  const variants = {
    primary: "border-transparent text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 shadow-lg hover:shadow-xl",
    secondary: "border-transparent text-white bg-accent-500 hover:bg-accent-600 focus:ring-accent-500 shadow-md",
    outline: "border-primary-600 text-primary-600 bg-transparent hover:bg-primary-50 focus:ring-primary-500",
    white: "border-white text-white bg-transparent hover:bg-white hover:text-gray-900 focus:ring-white",
    text: "border-transparent text-primary-600 hover:text-primary-800 shadow-none hover:bg-gray-50 px-4"
  };

  const combinedClassName = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  backgroundImage?: string;
  overlay?: boolean;
  fullScreen?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id, 
  dark = false, 
  backgroundImage,
  overlay = true,
  fullScreen = false
}) => {
  const bgStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` } 
    : {};
  
  const parallaxClass = backgroundImage ? 'parallax relative' : '';
  const bgColor = dark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800';
  const minHeight = fullScreen ? 'min-h-screen flex items-center' : 'py-24';
  
  return (
    <section 
      id={id} 
      className={`${minHeight} ${parallaxClass} ${!backgroundImage ? bgColor : 'text-white'} ${className}`}
      style={bgStyle}
    >
      {backgroundImage && overlay && (
        <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-[1px]"></div>
      )}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full`}>
        {children}
      </div>
    </section>
  );
};

export const SectionHeader: React.FC<{ title: string; subtitle?: string; center?: boolean; light?: boolean }> = ({ title, subtitle, center, light }) => (
  <div className={`mb-16 ${center ? 'text-center' : ''}`}>
    <h2 className={`text-3xl md:text-5xl font-bold mb-6 font-display tracking-tight leading-tight ${light ? 'text-white' : 'text-gray-900'}`}>
      {title}
    </h2>
    {subtitle && (
      <div className={`w-16 h-1 ${center ? 'mx-auto' : ''} bg-accent-500 mb-6`}></div>
    )}
    {subtitle && <p className={`text-lg md:text-xl font-light leading-relaxed ${light ? 'text-gray-200' : 'text-gray-600'} max-w-3xl ${center ? 'mx-auto' : ''}`}>{subtitle}</p>}
  </div>
);

export const Card: React.FC<{ children: ReactNode; className?: string; hoverEffect?: boolean }> = ({ children, className = '', hoverEffect = true }) => (
  <div className={`bg-white rounded-lg overflow-hidden border border-gray-100 ${hoverEffect ? 'hover:shadow-2xl hover:-translate-y-1' : ''} transition-all duration-500 shadow-sm ${className}`}>
    {children}
  </div>
);

export const GlassCard: React.FC<{ children: ReactNode; className?: string; dark?: boolean }> = ({ children, className = '', dark = false }) => (
  <div className={`${dark ? 'bg-black/40 border-white/10 text-white' : 'bg-white/10 border-white/20 text-white'} backdrop-blur-md border rounded-xl overflow-hidden shadow-2xl ${className}`}>
    {children}
  </div>
);

export const Badge: React.FC<{ children: ReactNode; color?: 'green' | 'orange' | 'gray' | 'outline' }> = ({ children, color = 'green' }) => {
  const colors = {
    green: "bg-primary-100 text-primary-800",
    orange: "bg-orange-100 text-orange-800",
    gray: "bg-gray-100 text-gray-800",
    outline: "border border-white/30 text-white backdrop-blur-sm bg-black/20"
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${colors[color]}`}>
      {children}
    </span>
  );
};

export const StatCard: React.FC<{ label: string; value: string; icon?: React.ElementType }> = ({ label, value, icon: Icon }) => (
  <div className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg text-center hover:bg-white/10 transition-colors">
    {Icon && <Icon className="w-8 h-8 text-accent-500 mb-3" />}
    <span className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</span>
    <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">{label}</span>
  </div>
);