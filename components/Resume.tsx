import React from 'react';
import { EDUCATION, EXPERIENCE, SKILLS, CERTIFICATIONS, BookIcon, BriefcaseIcon } from '../constants.tsx';
import { TimelineItem, Certification } from '../types.ts';

const RESUME_URL = 'https://drive.google.com/drive/folders/1c5P87Y3kwbElqukoHD9Rug-tCB5CrAfq?usp=sharing';

const Timeline: React.FC<{ items: TimelineItem[] }> = ({ items }) => (
    <ol className="relative border-l-2 border-borderColor ml-3">
      {items.map((item, index) => (
        <li key={index} className="mb-10 ml-8">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-accent rounded-full -left-3 ring-8 ring-bgColor">
             <svg className="w-3 h-3 text-bgColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"/>
             </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-textPrimary">{item.title}</h3>
          <p className="block mb-2 text-sm font-normal leading-none text-accent">{item.institution}</p>
          <time className="block mb-2 text-sm font-normal leading-none text-textSecondary">{item.date}</time>
          {item.description && <p className="text-base font-normal text-textSecondary">{item.description}</p>}
        </li>
      ))}
    </ol>
);

const CertificationsList: React.FC<{ items: Certification[] }> = ({ items }) => (
    <div className="space-y-4">
        {items.map((cert, index) => (
            <div key={index}>
                <h4 className="font-semibold text-textPrimary">{cert.title}</h4>
                <ul className="list-disc list-inside text-textSecondary pl-2 mt-1">
                    {cert.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
        ))}
    </div>
);


const Resume: React.FC = () => {
  return (
    <section>
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h2 className="text-3xl font-bold text-textPrimary relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-accent after:left-0 after:bottom-[-10px] rounded-sm">Resume</h2>
        <a 
          href={RESUME_URL} 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-bgColor font-semibold py-2 px-4 rounded-lg hover:bg-accentHover transition-colors"
        >
          Download Resume
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div>
          <div className="flex items-center mb-6">
            <div className="bg-contentBg p-2 border border-borderColor rounded-lg"><BriefcaseIcon /></div>
            <h3 className="text-2xl font-semibold text-textPrimary ml-4">Experience</h3>
          </div>
          <Timeline items={EXPERIENCE} />
        </div>
        <div>
          <div className="flex items-center mb-6">
            <div className="bg-contentBg p-2 border border-borderColor rounded-lg"><BookIcon /></div>
            <h3 className="text-2xl font-semibold text-textPrimary ml-4">Education</h3>
          </div>
          <Timeline items={EDUCATION} />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-textPrimary mb-6">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {SKILLS.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-textPrimary">{skill.name}</span>
                  <span className="text-sm font-medium text-textSecondary">{skill.level}%</span>
                </div>
                <div className="w-full bg-sidebarBg rounded-full h-2.5 border border-borderColor">
                  <div className="bg-accent h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
            <h3 className="text-2xl font-semibold text-textPrimary mb-6">Certifications</h3>
            <CertificationsList items={CERTIFICATIONS} />
        </div>
      </div>
    </section>
  );
};

export default Resume;