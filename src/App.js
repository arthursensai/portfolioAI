import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaArrowRight } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const projects = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description: "A React-based dashboard for managing online store data",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGluZ3xlbnwwfHwwfHw%3D"
    },
    {
      id: 2,
      title: "Weather App",
      description: "Real-time weather application using Weather API",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2VhdGhlcnxlbnwwfHwwfHw%3D"
    },
    {
      id: 3,
      title: "Task Manager",
      description: "A productivity tool built with React and Firebase",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2plY3R8ZW58MHx8MHx8"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white transition-all duration-300 ease-in-out">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold text-purple-500 animate-pulse tracking-wider font-mono">Mohamed</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-purple-500 transition-all duration-300 hover:scale-110">About</a>
              <a href="#skills" className="text-gray-300 hover:text-purple-500 transition-all duration-300 hover:scale-110">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-purple-500 transition-all duration-300 hover:scale-110">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-500 transition-all duration-300 hover:scale-110">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541701494587-cb58502866ab')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-float">Aspiring Coder & Tech Enthusiast</h1>
          <p className="text-xl mb-8 text-purple-300">Building the future, one line of code at a time</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-400 animate-bounce hover:animate-none">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-300 leading-relaxed transform hover:scale-105 transition-all duration-500">
            <div className="p-6 bg-gray-900/50 rounded-xl shadow-xl backdrop-blur-sm hover:shadow-purple-500/30 transition-all duration-300">
              <p className="mb-6 hover:text-purple-300 transition-colors animate-fadeIn">
                Hi! I'm an 18-year-old passionate coder who loves turning ideas into reality through programming. 
                My journey began when I wrote my first "Hello World" program at 15, and since then, 
                I've been constantly learning and growing in the world of technology.
              </p>
              <p className="hover:text-purple-300 transition-colors animate-slideUp">
                I'm particularly interested in web development and artificial intelligence. 
                When I'm not coding, you can find me participating in hackathons, contributing to open-source projects, 
                or learning about the latest tech trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center transform hover:scale-110 transition-transform">
              <FaHtml5 className="text-6xl text-orange-500 mb-4" />
              <span className="text-gray-300">HTML5</span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-110 transition-transform">
              <FaCss3Alt className="text-6xl text-blue-500 mb-4" />
              <span className="text-gray-300">CSS3</span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-110 transition-transform">
              <FaJs className="text-6xl text-yellow-400 mb-4" />
              <span className="text-gray-300">JavaScript</span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-110 transition-transform">
              <FaReact className="text-6xl text-blue-400 mb-4 animate-spin-slow" />
              <span className="text-gray-300">React</span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-110 transition-transform">
              <SiTailwindcss className="text-6xl text-teal-500 mb-4" />
              <span className="text-gray-300">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center transform hover:scale-110 transition-transform">
              <FaPython className="text-6xl text-blue-600 mb-4" />
              <span className="text-gray-300">Python</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover hover:opacity-75 transition-opacity"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                    View Project <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors transform hover:scale-105"
              >
                Send Message
              </button>
            </form>

            <div className="flex justify-center space-x-6 mt-12">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors transform hover:scale-110"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors transform hover:scale-110"
              >
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;