import { PersonalInfo, SocialLink, Service, TimelineItem, Skill, Project, BlogPost, Certification, Testimonial } from './types.ts';

// --- ICONS (as JSX elements) ---
export const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>;
export const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.22 15.22 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>;
export const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>;
export const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>;
export const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="currentColor"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>;
export const DataAnalyticsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>;
export const AiIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 9.5 7v0A2.5 2.5 0 0 1 7 9.5v0A2.5 2.5 0 0 1 4.5 12v0A2.5 2.5 0 0 1 7 14.5v0A2.5 2.5 0 0 1 9.5 17v0A2.5 2.5 0 0 1 12 19.5v0A2.5 2.5 0 0 1 14.5 17v0A2.5 2.5 0 0 1 17 14.5v0A2.5 2.5 0 0 1 19.5 12v0A2.5 2.5 0 0 1 17 9.5v0A2.5 2.5 0 0 1 14.5 7v0A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2a2.5 2.5 0 0 0 0 5"/><path d="M9.5 7A2.5 2.5 0 0 1 7 9.5"/><path d="M9.5 17a2.5 2.5 0 0 0 0 5"/><path d="M14.5 17a2.5 2.5 0 0 1 2.5 2.5"/><path d="M14.5 7a2.5 2.5 0 0 0 0-5"/><path d="M9.5 17A2.5 2.5 0 0 0 7 14.5"/><path d="M14.5 9.5A2.5 2.5 0 0 1 17 7"/><path d="M19.5 14.5a2.5 2.5 0 0 0 0-5"/></svg>;
export const TelecomIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>;
export const CameraIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>;
export const QuoteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"/></svg>;
export const BookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>;
export const BriefcaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z"/></svg>;
export const EyeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>;
export const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
export const SendIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>;
export const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-textPrimary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
export const MoonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-textPrimary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>;

// --- PERSONAL DATA ---
export const PERSONAL_INFO: PersonalInfo = {
  name: 'Obed Abere',
  title: 'Data Scientist & AI Engineer',
  // INSTRUCTION: Replace this URL with a direct link to your profile image.
  // For example, you can upload it to a site like ImgBB or postimages.org.
  avatarUrl: 'https://i.ibb.co/6P6N9p7/avatar.jpg',
  email: 'abere254@gmail.com',
  phone: '+254-703-760-206',
  location: 'Nairobi, Kenya',
};

export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/aberesama', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3.005-.404 1.02.005 2.04.137 3.005.404 2.29-1.552 3.295-1.23 3.295-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z"/></svg> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aberesama', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg> },
    { name: 'Kaggle', url: 'https://www.kaggle.com/abere254', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Kaggle</title><path d="m14.047 2.224-7.256 7.257 7.256 7.534-1.96 1.96-9.216-9.494L12.088.264l1.96 1.96zm4.423 4.093-1.989 1.988-7.256-7.534 1.989-1.988 7.256 7.534zm1.43 13.582-7.256-7.534-7.534 7.534-1.96-1.96 9.494-9.494 9.216 9.216-1.96 1.96z"/></svg>},
    { name: 'Instagram', url: 'https://www.instagram.com/abere.sama', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.314 1.64 20.644 1.227 19.854.928 19.09.632 18.22.43 16.947.37 15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.06 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.82.679-1.38.896-.423.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.07c-1.17-.06-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.82-1.381-.896-.164-.423-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.07-4.85c.06-1.17.249-1.805.413-2.227.217-.562.477.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413C8.415 2.175 8.797 2.16 12 2.16zm0 9.045c-2.402 0-4.347 1.945-4.347 4.347s1.945 4.347 4.347 4.347 4.347-1.945 4.347-4.347-1.945-4.347-4.347-4.347zm0 6.84c-1.379 0-2.495-1.116-2.495-2.495s1.116-2.495 2.495-2.495 2.495 1.116 2.495 2.495-1.116 2.495-2.495 2.495zm6.406-9.66c-.608 0-1.1.492-1.1 1.1s.492 1.1 1.1 1.1 1.1-.492 1.1-1.1-.492-1.1-1.1-1.1z"/></svg> },
    { name: 'X', url: 'https://x.com/abere_sama', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg> },
];

