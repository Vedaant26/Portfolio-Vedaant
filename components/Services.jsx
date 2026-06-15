"use client";

import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { motion } from 'framer-motion';

const servicesData = [
  {
    icon: "/services/web.gif",
    title: 'Web Development',
    description: "I am a web developer with a passion for creating beautiful and functional web applications."
  },
  {
    icon: "/services/react-native.gif",
    title: 'AI Development',
    description: "I am a AI developer with a passion for building intelligent applications.",
  },
];

const Services = () => {

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="mb-12 lg:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-24 text-center mx-auto">
          My Services
        </h2>

        {/* grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 items-stretch justify-center">
          {servicesData.map((item, index) => {
            const isAI = item.title.toLowerCase().includes('ai');
            return (
              <Card
                className={`w-full max-w-[424px] h-[350px] flex flex-col pt-16 pb-10 justify-center items-center relative transition-shadow duration-300 ${isAI ? 'border-cyan-400/25 shadow-[0_18px_50px_rgba(34,211,238,0.12)]' : 'border-slate-200/30'}`}
                key={index}
              >
                <CardHeader className={`text-primary -mt-32 ${isAI ? 'bg-cyan-500/10 border border-cyan-400/30 rounded-full shadow-sm' : ''}`}>
                  <motion.div
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                  >
                    <img src={item.icon} alt={`icon-${index}`} className={`h-[200px] w-[200px] rounded-[20px] object-cover object-center ${isAI ? 'ring-2 ring-cyan-400/50' : ''}`} />
                  </motion.div>
                </CardHeader>

                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
