
import { experiences } from "../data/portfolioData";

const Experience = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {experience.position}
                    </h3>
                    <h4 className="text-xl text-blue-600 font-semibold">
                      {experience.company}
                    </h4>
                  </div>
                  <span className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                    {experience.duration}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {experience.description.map((desc, index) => (
                    <li key={index} className="text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-2 mt-2">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
