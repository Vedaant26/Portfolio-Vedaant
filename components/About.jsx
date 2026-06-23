"use client";

import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  Award,
} from 'lucide-react';
import { motion } from 'framer-motion';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Vedaant Mitra',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+91 7217799354',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'vedaant04mitra@gmail.com',
  },

  {
    icon: <GraduationCap size={20} />,
    text: 'BTech in CSE',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'New Delhi, India',
  },
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'University School of Automation and Robotics',
        qualification: 'Bachelor of Technology',
        years: '2023 - 2027',
      },
      {
        university: 'Birla Vidya Niketan',
        qualification: 'Higher Secondary Education',
        years: '2023',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'FuturixAI',
        role: 'Full Stack Developer',
        years: 'Oct 2025 - Mar 2026',
      },
      {
        company: 'ACM USS chapter',
        role: 'Front end developer',
        years: 'Jul 2024 - Jun 2025',
      },
    ],
  },
  {
    title: 'achievements',
    data: [
      {
        title: 'Winner of Clash of Codes',
        description: 'Won the coding competition in March 2025.',
        years: 'Mar 2025',
      },
      {
        title: 'Grand Finalist of Smart India Hackathon',
        description:
          'Top 5 among all teams across India in the national-level hackathon in December 2024.',
        years: 'Dec 2024',
      },
      {
        title: 'Winner of Vigyaan Hackathon',
        description:
          'A national-level hackathon held in Delhi in April 2024.',
        years: 'Apr 2024',
      },
    ],
  },
];

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML, CSS',
      },
      {
        name: 'Front-end Development',
      },
      {
        name: 'Javascript, PHP',
      },
      {
        name: 'Back-end Development',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/figma.svg',
      },
      {
        imgPath: '/about/notion.svg',
      },
      {
        imgPath: '/about/wordpress.svg',
      },
    ],
  },
];

const About = () => {
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

  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="pb-20 lg:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 lg:mb-16 text-center mx-auto">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row">
          {/* image */}
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="hidden lg:flex flex-1 relative"
          >
            <div className='home__img'></div>
          </motion.div>

          {/* tabs */}
          <div
            className="flex-1"
          >
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid lg:grid-cols-4 lg:max-w-[680px] lg:border">
                <TabsTrigger className="w-[162px] lg:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] lg:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] lg:w-auto" value="experiences">
                  Experiences
                </TabsTrigger>
                <TabsTrigger className="w-[162px] lg:w-auto" value="achievements">
                  Achievements
                </TabsTrigger>
              </TabsList>

              {/* tabs content */}
              <div className="text-lg mt-12 lg:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center lg:text-left">
                    <h3 className="h3 mb-4">
                      Tech enthusiast
                    </h3>
                    <p className="subtitle max-w-xl mx-auto lg:mx-0">
                      I am a pre-final-year student at University school of Automation and Robotics, pursuing CSE. I am a tech enthusiast with knowledge of various programming languages and frameworks.
                    </p>

                    {/* icons */}
                    <div className="grid lg:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto lg:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skills</div>
                      <div className="border-b border-border"></div>
                      <div>English, Bengali, Hindi</div>
                    </div>
                  </div>
                </TabsContent>

                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center lg:text-left">
                      My Awesome Journey
                    </h3>

                    {/* education */}
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <GraduationCap size={28} />
                        <h4 className="capitalize font-medium">
                          {getData(qualificationData, 'education').title}
                        </h4>
                      </div>

                      {/* list */}
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationData, 'education').data.map(
                          (item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {university}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {qualification}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* experiences */}
                <TabsContent value="experiences">
                  <div className="text-center lg:text-left">
                    <h3 className="h3 mb-8">My Awesome Journey</h3>

                    {/* experiences */}
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <Briefcase />
                        <h4 className="capitalize font-medium">
                          {getData(qualificationData, 'experience').title}
                        </h4>
                      </div>

                      {/* list */}
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationData, 'experience').data.map(
                          (item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {company}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {role}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* achievements */}
                <TabsContent value="achievements">
                  <div className="text-center lg:text-left">
                    <h3 className="h3 mb-8">Achievements</h3>

                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <Award size={28} />
                        <h4 className="capitalize font-medium">
                          {getData(qualificationData, 'achievements').title}
                        </h4>
                      </div>

                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationData, 'achievements').data.map(
                          (item, index) => {
                            const { title, description, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {title}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {description}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
