
import React, { useState } from 'react';
import { Section, SectionHeader, Button, Card, Badge } from '../components/Components';
import { Newspaper, Image as ImageIcon, ArrowRight, ExternalLink } from 'lucide-react';
import { BACKGROUNDS } from '../constants';

// --- DATA CONSTANTS ---

const NEWS_CLIPPINGS = [
  { src: 'https://i.ibb.co/9mM4526M/n1.png', alt: 'Newspaper clipping - hospital project coverage' },
  { src: 'https://i.ibb.co/zV9mDx5j/n2.png', alt: 'News article - government infrastructure project' },
  { src: 'https://i.ibb.co/Rp4zWDk5/n3.png', alt: 'Press coverage - construction milestone' },
  { src: 'https://i.ibb.co/gFtp1Xwh/n4.png', alt: 'Media feature - public works' },
  { src: 'https://i.ibb.co/bR8YyxDp/n5.png', alt: 'Local news - development update' },
  { src: 'https://i.ibb.co/fdLshkG6/n6.png', alt: 'Newspaper clipping - site inauguration' },
  { src: 'https://i.ibb.co/KcLRH28V/n7.png', alt: 'Press release - project completion' },
  { src: 'https://i.ibb.co/KpchQQT7/n8.png', alt: 'Media coverage - regional infrastructure' },
];

const GALLERIES = [
  {
    id: 'gandhi',
    title: '200-Bedded MCH Centre – Gandhi Hospital, Secunderabad',
    client: 'TSMSIDC',
    description: 'Exterior and aerial views of the 200-bedded Maternal & Child Health Centre constructed at Gandhi Hospital, Secunderabad.',
    images: [
      'https://i.ibb.co/RGrfqmHH/200b-1.png',
      'https://i.ibb.co/Ps8bb5sJ/200b-2.png',
      'https://i.ibb.co/cK8pfw6S/200b-3.png',
      'https://i.ibb.co/cPNHKHb/200b-4.png'
    ]
  },
  {
    id: 'sathupally',
    title: '100-Bedded Area Hospital – Sathupally, Khammam District',
    client: 'TSMSIDC',
    description: 'Completed hospital building at Sathupally serving regional healthcare needs.',
    images: [
      'https://i.ibb.co/ZpVKDPpx/100b-1.png',
      'https://i.ibb.co/mrzcJs78/img1.png',
      'https://i.ibb.co/PGnw4KRZ/img2.png'
    ]
  },
  {
    id: 'madhira',
    title: '100-Bedded Area Hospital – Madhira, Khammam District',
    client: 'TSMSIDC',
    description: 'Views of the hospital facility at Madhira, including front elevation and campus.',
    images: [
      'https://i.ibb.co/FLzn5vxx/100b2-1.png',
      'https://i.ibb.co/kNgCpPw/100b2-2.png',
      'https://i.ibb.co/sdRyFzR7/img3.png',
      'https://i.ibb.co/RpSq6ty9/img4.png'
    ]
  },
  {
    id: 'minority',
    title: 'Minority Residential School Complexes – Zaheerabad & Algole',
    client: 'TSEWIDC',
    description: 'Campus blocks and building clusters of minority residential school complexes in Zaheerabad and Algole, Sangareddy District.',
    images: [
      'https://i.ibb.co/tMnFqx54/minority-1.png',
      'https://i.ibb.co/vCpcdKCD/minority-2.png',
      'https://i.ibb.co/LdmXBjLY/minority-3.png',
      'https://i.ibb.co/TBJS7YkC/minority-4.png',
      'https://i.ibb.co/qFYxCrDG/minority-5.png',
      'https://i.ibb.co/7tZhNms1/img5.png',
      'https://i.ibb.co/67HKNszf/img6.png'
    ]
  }
];

