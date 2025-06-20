import React, { useEffect } from 'react';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* Starry Particle Background */}
      <Particles
        id="tsparticles"
        className="fixed top-0 left-0 w-full h-full -z-10"
        init={loadFull}
        options={{
          background: { color: '#000000' },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: 'push' },
              onHover: { enable: true, mode: 'repulse' },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: '#ffffff' },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: { enable: false },
            move: {
              direction: 'none',
              enable: true,
              outModes: { default: 'bounce' },
              random: false,
              speed: 1,
              straight: false,
            },
            number: { value: 50, density: { enable: true, area: 800 } },
            opacity: { value: 0.4 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      <div className="min-h-screen font-sans bg-black text-white">
        {/* Hero */}
        <section className="py-16 text-center bg-black" data-aos="fade-down">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400">
            Hi, I'm Kavin Es 👋
          </h1>
          <p className="text-lg mt-4 text-gray-300">
            Aspiring Software Engineer | React & Django Developer
          </p>
        </section>

        {/* About */}
        <section className="p-8 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-pink-400 mb-4">About Me</h2>
          <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-pulse">
            <div className="bg-[#1b1b1b] rounded-xl p-6 text-gray-300 shadow-md hover:scale-[1.02] transition-transform duration-300">
              <p>
                I’m a Python full stack developer passionate about building clean, modern web apps.
                I love working with Python, React, and Django — and I'm always eager to learn and grow!
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="p-8 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-pink-400 mb-4">Skills</h2>
          <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-pulse">
            <div className="bg-[#1b1b1b] rounded-xl p-6 text-gray-300 shadow-md hover:scale-[1.02] transition-transform duration-300">
              <ul className="list-disc list-inside space-y-2">
                <li>Frontend: React.js, HTML, CSS, Tailwind</li>
                <li>Backend: Python, Django, REST APIs</li>
                <li>Tools: Git, GitHub, Vite, Postman</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="p-8 max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-10">🌟 Projects I’ve Built</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: '🧠 Face Detection & Analysis App',
                desc: 'Detects faces in uploaded images with bounding boxes, face count, and blur. Built with Python + React.',
              },
              {
                title: '🕒 Attendance Management System',
                desc: 'Fullstack app to punch in/out, track users, and export reports. Built with Django + React.',
              },
              {
                title: '🌐 Scope India Website Project',
                desc: 'Internship project to design a training site with HTML, CSS, and JavaScript. Built responsive UI and course pages.',
              },
            ].map((project, i) => (
              <div
                key={i}
                className="relative p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-pulse"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="bg-[#1b1b1b] rounded-xl p-6 text-gray-300 shadow-md hover:scale-[1.02] transition-transform duration-300 h-full">
                  <h3 className="text-xl font-bold text-pink-400 mb-2">{project.title}</h3>
                  <p className="text-sm leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="p-8 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-pink-400 mb-4">Education</h2>
          <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-pulse">
            <div className="bg-[#1b1b1b] rounded-xl p-6 text-gray-300 shadow-md hover:scale-[1.02] transition-transform duration-300">
              <ul className="space-y-2">
                <li>B.A. English Literature – ST Hindu College, Nagercoil (2018–2021)</li>
                <li>M.A. English Literature – ST Hindu College, Nagercoil (2021–2023)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="p-8 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-pink-400 mb-4">Contact</h2>
          <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-pulse">
            <div className="bg-[#1b1b1b] rounded-xl p-6 text-gray-300 shadow-md space-y-2 hover:scale-[1.02] transition-transform duration-300">
              <p>Email: <a href="mailto:kavines8301@gmail.com" className="text-cyan-400">kavines8301@gmail.com</a></p>
              <p>Phone: 6383124756</p>
              <p>GitHub: <a href="https://github.com/kavin2672005" className="text-cyan-400" target="_blank" rel="noopener noreferrer">kavin2672005</a></p>
            </div>
          </div>
        </section>

        {/* Resume */}
        <section className="text-center my-10 space-x-4" data-aos="fade-up">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-6 py-2 rounded shadow hover:bg-indigo-700 transition transform hover:scale-105"
          >
            View Resume 📄
          </a>
          <a
            href="/resume.pdf"
            download
            className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition transform hover:scale-105"
          >
            Download Resume ⬇️
          </a>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-400 bg-black py-4" data-aos="fade-in">
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            © 2025 Kavin Es
          </span>
          <span className="text-gray-400">. All rights reserved.</span>
        </footer>
      </div>
    </>
  );
}

export default App;
