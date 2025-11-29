
import React, { useState } from 'react';
import { Section, SectionHeader, Button, Card } from '../components/Components';
import { Briefcase, Upload, Send, ArrowRight, UserCheck, Users, BarChart, Check, Loader2 } from 'lucide-react';
import { CAREER_OPPORTUNITIES, BACKGROUNDS } from '../constants';

const Careers = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [fileName, setFileName] = useState<string | null>(null);

  const scrollToForm = () => {
    const el = document.getElementById('application-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setFileName(null);
      // Reset after showing success message
      setTimeout(() => setFormState('idle'), 5000);
    }, 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* SECTION 1: HERO - Updated to match Home/Projects style */}
      <Section 
        id="hero" 
        backgroundImage={BACKGROUNDS.careers}
        overlay
        fullScreen
        className="flex items-center text-center"
      >
        <div className="max-w-4xl mx-auto">
           <div className="inline-flex items-center space-x-2 text-white/90 font-bold uppercase tracking-[0.2em] text-xs mb-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Briefcase className="w-3 h-3 text-accent-400" />
              <span>Join Our Team</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 leading-tight drop-shadow-2xl">
             BUILD YOUR CAREER WITH <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-white">KAKATIYA</span>
           </h1>
           <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed mb-10 border-l-4 border-accent-500 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
             Join a team committed to delivering large-scale, high-impact public infrastructure projects across Telangana and Andhra Pradesh.
           </p>
           <Button onClick={scrollToForm} variant="white" size="lg">Apply Now</Button>
        </div>
      </Section>

      {/* SECTION 2: COMPANY CULTURE */}
      <Section className="bg-white pb-20 pt-24">
         <div className="max-w-6xl mx-auto">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-10">
               <div className="md:w-1/2">
                  <SectionHeader title="A Workplace Built on Commitment & Excellence" />
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                     At Kakatiya Constructions, our people are our biggest strength. Our culture emphasizes responsibility, teamwork, and continuous improvement. With 24+ years of public infrastructure execution, we provide an environment where engineers, managers, and specialists grow through challenging and meaningful work.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                     <div className="flex items-center text-sm font-bold text-gray-700 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                        <Users className="w-4 h-4 mr-2 text-primary-500" /> Teamwork
                     </div>
                     <div className="flex items-center text-sm font-bold text-gray-700 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                        <UserCheck className="w-4 h-4 mr-2 text-primary-500" /> Responsibility
                     </div>
                     <div className="flex items-center text-sm font-bold text-gray-700 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                        <BarChart className="w-4 h-4 mr-2 text-primary-500" /> Growth
                     </div>
                  </div>
               </div>
               <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                    alt="Team Collaboration" 
                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                  />
               </div>
            </div>
         </div>
      </Section>

      {/* SECTION 3: JOB LISTINGS */}
      <Section id="jobs" className="bg-gray-50 py-20">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">Current Openings</h2>
            <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full"></div>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {CAREER_OPPORTUNITIES.map((job) => (
               <Card key={job.id} className="flex flex-col h-full hover:border-primary-200 transition-colors overflow-hidden group">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={job.image} 
                      alt={job.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <span className="absolute bottom-4 left-4 inline-block bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {job.experience} Exp.
                     </span>
                  </div>
                  <div className="p-8 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{job.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                          {job.description}
                      </p>
                    </div>
                    <Button onClick={scrollToForm} variant="outline" size="sm" className="w-full justify-between group">
                      Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
               </Card>
            ))}
         </div>
      </Section>

      {/* SECTION 4 & 5: GENERAL APPLICATION & FORM */}
      <Section id="application-form" className="bg-white py-24">
         <div className="max-w-3xl mx-auto">
            
            {/* General Application Intro */}
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">Didn’t Find a Suitable Role?</h2>
               <p className="text-gray-600 text-lg">
                  We’re always open to hiring committed and skilled professionals. Share your resume and we’ll reach out when a suitable position is available.
               </p>
            </div>

            {/* Application Form */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden">
               {formState === 'success' && (
                  <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
                     <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                        <Check className="w-8 h-8" />
                     </div>
                     <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                     <p className="text-gray-600">Thank you for your interest. Our HR team will review your application and get back to you shortly.</p>
                     <Button variant="outline" className="mt-6" onClick={() => setFormState('idle')}>Submit Another</Button>
                  </div>
               )}

               <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Submit Application</h3>
               <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Full Name</label>
                        <input required type="text" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Enter your name" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                        <input required type="tel" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Enter phone number" />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-semibold text-gray-700">Email Address</label>
                     <input required type="email" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-semibold text-gray-700">Position Applying For</label>
                     <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all appearance-none">
                        <option value="">Select a position...</option>
                        {CAREER_OPPORTUNITIES.map(job => (
                           <option key={job.id} value={job.title}>{job.title}</option>
                        ))}
                        <option value="General Application">General Application</option>
                     </select>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-semibold text-gray-700">Upload Resume</label>
                     <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                           <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="w-8 h-8 mb-3 text-gray-400" />
                              <p className="mb-2 text-sm text-gray-500">
                                {fileName ? <span className="text-primary-600 font-bold">{fileName}</span> : <><span className="font-semibold">Click to upload</span> or drag and drop</>}
                              </p>
                              <p className="text-xs text-gray-500">PDF, DOC (MAX. 5MB)</p>
                           </div>
                           <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
                        </label>
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-semibold text-gray-700">Message (Optional)</label>
                     <textarea rows={4} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Tell us why you are a great fit..."></textarea>
                  </div>

                  <Button disabled={formState === 'loading'} size="lg" className="w-full shadow-lg shadow-primary-900/20 disabled:opacity-70 disabled:cursor-not-allowed">
                     {formState === 'loading' ? (
                        <>Sending... <Loader2 className="w-4 h-4 ml-2 animate-spin" /></>
                     ) : (
                        <>Submit Application <Send className="w-4 h-4 ml-2" /></>
                     )}
                  </Button>
               </form>
            </div>
         </div>
      </Section>

      {/* SECTION 6: FINAL CTA */}
      <Section className="bg-primary-900 text-white text-center py-20">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Grow Your Career With Us</h2>
            <p className="text-lg md:text-xl text-primary-100 mb-10 font-light">
               Become part of a team that builds public infrastructure shaping the future of Telangana and Andhra Pradesh.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Button to="/contact" variant="white" size="lg">Contact HR</Button>
               <Button to="/projects" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900">Explore Projects</Button>
            </div>
         </div>
      </Section>

    </div>
  );
};

export default Careers;
