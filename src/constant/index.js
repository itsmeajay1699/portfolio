export const GRID_SIZE = 50;

export const HEADER_ITEMS = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "timeline",
    title: "Story",
  },
  {
    id: "project",
    title: "Projects",
  },
];

export const skills = [
  {
    img: "https://e7.pngegg.com/pngimages/78/465/png-clipart-data-structures-and-algorithms-algorithms-data-structures-programs-computer-science-others-miscellaneous-computer-science-thumbnail.png",
    name: "Data Structures & Algorithms",
    additionalInfo: {
      description:
        "Data Structures and Algorithms are fundamental concepts in computer science.",
      keysToSuccess: [
        "Understand different data structures (arrays, linked lists, trees, graphs)",
        "Learn about algorithms for searching and sorting",
        "Practice solving problems on coding platforms",
        "Optimize solutions for performance and efficiency",
        "Explore advanced topics like dynamic programming",
      ],
    },
    buttonText: "Learn More",
    rating: 9,
    url: "https://www.geeksforgeeks.org/data-structures/",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png",
    name: "HTML",
    additionalInfo: {
      description: "HTML is the standard language for creating web pages.",
      keysToSuccess: [
        "Understand HTML elements and structure",
        "Use semantic HTML for better accessibility",
        "Validate your code for compliance",
        "Practice building simple web pages",
        "Stay updated with HTML5 features",
      ],
    },
    buttonText: "Learn More",
    rating: 9,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsPmSv5JIgSQmX3TvykudhQGvAw4uAusKjQ&s",
    name: "CSS",
    additionalInfo: {
      description: "CSS is used to style and layout web pages.",
      keysToSuccess: [
        "Master CSS selectors and specificity",
        "Learn responsive design with media queries",
        "Use CSS Flexbox and Grid for layout",
        "Optimize performance and loading speed",
        "Stay updated with CSS3 features",
      ],
    },
    buttonText: "Learn More",
    rating: 8,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    name: "JavaScript",
    additionalInfo: {
      description: "JavaScript is the programming language of the web.",
      keysToSuccess: [
        "Understand JavaScript syntax and types",
        "Learn about asynchronous programming",
        "Practice DOM manipulation",
        "Explore ES6+ features",
        "Build interactive web applications",
      ],
    },
    buttonText: "Learn More",
    rating: 9,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    img: "https://www.svgrepo.com/show/374144/typescript.svg",
    name: "TypeScript",
    additionalInfo: {
      description:
        "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
      keysToSuccess: [
        "Understand the basics of types",
        "Use TypeScript for large codebases",
        "Leverage interfaces and enums",
        "Integrate TypeScript with React or Node.js",
        "Practice writing type-safe code",
      ],
    },
    buttonText: "Learn More",
    rating: 8,
    url: "https://www.typescriptlang.org/docs/",
  },
  {
    img: "https://nodejs.org/static/images/logo.svg",
    name: "Node.js",
    additionalInfo: {
      description:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      keysToSuccess: [
        "Understand event-driven programming",
        "Use npm for package management",
        "Build RESTful APIs",
        "Work with middleware and routing",
        "Learn about asynchronous I/O",
      ],
    },
    buttonText: "Learn More",
    rating: 9,
    url: "https://nodejs.org/en/docs/",
  },
  {
    img: "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
    name: "Express.js",
    additionalInfo: {
      description: "Express.js is a web application framework for Node.js.",
      keysToSuccess: [
        "Understand middleware and routing",
        "Use Express for building APIs",
        "Handle requests and responses",
        "Learn about error handling",
        "Implement authentication and sessions",
      ],
    },
    buttonText: "Learn More",
    rating: 8,
    url: "https://expressjs.com/",
  },
  {
    img: "https://www.mongodb.com/assets/images/global/leaf.png",
    name: "MongoDB",
    additionalInfo: {
      description: "MongoDB is a document-oriented NoSQL database.",
      keysToSuccess: [
        "Understand collections and documents",
        "Learn about CRUD operations",
        "Use Mongoose for object modeling",
        "Implement indexing for performance",
        "Practice schema design and relationships",
      ],
    },
    buttonText: "Learn More",
    rating: 8,
    url: "https://www.mongodb.com/docs/",
  },
  {
    img: "https://www.postgresql.org/media/img/about/press/elephant.png",
    name: "PostgreSQL",
    additionalInfo: {
      description:
        "PostgreSQL is a powerful, open-source relational database system.",
      keysToSuccess: [
        "Understand SQL syntax and queries",
        "Learn about indexing and performance tuning",
        "Practice creating tables and relationships",
        "Use PostgreSQL with Node.js",
        "Explore advanced features like JSONB",
      ],
    },
    buttonText: "Learn More",
    rating: 9,
    url: "https://www.postgresql.org/docs/",
  },
  {
    img: "https://www.svgrepo.com/show/354210/prisma.svg",
    name: "Prisma",
    additionalInfo: {
      description:
        "Prisma is an open-source database toolkit for TypeScript and Node.js.",
      keysToSuccess: [
        "Use Prisma Client for database access",
        "Learn about migrations with Prisma Migrate",
        "Practice writing Prisma schemas",
        "Integrate Prisma with GraphQL or REST APIs",
        "Explore performance optimizations",
      ],
    },
    buttonText: "Learn More",
    rating: 8,
    url: "https://www.prisma.io/docs/",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPPse3e3h_CYeqD8UFLbGXCBlbxTnU-RGtw&s",
    name: "WebSocket",
    additionalInfo: {
      description:
        "WebSocket is a protocol for full-duplex communication channels over a single TCP connection.",
      keysToSuccess: [
        "Understand WebSocket API",
        "Implement real-time applications",
        "Handle messages and events",
        "Learn about connection management",
        "Explore use cases like chat applications",
      ],
    },
    buttonText: "Learn More",
    rating: 8,
    url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkW2Tigbsqm4S-LtA94VWzJ7OiqbGD41tXEQ&s",
    name: "Socket.io",
    additionalInfo: {
      description:
        "Socket.io is a JavaScript library for real-time web applications.",
      keysToSuccess: [
        "Understand the Socket.io architecture",
        "Implement real-time features in applications",
        "Handle namespaces and rooms",
        "Manage connections and disconnections",
        "Explore fallbacks for older browsers",
      ],
    },
    buttonText: "Learn More",
    rating: 9,
    url: "https://socket.io/docs/v4/",
  },
  {
    img: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
    name: "Docker",
    additionalInfo: {
      description:
        "Docker is a platform for developing, shipping, and running applications in containers.",
      keysToSuccess: [
        "Understand Docker architecture and components",
        "Learn about Docker images and containers",
        "Practice writing Dockerfiles",
        "Use Docker Compose for multi-container applications",
        "Explore container orchestration with Kubernetes",
      ],
    },
    buttonText: "Learn More",
    rating: 8,
    url: "https://docs.docker.com/get-started/",
  },
  {
    img: "https://w7.pngwing.com/pngs/54/524/png-transparent-figma-app-logo-tech-companies-thumbnail.png",
    name: "Figma",
    additionalInfo: {
      description: "Figma is a cloud-based design tool for UI/UX design.",
      keysToSuccess: [
        "Understand Figma's design and prototyping features",
        "Learn about collaborative design workflows",
        "Utilize components and design systems",
        "Practice creating user interfaces and mockups",
        "Explore plugins to enhance productivity",
      ],
    },
    buttonText: "Learn More",
    rating: 9,
    url: "https://www.figma.com/resources/learn-design/",
  },
];
