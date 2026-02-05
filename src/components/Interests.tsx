import { Coffee, Headphones, Mountain, Camera, BookOpen, Plane } from 'lucide-react';

const Interests = () => {
  const interests = [
    {
      icon: Coffee,
      title: 'Coffee Enthusiast',
      description: 'Always exploring new brewing methods and coffee origins',
    },
    {
      icon: Headphones,
      title: 'Music Lover',
      description: 'From jazz to electronic, music fuels my creativity',
    },
    {
      icon: Mountain,
      title: 'Hiking & Outdoors',
      description: 'Finding inspiration in nature and challenging trails',
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Capturing moments and perspectives through the lens',
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Always reading about new technologies and best practices',
    },
    {
      icon: Plane,
      title: 'Travel',
      description: 'Exploring new cultures and gaining fresh perspectives',
    },
  ];

  return (
    <section id="interests" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Beyond Code
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            When I'm not coding, you'll find me pursuing these passions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {interests.map((interest) => {
            const IconComponent = interest.icon;
            return (
              <div
                key={interest.title}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {interest.title}
                </h3>
                <p className="text-gray-600">{interest.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Interests;
