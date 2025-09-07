export const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: ".Net",
        path: "/assets/logos/dotnet.svg",
      },
      {
        id: 3,
        name: "Ef Core",
        path: "/assets/logos/efcore.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Authentication & Authorization System",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "Auth0",
        path: "/assets/logos/auth0.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Blazor Web App",
    description:
      "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
      "Implemented API interactions using .NET Core for a robust backend.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Integrated SQLite for efficient client-side database storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: ".NET Core",
        path: "/assets/logos/dotnetcore.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Beat The Clock Binary",
    description:
      "A two-player FPGA game where players race to guess 5-bit numbers before time runs out. Built in Verilog for the DE-10 Lite board. Think fast, guess faster! ⏳💡",
    subDescription: [
      "Developed an FPGA-based digital two-player game combining combinational and sequential logic for competitive timed gameplay.",
      "Implemented real-time score tracking and countdown timers using XOR gates for input verification and binary adders/subtractors for timer calculations.",
      "Created a random number generator for 5-bit binary values with edge detection for responsive button presses and 5-bit counters for player timers.",
      "Built a 1 Hz clock signal using clock divider for precise timing control and seven-segment displays for real-time feedback to players.",
    ],
    href: "https://github.com/eszain/BeatTheClockBinary",
    logo: "",
    image: "/assets/projects/btcb.jpg",
    tags: [
      {
        id: 1,
        name: "Verilog",
        path: "/assets/logos/git.svg",
      },
      {
        id: 2,
        name: "FPGA",
        path: "/assets/logos/github.svg",
      },
      {
        id: 3,
        name: "Quartus",
        path: "/assets/logos/quartus.jpeg",
      },
      {
        id: 4,
        name: "Intel",
        path: "/assets/logos/intel.png",
      },
    ],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      {
        id: 1,
        name: "WordPress",
        path: "/assets/logos/wordpress.svg",
      },
      {
        id: 2,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Azure",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/zaincodes77/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/Zain.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Coding Mentor",
    job: "Code The Dream Durham, NC",
    date: "July 2025 - Present",
    contents: [
      "Increased student engagement by 20% by mentoring 7 students weekly on core topics such as JavaScript, HTML/CSS, and Git, reinforcing concepts through guided learning and consistent encouragement.",
      "Achieved a 90% completion rate of weekly learning objectives across 18 core lessons by delivering 1:1 coaching on loops, functions, arrays, objects, and version control, tailored to each student's pace.",
      "Improved assignment success rates by 35% by reviewing and providing feedback on 40+ coding projects per cohort using Replit and GitHub, helping students debug DOM manipulation, Fetch API, and asynchronous issues.",
      "Supported students' final project development by guiding portfolio-level work involving HTML/CSS, API integration, and best practices for responsive, structured code—ensuring on-time, high-quality completions.",
      "Contributed to a positive, high-performing team culture by actively collaborating with 10+ mentors to share best practices, encourage growth, and ensure a consistent and high-quality experience for every learner.",
    ],
  },
  {
    title: "Mentor",
    job: "Hack the 6ix",
    date: "July 18-20, 2025",
    contents: [
      "Mentored 15+ hackathon teams across 48 hours, providing technical guidance on full-stack development, API integration, and debugging strategies to accelerate project completion.",
      "Facilitated ideation sessions for 8 teams, helping them transform initial concepts into viable MVP prototypes using design thinking and rapid prototyping methodologies.",
      "Resolved 25+ critical technical blockers including React state management issues, database connectivity problems, and deployment challenges, enabling teams to meet demo deadlines.",
      "Assisted 8+ teams with sponsor model integration including Gemini AI, OpenAI APIs, and cloud services, enabling them to build innovative AI-powered features and achieve 40% faster development cycles.",
      "Conducted 12+ code reviews and debugging sessions, helping teams optimize performance and implement best practices for clean, maintainable code within tight time constraints.",
    ],
  },
];
