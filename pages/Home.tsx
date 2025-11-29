
import React from 'react';
import { Section, SectionHeader, Button, Card, GlassCard, Badge, StatCard, ClientTrustedSection } from '../components/Components';
import { KEY_STATS, FEATURED_PROJECTS, CAPABILITIES, NEWS, EXECUTION_VOLUME, JOBS, BACKGROUNDS } from '../constants';
import { ArrowRight, CheckCircle2, Award, Briefcase, Zap, Shield, Users, Trophy } from 'lucide-react';

const Home = () => {
  // Hash scrolling is now handled globally in App.tsx

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-screen min-h-[600px] flex items-center">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url('${BACKGROUNDS.hero}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 mb-6 animate-fade-in-up">
              <span className="w-12 h-1 bg-accent-500"></span>
              <span className="text-accent-400 font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Building History Since 1999</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[0.9] mb-8 drop-shadow-2xl tracking-tight">
              DELIVERING <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">QUALITY INFRASTRUCTURE</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed border-l-4 border-primary-500 pl-6">
              Trusted civil contracting for hospitals, residential schools, and public institutions across Telangana and Andhra Pradesh.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/projects" variant="primary" size="lg" className="shadow-primary-900/50">
                Explore Projects
              </Button>
              <Button to="/contact" variant="white" size="lg" className="backdrop-blur-sm bg-white/10 hover:bg-white/20 border-white/50 text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Stats Bar */}
        <div className="absolute bottom-0 w-full z-20 hidden md:block border-t border-white/10 bg-black/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-4 divide-x divide-white/10">
                {KEY_STATS.map((stat, idx) => (
                  <div key={idx} className="py-6 px-4 text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-[10px] lg:text-xs text-accent-400 uppercase tracking-widest font-bold">{stat.label}</div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* 2. ABOUT SNAPSHOT */}
      <Section id="about" className="bg-white relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <SectionHeader 
              title="Building Trust, One Project at a Time" 
              subtitle="Founded in 1999, Kakatiya Constructions has evolved into a premier contracting firm."
            />
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                We have completed over <strong className="text-primary-700">3.5 million sq. ft.</strong> of built-up area and currently manage <strong className="text-primary-700">2.4 million sq. ft.</strong> of ongoing work. Our growth is rooted in technical precision, quality control, and a clear commitment to timely delivery.
              </p>
            </div>
            
            {/* Mobile Stats (Visible only on mobile) */}
            <div className="grid grid-cols-2 gap-4 md:hidden mb-8">
              {KEY_STATS.map((stat, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-100">
                  <div className="text-xl font-bold text-primary-600">{stat.value}</div>
                  <div className="text-[10px] text-gray-500 uppercase font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button to="/about" variant="outline" className="group">
              More About Us <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
               <img 
                 src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" 
                 alt="Construction Site" 
                 className="w-full h-auto object-cover" 
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div className="text-white">
                     <p className="font-bold text-lg">Excellence in Execution</p>
                     <p className="text-sm text-gray-300">24+ Years of Experience</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. PROJECT PORTFOLIO PREVIEW */}
      <Section id="projects" className="bg-gray-50">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div className="max-w-2xl">
              <SectionHeader 
                title="Our Work Defines Our Legacy" 
                subtitle="From healthcare and education to public development, every project we deliver stands for reliability and impact." 
              />
           </div>
           <div className="hidden md:block mb-12">
             <Button to="/projects" variant="text">View All Projects <ArrowRight className="w-4 h-4 ml-2" /></Button>
           </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
          {FEATURED_PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className={`group relative rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ${idx === 0 ? 'lg:col-span-2' : ''}`}
            >
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:brightness-75" 
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity"></div>
               
               <div className="absolute top-6 left-6 z-10">
                  <Badge color={project.status === 'Ongoing' ? 'orange' : 'green'}>{project.status}</Badge>
               </div>

               <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-accent-400 font-bold uppercase tracking-widest text-xs mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                  <div className="flex items-center text-gray-300 text-sm">
                    <span className="w-4 h-[1px] bg-gray-400 mr-2"></span>
                    {project.client}
                  </div>
               </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button to="/projects" variant="outline" className="w-full">View Full Portfolio</Button>
        </div>
      </Section>

      {/* 4. EXECUTION CAPABILITIES (Futuristic Dark Section) */}
      <Section 
        id="capabilities" 
        backgroundImage={BACKGROUNDS.capabilities}
        fullScreen
        className="py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-full items-center">
           {/* Left: Text & List */}
           <div>
              <div className="mb-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Built on Strength.<br/><span className="text-primary-400">Driven by Capability.</span></h2>
                <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                  Our in-house equipment, trained workforce, and execution efficiency make us a dependable partner for large-scale government projects.
                </p>
              </div>

              <div className="space-y-6">
                {CAPABILITIES.map((cap, idx) => (
                   <div key={idx} className="flex items-start group">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 border border-white/20 group-hover:bg-primary-600 group-hover:border-primary-500 transition-colors">
                        <cap.icon className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">{cap.title}</h4>
                        <p className="text-gray-400 text-sm">{cap.description}</p>
                      </div>
                   </div>
                ))}
              </div>
           </div>

           {/* Right: Data Dashboard */}
           <div className="relative">
              <GlassCard dark className="p-8 md:p-10 border-t-4 border-t-accent-500">
                 <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider flex items-center">
                      <Zap className="w-5 h-5 text-accent-500 mr-2" /> Execution Volume
                    </h3>
                    <span className="text-xs text-green-400 font-mono bg-green-400/10 px-2 py-1 rounded">LIVE METRICS</span>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-6 mb-8">
                    {EXECUTION_VOLUME.map((item, idx) => (
                       <div key={idx} className="bg-black/20 p-4 rounded-lg border border-white/5">
                          <span className="text-gray-400 text-xs uppercase tracking-wider block mb-1">{item.label}</span>
                          <span className="text-3xl font-bold text-white">{item.value} <span className="text-sm text-gray-500 font-normal">{item.unit}</span></span>
                       </div>
                    ))}
                 </div>

                 <div className="bg-white/5 rounded-lg p-5 flex justify-between items-center border border-white/5">
                    <div>
                       <span className="block text-xs text-gray-400 uppercase mb-1">Centering Material</span>
                       <span className="text-xl font-bold text-white">80,000 <span className="text-sm text-gray-500">sq. ft.</span></span>
                    </div>
                    <div className="text-right">
                       <span className="block text-xs text-gray-400 uppercase mb-1">Electrical & Plumbing</span>
                       <span className="text-xl font-bold text-white">₹70 <span className="text-sm text-gray-500">Cr+</span></span>
                    </div>
                 </div>
              </GlassCard>
           </div>
        </div>
      </Section>

      {/* 5. QUALITY & SAFETY (Split Screen) */}
      <Section id="quality" className="bg-white p-0" overlay={false}>
         <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
            <div className="relative bg-gray-900 overflow-hidden order-2 md:order-1">
               <img 
                 src={BACKGROUNDS.safety} 
                 className="absolute inset-0 w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-1000" 
                 alt="Safety" 
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"></div>
               <div className="relative z-10 p-12 h-full flex flex-col justify-center">
                  <Badge color="orange">Safety First</Badge>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mt-6 mb-6">Rigorous Safety Protocols</h2>
                  <p className="text-gray-300 text-lg mb-8 max-w-md">We adhere to strict internal standards and continuous audits to ensure our projects meet contractual, statutory, and safety benchmarks.</p>
                  <Button to="/about#quality" variant="white">Read Safety Policy</Button>
               </div>
            </div>
            
            <div className="flex flex-col justify-center p-12 md:p-20 order-1 md:order-2">
               <SectionHeader title="Quality at the Core" subtitle="ISO-aligned Quality Control Systems ensuring every build stands the test of time." />
               
               <div className="grid grid-cols-1 gap-6">
                  {[
                    { text: "ISO-aligned Quality Control Systems", icon: Shield },
                    { text: "Continuous Staff Training & Audits", icon: Users },
                    { text: "Environmentally Conscious Practices", icon: Award }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                       <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-4 shrink-0">
                          <item.icon size={20} />
                       </div>
                       <span className="font-semibold text-gray-800 text-lg">{item.text}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </Section>

      {/* 6. CLIENT TRUST (Ticker/Grid) - NOW USING GLOBAL COMPONENT */}
      <ClientTrustedSection />

      {/* 7. MEDIA & NEWS */}
      <Section id="media" className="bg-white">
        <div className="flex justify-between items-end mb-16">
           <SectionHeader title="Recognized for Impact" subtitle="Featured in major regional publications." />
           <Button to="/media" variant="outline" className="hidden md:flex">Newsroom</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {NEWS.map((item) => (
            <div key={item.id} className="group cursor-pointer flex flex-col gap-4">
              <div className="w-full h-64 rounded-xl overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                   {item.source}
                </div>
              </div>
              <div>
                <span className="text-sm text-gray-500 mb-2 block">{item.date}</span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                   {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. CAREERS */}
      <Section id="careers" className="bg-gray-900 text-white relative overflow-hidden">
         {/* Abstract BG Shapes */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-900/20 to-transparent pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl pointer-events-none"></div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 items-center">
            <div>
               <div className="inline-flex items-center space-x-2 text-accent-500 font-bold uppercase tracking-widest text-sm mb-6">
                  <Briefcase className="w-4 h-4" />
                  <span>Join Our Team</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-bold mb-6">Build Your Career with Kakatiya</h2>
               <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                  Join a team that values commitment, precision, and growth. We offer opportunities across engineering, project management, and site operations.
               </p>
               <Button to="/careers" variant="primary">View All Openings</Button>
            </div>

            <div className="space-y-4">
               {JOBS.map((job) => (
                  <div key={job.id} className="group p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all cursor-pointer flex justify-between items-center">
                     <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-accent-400 transition-colors">{job.title}</h4>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                           <span className="mr-3">{job.location}</span>
                           <span className="w-1 h-1 bg-gray-500 rounded-full mr-3"></span>
                           <span>{job.type}</span>
                        </div>
                     </div>
                     <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent-500 group-hover:text-white transition-all">
                        <ArrowRight size={18} />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </Section>

      {/* 9. CONTACT CTA */}
      <Section 
        backgroundImage={BACKGROUNDS.contact}
        className="text-center relative py-32"
        overlay
      >
        <div className="relative z-20 max-w-4xl mx-auto">
           <h2 className="text-4xl md:text-7xl font-display font-black text-white mb-8 tracking-tight">Let’s Build Together</h2>
           <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
             Looking for a dependable construction partner for your next government or institutional project? We’d be glad to collaborate.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button to="/contact" variant="secondary" size="lg" className="shadow-lg shadow-accent-900/50">Call Now</Button>
              <Button to="/contact" variant="white" size="lg">Submit an Inquiry</Button>
           </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
