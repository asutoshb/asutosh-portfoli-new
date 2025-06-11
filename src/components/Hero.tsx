
import { personalInfo } from "../data/portfolioData";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {personalInfo.title}
          </p>
          <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto">
            {personalInfo.bio}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
