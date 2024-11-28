import { motion } from 'framer-motion';
import { Code, Server, Database, Globe } from 'lucide-react';

const skills = [
  { icon: Code, title: 'Frontend', description: 'HTML, CSS, JavaScript for building responsive web interfaces' },
  { icon: Server, title: 'Backend', description: 'PHP and SQL for server-side development' },
  { icon: Database, title: 'Database', description: 'Database management and optimization' },
  { icon: Globe, title: 'SEO', description: 'Search engine optimization techniques' },
];

const timeline = [
  {
    year: '2023',
    title: 'M.Sc Computer Science',
    company: 'Ayya Nadar Janaki Ammal College',
    description: 'Currently pursuing Masters degree',
  },
  {
    year: '2022',
    title: 'Part-time Developer',
    company: 'Anjana Infotech',
    description: 'Working on web development and server maintenance',
  },
  {
    year: '2022',
    title: 'B.Sc Computer Science',
    company: 'Ayya Nadar Janaki Ammal College',
    description: 'Graduated with 77% marks',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a dedicated developer with 1.5 years of experience in web development and server maintenance.
              Currently pursuing my M.Sc in Computer Science while working part-time at Anjana Infotech,
              where I've contributed to various web projects and gained valuable industry experience.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My first professional experience was with the Anjac Panorama project, where I worked
              in a team to develop a platform showcasing college life and achievements. This experience
              helped me develop strong collaborative skills and technical expertise.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {skills.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                whileHover={{ y: -5 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              >
                <Icon className="w-8 h-8 text-blue-500 mb-4" />
                <h4 className="text-lg font-semibold mb-2">{title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">Education & Experience</h3>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-24 text-blue-500 font-bold">{item.year}</div>
                <div className="flex-grow">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-blue-500 dark:text-blue-400 mb-2">{item.company}</p>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};