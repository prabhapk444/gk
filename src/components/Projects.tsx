import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { cn } from '../utils/cn';

const categories = ['All', 'Web'];

const projects = [
  {
    id: 1,
    title: 'Anjana Infotech',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'Company website showcasing IT solutions, software development, and technical support services.',
    link: 'https://anjanainfotech.in'
  },
  {
    id: 2,
    title: 'Vyasa Womens College',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
    description: 'College website with comprehensive information about courses, faculty, and campus life.',
    link: 'https://vyasawomenscollege.in.edu.in'
  },
  {
    id: 3,
    title: 'Sunstra Naturals',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800',
    description: 'E-commerce platform for cosmetics with integrated payment gateway.',
    link: 'https://sunstraanaturals.com'
  },
  {
    id: 4,
    title: 'Anjac Panorama',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    description: 'College platform showcasing events, achievements, and academic highlights.',
    link: 'https://panoview.knsmedutrust.com'
  }
];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredProjects = projects.filter(
    project => selectedCategory === 'All' || project.category === selectedCategory
  );

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-500 text-white rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            Visit Website
          </a>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>
        <span className="inline-block mt-2 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-1 rounded">
          {project.category}
        </span>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        
        <div className="flex justify-center mb-8 space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                'px-4 py-2 rounded-full transition-colors',
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {isMobile ? (
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides
            loop
          >
            {filteredProjects.map(project => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};