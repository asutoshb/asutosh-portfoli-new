
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors group"
            >
              <Mail className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Email</span>
              <span className="text-gray-400 text-sm">{personalInfo.email}</span>
            </a>
            
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors group"
            >
              <Linkedin className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium">LinkedIn</span>
              <span className="text-gray-400 text-sm">Connect with me</span>
            </a>
            
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors group"
            >
              <Github className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium">GitHub</span>
              <span className="text-gray-400 text-sm">View my code</span>
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>{personalInfo.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
