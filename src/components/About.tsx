import { Briefcase, GraduationCap, Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl h-96 flex items-center justify-center shadow-xl">
              <div className="text-white text-center">
                <div className="text-8xl mb-4">👨‍💻</div>
                <p className="text-xl font-semibold">Your Photo Here</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello! I'm a passionate full-stack developer with over 5 years of experience
              building modern web applications. I specialize in creating seamless user
              experiences and scalable backend systems.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in tech started with a curiosity about how websites work, and
              it has evolved into a career where I get to solve complex problems and
              bring ideas to life through code.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Briefcase className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Experience</h3>
                  <p className="text-gray-600">5+ Years</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Education</h3>
                  <p className="text-gray-600">BS Computer Science</p>
                </div>
              </div>
            </div>

            <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-8">
              <Download size={20} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
