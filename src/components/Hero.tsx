import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

const Hero = ({ onScrollToSection }: HeroProps) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative"
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm border-4 border-white/20 flex items-center justify-center">
            <span className="text-5xl font-bold">JD</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          John Doe
        </h1>

        <p className="text-2xl md:text-3xl mb-4 text-blue-100">
          Full Stack Developer & UI/UX Enthusiast
        </p>

        <p className="text-lg md:text-xl mb-12 text-blue-200 max-w-2xl mx-auto">
          Crafting beautiful, performant web experiences with modern technologies.
          Passionate about clean code and intuitive design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => onScrollToSection('projects')}
            className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
          >
            View My Work
          </button>
          <button
            onClick={() => onScrollToSection('contact')}
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
          >
            Get In Touch
          </button>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:john@example.com"
            className="hover:text-blue-200 transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        <button
          onClick={() => onScrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
