import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Download, MapPin, Phone, Mail } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-500" />
                <p className="text-gray-600 dark:text-gray-300">
                  155, Arunachalam Street, Idayankulam, Srivilliputtur
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-500" />
                <p className="text-gray-600 dark:text-gray-300">+91 6380249114</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-500" />
                <p className="text-gray-600 dark:text-gray-300">ganeshkrishna203@gmail.com</p>
              </div>
            </div>
            <button
  onClick={() => window.open('https://drive.google.com/file/d/1TYWgnTX13RTwUVYqtvgn_uSGFwz5QU_F/view?usp=sharing', '_blank')}
  className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
>
  <Download className="mr-2" size={20} />
  Download Resume
</button>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none peer"
                placeholder=" "
                required
              />
              <label className="absolute left-4 top-3 text-gray-500 transition-all duration-200 -translate-y-7 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75">
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none peer"
                placeholder=" "
                required
              />
              <label className="absolute left-4 top-3 text-gray-500 transition-all duration-200 -translate-y-7 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75">
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none peer"
                placeholder=" "
                required
              />
              <label className="absolute left-4 top-3 text-gray-500 transition-all duration-200 -translate-y-7 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75">
                Your Message
              </label>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors inline-flex items-center justify-center"
              type="submit"
            >
              <Send className="mr-2" size={20} />
              Send Message
            </motion.button>

            {status !== 'idle' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-center p-3 rounded ${
                  status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {status === 'success' ? 'Message sent successfully!' : 'Error sending message'}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};