
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Careers from './pages/Careers';

const Media = () => (
  <div className="py-24 text-center">
    <h1 className="text-4xl font-bold mb-4">Media Center</h1>
    <p>News and Updates coming soon.</p>
  </div>
);

const Legal = () => (
  <div className="py-24 max-w-3xl mx-auto px-4">
    <h1 className="text-3xl font-bold mb-4">Legal</h1>
    <p className="text-sm text-gray-600">Privacy Policy & Terms of Use...</p>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/media" element={<Media />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