// --- ABOUT SECTION DATA ---
export const ABOUT_TEXT = {
  p1: "Aspiring Data Scientist and AI Engineer with a strong foundation in Telecommunications and Information Engineering from JKUAT. Passionate about leveraging data analytics and machine learning to solve real-world challenges.",
  p2: "Proven ability to analyze performance metrics, design data visualizations, and lead cross-functional teams. Eager to contribute technical skills and innovative thinking to drive impactful AI solutions.",
};

export const SERVICES: Service[] = [
  { title: 'Data Science & Analytics', description: 'Leveraging data to drive strategy and solve complex problems.', icon: <DataAnalyticsIcon /> },
  { title: 'AI & Agentic Frameworks', description: 'Building autonomous agents and AI solutions with CrewAI & Google ADK.', icon: <AiIcon /> },
  { title: 'Telecommunications', description: 'Expertise in network planning, field optimization, and performance analysis.', icon: <TelecomIcon /> },
  { title: 'Photography', description: 'Capturing moments and telling stories through a creative lens.', icon: <CameraIcon /> },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Jane Doe',
    title: 'Project Manager, AIESEC',
    avatarUrl: 'https://i.ibb.co/8x4PC1B/testimonial-1.jpg',
    quote: 'Obed is a highly analytical and results-oriented individual. His ability to transform complex data into actionable insights was instrumental to our project\'s success. He is a natural leader and a true asset to any team.'
  },
  {
    name: 'John Smith',
    title: 'Lead Engineer, Pavicon K Ltd',
    avatarUrl: 'https://i.ibb.co/z2MMgQZ/testimonial-2.jpg',
    quote: 'Working with Obed was a pleasure. He has a remarkable technical aptitude and a keen eye for detail. His work on automating our network documentation saved us countless hours of manual effort.'
  },
  {
    name: 'Emily White',
    title: 'Data Science Mentor, Excelerate Program',
    avatarUrl: 'https://i.ibb.co/z5p28Xz/testimonial-3.jpg',
    quote: 'Obed showed immense growth and passion during the internship. He quickly grasped complex machine learning concepts and demonstrated a strong ability to apply them to real-world business problems. He has a bright future in AI.'
  }
];

// --- RESUME SECTION DATA ---
export const EDUCATION: TimelineItem[] = [
  { date: '2019 - 2025', title: 'BSc Telecommunications and Information Engineering', institution: 'Jomo Kenyatta University of Agriculture & Technology' },
];

export const CERTIFICATIONS: Certification[] = [
    { title: 'CISCO', items: ['CCNAv7: Introduction to Networks', 'CCNAv7: Switching, Routing, and Wireless Essentials', 'Introduction to Cybersecurity'] },
    { title: 'Google', items: ['Introduction to Data Analytics on Google Cloud', 'Introduction to Responsible AI', 'Introduction to Generative AI'] },
    { title: 'Other', items: ['Multi AI Agent Systems with CrewAI'] },
]

export const EXPERIENCE: TimelineItem[] = [
    { date: '2022 Jan - Present', title: 'Multiple Roles', institution: 'AIESEC IN KENYA', description: 'Led diverse teams, developed Looker Studio dashboards, and managed large-scale projects, enhancing online engagement and brand awareness.' },
    { date: '2025 Aug - Sept', title: 'Fiber Admin', institution: 'PAVICON K LIMITED', description: 'Managed telecom system installation projects, handled network documentation, and automated processes using various agents.'},
    { date: '2025 Mar - Apr', title: 'AI Powered Data Insights Intern', institution: 'EXCELERATE PROGRAM', description: 'Gained experience in the full data analysis funnel, from data collection to presenting insights and developing a predictive model.'},
    { date: '2023 Jan - Apr', title: 'Intern', institution: 'AFROEGYPT ENGINEERING LTD', description: 'Experienced in network planning, field optimization using TEMS software, and technical documentation for 3G, 4G, and 5G networks.'},
    { date: '2022 Jan - Apr', title: 'Intern', institution: 'SYSTEM PARTNERS LTD', description: 'Assisted in installing a Hospital Information Management System, developed SQL proficiency, and gained hands-on troubleshooting experience.'},
];

