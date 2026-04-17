import { motion } from 'motion/react';
import { Award, BookOpen, Target, Users } from 'lucide-react';
import drAmeta from '../assets/doctor.png';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white dark:bg-[#070b14] min-h-screen">
      {/* Page Header */}
      <div className="bg-sky-600 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-screen-2xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">About Dr. Mayank Ameta</h1>
          <p className="text-sky-100 text-lg max-w-2xl mx-auto font-medium">
            Dedicated to excellence in Gastroenterology and Hepatology
          </p>
        </div>
      </div>

      {/* Profile Section */}
      <section className="py-24">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="bg-white dark:bg-[#0d1525] rounded-3xl shadow-2xl overflow-hidden border border-sky-100 dark:border-sky-900/40">
            <div className="grid md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative h-[400px] md:h-auto overflow-hidden bg-sky-50 dark:bg-sky-950/20">
                <img 
                  src={drAmeta} 
                  alt="Dr. Mayank Ameta" 
                  className="absolute inset-0 w-full h-full object-contain object-top bg-white dark:bg-[#0d1525]"
                />
              </div>
              <div className="md:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">Dr. Mayank Ameta</h2>
                <p className="text-sky-600 dark:text-sky-400 font-black text-xl mb-8 uppercase tracking-widest text-sm">Consultant Gastroenterologist & Hepatologist</p>
                
                <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed mb-10 text-justify text-lg">
                  <p>
                    Dr. Mayank Ameta is a Gastroenterologist in Madhuban, Udaipur. He is a renowned and highly trusted personality in the medical fraternity with rich experience in Gastroenterology.
                  </p>
                  <p>
                    He operates his consultation clinic and also serves as a Consultant Gastroenterologist at Pacific Hospital, Udaipur. He offers advanced medical treatments for Achalasia, Achlorhydria, Acute Liver Failure, Acute Pancreatitis, Barrett Esophagus, Cholangitis, Cholecystitis, Acalculous Cholecystitis, Acute Fatty Liver of Pregnancy, and many other complex GI conditions.
                  </p>
                  <p>
                    He has numerous successful treatment cases registered in his name. His approach to patient care is rooted in evidence-based medicine combined with deep empathy.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex items-center">
                    <div className="bg-sky-100 dark:bg-sky-900/30 p-4 rounded-2xl text-sky-600 dark:text-sky-400 mr-5 border border-sky-200/50">
                      <Award size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest mb-1">Qualifications</h4>
                      <p className="text-slate-600 dark:text-slate-400 font-bold">MBBS, MD, DM (Gastro)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-sky-100 dark:bg-sky-900/30 p-4 rounded-2xl text-sky-600 dark:text-sky-400 mr-5 border border-sky-200/50">
                      <BookOpen size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest mb-1">Experience</h4>
                      <p className="text-slate-600 dark:text-slate-400 font-bold">10+ Years in Practice</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white dark:bg-[#070b14]">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              {...fadeIn}
              className="bg-sky-50 dark:bg-sky-900/10 p-12 rounded-3xl border border-sky-100 dark:border-sky-900/30 shadow-sm"
            >
              <Target className="text-sky-600 dark:text-sky-400 mb-8" size={48} />
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Our Mission</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                To provide world-class, comprehensive, and compassionate gastrointestinal and liver care to the community. We strive to utilize the latest medical advancements to ensure accurate diagnosis and effective treatment plans tailored to each patient's unique needs.
              </p>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-blue-50 dark:bg-blue-900/10 p-12 rounded-3xl border border-blue-100 dark:border-blue-900/30 shadow-sm"
            >
              <Users className="text-blue-600 dark:text-blue-400 mb-8" size={48} />
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Our Vision</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                To be the most trusted center for digestive health in Rajasthan, recognized for clinical excellence, ethical practices, and patient-first approach. We aim to promote digestive wellness through education, prevention, and advanced therapeutic interventions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
