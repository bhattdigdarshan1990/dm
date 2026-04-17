import { motion } from 'motion/react';
import { Activity, Search, Droplets, Flame, Wind, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 'endoscopy',
      icon: Search,
      title: 'Upper GI Endoscopy',
      description: 'A procedure to visually examine your upper digestive system with a tiny camera on the end of a long, flexible tube. Used to diagnose and treat conditions of the esophagus, stomach, and duodenum.',
      color: 'bg-sky-50 text-sky-600 border-sky-100'
    },
    {
      id: 'liver',
      icon: Droplets,
      title: 'Liver Disease Treatment',
      description: 'Comprehensive care for liver conditions including Hepatitis B & C, Fatty Liver Disease, Cirrhosis, and Liver Failure. We offer advanced diagnostics and personalized management plans.',
      color: 'bg-sky-50 text-sky-600 border-sky-100'
    },
    {
      id: 'gerd',
      icon: Flame,
      title: 'Acid Reflux / GERD',
      description: 'Expert management of Gastroesophageal Reflux Disease. From lifestyle modifications and medical therapy to evaluating the need for advanced interventions to prevent complications.',
      color: 'bg-orange-50 text-orange-600 border-orange-100'
    },
    {
      id: 'ibs',
      icon: Wind,
      title: 'IBS Treatment',
      description: 'Specialized care for Irritable Bowel Syndrome. We help manage symptoms like cramping, abdominal pain, bloating, gas, and diarrhea or constipation through tailored approaches.',
      color: 'bg-purple-50 text-purple-600 border-purple-100'
    },
    {
      id: 'pancreas',
      icon: Stethoscope,
      title: 'Pancreatic & Biliary Care',
      description: 'Diagnosis and treatment of acute and chronic pancreatitis, gallstones, and biliary tract diseases using modern medical and endoscopic techniques.',
      color: 'bg-rose-50 text-rose-600 border-rose-100'
    }
  ];

  return (
    <div className="bg-white dark:bg-[#070b14] min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-sky-600 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-screen-2xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Our Services</h1>
          <p className="text-sky-100 text-lg max-w-2xl mx-auto font-medium">
            Comprehensive diagnostic and therapeutic solutions for all your digestive health needs.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-screen-2xl mx-auto px-4 -mt-12 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-[#0d1525] rounded-3xl p-10 shadow-2xl border border-sky-100 dark:border-sky-900/30 hover:shadow-sky-200/20 dark:hover:shadow-none hover:-translate-y-2 transition-all flex flex-col h-full"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-colors ${service.color.replace('border-', 'dark:border-').replace('bg-', 'dark:bg-opacity-20 dark:bg-')}`}>
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed flex-grow mb-8 text-sm">
                {service.description}
              </p>
              <a 
                href="https://wa.me/919414158480" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sky-600 dark:text-sky-400 font-extrabold hover:text-sky-800 dark:hover:text-sky-300 inline-flex items-center mt-auto text-sm"
              >
                Inquire now <span className="ml-2">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 mt-32">
        <div className="text-center mb-16">
          <h2 className="text-sky-600 dark:text-sky-400 font-black tracking-widest uppercase text-xs mb-4">Questions & Answers</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-6">
          {[
            {
              q: "Is an endoscopy painful?",
              a: "No, an endoscopy is not typically painful. You will be given a mild sedative or local anesthetic spray to numb your throat, ensuring you are comfortable throughout the brief procedure."
            },
            {
              q: "How long does a colonoscopy take?",
              a: "The actual procedure usually takes about 30 to 45 minutes. However, you should plan to be at the clinic for about 2 to 3 hours total to account for preparation and recovery time."
            },
            {
              q: "Do I need a referral to book an appointment?",
              a: "While referrals from general physicians are welcome, they are not strictly necessary. You can directly book a consultation if you are experiencing digestive issues."
            },
            {
              q: "What should I bring to my first appointment?",
              a: "Please bring any previous medical records, recent blood test reports, imaging scans (USG/CT/MRI), and a list of your current medications."
            }
          ].map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-sky-50/50 dark:bg-[#0d1525] p-8 rounded-3xl shadow-sm border border-sky-100 dark:border-sky-900/30"
            >
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{faq.q}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