export const SKILLS: Skill[] = [
    { name: 'Python, SQL, HTML/CSS, JS', level: 95 },
    { name: 'Pandas, Numpy, Scikit-learn', level: 90 },
    { name: 'Agentic Frameworks (CrewAI, Google ADK)', level: 88 },
    { name: 'Dev Tools (VS Code, Colab, Looker Studio, Git)', level: 92 },
    { name: 'Data Analysis & Visualization', level: 93 },
    { name: 'Project Management', level: 85 },
];

// --- PORTFOLIO SECTION DATA ---
export const PORTFOLIO_PROJECTS: Project[] = [
  { id: 1, title: 'AI Powered Audio Visual Navigation Aid', category: 'ML/AI', imageUrl: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'An AI-powered audio-visual navigation aid to assist visually impaired individuals. The system uses a Raspberry Pi 4, ultrasonic sensor, and a camera with YOLO object detection to provide real-time audio feedback about obstacles.', details: { client: 'Personal Project', date: 'May - Dec 2024', url: '#' } },
  { id: 2, title: 'Experimenting with AI Agents', category: 'AI Agents', imageUrl: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'Developed a range of AI agents using Google ADK and CrewAI, including a weekend planner, a tender research agent for telecoms, and a due diligence agent for stock and investment research.', details: { client: 'Personal Project', date: 'Sept - Oct 2025', url: '#' } },
  { id: 3, title: 'Sales Data Dashboard', category: 'Data', imageUrl: 'https://images.pexels.com/photos/1181414/pexels-photo-1181414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'An interactive dashboard for visualizing sales data, built with D3.js and React. Provides insights into performance and trends.', details: { client: 'Sample Project', date: 'Mar 2023', url: '#' } },
  { id: 4, title: 'Urban Landscapes', category: 'Photography', imageUrl: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'A collection of urban and street photography, exploring the beauty of cityscapes as a form of creative outlet.', details: { client: 'Personal Hobby', date: 'Ongoing', url: '#' }, gallery: ['https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'] },
];

// --- BLOG SECTION DATA ---
export const BLOG_POSTS: BlogPost[] = [
  { id: 1, title: 'The Future of AI in Telecommunications', category: 'AI & Telecom', date: 'Oct 31, 2025', imageUrl: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', content: `Artificial intelligence is no longer a futuristic concept; it's a transformative force reshaping industries, and the telecommunications sector is at the epicenter of this revolution. Faced with unprecedented data volumes, network complexity, and soaring customer expectations, telecom companies are turning to AI to not just survive, but thrive. AI offers a powerful toolkit to automate operations, optimize network performance, and deliver hyper-personalized customer experiences, marking a pivotal shift from reactive problem-solving to proactive, predictive management.

One of the most significant impacts of AI in telecoms is in network optimization. Machine learning algorithms can analyze vast amounts of network traffic data in real-time, predicting congestion and dynamically rerouting traffic to prevent bottlenecks before they occur. This leads to the concept of "self-healing networks," where AI can detect, diagnose, and resolve network issues automatically, often without human intervention. This not only dramatically reduces downtime and operational costs but also ensures a more stable and reliable service for the end-user, which is critical in our hyper-connected world.

Beyond the network infrastructure, AI is revolutionizing customer service and predictive maintenance. AI-powered chatbots and virtual assistants can handle a vast array of customer queries 24/7, freeing up human agents to focus on more complex issues. In maintenance, AI analyzes sensor data from network equipment to predict hardware failures before they happen. This proactive approach allows companies to schedule maintenance during off-peak hours, minimizing service disruptions and extending the lifespan of critical infrastructure, a stark contrast to the traditional, costly break-fix model.

Looking ahead, the synergy between AI and next-generation technologies like 5G, 6G, and edge computing will unlock even more profound possibilities. AI will be essential for managing the sheer complexity and scale of these new networks, enabling everything from autonomous vehicle communication to immersive augmented reality experiences. As we move forward, the challenge will be not just in developing the technology, but also in navigating the ethical considerations and ensuring that AI is deployed responsibly to create a more efficient, intelligent, and connected future for everyone.` },
  { id: 2, title: 'A Practical Guide to Building AI Agents with CrewAI', category: 'AI Development', date: 'Oct 31, 2025', imageUrl: 'https://images.pexels.com/photos/7464213/pexels-photo-7464213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', content: `The landscape of artificial intelligence is rapidly evolving from monolithic models to sophisticated, multi-agent systems. These "AI agents" are autonomous entities capable of reasoning, planning, and executing tasks to achieve a specific goal, representing a paradigm shift in automation. Frameworks like CrewAI have emerged to simplify the creation of these collaborative agentic workflows. CrewAI provides an intuitive structure for designing specialized agents that can work together as a cohesive team, tackling complex problems that would be difficult for a single AI model to handle alone.

At the heart of CrewAI are three core concepts: Agents, Tasks, and the Crew. An Agent is a specialized AI unit with a specific role, goal, and backstory, which helps guide its behavior. For example, you could have a "Market Research Agent" or a "Content Writing Agent." A Task is a discrete unit of work assigned to an agent. Finally, the Crew is the orchestrator, managing the agents and the sequence of tasks, ensuring they collaborate effectively to achieve the overall objective. This modular approach makes it easy to design, debug, and scale complex autonomous systems.

Let's consider a practical example, like the "weekend planner" agent mentioned in my projects. You could define a 'Researcher Agent' tasked with finding local events, restaurants, and weather forecasts. A second 'Planner Agent' would then take this information and create a detailed itinerary. The Crew would first assign the research task to the Researcher, and once completed, it would pass the findings to the Planner to execute its task. The final output would be a well-structured and context-aware weekend plan, all generated autonomously.

Getting started with CrewAI is surprisingly accessible. The key is to define your agents' roles and tasks with extreme clarity. Providing them with the right tools (like web search access) and memory capabilities is crucial for their effectiveness. The true power of this framework lies in the collaboration between agents, so carefully consider how they should hand off information and build upon each other's work. By experimenting with these concepts, developers can unlock a new level of automation, building powerful applications that can handle diverse, real-world challenges.` },
  { id: 3, title: 'Data Visualization with Looker Studio', category: 'Data Science', date: 'Oct 31, 2025', imageUrl: 'https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', content: `In a world awash with data, the ability to translate raw numbers into clear, compelling stories is more valuable than ever. This is the essence of data visualization: a powerful discipline that bridges the gap between complex datasets and actionable insights. Tools like Google's Looker Studio (formerly Data Studio) have democratized this capability, providing a free, user-friendly platform that enables anyone to build interactive dashboards and reports. It transforms spreadsheets and databases from static repositories into dynamic tools for exploration and decision-making.

Getting started with Looker Studio is straightforward. Its major strength lies in its seamless integration with the Google ecosystem, allowing you to connect to sources like Google Sheets, Google Analytics, and BigQuery in just a few clicks. The interface is built around the core concepts of "Dimensions" (the 'what,' like country or product name) and "Metrics" (the 'how much,' like sales or user count). By dragging and dropping these elements, you can quickly generate a variety of charts and tables, building the foundational blocks of your dashboard without writing a single line of code.

However, creating an effective dashboard is more than just making pretty charts. Best practices in design are crucial for clear communication. It's important to first understand your audience and the key questions they need answered. Choose the right chart for the job—bar charts for comparison, line charts for trends over time, and tables for precise values. Use color purposefully to highlight important information, not just for decoration, and maintain a clean, uncluttered layout to avoid overwhelming the viewer. The goal is to guide the user's eye to the most important insights instantly.

Ultimately, a great dashboard doesn't just present data; it drives action. It should empower stakeholders to ask new questions, identify opportunities, and make informed, data-driven decisions. By transforming complex metrics into an accessible visual narrative, Looker Studio allows you to uncover the hidden patterns within your data. It's a skill that empowers you to move beyond simple reporting and become a true data storyteller, creating significant value for any project or organization.` },
];