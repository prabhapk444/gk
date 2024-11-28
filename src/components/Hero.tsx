import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubIcon, LinkedinIcon, MailIcon, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import imageSrc from '/img/gk.webp';






gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com/Ganesh-krish', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/ganesh-krishna-49b3a5270', label: 'LinkedIn' },
  { icon: MailIcon, href: 'mailto:ganeshkrishna203@gmail.com', label: 'Email' },
];

export const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current || !contentRef.current) return;

    const tl = gsap.timeline();

    tl.from(headingRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    })
    .from(contentRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    }, '-=0.5');

    ScrollTrigger.create({
      trigger: contentRef.current,
      start: 'top center',
      end: 'bottom center',
      animation: tl,
    });
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative px-4 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <div className="relative inline-block">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden ring-4 ring-blue-500 ring-offset-4 ring-offset-white dark:ring-offset-gray-900">
              <img
                src={imageSrc}
                alt="Ganesh Krishna K"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold"
            >
              <span className="text-sm">1.5+ Years<br/>Exp.</span>
            </motion.div>
          </div>
        </motion.div>

        <div className="text-center">
          <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold mb-6">
            I'm <span className="text-blue-500">Ganesh Krishna K</span>
          </h1>
          <div ref={contentRef} className="space-y-6 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Passionate developer with experience in web development and server maintenance.
              Currently pursuing M.Sc Computer Science while working part-time at Anjana Infotech.
            </p>
            <div className="flex justify-center space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label={label}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
            <div className="flex justify-center space-x-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gray-100 dark:bg-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                Contact Me
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-gray-400" />
      </motion.div>
    </section>
  );
};