const Media = () => {
  // Simple lightbox state
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-white min-h-screen">
      
      {/* SECTION 1: HERO */}
      <Section 
        id="hero" 
        backgroundImage={BACKGROUNDS.hero} // Using generic hero BG, or could use specific media BG
        overlay
        fullScreen
        className="flex items-center text-center"
      >
        <div className="max-w-4xl mx-auto">
           <div className="inline-flex items-center space-x-2 text-white/90 font-bold uppercase tracking-[0.2em] text-xs mb-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Newspaper className="w-3 h-3 text-accent-400" />
              <span>News & Updates</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 leading-tight drop-shadow-2xl">
             MEDIA
           </h1>
           <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed mb-10 border-l-4 border-accent-500 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
             Explore our news features and project gallery showcasing public infrastructure delivered across Telangana and Andhra Pradesh.
           </p>
        </div>
      </Section>

      {/* SECTION 2: INTRO */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader 
            title="A Showcase of Our Work & Recognition" 
            center
          />
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            This media archive brings together our press coverage and project visuals. From hospital upgrades to residential school complexes, these stories and images reflect our role in building public infrastructure for communities across Telangana and beyond.
          </p>
        </div>
      </Section>

      {/* SECTION 3: NEWS GRID */}
      <Section id="news" className="bg-gray-50">
        <div className="flex flex-col items-center mb-12">
           <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
              <Newspaper className="w-6 h-6" />
           </div>
           <SectionHeader title="In the News" subtitle="Press coverage and official mentions highlighting our healthcare, education, and public infrastructure projects." center />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {NEWS_CLIPPINGS.map((item, idx) => (
            <Card key={idx} className="overflow-hidden group cursor-pointer border border-gray-200 shadow-sm hover:shadow-xl h-full">
              <div 
                className="relative aspect-[3/4] overflow-hidden bg-gray-200"
                onClick={() => setSelectedImage(item.src)}
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <div className="bg-white/90 backdrop-blur rounded-full p-3 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ExternalLink className="w-5 h-5 text-gray-900" />
                   </div>
                </div>
              </div>
              <div className="p-4 bg-white border-t border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Press Coverage</p>
                <p className="text-sm font-medium text-gray-800 line-clamp-2">{item.alt}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* SECTION 4 & 5: PROJECT GALLERY */}
      <Section id="gallery" className="bg-white">
        <div className="flex flex-col items-center mb-16 text-center">
           <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-100 text-accent-600 mb-4">
              <ImageIcon className="w-6 h-6" />
           </div>
           <SectionHeader title="Project Gallery" subtitle="A visual collection of our completed healthcare and educational infrastructure projects across Telangana." center />
        </div>

        <div className="space-y-24">
           {GALLERIES.map((gallery) => (
             <div key={gallery.id} className="scroll-mt-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-gray-100 pb-6">
                   <div className="max-w-3xl">
                      <div className="flex items-center gap-3 mb-2">
                         <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{gallery.title}</h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                         <Badge color="green">Completed</Badge>
                         <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Client: <span className="text-primary-700">{gallery.client}</span></span>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">{gallery.description}</p>
                   </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                   {gallery.images.map((img, idx) => (
                      <div 
                        key={idx} 
                        className={`relative rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300 ${idx === 0 ? 'md:col-span-2 md:row-span-2 aspect-video md:aspect-auto' : 'aspect-video'}`}
                        onClick={() => setSelectedImage(img)}
                      >
                         <img 
                           src={img} 
                           alt={`${gallery.title} - Image ${idx + 1}`} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           loading="lazy"
                         />
                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                      </div>
                   ))}
                </div>
             </div>
           ))}
        </div>
      </Section>

      {/* SECTION 6: FINAL CTA */}
      <Section className="bg-primary-900 text-white text-center py-24">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Want to Know More?</h2>
            <p className="text-xl text-primary-100 mb-10 font-light max-w-2xl mx-auto">
               For detailed project portfolios, media kits, or collaboration opportunities, reach out to our team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Button to="/projects" variant="white" size="lg">View Projects</Button>
               <Button to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900">Contact Us</Button>
            </div>
         </div>
      </Section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full max-h-screen flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Full screen view" 
              className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
            />
            <button 
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
              onClick={() => setSelectedImage(null)}
            >
              <span className="sr-only">Close</span>
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Media;
