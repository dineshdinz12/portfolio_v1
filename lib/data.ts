import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'r.dineshdinz12@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Dinesh, I am reaching out to you because...',

    phone: '+91 63743 95430',
    location: 'Tamil Nadu, India',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/dineshdinz12' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/dinesh-r12' },
    { name: 'medium', url: 'https://medium.com/@r.dineshdinz12' },
];

export const MY_STACK = {
    'backend': [
        { name: 'Java', icon: '/logo/java.png' },
        { name: 'Python', icon: '/logo/python.png' },
        { name: 'Spring Boot', icon: '/logo/springboot.png' },
    ],
    frontend: [
        { name: 'React.js', icon: '/logo/react.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'JavaScript', icon: '/logo/js.png' },
    ],
    'AI & ML': [
        { name: 'LangChain', icon: '/logo/langchain.png' },
        { name: 'PyTorch', icon: '/logo/pytorch.png' },
        { name: 'FAISS', icon: '/logo/faiss.png' },
        { name: 'Pinecone', icon: '/logo/pinecone.png' },
    ],
    database: [
        { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
        { name: 'MongoDB', icon: '/logo/mongodb.svg' },
        { name: 'MySQL', icon: '/logo/mysql.svg' },

    ],
    'cloud & DevOps': [
        { name: 'AWS', icon: '/logo/aws.png' },
        { name: 'Docker', icon: '/logo/docker.svg' },
        { name: 'Git', icon: '/logo/git.png' }, 
        { name: 'Linux', icon: '/logo/linux.png' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'GlobalXport',
        slug: 'globalxport',
        year: 2025,
        description: `AI-Powered International Trade Automation Platform. Compressed export document processing from 7 days → 4 hours using multi-agent LLM pipelines across Gemini, ChatGPT & Claude.`,
        techStack: ['Next.js', 'Python', 'FastAPI', 'LangChain', 'Pinecone', 'GCP', 'Multi-LLM'],
        liveUrl: 'https://www.globalxport.tech/',
        thumbnail: '/projects/images/globalxport2.png',
        longThumbnail: '/projects/images/globalxport1.png',
        images: [
            '/projects/images/globalxport4.png',
            '/projects/images/globalxport3.png',
        ],
    },
    {
        title: 'SyncCV',
        slug: 'synccv',
        year: 2025,
        description: `Real-Time Multi-Camera Face Recognition. Student identification via CCTV feeds with FAISS-based matching, sub-second response, and live FPS UI.`,
        techStack: ['Python', 'InsightFace', 'FAISS', 'MySQL', 'OpenCV'],
        liveUrl: 'https://sync-cv-presentation-ui.vercel.app/',
        thumbnail: '/projects/images/synccv1.png',
        longThumbnail: '/projects/images/synccv1.png',
        images: [
            '/projects/images/synccv2.png',
            '/projects/images/synccv1.png',
        ],
    },
    {
        title: 'AlloyMind AI',
        slug: 'alloymind-ai',
        year: 2025,
        description: `Intelligent Metallurgical Optimization Platform. 92.5% prediction accuracy for alloy composition with sub-100ms response time using ensemble ML (LightGBM + CatBoost).`,
        techStack: ['FastAPI', 'Python', 'LightGBM', 'CatBoost', 'MongoDB', 'Next.js', 'TypeScript'],
        liveUrl: 'https://alloy-mind-ai.vercel.app/',
        thumbnail: '/projects/images/alloymind1.png',
        longThumbnail: '/projects/images/alloymind1.png',
        images: [
            '/projects/images/alloymind2.png',
            '/projects/images/alloymind3.png',
        ],
    },
    {
        title: 'Hero4Humanity',
        slug: 'hero4humanity',
        year: 2026,
        description: `Human-centric social impact platform focused on education, healthcare, and community empowerment. Designed to drive engagement and awareness, showcasing scalable programs that improve livelihoods and long-term societal outcomes.`,
        techStack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'UI/UX Design'],
        liveUrl: 'https://heroforhumanity.com/',
        thumbnail: '/projects/images/hero4humanity1.png',
        longThumbnail: '/projects/images/hero4humanity1.png',
        images: [
            '/projects/images/hero4humanity2.png',
            '/projects/images/hero4humanity1.png',
        ],
    },
    {
        title: 'CopBot',
        slug: 'copbot',
        year: 2025,
        description: `AI-Powered Public Safety System. Crowd density forecasting across 5+ zones + dynamic parking allocation — deployed for real police operations.`,
        techStack: ['Next.js', 'Python', 'AI', 'Smart City', 'Time Series'],
        liveUrl: 'https://thoothukudi-copbot.vercel.app/',
        thumbnail: '/projects/images/copbot1.png',
        longThumbnail: '/projects/images/copbot1.png',
        images: [
            '/projects/images/copbot2.png',
            '/projects/images/copbot1.png',
        ],
    },
    {
        title: 'Hira',
        slug: 'hira',
        year: 2025,
        description: `AI-enabled hiring/job platform that bridges candidates and recruiters with streamlined workflows for job discovery, application tracking, and talent acquisition, enabling faster and more efficient recruitment processes.`,
        techStack: ['Next.js', 'React', 'Vercel', 'REST APIs', 'Modern UI/UX'],
        liveUrl: 'https://hirax.vercel.app/',
        thumbnail: '/projects/images/hira1.png',
        longThumbnail: '/projects/images/hira1.png',
        images: [
            '/projects/images/hira2.png',
            '/projects/images/hira3.png'
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Development Engineer Intern',
        company: 'TripFactory.com',
        duration: 'Dec 2025 – Present',
        logo: '/logo/tripfactory.png',
        url: 'https://www.tripfactory.com/',
        description: [
            'Developing and maintaining Core Java backend services supporting high-volume internal workflows, ensuring system reliability and performance at scale',
            'Delivered an AI-powered backend automation solution that eliminated 90% of manual operational effort, directly improving team productivity and deployment speed'
        ],
    },
    {
        title: 'Software Development Engineer Intern',
        company: 'Thoothukudi Police – Cybercrime Branch',
        duration: 'Jun 2025 – Nov 2025',
        logo: '/logo/tamilnadu-police.png',
        url: 'https://www.police.tn.gov.in/',
        description: [
            'Architected a predictive AI system using real-time data pipelines to forecast crowd density across 5+ zones, enabling proactive law enforcement deployment',
            'Engineered a smart parking allocation system with dynamic slot management, reducing manual coordination overhead by 45%'
        ],
    },
    {
        title: 'Software Development Engineer Intern',
        company: "Crayon'D",
        duration: 'Sep 2024 – Apr 2025',
        logo: '/logo/crayond.png',
        url: 'https://www.crayond.com/',
        description: [
            'Developed LLM-powered testing modules integrated into CI/CD pipelines, accelerating QA throughput by 22% and reducing human-in-the-loop review cycles',
            'Built a semantic scenario retrieval engine with vector indexing over 200+ test cases, reducing edge-case bugs in production by 15%'
        ],
    },
];

export const MY_AWARDS = [
    {
        icon: '/logo/zafin.png',
        title: 'Aspire & Achieve Global Merit Scholarship (2026)',
        issuer: 'Zafin',
        description: 'Top 4 engineering students globally from 5,000+ applicants · $5,000 USD + global internship',
        url: 'https://zafin.com/',
    },
    {
        icon: '/logo/lic.png',
        title: 'Golden Jubliee Award (2023)',
        issuer: 'Life Insurance Company, India',
        description: '30,000 INR every academic year from high school till graduation',
        url: 'https://licindia.in/',
    },
];

export const MY_ACHIEVEMENTS = [
    {
        image: '/achievements/Google Startup.png',
        date: '2025',
        title: 'Top 50 Campus Startups by Google for Startups',
        description: 'Selected as one of the Top 50 Campus Startups by Google, a prestigious recognition. Awarded substantial Google Cloud credits worth US$2,50,000 for infrastructure scaling',
    },
    {
        image: '/achievements/abb.jpeg',
        date: 'Sep 2025',
        title: '2nd Runner-Up, EngineeredX2025, ABB India',
        description: 'Honored to secure 🥉 3rd Place at ABB EngineeredX 2025 on Engineers’ Day - representing Team 512D among the Top 30 finalists and pitching before 8 ABB leaders in a high-stakes 30-minute finale.',
    },
    {
        image: '/achievements/Sakthi Hackathon.jpeg',
        date: 'Aug 2025',
        title: 'Best Entry Award, Sakthi Hackathon 1.0',
        description: 'Honored with the 🏆 Special Innovation Prize among 1000+ teams at Sakthi Hackathon 1.0 for building an AI-powered Alloying System validated by real industry experts.',
    },
    {
        image: '/achievements/Cyber hackathon.jpeg',
        date: 'Apr 2025',
        title: 'Best Entry Award, Cyber Hackathon, Thoothukudi Police Department',
        description: 'Honored with the 🏆 Best Entry Award by the Thoothukudi Police Department for our standout innovation.',
    },
    {
        image: '/achievements/Technova.jpeg',
        date: 'Mar 2025',
        title: '2nd Runner-Up, Technova, Qubitron2k25',
        description: 'Secured 🥉2nd Runner-Up at TECHNOVA, a prestigious hackathon hosted by Coimbatore Institute of Technology!',
    },
    {
        image: '/achievements/Hack the Horizon.jpeg',
        date: 'Mar 2025',
        title: 'Runner-Up, Hack The Horizon 2025',
        description: 'Secured 🏆Runner-Up at Hack the Horizon, organized by IEEE Computational Intelligence Society at KPR Institute of Engineering and Technology!',
    },
    {
        image: '/achievements/Blueprint.jpeg',
        date: 'Feb 2025',
        title: '2nd Runner-Up, Blueprint (B-plan Startup Pitching) part of ECon2025',
        description: 'Achieved 2nd Runner-Up position at Blueprint\'25, a prestigious national-level startup pitching competition hosted by IIT Delhi during ECon 2025, showcasing innovative business solutions.',
    },
    {
        image: '/achievements/Thiran.jpeg',
        date: 'Feb 2025',
        title: 'Runner-Up, Virtus Codics, Thiran2025',
        description: 'Secured 🏆2nd place with a cash prize at Virtus Codicis, a prestigious coding competition held at Sri Eshwar Thiran, organized by Sri Eshwar College of Engineering! Thrilled to have showcased our innovative AI solution in this intense competition.',
    },
    {
        image: '/achievements/Dark Patterns.jpeg',
        date: 'Feb 2024',
        title: 'Finalist in DPBH\'24 IIT Varanasi',
        description: 'Participated in the grand finale of the prestigious Darkpatterns Buster Hackathon(DPBH\'24). This esteemed event, conducted by the Indian Institute of Technology (Banaras Hindu University), Varanasi, under the esteemed auspices of the Ministry of Consumer Affairs, showcases the pinnacle of innovation in combating deceptive practices in e-commerce.',
    },
    {
        image: '/achievements/Cisco.jpeg',
        date: 'Feb 2026',
        title: 'Networking Basics — Cisco',
        description: 'Skills: Application Layer Services, Network Media',
    },
    {
        image: '/achievements/McKinsey.jpeg',
        date: 'Dec 2025',
        title: 'McKinsey.org Forward Program — McKinsey & Company',
        description: 'Skills: Adaptability & Resilience, Structured Problem Solving',
    },
    {
        image: '/achievements/Udacity.jpeg',
        date: 'Jan 2025',
        title: 'Foundation of Generative AI — Udacity',
        description: 'Skills: Deep Learning, Generative AI',
    },
    {
        image: '/achievements/GitHub Foundations.jpeg',
        date: 'Dec 2024',
        title: 'GitHub Foundations — GitHub',
        description: 'Skills: GitHub, Git',
    },
    {
        image: '/achievements/Google Prompting Essentials.jpeg',
        date: 'Nov 2024',
        title: 'Google Prompting Essentials — Google',
        description: 'Skills: Generative AI',
    },
    {
        image: '/achievements/Google AI Essentials.jpeg',
        date: 'Sep 2024',
        title: 'Google AI Essentials — Google',
        description: 'Skills: Machine Learning, Artificial Intelligence (AI)',
    },
    {
        image: '/achievements/NVIDIA.jpeg',
        date: 'Jul 2024',
        title: 'Getting Started with AI on Jetson Nano — NVIDIA',
        description: 'Skills: Machine Learning, Deep Learning',
    },
];
