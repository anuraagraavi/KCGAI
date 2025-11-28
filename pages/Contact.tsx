
import React from 'react';
import { Section, SectionHeader, Button, Card } from '../components/Components';
import { MapPin, Phone, Mail, Building2, Map } from 'lucide-react';
import { BACKGROUNDS } from '../constants';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* SECTION 1: HERO */}
      <Section 
        id="hero" 
        backgroundImage={BACKGROUNDS.contact}
        overlay
        fullScreen
        className="flex items-center text-center"
      >
        <div className="max-w-4xl mx-auto">
           <div className="inline-flex items-center space-x-2 text-white/90 font-bold uppercase tracking-[0.2em] text-xs mb-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Phone className="w-3 h-3 text-accent-400" />
              <span>Get in Touch</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 leading-tight drop-shadow-2xl">
             CONTACT US
           </h1>
           <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed mb-10 border-l-4 border-accent-500 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
             For project enquiries, tender collaborations, or general information, reach out to our team. We are available across our Hyderabad headquarters and regional office in Andhra Pradesh.
           </p>
        </div>
      </Section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* SECTION 3: CONTACT INFORMATION (Moved up for layout balance) */}
          <div className="lg:col-span-1 space-y-6">
             {/* Corporate Headquarters */}
             <Card className="p-8 border-l-4 border-l-primary-600 h-full">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6 text-primary-600">
                   <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">Corporate Headquarters</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                   Flat No. 205, Sumos Sri Sai Residency<br/>
                   Nizampet Village, Bachupally Mandal<br/>
                   Kukatpally, Hyderabad – 500090
                </p>
             </Card>
          </div>

          <div className="lg:col-span-1 space-y-6">
             {/* Corporate Office */}
             <Card className="p-8 border-l-4 border-l-accent-500 h-full">
                <div className="w-12 h-12 bg-accent-50 rounded-full flex items-center justify-center mb-6 text-accent-600">
                   <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">Corporate Office</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                   3rd Floor, Sahithi Sudha Square<br/>
                   Beside KIMS Hospital<br/>
                   Kondapur, Hyderabad – 500084
                </p>
             </Card>
          </div>

          <div className="lg:col-span-1 space-y-6">
             {/* Regional Office */}
             <Card className="p-8 border-l-4 border-l-gray-600 h-full">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-600">
                   <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">Regional Office (AP)</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                   Door No. 1-60/2<br/>
                   Rayannapalem Village, Pedavegi Mandal<br/>
                   West Godavari District<br/>
                   Andhra Pradesh – 534475
                </p>
             </Card>
          </div>
        </div>
      </div>

      {/* SECTION 2: CONTACT FORM & DIRECT INFO */}
      <Section className="bg-white pt-0 pb-20">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Direct Contact Info */}
            <div className="lg:col-span-4 space-y-8">
               <SectionHeader title="Reach Out" subtitle="Direct lines for immediate assistance." />
               
               <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-start">
                  <Phone className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                  <div>
                     <h4 className="font-bold text-gray-900 text-lg">Phone</h4>
                     <p className="text-gray-600 mt-1">040 – 48501128</p>
                     <p className="text-xs text-gray-400 mt-2">Mon-Sat, 9am - 6pm</p>
                  </div>
               </div>

               <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-start">
                  <Mail className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                  <div>
                     <h4 className="font-bold text-gray-900 text-lg">Email</h4>
                     <p className="text-gray-600 mt-1">kakatiyaho@gmail.com</p>
                     <p className="text-xs text-gray-400 mt-2">For tenders & general inquiries</p>
                  </div>
               </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
               <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-xl">
                  <div className="mb-10">
                     <h2 className="text-3xl font-bold font-display text-gray-900 mb-2">Send Us a Message</h2>
                     <p className="text-gray-600">Fill out the form below and our team will get back to you shortly.</p>
                  </div>

                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-sm font-semibold text-gray-900">Full Name</label>
                           <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-semibold text-gray-900">Phone Number</label>
                           <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="+91 98765 43210" />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-900">Email Address</label>
                        <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-900">Message</label>
                        <textarea rows={5} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Tell us about your project requirements..."></textarea>
                     </div>
                     <div className="pt-4">
                        <Button size="lg" className="w-full md:w-auto px-12">Submit</Button>
                     </div>
                  </form>
               </div>
            </div>

         </div>
      </Section>

      {/* SECTION 4: MAP EMBED */}
      <Section id="map" className="bg-gray-50 p-0">
         <div className="grid grid-cols-1 h-[500px] relative">
            {/* Placeholder for Google Map Embed - Using an image for visual representation as iframe needs valid API key or embed URL */}
            <div className="absolute inset-0 bg-gray-300">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.352697864506!2d78.3878!3d17.4904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI5JzI1LjQiTiA3OMKwMjMnMTYuMSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen 
                 loading="lazy"
                 className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
               ></iframe>
            </div>
            <div className="absolute top-10 left-10 z-10 bg-white p-6 rounded-xl shadow-2xl max-w-xs border border-gray-100 hidden md:block">
               <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center">
                  <Map className="w-5 h-5 mr-2 text-primary-600"/> Location Map
               </h4>
               <p className="text-gray-500 text-sm">
                  Visit our Hyderabad Headquarters at Kukatpally.
               </p>
            </div>
         </div>
      </Section>

      {/* SECTION 5: FINAL CTA */}
      <Section className="bg-primary-900 text-white text-center py-24">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let’s Build Together</h2>
            <p className="text-xl text-primary-100 mb-10 font-light max-w-2xl mx-auto">
               Connect with us for infrastructure development, government project execution, or partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Button variant="secondary" size="lg" className="shadow-lg shadow-accent-900/50">Call Now</Button>
               <Button variant="white" size="lg">Submit Inquiry</Button>
            </div>
         </div>
      </Section>

    </div>
  );
};

export default Contact;
