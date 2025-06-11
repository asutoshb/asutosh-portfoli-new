
import { achievements } from "../data/portfolioData";

const Achievements = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      {achievement.event && (
                        <span className="text-blue-600 font-medium">
                          {achievement.event}
                        </span>
                      )}
                      {achievement.year && (
                        <span className="text-gray-500">• {achievement.year}</span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-3">
                      {achievement.description}
                    </p>
                    
                    {achievement.details && (
                      <p className="text-sm text-gray-700 bg-white/50 p-3 rounded-lg">
                        {achievement.details}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
