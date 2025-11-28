import React, { useState, useEffect } from 'react';
import { Section, SectionHeader, Button, Card, GlassCard } from '../components/Components';
import { 
  ONGOING_PROJECTS_LIST, 
  COMPLETED_PROJECTS_LIST, 
  EXECUTION_STATS_TABLE, 
  TEAM_STATS_TABLE,
  BACKGROUNDS
} from '../constants';
import { useLocation } from 'react-router-dom';
import { Download, Phone, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'Ongoing' | 'Completed'>('Ongoing');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      if (location.hash === '#ongoing') setActiveTab('Ongoing');
      if (location.hash === '#completed') setActiveTab('Completed');
    }
  }, [location]);

  const currentList = activeTab === 'Ongoing' ? ONGOING_PROJECTS_LIST : COMPLETED_PROJECTS_LIST;
  const totalValue = currentList.reduce((acc, curr) => acc + parseFloat(curr.value), 0).toFixed(2);

  return (
    <div className="bg-gray-50 flex flex-col w-full overflow-hidden">
      
      {/* SECTION 1 – HERO */}
      <Section 
        id="hero" 
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
        overlay
        fullScreen
        className="flex items-center text-center"
      >
        <div className="max-w-4xl mx-auto">
           <div className="inline-block bg-accent-500/20 backdrop-blur-sm border border-accent-500/30 rounded-full px-4 py-1 mb-6">
              <span className="text-accent-400 font-bold uppercase tracking-[0.2em] text-xs">Portfolio</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tight drop-shadow-2xl">
             OUR PROJECTS
           </h1>
           <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-3xl mx-auto border-l-4 border-accent-500 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
             A complete overview of all major public infrastructure projects executed by Kakatiya Constructions across Telangana. This includes newly completed healthcare, educational, and tribal welfare institutions, along with major ongoing medical and public works projects.
           </p>
        </div>
      </Section>

      {/* SECTION 2 – INTRODUCTION */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader 
            title="Delivering Public Infrastructure With Scale & Precision" 
            center
          />
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            From 200-bedded hospitals to residential school complexes, Kakatiya Constructions executes high-value, time-bound government projects across multiple districts. Our portfolio spans healthcare, education, tribal welfare, and public facility development — all awarded under official state tendering processes.
          </p>
        </div>
      </Section>

      {/* PROJECTS TABLE SECTION */}
      <Section id="lists" className="bg-gray-50 pt-10">
        <div className="flex justify-center mb-10">
           <div className="inline-flex bg-white p-1 rounded-xl shadow-md border border-gray-200">
             <button 
               type="button" 
               onClick={() => setActiveTab('Ongoing')}
               className={`px-8 py-3 text-sm md:text-base font-bold uppercase tracking-wider rounded-lg transition-all duration-300
                 ${activeTab === 'Ongoing' 
                   ? 'bg-primary-600 text-white shadow-lg' 
                   : 'text-gray-500 hover:text-primary-600 hover:bg-gray-50'}`}
             >
               On Going Projects
             </button>
             <button 
               type="button" 
               onClick={() => setActiveTab('Completed')}
               className={`px-8 py-3 text-sm md:text-base font-bold uppercase tracking-wider rounded-lg transition-all duration-300
                 ${activeTab === 'Completed' 
                   ? 'bg-primary-600 text-white shadow-lg' 
                   : 'text-gray-500 hover:text-primary-600 hover:bg-gray-50'}`}
             >
               Completed Projects
             </button>
           </div>
        </div>

        <div className="text-center mb-10 animate-fade-in-up">
           <h2 className="text-3xl md:text-4xl font-display text-gray-900 font-bold uppercase tracking-tight">
             {activeTab === 'Ongoing' ? 'Major Ongoing Projects' : 'Completed Projects'}
           </h2>
           <div className="w-20 h-1 bg-accent-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <Card className="overflow-hidden border-0 shadow-2xl ring-1 ring-black/5">
           <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse">
                <thead>
                   <tr className="bg-primary-900 text-white text-sm uppercase tracking-wider">
                      <th className="p-5 font-bold border-b border-primary-800 w-20 text-center">S.No.</th>
                      <th className="p-5 font-bold border-b border-primary-800">Name of Project</th>
                      <th className="p-5 font-bold border-b border-primary-800 w-48">Client</th>
                      <th className="p-5 font-bold border-b border-primary-800 w-48 text-right">Value (Cr.)</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm md:text-base bg-white">
                   {currentList.map((project) => (
                      <tr key={project.id} className="hover:bg-primary-50 transition-colors group">
                         <td className="p-5 text-center text-gray-400 font-medium group-hover:text-primary-600">{project.id}</td>
                         <td className="p-5 text-gray-800 font-semibold leading-relaxed group-hover:text-primary-900">{project.name}</td>
                         <td className="p-5 text-gray-500 font-medium">
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">
                               {project.client}
                            </span>
                         </td>
                         <td className="p-5 text-right font-bold text-gray-900 font-mono">{project.value}</td>
                      </tr>
                   ))}
                   {/* Footer Row */}
                   <tr className="bg-gray-50 font-bold border-t-2 border-primary-100">
                      <td className="p-5"></td>
                      <td className="p-5 text-right uppercase tracking-wider text-primary-800">Total Project Value</td>
                      <td className="p-5"></td>
                      <td className="p-5 text-right text-primary-700 text-xl">₹{totalValue} <span className="text-sm">Cr</span></td>
                   </tr>
                </tbody>
             </table>
           </div>
        </Card>
      </Section>

      {/* METRICS & TEAM (Dark Parallax Section) */}
      <Section 
        id="metrics" 
        backgroundImage={BACKGROUNDS.capabilities}
        overlay
        className="py-20"
      >
         <SectionHeader 
           title="Execution Metrics" 
           subtitle="Quantifiable impact backed by a robust workforce." 
           center 
           light 
         />
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
           
           {/* Execution Stats Table */}
           <GlassCard dark className="border-t-4 border-t-accent-500">
              <div className="bg-white/10 backdrop-blur-md p-4 border-b border-white/10">
                 <h3 className="text-xl font-bold text-white uppercase tracking-wider flex items-center">
                    Major Quantity Executed
                    <span className="ml-auto text-xs bg-accent-500 text-white px-2 py-1 rounded">Last 7 Years</span>
                 </h3>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-black/20 text-gray-300 text-xs uppercase tracking-wider">
                          <th className="p-4 border-b border-white/10 text-center w-16">S.No.</th>
                          <th className="p-4 border-b border-white/10">Item</th>
                          <th className="p-4 border-b border-white/10 text-center">Unit</th>
                          <th className="p-4 border-b border-white/10 text-right">Quantity</th>
                       </tr>
                    </thead>
                    <tbody className="text-sm text-gray-200 divide-y divide-white/5">
                       {EXECUTION_STATS_TABLE.map((item) => (
                          <tr key={item.id} className="hover:bg-white/5 transition-colors">
                             <td className="p-4 text-center text-gray-500">{item.id}</td>
                             <td className="p-4 font-medium text-white">{item.name}</td>
                             <td className="p-4 text-center text-gray-400 text-xs">{item.unit}</td>
                             <td className="p-4 text-right font-mono text-accent-400 font-bold">{item.quantity}</td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </GlassCard>

           {/* Project Team Table */}
           <GlassCard dark className="border-t-4 border-t-primary-500">
              <div className="bg-white/10 backdrop-blur-md p-4 border-b border-white/10">
                 <h3 className="text-xl font-bold text-white uppercase tracking-wider flex items-center">
                    Project Team
                    <span className="ml-auto text-xs bg-primary-600 text-white px-2 py-1 rounded">Active</span>
                 </h3>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-black/20 text-gray-300 text-xs uppercase tracking-wider">
                          <th className="p-4 border-b border-white/10 text-center w-16">S.No.</th>
                          <th className="p-4 border-b border-white/10">Role</th>
                          <th className="p-4 border-b border-white/10 text-center">Count</th>
                       </tr>
                    </thead>
                    <tbody className="text-sm text-gray-200 divide-y divide-white/5">
                       {TEAM_STATS_TABLE.map((item) => (
                          <tr key={item.id} className="hover:bg-white/5 transition-colors">
                             <td className="p-4 text-center text-gray-500">{item.id}</td>
                             <td className="p-4 font-medium text-white">{item.role}</td>
                             <td className="p-4 text-center font-bold text-primary-400 text-lg">{item.count}</td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </GlassCard>

         </div>
      </Section>

      {/* SECTION 7 – CTA */}
      <Section className="bg-white text-center py-24">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Looking to Collaborate?</h2>
           <p className="text-xl text-gray-600 mb-10 font-light max-w-2xl mx-auto">
             Contact us for tender partnerships, project discussions, or site visits.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button to="/contact" variant="primary" size="lg" className="shadow-xl shadow-primary-900/20">
                 <Phone className="w-5 h-5 mr-2" /> Contact Us
              </Button>
              <Button variant="outline" size="lg">
                 <Download className="w-5 h-5 mr-2" /> Download Company Profile
              </Button>
           </div>
        </div>
      </Section>

    </div>
  );
};

export default Projects;