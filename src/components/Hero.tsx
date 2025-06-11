
import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
            {personalInfo.name.split(' ').map(n => n[0]).join('')}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            {personalInfo.name}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-blue-600 font-medium mb-6">
            {personalInfo.title}
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            {personalInfo.bio}
          </p>
          
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-8">
            <MapPin className="w-4 h-4" />
            <span>{personalInfo.location}</span>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 hover:text-gray-900"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 hover:text-blue-600"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 hover:text-red-500"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Arrow */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer p-2 rounded-full hover:bg-white/20 transition-colors"
      >
        <ArrowDown className="w-6 h-6 text-gray-600" />
      </button>
    </section>
  );
};

export default Hero;
