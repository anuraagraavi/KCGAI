
import React, { useEffect, useState } from 'react';
import { Section, SectionHeader, Card, GlassCard, Button, Badge } from '../components/Components';
import { Target, Users, HardHat, ShieldCheck, Scale, History, Award, CheckCircle2, Factory, Eye, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { 
  BACKGROUNDS, 
  MACHINERY_LIST, 
  TEAM_STRUCTURE, 
  QUALITY_POINTS, 
  SAFETY_POINTS, 
  QUALITY_POLICY_FULL, 
  SAFETY_POLICY_FULL,
  CLIENT_LIST
} from '../constants';

const About = () => {
  const location = useLocation();
  const [showQualityPolicy, setShowQualityPolicy] = useState(false);
  const [showSafetyPolicy, setShowSafetyPolicy] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="bg-white">
      
      {/* 1. HERO SECTION */}
      <Section 
        id="hero" 
        backgroundImage={BACKGROUNDS.office}
        overlay
        fullScreen
        className="flex items-center"
      >
         <div className="max-w-4xl mx-auto text-center">
            <Badge color="orange">Established 1999</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mt-6 mb-6 leading-tight">
              Committed to Building <br/>
              <span className="text-primary-400">Public Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
               With a legacy spanning 24+ years, Kakatiya Constructions has been delivering mission-critical infrastructure for government departments across Telangana and Andhra Pradesh.
            </p>
            <Button to="/projects" variant="primary" size="lg">View Our Projects</Button>
         </div>
      </Section>

      {/* 2. COMPANY OVERVIEW */}
      <Section id="overview">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
                <SectionHeader 
                  title="Who We Are" 
                  subtitle="A trusted partner for state agencies."
                />
                <div className="prose prose-lg text-gray-600 mb-8">
                  <p>
                    Kakatiya Constructions is a Hyderabad-based civil contracting company specializing in government-funded projects. Established in 1999, we have consistently delivered large-scale healthcare, education, and public development infrastructure.
                  </p>
                  <p>
                    Our team, machinery, and processes are structured to handle high-volume, time-bound works, making us a dependable partner for state agencies across Telangana and Andhra Pradesh.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   {[
                      { val: "24+", lbl: "Years Experience" },
                      { val: "3.5M+", lbl: "Sq. Ft. Completed" },
                      { val: "2.4M", lbl: "Sq. Ft. Ongoing" },
                      { val: "100%", lbl: "Govt. Projects" }
                   ].map((item, i) => (
                      <div key={i} className="bg-gray-50 border border-gray-100 p-4 rounded-lg">
                         <div className="text-2xl font-bold text-primary-600">{item.val}</div>
                         <div className="text-xs font-bold uppercase text-gray-400 tracking-wider">{item.lbl}</div>
                      </div>
                   ))}
                </div>
            </div>
            <div className="lg:col-span-6 relative">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                   <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" className="w-full h-auto" alt="Team" />
               </div>
               <div className="absolute -bottom-6 -left-6 bg-accent-500 p-6 rounded-lg shadow-xl hidden md:block">
                  <p className="text-white font-bold text-lg">Infrastructure <br/>Specialists</p>
               </div>
            </div>
         </div>
      </Section>

      {/* 3. MANAGING PARTNER'S MESSAGE */}
      <Section id="leadership" className="bg-gray-50">
         <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
               <div className="md:w-2/5 relative min-h-[300px]">
                  <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Chadalawada Sridhar" />
                  <div className="absolute inset-0 bg-primary-900/10"></div>
               </div>
               <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
                  <div className="flex items-center space-x-2 mb-6">
                     <span className="h-px w-8 bg-accent-500"></span>
                     <span className="text-accent-500 uppercase tracking-widest font-bold text-xs">Managing Partner's Message</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Chadalawada Sridhar</h2>
                  <blockquote className="text-xl text-gray-600 italic leading-relaxed mb-8">
                     “At Kakatiya Constructions, we believe in building not just structures, but trust. Our journey over the last two decades has been guided by responsibility, precision, and a commitment to the communities we serve. Every project we deliver is a reflection of our values—quality, integrity, and long-term vision.”
                  </blockquote>
                  <div className="flex items-center">
                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" alt="Signature" className="h-10 opacity-50" />
                  </div>
               </div>
            </div>
         </div>
      </Section>

      {/* 4. VISION & MISSION */}
      <Section id="values" className="bg-gray-900 text-white relative">
         {/* BG Pattern */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>
         
         <SectionHeader title="Our Guiding Principles" center light subtitle="The foundation of our corporate ethos." />
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
            <GlassCard className="p-10 hover:bg-white/10 transition-colors border-l-4 border-l-accent-500">
               <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-accent-400" />
               </div>
               <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
               <p className="text-gray-300 leading-relaxed">
                  To set future benchmarks in the construction industry through belief, quality, and commitment.
               </p>
            </GlassCard>

            <GlassCard className="p-10 hover:bg-white/10 transition-colors border-l-4 border-l-primary-500">
               <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary-400" />
               </div>
               <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
               <p className="text-gray-300 leading-relaxed">
                  To deliver sustainable, reliable, and quality-driven infrastructure while upholding the highest standards of engineering excellence and professional ethics.
               </p>
            </GlassCard>
         </div>
      </Section>

      {/* 5. QUALITY CONTROL */}
      <Section id="quality" className="bg-white">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
               <SectionHeader title="Quality Is the Foundation" subtitle="Rigorous standards at every step." />
               <p className="text-gray-600 mb-8 text-lg">
                  Our Quality Management System ensures that every activity—from procurement to project handover—meets contractual and regulatory standards. We conduct continuous audits and training programs to improve performance across all sites.
               </p>
               
               <div className="space-y-4 mb-8">
                  {QUALITY_POINTS.map((point, i) => (
                     <div key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary-600 mt-1 mr-3 shrink-0" />
                        <span className="text-gray-700 font-medium">{point}</span>
                     </div>
                  ))}
               </div>

               <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                     onClick={() => setShowQualityPolicy(!showQualityPolicy)}
                     className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                  >
                     <span className="font-bold text-primary-800 flex items-center"><FileText className="w-4 h-4 mr-2"/> Read Full Quality Policy</span>
                     {showQualityPolicy ? <ChevronUp className="w-5 h-5 text-gray-500"/> : <ChevronDown className="w-5 h-5 text-gray-500"/>}
                  </button>
                  {showQualityPolicy && (
                     <div className="p-6 bg-white text-sm text-gray-600 whitespace-pre-line border-t border-gray-200 leading-relaxed">
                        {QUALITY_POLICY_FULL}
                     </div>
                  )}
               </div>
            </div>
            <div className="relative h-full min-h-[400px]">
               <img src={BACKGROUNDS.quality} className="rounded-2xl shadow-2xl object-cover w-full h-full" alt="Quality Control" />
               <div className="absolute inset-0 bg-primary-900/20 rounded-2xl"></div>
            </div>
         </div>
      </Section>

      {/* 6. HEALTH, SAFETY & ENVIRONMENT */}
      <Section id="safety" className="bg-gray-50">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
                <div className="grid grid-cols-2 gap-4">
                   <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop" className="rounded-lg shadow-md w-full h-48 object-cover" alt="Safety 1" />
                   <img src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=600&auto=format&fit=crop" className="rounded-lg shadow-md w-full h-48 object-cover mt-8" alt="Safety 2" />
                </div>
            </div>
            <div className="order-1 lg:order-2">
               <div className="flex items-center space-x-2 mb-4">
                  <ShieldCheck className="w-6 h-6 text-orange-500" />
                  <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">HSE Priority</span>
               </div>
               <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">Safety First. Always.</h2>
               <p className="text-gray-600 mb-8 text-lg">
                  We maintain dedicated HSE protocols across every project to ensure safe working conditions, environmental protection, and risk mitigation for workers, clients, and surrounding communities.
               </p>

               <div className="grid grid-cols-1 gap-3 mb-8">
                  {SAFETY_POINTS.map((point, i) => (
                     <div key={i} className="flex items-center p-3 bg-white border border-gray-100 rounded shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-orange-500 mr-3"></div>
                        <span className="text-gray-700">{point}</span>
                     </div>
                  ))}
               </div>

               <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                  <button 
                     onClick={() => setShowSafetyPolicy(!showSafetyPolicy)}
                     className="w-full flex justify-between items-center p-4 bg-orange-50 hover:bg-orange-100 transition-colors text-left"
                  >
                     <span className="font-bold text-orange-800 flex items-center"><ShieldCheck className="w-4 h-4 mr-2"/> Read Full HSE Policy</span>
                     {showSafetyPolicy ? <ChevronUp className="w-5 h-5 text-orange-800"/> : <ChevronDown className="w-5 h-5 text-orange-800"/>}
                  </button>
                  {showSafetyPolicy && (
                     <div className="p-6 bg-white text-sm text-gray-600 whitespace-pre-line border-t border-gray-200 leading-relaxed">
                        {SAFETY_POLICY_FULL}
                     </div>
                  )}
               </div>
            </div>
         </div>
      </Section>

      {/* 7. MACHINERY & EQUIPMENT */}
      <Section 
        id="machinery" 
        backgroundImage={BACKGROUNDS.capabilities} 
        overlay
        className="py-20"
      >
         <SectionHeader title="Modern Machinery for Efficient Execution" subtitle="Our fleet enables us to work at scale and reduce timelines." center light />
         
         <div className="max-w-5xl mx-auto">
            <GlassCard className="overflow-hidden border-t-4 border-t-primary-500">
               <div className="overflow-x-auto">
                  <table className="w-full text-left text-white border-collapse">
                     <thead>
                        <tr className="bg-white/10 text-sm uppercase tracking-wider text-accent-400">
                           <th className="p-4 font-bold border-b border-white/20 w-16 text-center">S.No.</th>
                           <th className="p-4 font-bold border-b border-white/20">Machine Name</th>
                           <th className="p-4 font-bold border-b border-white/20">Unit</th>
                           <th className="p-4 font-bold border-b border-white/20 text-right">Quantity</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-white/10 text-sm md:text-base">
                        {MACHINERY_LIST.map((item) => (
                           <tr key={item.id} className="hover:bg-white/5 transition-colors">
                              <td className="p-4 text-center text-gray-400">{item.id}</td>
                              <td className="p-4 font-medium">{item.name}</td>
                              <td className="p-4 text-gray-300">{item.unit !== '-' ? item.unit : ''}</td>
                              <td className="p-4 text-right font-bold text-primary-300">{item.quantity}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
               <div className="p-4 bg-white/5 text-center text-xs text-gray-400 border-t border-white/10">
                  * Equipment list updated as of 2024. Additional rentals engaged as per project demand.
               </div>
            </GlassCard>
         </div>
      </Section>

      {/* 8. OUR TEAM STRENGTH */}
      <Section id="team" className="bg-white">
         <SectionHeader title="A Skilled Team Behind Every Project" subtitle="The strength of Kakatiya Constructions lies in its people." center />
         
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {TEAM_STRUCTURE.map((role, i) => (
               <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 group">
                  <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                     <role.icon className="w-6 h-6 text-primary-600 group-hover:text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{role.count}</div>
                  <div className="text-sm font-medium text-gray-500 group-hover:text-primary-700">{role.role}</div>
               </div>
            ))}
         </div>
         <div className="text-center mt-12">
            <Button to="/careers" variant="outline">Explore Career Opportunities</Button>
         </div>
      </Section>

      {/* 9. CLIENTS WE SERVE */}
      <Section id="clients" className="bg-gray-50">
         <SectionHeader title="Trusted by Government Institutions" center />
         <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-5xl mx-auto">
             {CLIENT_LIST.map((client, i) => (
                <div key={i} className="bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm text-gray-600 font-bold hover:text-primary-600 hover:border-primary-200 transition-all cursor-default">
                   {client}
                </div>
             ))}
         </div>
      </Section>

      {/* 10. CALL TO ACTION */}
      <Section className="bg-primary-900 text-white text-center py-20">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 font-display">Let’s Build the Future Together</h2>
            <p className="text-xl text-primary-100 mb-10">
               Get in touch to discuss your upcoming infrastructure requirements or tender collaborations.
            </p>
            <div className="flex justify-center space-x-4">
               <Button to="/contact" variant="white" size="lg">Contact Us</Button>
               <Button to="/projects" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900">Explore Projects</Button>
            </div>
         </div>
      </Section>

    </div>
  );
};

export default About;
