import novaCua1 from "public/images/nova-cua-1.png";
import novaCua2 from "public/images/nova-cua-2.png";
import taskflow1 from "public/images/taskflow-1.jpeg";
import taskflow2 from "public/images/taskflow-2.jpeg";
import zohoDashboard1 from "public/images/zoho-people-dashboard-1.png";
import zohoDashboard2 from "public/images/zoho-people-dashboard-2.png";
import tcpMarketplace1 from "public/images/tcp-1.png";
import dronesImage from "public/images/drones-1.jpeg";

export const products = [
  {
    href: "https://www.youtube.com/watch?v=Q0IDtuI2iXQ",
    title: "Nova-CUA",
    description:
      "A JARVIS-like multi-agent desktop automation system that understands natural language and performs real GUI actions autonomously.",
    thumbnail: novaCua2,
    images: [novaCua2, novaCua1],
    stack: ["Python", "LangChain", "Computer Vision"],
    slug: "nova-cua",
    content: (
      <div>
        <p>
          Nova-CUA is a JARVIS-like multi-agent desktop automation system that bridges the gap between natural language commands and actual GUI interactions. The system understands complex user instructions and breaks them down into executable steps, performing real actions on your desktop autonomously.
        </p>
        <p>
          Built with advanced AI models and computer vision, Nova-CUA can navigate applications, click buttons, fill forms, and execute multi-step workflows just like a human would. This project demonstrates the potential of AI agents in everyday computing tasks, making automation accessible through simple conversational commands.
        </p>
      </div>
    ),
  },
  {
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7357098420378959872/",
    title: "TaskFlow AI",
    description:
      "A natural language workflow engine that automates Google Sheets, Gmail, and Calendar — turning plain English into structured multi-step operations.",
    thumbnail: taskflow1,
    images: [taskflow1, taskflow2],
    stack: ["FastAPI", "OpenAI API", "Google Cloud"],
    slug: "taskflow-ai",
    content: (
      <div>
        <p>
          TaskFlow AI revolutionizes productivity by transforming natural language instructions into automated workflows across Google Workspace. Users can describe complex multi-step operations in plain English, and the system intelligently executes them across Gmail, Google Sheets, and Calendar.
        </p>
        <p>
          The engine parses natural language queries, identifies the required actions, and orchestrates API calls to complete tasks that would normally require manual work across multiple applications. This seamless integration makes workflow automation accessible to non-technical users while maintaining powerful functionality for advanced use cases.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/archeetshah/zoho-people-assistant",
    title: "Zoho People Virtual Assistant",
    description:
      "An enterprise GPT-based HR assistant integrated with Zoho APIs to automate HR queries for 200+ employees — reducing average response time by 2 minutes per query.",
    thumbnail: zohoDashboard1,
    images: [zohoDashboard1, zohoDashboard2],
    stack: ["Python", "OpenAI API", "APIs"],
    slug: "zoho-assistant",
    content: (
      <div>
        <p>
          The Zoho People Virtual Assistant is an enterprise-grade AI solution that streamlines HR operations for organizations. Integrated directly with Zoho&apos;s HR platform, this GPT-based assistant handles employee queries ranging from leave balances to policy clarifications, serving over 200 employees efficiently.
        </p>
        <p>
          By automating routine HR inquiries, the system has demonstrably reduced average response time by 2 minutes per query, translating to significant time savings across the organization. The assistant understands context, maintains conversation history, and provides accurate information by querying Zoho APIs in real-time, ensuring employees always receive up-to-date responses.
        </p>
      </div>
    ),
  },
  {
    href: "https://www.youtube.com/watch?v=kfvGuYdca7A",
    title: "TCP Marketplace",
    description:
      "A full-stack, multithreaded Java application that implements a socket-based e-commerce platform with real-time messaging, listings, and transactions.",
    thumbnail: tcpMarketplace1,
    video: "/images/tcp-2.mp4",
    images: ["/images/tcp-2.mp4", tcpMarketplace1],
    stack: ["Java", "Sockets", "Systems Design"],
    slug: "tcp-marketplace",
    content: (
      <div>
        <p>
          TCP Marketplace is a multithreaded e-commerce platform built entirely from scratch using Java sockets. The system allows users to register, list goods, chat in real-time, and complete secure transactions — all running on a custom-built TCP server.
        </p>
        <p>
          Designed with modular layers for GUI, networking, and backend logic, the platform ensures reliability and scalability. It includes SHA-256 password hashing, thread-safe persistence, and real-time communication, demonstrating proficiency in concurrency and systems thinking.
        </p>
      </div>
    ),
  },
  {
    href: "https://youtu.be/23lsLJ81GwU",
    title: "Autonomous Drones",
    description:
      "Two drones built entirely from recycled components — one for environmental cleaning and another for FPV flight. Designed for sustainability and autonomy.",
    thumbnail: dronesImage,
    video: "/images/drones-2.mp4",
    images: ["/images/drones-2.mp4", dronesImage],
    stack: ["Arduino", "Computer Vision", "Sustainability"],
    slug: "eco-drone",
    content: (
      <div>
        <p>
          The Eco-Friendly Autonomous Drones project demonstrates how cutting-edge technology can be built sustainably. These two drones are constructed entirely from recycled and repurposed electronic components, proving that innovation doesn&apos;t require new materials at the cost of environmental impact.
        </p>
        <p>
          One drone is designed for environmental cleaning operations, capable of identifying and collecting lightweight debris in outdoor spaces. The second drone features FPV (First Person View) capabilities for immersive flight experiences. Both platforms showcase autonomous flight capabilities while championing sustainability through the creative reuse of electronic waste, making advanced aerial robotics more accessible and environmentally responsible.
        </p>
      </div>
    ),
  },
];