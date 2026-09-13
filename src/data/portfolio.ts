import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'Kartik Sharma',
        title: 'Full Stack & MERN Stack Developer | AI-Driven Systems Builder',
        subtitle: 'Full Stack Developer • Mobile App Architect • MERN Engineer',
        bio: 'Full Stack and MERN Stack Developer with hands-on experience building scalable web applications, cross-platform mobile apps, and production-ready management systems. Proficient in React, Next.js, FastAPI, Node.js, Flutter, and PostgreSQL. Delivered complete end-to-end platforms from scratch across internships and freelance engagements. Strong in REST API design, full-stack architecture, database management, and cross-platform application development. Proven across 4 paid roles and 10+ shipped projects including international freelance clients.',
        avatar: '/profile.png',
        location: 'Jaipur, India',
        email: 'kartikuma9261@gmail.com',
        phone: '+91 9261XXXXXX',
        resumeUrl: '/resume.pdf',
        website: 'https://thekartiksharma.in',
        languages: [
            { name: 'English', level: 'Professional Working' },
            { name: 'Hindi', level: 'Native' }
        ],
        socialLinks: [
            {
                platform: 'GitHub',
                url: 'https://github.com/KartikSharma4448',
                icon: 'github',
                username: 'KartikSharma4448'
            },
            {
                platform: 'LinkedIn',
                url: 'https://linkedin.com/in/kartik-sharma06',
                icon: 'linkedin',
                username: 'kartik-sharma06'
            },
            {
                platform: 'Instagram',
                url: 'https://www.instagram.com/itszeromind',
                icon: 'instagram',
                username: 'itszeromind'
            },
            {
                platform: 'Email',
                url: 'mailto:kartikuma9261@gmail.com',
                icon: 'mail',
                username: 'kartikuma9261@gmail.com'
            }
        ]
    },
    projects: [
        {
            id: "p01-pranag-ai-web",
            slug: "pranag-ai-web-platform",
            title: "PRANAG AI – Web Platform",
            description: "End-to-end AI livestock management platform with Prompt Parser, PINN models, prediction services, and connected dashboards. Built responsive React frontend, scalable FastAPI backend with RESTful APIs, and structured PostgreSQL database architecture from scratch. Includes auth, data management modules, and deployment-ready scalable architecture.",
            longDescription: "PRANAG AI Web Platform is a comprehensive livestock health analytics and disease intelligence platform. It features an advanced natural language Prompt Parser, Physics-Informed Neural Network (PINN) models for bovine metabolic tracking, and real-time disease risk forecasting dashboards. Built from the ground up with a responsive React.js frontend, an asynchronous FastAPI REST backend, and PostgreSQL with optimized relational schemas. The system empowers veterinarians and dairy farm managers with predictive cattle health insights.",
            image: "/profile.png",
            techStack: [
                "React.js",
                "FastAPI",
                "PostgreSQL",
                "Python",
                "TensorFlow",
                "PINN Models",
                "Tailwind CSS",
                "REST API"
            ],
            tools: [
                "VS Code",
                "Postman",
                "Git",
                "GitHub",
                "Docker"
            ],
            status: "completed",
            demoUrl: "https://github.com/KartikSharma4448",
            repoUrl: "https://github.com/KartikSharma4448",
            startDate: "2026-04-01",
            endDate: "2026-06-30",
            customTimeline: "Apr 2026 - Jun 2026",
            highlights: [
                "PINN Predictive Models",
                "FastAPI Asynchronous Pipeline",
                "PostgreSQL Relational Design",
                "Role-Based Access Control"
            ],
            category: "AI & Machine Learning",
            role: "Full Stack & AI Systems Architect",
            team: "Internship Project / R&D Team",
            features: [
                {
                    title: "AI & Physics-Informed Neural Networks",
                    items: [
                        "**Prompt Parser:** Natural language query engine translating clinical vet inquiries into structured telemetry filters",
                        "**PINN Cattle Models:** Physics-Informed Neural Networks modeling bovine metabolic trajectories and feed efficiency",
                        "**Disease Risk Matrix:** Multi-factor epidemiological risk scoring for early herd outbreak warnings"
                    ]
                },
                {
                    title: "Backend & Database Architecture",
                    items: [
                        "**FastAPI Microservices:** Asynchronous non-blocking Python backend delivering sub-40ms API responses",
                        "**PostgreSQL Schema:** Optimized relational schema for millions of telemetry time-series and diagnostic records",
                        "**JWT Authentication:** Role-based security tiers separating Veterinarians, Farm Managers, and Field Staff"
                    ]
                },
                {
                    title: "Frontend & Visualization",
                    items: [
                        "**Real-Time Dashboards:** Interactive Chart.js and Tailwind dashboards for biometric telemetry",
                        "**Export & Reports:** Instant PDF and CSV clinical diagnostic report generation",
                        "**Responsive UI:** Fully fluid layout adapting seamlessly across tablets and workstations"
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "High latency when computing complex Physics-Informed Neural Network (PINN) inference queries on large herd datasets.",
                    solution: "Designed an asynchronous task queue with background model workers and Redis caching for recurring parameter lookups, reducing response latency by 72%."
                },
                {
                    problem: "Complex multi-tenant permissions needed across dairy farms, research institutions, and visiting veterinarians.",
                    solution: "Implemented hierarchical Role-Based Access Control (RBAC) in FastAPI middleware with granular scoped JWT claims and PostgreSQL row-level indexing."
                }
            ],
            installation: [
                {
                    title: "1. Clone the repository and setup environment",
                    type: "code",
                    cmd: "git clone https://github.com/KartikSharma4448/pranag-ai-web.git\ncd pranag-ai-web"
                },
                {
                    title: "2. Backend Setup (FastAPI)",
                    type: "code",
                    cmd: "cd backend\npython -m venv venv\nsource venv/bin/activate  # Or venv\\Scripts\\activate on Windows\npip install -r requirements.txt\nuvicorn app.main:app --reload --port 8000"
                },
                {
                    title: "3. Frontend Setup (React)",
                    type: "code",
                    cmd: "cd frontend\nnpm install\nnpm run dev"
                }
            ],
            galleryImages: [
                "/profile.png"
            ]
        },
        {
            id: "p02-pranag-flutter",
            slug: "ai-livestock-diagnostic-mobile-app",
            title: "AI Livestock Diagnostic Mobile App",
            description: "Cross-platform cattle health monitoring app with biometric muzzle-print ID, CNN skin disease diagnosis, MFCC acoustic health screening, real-time health records, and backend API synchronization. Built from scratch using Flutter, Dart, and Kotlin.",
            longDescription: "A cutting-edge on-device AI mobile diagnostic application for cattle and livestock health management. Incorporates biometric muzzle-print computer vision for unique cattle identification (analogous to human fingerprints), Convolutional Neural Networks (CNN) for photographic skin disease detection (e.g. Lumpy Skin Disease), and Mel-Frequency Cepstral Coefficients (MFCC) audio signal processing for respiratory cough screening. Designed with offline-first synchronization to operate reliably in remote rural farm environments.",
            image: "/profile.png",
            techStack: [
                "Flutter",
                "Dart",
                "Kotlin",
                "OpenCV",
                "TensorFlow Lite",
                "Audio MFCC",
                "FastAPI",
                "SQLite"
            ],
            tools: [
                "Android Studio",
                "VS Code",
                "Git",
                "Postman",
                "Flutter DevTools"
            ],
            status: "completed",
            demoUrl: "https://github.com/KartikSharma4448/Pranag-fluter",
            repoUrl: "https://github.com/KartikSharma4448/Pranag-fluter",
            startDate: "2026-02-01",
            endDate: "2026-05-30",
            customTimeline: "Feb 2026 - May 2026",
            highlights: [
                "Biometric Muzzle-Print ID",
                "On-Device CNN Skin Diagnosis",
                "MFCC Audio Respiratory Screening",
                "Offline-First SQLite Sync"
            ],
            category: "Mobile & On-Device AI",
            role: "Lead Mobile & Embedded AI Engineer",
            team: "Internship Project",
            features: [
                {
                    title: "Biometric & Vision AI",
                    items: [
                        "**Muzzle-Print Identification:** OpenCV edge contour and feature descriptor matching for cattle biometric recognition",
                        "**CNN Dermatological Screening:** On-device TensorFlow Lite model diagnosing lesions and lumpy skin infections from camera feeds",
                        "**Real-Time Bounding Boxes:** Instant visual confidence overlays and severity scoring"
                    ]
                },
                {
                    title: "Acoustic Respiratory Analysis",
                    items: [
                        "**MFCC Audio Extraction:** High-frequency audio sampling converting cough recordings into Mel-frequency spectrograms",
                        "**Respiratory Pathology Classifier:** Differentiates healthy bovine sounds from pneumonia and respiratory distress",
                        "**Noise-Reduction Filters:** Native Kotlin audio pre-processing isolating animal vocalizations from tractor and ambient farm noise"
                    ]
                },
                {
                    title: "Mobile Architecture & Sync",
                    items: [
                        "**Offline SQLite Engine:** Full local database allowing field vets to log medical histories without network connectivity",
                        "**Background Sync:** Automatic batch synchronization with cloud FastAPI backend once network connectivity resumes",
                        "**Multi-Language UI:** Localized interfaces tailored for grassroots dairy farmers and field technicians"
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Running real-time image recognition and MFCC signal extraction on low-cost Android smartphones caused memory throttling and frame drops.",
                    solution: "Quantized TensorFlow Lite models to 8-bit integers (INT8) and offloaded audio processing into native C++/Kotlin Android NDK isolates, achieving steady 60 FPS UI performance."
                },
                {
                    problem: "Unpredictable cellular reception in rural farmlands caused data loss when veterinarians submitted field diagnosis reports.",
                    solution: "Built an offline-first transactional SQLite write-ahead queue with idempotent UUID records and automatic retry mechanisms on network reconnect."
                }
            ],
            installation: [
                {
                    title: "1. Prerequisites",
                    type: "text",
                    code: "Ensure Flutter 3.x, Dart 3.x, and Android SDK (API 34+) are installed and configured in your PATH."
                },
                {
                    title: "2. Clone & Install Dependencies",
                    type: "code",
                    cmd: "git clone https://github.com/KartikSharma4448/Pranag-fluter.git\ncd Pranag-fluter\nflutter pub get"
                },
                {
                    title: "3. Run on Connected Device",
                    type: "code",
                    cmd: "flutter run --release"
                }
            ],
            galleryImages: [
                "/profile.png"
            ]
        },
        {
            id: "p03-vcc-erp",
            slug: "vcc-erp-coaching-institute-management",
            title: "VCC ERP – Coaching Institute Management",
            description: "Production-ready ERP for coaching institutes. Flutter mobile app for students (attendance, fees, quizzes, AI tutor, timetable) & teachers (class management, mark attendance). Next.js admin dashboard with full CRUD, analytics, CSV export, and role-based access. NestJS REST API with JWT auth and Prisma ORM on Supabase.",
            longDescription: "VCC (Vinayak Coaching Classes) ERP is a comprehensive, multi-platform institute management system. Students and teachers interact via a high-performance Flutter Android mobile application, while administrators oversee institute operations through an Apple-inspired Next.js 16 web dashboard. Powered by a robust NestJS 11 backend with Prisma ORM on Supabase PostgreSQL, the system features automated attendance tracking, fee receipts, subject-wise digital document distribution, online MCQ quizzes, an AI Tutor powered by NVIDIA NIM Llama 3.1, and deep academic analytics.",
            image: "/Projects/ERP App/Student - Dashboard.jpeg",
            techStack: [
                "Flutter 3.41",
                "Dart 3.11",
                "Next.js 16",
                "NestJS 11",
                "PostgreSQL",
                "Supabase",
                "Prisma 7.8",
                "TypeScript",
                "NVIDIA NIM (Llama 3.1)",
                "JWT",
                "Tailwind CSS v4"
            ],
            tools: [
                "VS Code",
                "Postman",
                "Render",
                "Vercel",
                "Prisma Studio",
                "Git"
            ],
            status: "completed",
            demoUrl: "https://vcc-admin-panel.vercel.app",
            repoUrl: "https://github.com/KartikSharma4448",
            startDate: "2026-06-01",
            endDate: "2026-06-30",
            customTimeline: "Jun 2026",
            highlights: [
                "Flutter Mobile + Next.js Admin",
                "NestJS REST API + Prisma ORM",
                "NVIDIA NIM AI Tutor Integration",
                "Live Production Deployment"
            ],
            category: "Full Stack & ERP Ecosystem",
            role: "Full Stack Lead Architect",
            team: "Client Engagement",
            features: [
                {
                    title: "Student Mobile App (Flutter)",
                    items: [
                        "**Month-wise Attendance:** Visual percentage rings and calendar heatmaps tracking class presence",
                        "**Fee Ledger & Receipts:** Complete payment histories, outstanding balances, and receipt download",
                        "**In-App Study Materials:** Subject-wise digital notes and PDF document reader",
                        "**MCQ Quizzes & Rankings:** Instant quiz evaluations, timed tests, and subject breakdown scorecards",
                        "**AI Tutor (NVIDIA NIM):** 24/7 conversational academic assistant powered by Llama 3.1 8B Instruct"
                    ]
                },
                {
                    title: "Teacher Mobile Panel (Flutter)",
                    items: [
                        "**Batch Attendance Marking:** One-tap roll call and absent notification triggers",
                        "**Content Uploads:** Direct mobile upload of homework assignments, announcements, and notes",
                        "**Batch Class Schedules:** Weekly timetable schedules and test mark entry"
                    ]
                },
                {
                    title: "Next.js 16 Web Admin Dashboard",
                    items: [
                        "**Institute Overview:** Real-time KPI metrics for active batches, revenue, and teacher payroll",
                        "**Full CRUD Management:** Comprehensive directory for Students, Teachers, Batches, and Timetables",
                        "**Rankings & CSV Export:** Automated scoreboard generation and bulk data reporting",
                        "**Targeted Broadcasts:** Role and batch-specific in-app push notifications"
                    ]
                },
                {
                    title: "NestJS Backend & Supabase Database",
                    items: [
                        "**Role-Based Access Control (RBAC):** Strict JWT token authorization separating Admin, Teacher, and Student routes",
                        "**Prisma ORM Architecture:** Strongly-typed schemas spanning 12+ relational database tables",
                        "**Self-Ping Keep-Alive:** Automated 14-minute cron keep-alive preventing cloud cold-starts"
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Coaching institute teachers needed to mark attendance and upload study materials without lag even during peak morning rush hours.",
                    solution: "Optimized NestJS controllers with indexed Prisma queries, lean DTO validation via class-validator, and asynchronous file uploads, keeping API response times consistently under 35ms."
                },
                {
                    problem: "Maintaining UI and design consistency across both a Flutter mobile app and a Next.js web application.",
                    solution: "Created a unified Apple-inspired design system with frosted glass backdrop blur, Inter typography, shared HSL color tokens, and spring animation curves."
                }
            ],
            installation: [
                {
                    title: "1. Backend (NestJS + Prisma)",
                    type: "code",
                    cmd: "cd backend\nnpm install\nnpx prisma generate\nnpx prisma migrate deploy\nnpm run start:dev"
                },
                {
                    title: "2. Admin Panel (Next.js 16)",
                    type: "code",
                    cmd: "cd admin-panel\nnpm install\nnpm run dev"
                },
                {
                    title: "3. Mobile App (Flutter)",
                    type: "code",
                    cmd: "cd flutter_app\nflutter pub get\nflutter run"
                },
                {
                    title: "4. Live Demo Credentials",
                    type: "text",
                    code: "Admin: admin.vcc / VCC@1234\nTeacher: teacher.vcc / VCC@1234\nStudent: student.vcc / VCC@1234"
                }
            ],
            galleryImages: [
                "/Projects/ERP App/Student - Dashboard.jpeg",
                "/Projects/ERP App/App login Page.jpeg",
                "/Projects/ERP App/Student - Home Page.jpeg",
                "/Projects/ERP App/Student - Attendance.jpeg",
                "/Projects/ERP App/Student - fee Page.jpeg",
                "/Projects/ERP App/Student - Time Table.jpeg",
                "/Projects/ERP App/Student - Ai Chat Panel.jpeg",
                "/Projects/ERP App/Student - Notification Panel.jpeg",
                "/Projects/ERP App/Student - Profile.jpeg",
                "/Projects/ERP App/Teacher Home Page.jpeg",
                "/Projects/ERP App/Teacher - Class Management.jpeg",
                "/Projects/ERP App/Teacher -Profile.jpeg"
            ]
        },
        {
            id: "p04-rajasthali",
            slug: "rajasthali-travel-fleet-management-system",
            title: "Rajasthali – Travel & Fleet Management System",
            description: "Complete travel management ecosystem. Flutter app for drivers (live GPS tracking, speedometer, road navigation, auto-start tours, SOS alerts) & clients (track tours live). Next.js admin panel for fleet tracking, HR, payroll, attendance & analytics. All at ₹0/month cost using Supabase backend with Realtime updates.",
            longDescription: "Rajasthali Traveling System is an end-to-end travel and fleet operations ecosystem custom built for Rajasthali Tours, Rajasthan. It pairs a Flutter mobile application for drivers and passengers with an enterprise Next.js 16 administration portal. Key capabilities include background GPS fleet tracking with 10-second Supabase Realtime updates, OSRM turn-by-turn driving navigation, real-time speedometer with overspeed sirens (>80 km/h), automated tour lifecycle triggers, full HR & payroll management with automated absence deductions, and public shareable tracking links — operating at ₹0/month infrastructure cost.",
            image: "/Projects/Tours&fleet Management App/Admin - Dashboard.png",
            techStack: [
                "Flutter 3.7+",
                "Dart",
                "Next.js 16",
                "React 19",
                "TypeScript 5",
                "PostgreSQL (18 Tables)",
                "Supabase Realtime",
                "Riverpod 2.6",
                "Leaflet / OpenStreetMap",
                "OSRM Routing API",
                "Firebase FCM",
                "Tailwind CSS 4"
            ],
            tools: [
                "VS Code",
                "Supabase Dashboard",
                "Vercel",
                "Git",
                "Android Studio"
            ],
            status: "completed",
            demoUrl: "https://rajasthali-admin.vercel.app",
            repoUrl: "https://github.com/KartikSharma4448",
            startDate: "2026-06-01",
            endDate: "2026-06-30",
            customTimeline: "Jun 2026",
            highlights: [
                "Real-Time GPS Tracking (10s sync)",
                "OSRM Free Road Navigation & Speedometer",
                "18-Table Supabase PostgreSQL Schema",
                "₹0/Month Cloud Architecture"
            ],
            category: "Fleet & Mobile Logistics",
            role: "Lead Full Stack & Mobile Engineer",
            team: "Client Engagement",
            features: [
                {
                    title: "Driver Mobile App (Flutter)",
                    items: [
                        "**Live GPS Background Service:** Android foreground service publishing location telemetry every 10 seconds",
                        "**OSRM Turn-by-Turn Navigation:** Free routing engine calculating polylines, distances, and live ETAs",
                        "**Live Speedometer & Overspeed Alert:** Gauge with audio warning when vehicle exceeds 80 km/h",
                        "**Tour Auto-Start/Complete:** Automatic status transitions triggered by scheduled start and end dates",
                        "**SOS Emergency System:** One-tap emergency dialer alerting police/medical help and dispatching admin alerts",
                        "**Battery Saver Mode:** Reduces GPS query intervals to 30 seconds when stationary for over 60 seconds"
                    ]
                },
                {
                    title: "Client Passenger Panel (Flutter)",
                    items: [
                        "**Active Tour Tracker:** Live map tracking assigned vehicle and driver position in real time",
                        "**Two-Way Location Sharing:** Passenger can share live coordinates directly with the driver",
                        "**Itinerary & Hotel Schedules:** Detailed breakdown of tour checkpoints, sightseeing, and hotel bookings"
                    ]
                },
                {
                    title: "Next.js 16 Web Administration Portal",
                    items: [
                        "**Interactive Fleet Map:** Leaflet map rendering all active vehicles and drivers simultaneously via WebSockets",
                        "**5-Step Tour Creation Wizard:** Driver selection → Vehicle allocation → Client assignment → Itinerary map → Checklist",
                        "**HR & Automated Payroll:** Absence-based daily attendance tracking with automated salary calculations and deductions",
                        "**Public Shareable Links:** Expiring `/track/{token}` public links allowing families to track tours in browser without login"
                    ]
                },
                {
                    title: "Backend & Database (Supabase)",
                    items: [
                        "**18 Relational Tables:** Comprehensive models for employees, clients, vehicles, tours, checklists, salary, and GPS pings",
                        "**Row Level Security (RLS):** Strict multi-tenant security isolating driver, client, and owner data access",
                        "**Firebase Cloud Messaging:** Instant push notifications dispatched when tour assignments update"
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Continuous background GPS tracking drained mobile batteries and incurred excessive database write costs.",
                    solution: "Implemented an adaptive geofencing and motion-detection algorithm: GPS polling drops from 10s to 30s when stationary for over 60 seconds, saving 45% battery life while staying well within Supabase free-tier limits."
                },
                {
                    problem: "Commercial map APIs (Google Maps) would cost thousands of rupees monthly for a fleet with continuous updates.",
                    solution: "Architected a zero-cost mapping stack using OpenStreetMap, Leaflet, and the open-source OSRM routing engine, delivering full navigation capabilities at ₹0/month."
                }
            ],
            installation: [
                {
                    title: "1. Admin Dashboard (Next.js)",
                    type: "code",
                    cmd: "cd admin-portal\nnpm install\nnpm run dev"
                },
                {
                    title: "2. Mobile App (Flutter)",
                    type: "code",
                    cmd: "cd driver_client_app\nflutter pub get\nflutter run"
                },
                {
                    title: "3. Direct APK Download",
                    type: "text",
                    code: "Android APK available in public/Projects/Tours&fleet Management App/RajasthaliApp-release.apk"
                }
            ],
            galleryImages: [
                "/Projects/Tours&fleet Management App/Admin - Dashboard.png",
                "/Projects/Tours&fleet Management App/Driver - Dashboard.jpg",
                "/Projects/Tours&fleet Management App/Driver - Active Tour.jpg",
                "/Projects/Tours&fleet Management App/Driver & Client Share Live Location Each Other.jpg",
                "/Projects/Tours&fleet Management App/Client - Active Tour.jpg",
                "/Projects/Tours&fleet Management App/Admin - Tours Managent.png",
                "/Projects/Tours&fleet Management App/Admin - Vehicle Management.png",
                "/Projects/Tours&fleet Management App/Admin - Employee Management.png",
                "/Projects/Tours&fleet Management App/Admin - Sallary Management.png",
                "/Projects/Tours&fleet Management App/Driver - Completed Tour.jpg",
                "/Projects/Tours&fleet Management App/Client - My All Tour.jpg",
                "/Projects/Tours&fleet Management App/Admin - leave Requests.png",
                "/Projects/Tours&fleet Management App/Admin - Employee Attendance.png"
            ]
        },
        {
            id: "p05-cvcraft",
            slug: "cvcraft-v2-ai-powered-ats-resume-builder",
            title: "CVCraft v2 – AI-Powered ATS Resume Builder",
            description: "Full-stack ATS resume builder with live editing, real-time ATS scoring with keyword optimization, NVIDIA AI content refinement, instant PDF export, and flexible multi-template MongoDB schema.",
            longDescription: "CVCraft v2 is an advanced AI-powered ATS resume builder engineered to help job seekers bypass Applicant Tracking Systems. It delivers real-time ATS compatibility scoring, automated keyword gap analysis, and one-click bullet point refinement powered by NVIDIA NIM (Gemma-2, nv-embed-v1, and Mistral reranker). Built on React 18 and FastAPI with MongoDB persistence, it features instant client-side PDF export (jsPDF), LaTeX server-side compilation, and 84 property-based tests verifying total system integrity — completely free with no signup required.",
            image: "/Projects/CVCraft/Screenshot 2026-07-04 010256.png",
            techStack: [
                "FastAPI",
                "React 18",
                "MongoDB 6.0",
                "NVIDIA NIM (Gemma-2-2b-it)",
                "nv-embed-v1",
                "rerank-qa-mistral-4b",
                "Tailwind CSS 3.4",
                "Python 3.10+",
                "jsPDF",
                "Hypothesis",
                "fast-check"
            ],
            tools: [
                "VS Code",
                "Postman",
                "Render",
                "MongoDB Compass",
                "Git"
            ],
            status: "completed",
            demoUrl: "https://cvcraft-2fz1.onrender.com",
            repoUrl: "https://github.com/KartikSharma4448/CVCraft",
            startDate: "2026-05-31",
            endDate: "2026-06-30",
            customTimeline: "May 2026 - Jun 2026",
            highlights: [
                "NVIDIA NIM AI Integration",
                "Real-time ATS Keyword Scoring",
                "84 Property-Based Tests",
                "Zero Signup Requirement"
            ],
            category: "AI & Full Stack Web App",
            role: "Full Stack & AI Engineer",
            team: "Personal Project",
            features: [
                {
                    title: "NVIDIA NIM AI Intelligence",
                    items: [
                        "**Gemma-2-2b-it Refinement:** Context-aware enhancement of resume work experience bullet points and summaries",
                        "**nv-embed-v1 Semantic Vectors:** High-dimension text embeddings analyzing semantic overlap between resume and target job descriptions",
                        "**Mistral Reranking:** Precision keyword matching and missing technical terminology suggestions"
                    ]
                },
                {
                    title: "Live Builder & PDF Engine",
                    items: [
                        "**Live Split Preview:** Dynamic real-time rendering updating CV output instantly as user types",
                        "**2 ATS-Optimized Templates:** Jake Ryan Classic Professional and Modern Clean ATS layouts",
                        "**Multi-Tier PDF Export:** Instant client-side jsPDF downloads and server-side pdflatex compiling",
                        "**No Signup Barrier:** Instant access without authentication barriers or paywalls"
                    ]
                },
                {
                    title: "Testing & Quality Assurance",
                    items: [
                        "**84 Property-Based Tests:** 42 backend tests via Hypothesis and 42 frontend tests via fast-check",
                        "**Invariant Verification:** Score bounds validation, cache deduplication, and fallback behavior when AI tokens deplete",
                        "**SEO & Analytics:** Google Analytics 4 tracking with structured JSON-LD and OpenGraph cards"
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "ATS scoring algorithms often returned erratic match percentages when comparing disparate terminology across industries.",
                    solution: "Combined vector cosine similarity (via NVIDIA nv-embed-v1) with a cross-encoder reranking model (rerank-qa-mistral-4b), stabilizing accuracy across technical domains."
                },
                {
                    problem: "Third-party AI API outages or rate limits could block users from editing and downloading their resumes.",
                    solution: "Engineered graceful fallback mechanisms with local regex-based keyword extractors and in-memory Redis caching, keeping the builder fully operational 100% of the time."
                }
            ],
            installation: [
                {
                    title: "1. Clone and Install Dependencies",
                    type: "code",
                    cmd: "git clone https://github.com/KartikSharma4448/CVCraft.git\ncd CVCraft"
                },
                {
                    title: "2. Backend Setup (FastAPI)",
                    type: "code",
                    cmd: "cd backend\npip install -r requirements.txt\nuvicorn main:app --reload --port 8000"
                },
                {
                    title: "3. Frontend Setup (React)",
                    type: "code",
                    cmd: "cd frontend\nnpm install\nnpm start"
                }
            ],
            galleryImages: [
                "/Projects/CVCraft/Screenshot 2026-07-04 010256.png",
                "/Projects/CVCraft/Screenshot 2026-07-04 010304.png",
                "/Projects/CVCraft/Screenshot 2026-07-04 010314.png"
            ]
        },
        {
            id: "p06-aegiscare",
            slug: "aegis-care-blockchain-healthcare-system",
            title: "Aegis Care – Blockchain Healthcare System",
            description: "Decentralized healthcare platform on Algorand blockchain with role-based smart contracts (patients, doctors, admins) and IPFS-based tamper-proof medical record and prescription storage using content identifiers.",
            longDescription: "Aegis Care is a decentralized healthcare management system engineered on the Algorand blockchain. It replaces vulnerable centralized electronic health records with cryptographically signed, immutable smart contracts and distributed IPFS storage. Patients maintain sovereign ownership over their medical records, granting temporary, revocable access to certified practitioners. The platform eliminates medical prescription forgery and ensures HIPAA-compliant data integrity.",
            image: "/profile.png",
            techStack: [
                "Algorand",
                "Python (PyTeal / Beaker)",
                "AlgoKit",
                "Smart Contracts",
                "IPFS",
                "TypeScript",
                "React"
            ],
            tools: [
                "AlgoKit CLI",
                "VS Code",
                "Pera Wallet",
                "IPFS Desktop",
                "Git"
            ],
            status: "completed",
            demoUrl: "https://github.com/KartikSharma4448/Aegiscare",
            repoUrl: "https://github.com/KartikSharma4448/Aegiscare",
            startDate: "2026-06-01",
            endDate: "2026-06-30",
            customTimeline: "Jun 2026",
            highlights: [
                "Algorand Smart Contracts",
                "Decentralized IPFS Storage",
                "Cryptographic Medical Signatures",
                "Patient Data Sovereignty"
            ],
            category: "Web3 & Blockchain",
            role: "Lead Blockchain & Full Stack Engineer",
            team: "Personal Project",
            features: [
                {
                    title: "Smart Contract Architecture",
                    items: [
                        "**Role-Based Access:** On-chain PyTeal contracts regulating patient permissions, doctor credentials, and pharmacist validations",
                        "**Tamper-Proof Prescriptions:** Digital prescriptions hashed and anchored directly to the Algorand blockchain",
                        "**Revocable Consent:** Patients can grant and revoke temporary doctor access to diagnostic records at any time"
                    ]
                },
                {
                    title: "Decentralized Storage (IPFS)",
                    items: [
                        "**CID Content Addressing:** Heavy medical scans and lab reports are stored on IPFS with cryptographic CID hashes",
                        "**Client-Side Encryption:** AES-256 encrypted payload before IPFS pinning ensures only authorized private keys can decrypt files",
                        "**Integrity Verification:** Automated on-chain hash verification ensuring zero tampering of diagnostic reports"
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Storing high-resolution MRI and CT scans directly on-chain is cost-prohibitive on blockchain networks.",
                    solution: "Stored encrypted medical assets off-chain on IPFS and anchored only the SHA-256 content identifier hash inside Algorand smart contract state storage."
                },
                {
                    problem: "Doctor verification needed to prevent unauthorized entities from writing medical prescriptions.",
                    solution: "Built a multi-signature administrative gate validating medical council licenses on-chain prior to granting practitioner permissions."
                }
            ],
            installation: [
                {
                    title: "1. Install AlgoKit & Dependencies",
                    type: "code",
                    cmd: "pipx install algokit\nalgokit localnet start"
                },
                {
                    title: "2. Clone & Deploy Smart Contracts",
                    type: "code",
                    cmd: "git clone https://github.com/KartikSharma4448/Aegiscare.git\ncd Aegiscare\nalgokit project bootstrap\nalgokit project deploy localnet"
                }
            ],
            galleryImages: [
                "/profile.png"
            ]
        },
        {
            id: "p07-kidzgpt",
            slug: "kidzgpt-ai-3d-learning-assistant",
            title: "KidzGPT – AI 3D Learning Assistant",
            description: "AI learning assistant for children with interactive 3D animated characters, real-time voice and text AI conversations using LLM APIs, and gamified educational experience. Built for a freelance client.",
            longDescription: "KidzGPT is an interactive 3D AI learning companion crafted for young learners. It brings educational topics to life through a responsive 3D animated character rendered via Three.js and React Three Fiber. Children can speak directly to the character using the Web Speech API and receive child-safe, curriculum-tailored explanations, voice narration, and gamified quizzes.",
            image: "/profile.png",
            techStack: [
                "React",
                "Three.js",
                "React Three Fiber",
                "LLM APIs",
                "Web Speech API",
                "Framer Motion",
                "Tailwind CSS"
            ],
            tools: [
                "VS Code",
                "Blender (GLTF models)",
                "Git",
                "Chrome DevTools"
            ],
            status: "completed",
            demoUrl: "https://github.com/KartikSharma4448/KidZ-GPT",
            repoUrl: "https://github.com/KartikSharma4448/KidZ-GPT",
            startDate: "2026-05-01",
            endDate: "2026-05-31",
            customTimeline: "May 2026",
            highlights: [
                "Real-time 3D Character Animation",
                "Web Speech Voice Interaction",
                "Kid-Safe LLM Prompt Guardrails",
                "Gamified Learning Quizzes"
            ],
            category: "AI & 3D Interactive",
            role: "Lead Frontend & 3D Interactive Developer",
            team: "Freelance Engagement",
            features: [
                {
                    title: "3D Animation & Interactivity",
                    items: [
                        "**React Three Fiber World:** Optimized 3D model rigging with procedural lip-sync and idle eye-tracking animations",
                        "**Interactive Touch:** Character responds to cursor movements, touch gestures, and conversational mood shifts",
                        "**Lightweight Rendering:** Optimized GLTF meshes maintaining 60 FPS across mobile and desktop browsers"
                    ]
                },
                {
                    title: "Voice AI & Kid-Safe Safeguards",
                    items: [
                        "**Two-Way Speech:** Real-time voice recognition and natural speech synthesis via browser Web Speech APIs",
                        "**Curriculum Guardrails:** Custom LLM system prompts enforcing age-appropriate, encouraging, and educational responses",
                        "**Interactive Quizzes:** Dynamic trivia games with visual rewards and positive reinforcement feedback loops"
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "3D avatar rendering caused battery drain and stuttering on budget mobile devices.",
                    solution: "Implemented adaptive Level-of-Detail (LOD) rendering and throttled animation tick loops when tab is in background, cutting GPU load by 60%."
                }
            ],
            installation: [
                {
                    title: "1. Clone & Run Locally",
                    type: "code",
                    cmd: "git clone https://github.com/KartikSharma4448/KidZ-GPT.git\ncd KidZ-GPT\nnpm install\nnpm run dev"
                }
            ],
            galleryImages: [
                "/profile.png"
            ]
        },
        {
            id: "p08-todoup",
            slug: "todoup-ai-productivity-app",
            title: "TodoUp – AI Productivity App",
            description: "Published on Google Play Store. Modern task management app with AI-assisted task features, smart reminders, real-time Supabase cloud sync, and offline Hive storage for seamless internet-free experience.",
            longDescription: "TodoUp is a modern task management and daily productivity mobile application published on the Google Play Store. Built with Flutter 3 and Dart, backed by Supabase PostgreSQL, and engineered with an offline-first Hive storage engine, TodoUp allows users to organize their daily schedule, receive smart AI task suggestions, and trigger scheduled local notifications seamlessly even without an internet connection.",
            image: "/Projects/ToDoUp/Banner Main.webp",
            techStack: [
                "Flutter 3.x",
                "Dart 3.x",
                "Supabase",
                "Hive (Offline-First)",
                "flutter_local_notifications",
                "Material Design 3"
            ],
            tools: [
                "Android Studio",
                "VS Code",
                "Google Play Console",
                "Git"
            ],
            status: "completed",
            demoUrl: "https://play.google.com/store/apps/details?id=app.todoup",
            repoUrl: "https://github.com/KartikSharma4448/Todoup-flutter",
            startDate: "2026-03-01",
            endDate: "2026-04-30",
            customTimeline: "Mar 2026 - Apr 2026",
            highlights: [
                "Live on Google Play Store",
                "Offline-First Hive Storage",
                "Supabase Real-time Cloud Sync",
                "Smart Scheduled Reminders"
            ],
            category: "Mobile App (Play Store)",
            role: "Mobile App Architect & Creator",
            team: "Personal Shipped Product",
            features: [
                {
                    title: "Core Task Management",
                    items: [
                        "**Task Organization:** Create, categorize, prioritize, and manage complex daily tasks with custom tags",
                        "**AI Smart Suggestions:** Context-aware automated breakdown of broad goals into actionable subtasks",
                        "**Scheduled Reminders:** Background notifications powered by `flutter_local_notifications` with direct task deep-linking"
                    ]
                },
                {
                    title: "Offline-First Sync Engine",
                    items: [
                        "**Hive Local Storage:** Instant zero-latency UI writes stored in local binary Hive boxes",
                        "**Supabase Cloud Sync:** Bidirectional conflict-free sync resolving updates via timestamp comparison",
                        "**Supabase Authentication:** Secure JWT-based email/password authentication persisting across app sessions"
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Handling task sync conflicts between multiple devices operating offline simultaneously.",
                    solution: "Architected a last-write-wins (LWW) conflict resolution protocol utilizing microsecond timestamps and soft-deletion flags in PostgreSQL."
                }
            ],
            installation: [
                {
                    title: "1. Google Play Store",
                    type: "text",
                    code: "Install directly from Google Play: https://play.google.com/store/apps/details?id=app.todoup"
                },
                {
                    title: "2. Build from Source",
                    type: "code",
                    cmd: "git clone https://github.com/KartikSharma4448/Todoup-flutter.git\ncd Todoup-flutter\nflutter pub get\nflutter run"
                }
            ],
            galleryImages: [
                "/Projects/ToDoUp/Banner Main.webp",
                "/Projects/ToDoUp/Banner -1.webp",
                "/Projects/ToDoUp/Banner -2.webp",
                "/Projects/ToDoUp/Logo.webp"
            ]
        },
        {
            id: "p09-restroqr",
            slug: "restroqr-free-digital-qr-menu-table-ordering-system",
            title: "RestroQR – Free Digital QR Menu & Table Ordering System",
            description: "Full-stack restaurant management platform. Owners manage menus, tables & orders via a Flutter Android app. Customers scan a table QR code and place orders directly from their browser — no app download needed. Features multi-table encrypted QR ordering, real-time push notifications, earnings dashboard, and item analytics.",
            longDescription: "RestroQR is a comprehensive digital dining and restaurant operations platform. Restaurant owners manage their operations via a Flutter Android application, while dine-in customers scan AES-256-GCM encrypted QR codes on their tables to browse menus, customize dishes, and place orders directly in their phone browser without installing any app. Backed by Node.js, Express, Neon PostgreSQL (12 relational tables), Next.js 14, and Firebase Cloud Messaging, it streamlines the entire order lifecycle.",
            image: "/Projects/RestroQR/banner-1.png",
            techStack: [
                "Flutter 3.11+",
                "Dart",
                "Node.js",
                "Express",
                "TypeScript",
                "PostgreSQL (Neon)",
                "Next.js 14",
                "Firebase FCM",
                "Cloudinary CDN",
                "AES-256-GCM",
                "Tailwind CSS"
            ],
            tools: [
                "VS Code",
                "Postman",
                "Render",
                "Vercel",
                "Git"
            ],
            status: "completed",
            demoUrl: "https://restro-qr-peach.vercel.app",
            repoUrl: "https://github.com/KartikSharma4448",
            startDate: "2026-06-28",
            endDate: "2026-07-04",
            customTimeline: "Jun 2026 - Jul 2026",
            highlights: [
                "Encrypted Table QR (AES-256-GCM)",
                "App-Less Browser Ordering (Next.js 14)",
                "Firebase Instant Order Alerts",
                "17 Property-Based Invariant Tests"
            ],
            category: "Full Stack & SaaS Ecosystem",
            role: "Full Stack Lead Engineer",
            team: "Personal Product",
            features: [
                {
                    title: "Restaurant Owner Mobile App (Flutter)",
                    items: [
                        "**Digital Menu Builder:** Category management, photo uploads via Cloudinary, veg/non-veg tags, and pricing",
                        "**Multi-Table QR Generator:** Generate and export encrypted QR codes per table or single restaurant QR",
                        "**Live Order Dispatch:** Instant audio & push notifications on new orders with state lifecycle (Accept → Complete → Paid)",
                        "**Revenue & Dish Analytics:** Daily/monthly sales breakdowns and best-seller performance metrics"
                    ]
                },
                {
                    title: "Customer Web Ordering (Next.js 14)",
                    items: [
                        "**Zero-Install Dining:** Instant menu loading in mobile browser upon scanning table QR code",
                        "**Live Cart & Checkout:** Real-time dish customization, special instructions, and order placement",
                        "**Unique Reference IDs:** Structured order tracking codes (e.g., ORD-ABC123) with live preparation status"
                    ]
                },
                {
                    title: "Security & Backend Architecture",
                    items: [
                        "**AES-256-GCM QR Encryption:** Cryptographically secured table tokens preventing URL tampering or table enumeration",
                        "**Robust Testing Suite:** 17 property-based invariant tests with fast-check and supertest guaranteeing order integrity",
                        "**Tenant Isolation:** Strict database isolation ensuring owners access only their proprietary business telemetry"
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Malicious users could alter table numbers in the URL to submit fake food orders to other dining tables.",
                    solution: "Implemented AES-256-GCM cryptographic encryption with initialization vectors and auth tags for all table QR URLs, causing invalid tokens to safely fail with generic 404s."
                },
                {
                    problem: "Deleting or editing menu items could corrupt past financial and order history reports.",
                    solution: "Implemented immutable order item snapshots that preserve historical dish titles and prices at time-of-order even if the menu item is later modified or deleted."
                }
            ],
            installation: [
                {
                    title: "1. Backend API (Express + TypeScript)",
                    type: "code",
                    cmd: "cd backend\nnpm install\nnpm run migrate\nnpm run dev"
                },
                {
                    title: "2. Customer Web App (Next.js 14)",
                    type: "code",
                    cmd: "cd customer-web\nnpm install\nnpm run dev"
                },
                {
                    title: "3. Owner App (Flutter)",
                    type: "code",
                    cmd: "cd owner_app\nflutter pub get\nflutter run"
                }
            ],
            galleryImages: [
                "/Projects/RestroQR/banner-1.png",
                "/Projects/RestroQR/banner-2.png",
                "/Projects/RestroQR/screenshot-1.jpg",
                "/Projects/RestroQR/screenshot-2.jpg",
                "/Projects/RestroQR/screenshot-3.jpg",
                "/Projects/RestroQR/screenshot-4.jpg",
                "/Projects/RestroQR/screenshot-5.jpg"
            ]
        },
        {
            id: "p10-task-tracker",
            slug: "task-tracker-full-stack-crud-app",
            title: "Task Tracker – Full Stack CRUD App",
            description: "Full-stack Task Tracker application with React, Node.js, Express, and MongoDB. Features CRUD operations, search, filtering, sorting, pagination, dark mode, toast notifications, and responsive design.",
            longDescription: "A robust full-stack task and project tracking web application built using the MERN stack. Designed with clean architectural separation between the React client and Express REST backend, it provides responsive task management, multi-field filtering (by status, priority, and date), full-text search, server-side pagination, toast alerts, and a polished dark/light mode UI.",
            image: "/profile.png",
            techStack: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "JavaScript",
                "Tailwind CSS",
                "REST API"
            ],
            tools: [
                "VS Code",
                "Postman",
                "MongoDB Atlas",
                "Git"
            ],
            status: "completed",
            demoUrl: "https://github.com/KartikSharma4448/task-tracker",
            repoUrl: "https://github.com/KartikSharma4448/task-tracker",
            startDate: "2026-06-28",
            endDate: "2026-06-30",
            customTimeline: "Jun 2026",
            highlights: [
                "Complete MERN Architecture",
                "Multi-Field Search & Filter",
                "Pagination & Sort Pipeline",
                "Dark Mode UI"
            ],
            category: "Full Stack Web App",
            role: "Full Stack Developer",
            team: "Personal Project",
            features: [
                {
                    title: "Productivity & Management",
                    items: [
                        "**Full CRUD Operations:** Seamless creation, reading, editing, and deletion of project tasks",
                        "**Advanced Search & Filtering:** Dynamic query filtering across priority tags, categories, and due dates",
                        "**Server-Side Pagination:** High-efficiency cursor pagination handling large task lists seamlessly"
                    ]
                },
                {
                    title: "UI & Developer Experience",
                    items: [
                        "**Fluid Theme Switcher:** Instant smooth transition between dark and light color modes",
                        "**Toast Notification System:** Instant user feedback on asynchronous network requests",
                        "**Responsive Design:** Fully fluid layouts tailored for mobile, tablet, and desktop viewports"
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Debouncing search inputs across high-frequency keystrokes to prevent backend API request spam.",
                    solution: "Created a custom React `useDebounce` hook with a 300ms delay window, reducing redundant server queries by 85%."
                }
            ],
            installation: [
                {
                    title: "1. Clone and Install",
                    type: "code",
                    cmd: "git clone https://github.com/KartikSharma4448/task-tracker.git\ncd task-tracker\ncd backend && npm install\ncd ../frontend && npm install"
                },
                {
                    title: "2. Run Development Servers",
                    type: "code",
                    cmd: "# In backend:\nnpm start\n# In frontend:\nnpm run dev"
                }
            ],
            galleryImages: [
                "/profile.png"
            ]
        },
        {
            id: "p11-hope-paws",
            slug: "hope-paws-animal-road-safety-platform",
            title: "HOPE-PAWS – Animal & Road Safety Platform",
            description: "Next-generation smart platform to ensure animal and road safety using real-time reporting. Features incident reporting, service discovery, and transparent donation tracking.",
            longDescription: "HOPE-PAWS is a community-driven animal rescue and road safety web platform. It connects citizens encountering injured or distressed stray animals on highways with nearby veterinary clinics, NGO shelters, and ambulance services in real time. Features include geotagged incident reporting, automated route matching, and transparent donation tracking for animal medical care.",
            image: "/profile.png",
            techStack: [
                "TypeScript",
                "React",
                "Node.js",
                "Tailwind CSS",
                "Leaflet Maps",
                "REST API"
            ],
            tools: [
                "VS Code",
                "Git",
                "Postman"
            ],
            status: "completed",
            demoUrl: "https://github.com/KartikSharma4448/Hope-Paws",
            repoUrl: "https://github.com/KartikSharma4448/Hope-Paws",
            startDate: "2025-12-23",
            endDate: "2026-01-15",
            customTimeline: "Dec 2025 - Jan 2026",
            highlights: [
                "Geotagged Incident Reporting",
                "Rescue Service Matching",
                "Transparent Donation Tracking",
                "Interactive Safety Maps"
            ],
            category: "Social Impact & Web App",
            role: "Full Stack Lead Developer",
            team: "Hackathon / Community Project",
            features: [
                {
                    title: "Rescue & Emergency",
                    items: [
                        "**Incident Reporting:** One-tap geolocation capture and photo upload for injured road animals",
                        "**Emergency Responder Routing:** Proximity-based dispatch alerting closest animal shelter volunteers",
                        "**Status Tracking:** Real-time timeline following animal rescue from reporting to rehabilitation"
                    ]
                },
                {
                    title: "Community & Impact",
                    items: [
                        "**Transparent Crowdfunding:** Direct donation allocation tracking tied to specific animal treatment cases",
                        "**Interactive Danger Zones:** Heatmap visualizing high-frequency accident zones for civic awareness"
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Accurately pinning emergency locations when users report from rural highways without street names.",
                    solution: "Integrated browser GPS geolocation API with reverse geocoding and OpenStreetMap fallback pins for exact coordinate tagging."
                }
            ],
            installation: [
                {
                    title: "1. Clone & Start",
                    type: "code",
                    cmd: "git clone https://github.com/KartikSharma4448/Hope-Paws.git\ncd Hope-Paws\nnpm install\nnpm run dev"
                }
            ],
            galleryImages: [
                "/profile.png"
            ]
        },
        {
            id: "p12-rajasthali-website",
            slug: "rajasthali-tours-company-website",
            title: "Rajasthali Tours – Company Website",
            description: "Professional company website for Rajasthali Tours with booking information, tour packages, and travel services showcase.",
            longDescription: "The official commercial web portal for Rajasthali Tours. Designed to showcase desert safari packages, heritage city tours across Jaipur, Jodhpur, Udaipur, and Jaisalmer, and luxury fleet rentals. Implements modern responsive design, high-resolution media galleries, fast page load speeds, interactive itinerary guides, and seamless booking enquiry channels.",
            image: "/Projects/Tours&fleet Management App/Admin - Dashboard.png",
            techStack: [
                "JavaScript",
                "HTML5",
                "CSS3",
                "Responsive Web Design",
                "SEO Optimization"
            ],
            tools: [
                "VS Code",
                "Git",
                "Chrome DevTools"
            ],
            status: "completed",
            demoUrl: "https://github.com/KartikSharma4448/Rajasthali-website",
            repoUrl: "https://github.com/KartikSharma4448/Rajasthali-website",
            startDate: "2026-06-21",
            endDate: "2026-06-27",
            customTimeline: "Jun 2026",
            highlights: [
                "Rajasthan Tour Package Showcase",
                "Fleet Rental Directory",
                "SEO Structured Metadata",
                "Responsive Booking Forms"
            ],
            category: "Web Development",
            role: "Frontend Developer",
            team: "Client Engagement",
            features: [
                {
                    title: "Showcase & Travel Catalog",
                    items: [
                        "**Curated Tour Itineraries:** Comprehensive day-by-day guides for Golden Triangle and Royal Rajasthan tours",
                        "**Vehicle Fleet Catalog:** High-res photo galleries, seating specs, and rental rates for sedans, SUVs, and luxury coaches",
                        "**Direct Booking Enquiry:** Instant lead capture connecting travellers directly to tour operators via WhatsApp and email"
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Ensuring high-resolution destination photography loaded fast on mobile devices across 3G/4G connections.",
                    solution: "Optimized all visual assets into modern compressed WebP formats with lazy loading and responsive `srcset` tags."
                }
            ],
            installation: [
                {
                    title: "1. Clone & Run",
                    type: "code",
                    cmd: "git clone https://github.com/KartikSharma4448/Rajasthali-website.git\ncd Rajasthali-website\n# Open index.html in any browser or use VS Code Live Server"
                }
            ],
            galleryImages: [
                "/Projects/Tours&fleet Management App/Admin - Dashboard.png"
            ]
        },
        {
            id: "p13-sploink-ai",
            slug: "sploink-ai-vs-code-extension",
            title: "Sploink.AI – VS Code Extension",
            description: "Frontend development for AI agent management VS Code extension for a US-based client ($5/hr). Built responsive monitoring UI for agent workflow logs and real-time execution state visualization.",
            longDescription: "Frontend architecture and UI development for Sploink.AI's developer extension inside Visual Studio Code. Built under a paid international engagement ($5/hr) with a US remote startup led by Timothy Nguyen. Created high-performance React webview panels that render real-time execution trees of autonomous coding agents, tool call payloads, and collapsible prompt debugging logs.",
            image: "/assets/sploinkai.png",
            techStack: [
                "React",
                "TypeScript",
                "VS Code Extension API",
                "Tailwind CSS",
                "Webview API"
            ],
            tools: [
                "VS Code Extension Development Host",
                "Git",
                "Postman"
            ],
            status: "completed",
            demoUrl: "https://github.com/KartikSharma4448",
            repoUrl: "https://github.com/KartikSharma4448",
            startDate: "2026-05-01",
            endDate: "2026-06-30",
            customTimeline: "May 2026 - Jun 2026",
            highlights: [
                "Paid International Client Project ($5/hr)",
                "VS Code Webview Architecture",
                "Real-time Agent Trace Visualizer",
                "React & TypeScript Design System"
            ],
            category: "Developer Tools & AI",
            role: "Frontend Developer Intern ($5/hr)",
            team: "Sploink (US Startup)",
            features: [
                {
                    title: "Agent Monitoring & Webview UI",
                    items: [
                        "**Real-Time State Visualization:** Dynamic execution hierarchy showing active agent thoughts, subtasks, and tool calls",
                        "**Collapsible Debugging Streams:** Low-latency display of streaming LLM outputs and JSON tool argument inspection",
                        "**VS Code Theme Harmony:** UI natively adapts to the user's active VS Code dark and light theme tokens"
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "VS Code webview communication protocol requires message-passing with serialization constraints.",
                    solution: "Engineered a strongly-typed bidirectional RPC bridge between the extension background host and React webview state."
                }
            ],
            installation: [
                {
                    title: "1. Extension Development Setup",
                    type: "code",
                    cmd: "# Press F5 in VS Code to launch the Extension Development Host window with the React webview"
                }
            ],
            galleryImages: [
                "/assets/sploinkai.png"
            ]
        },
        {
            id: "p14-automagic-vision",
            slug: "automagic-vision-hand-tracking-gesture-control",
            title: "AutoMagic Vision – Hand Tracking & Gesture Control",
            description: "Python computer vision project for hand tracking, gesture-based controls, and adaptive mouse automation. Uses OpenCV and MediaPipe for real-time gesture recognition.",
            longDescription: "AutoMagic Vision is an AI-driven computer vision automation suite in Python. Leveraging Google MediaPipe and OpenCV, it performs real-time 21-point 3D hand landmark estimation from standard webcams. It maps fine motor finger gestures to OS-level mouse navigation, click triggers, drag-and-drop actions, volume adjustments, and keyboard shortcuts without requiring physical hardware sensors.",
            image: "/profile.png",
            techStack: [
                "Python",
                "OpenCV",
                "Google MediaPipe",
                "PyAutoGUI",
                "NumPy"
            ],
            tools: [
                "VS Code",
                "Python 3.10+",
                "Git"
            ],
            status: "completed",
            demoUrl: "https://github.com/KartikSharma4448/AutoMagic-Vision",
            repoUrl: "https://github.com/KartikSharma4448/AutoMagic-Vision",
            startDate: "2026-03-01",
            endDate: "2026-03-31",
            customTimeline: "Mar 2026",
            highlights: [
                "21-Point Hand Landmark Estimation",
                "Real-Time Gesture Mouse Control",
                "Adaptive Motion Smoothing",
                "High-FPS OpenCV Pipeline"
            ],
            category: "Computer Vision & AI",
            role: "Lead Computer Vision Developer",
            team: "Personal Project",
            features: [
                {
                    title: "Landmark Tracking & Automation",
                    items: [
                        "**MediaPipe 21-Point Model:** High-accuracy real-time finger joint and palm tracking",
                        "**Virtual Mouse Controller:** Cursor movement tracking index finger position with exponential moving average smoothing",
                        "**Gesture Gestalt:** Pinch gestures trigger clicks, open-palm navigates windows, and two-finger scroll adjusts volume"
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Hand landmark jitter caused the virtual mouse cursor to tremble on small motor movements.",
                    solution: "Implemented an exponential weighted moving average (EWMA) and dynamic deadband filter that stabilizes subtle tremors while maintaining high-speed responsiveness."
                }
            ],
            installation: [
                {
                    title: "1. Clone & Run",
                    type: "code",
                    cmd: "git clone https://github.com/KartikSharma4448/AutoMagic-Vision.git\ncd AutoMagic-Vision\npip install -r requirements.txt\npython main.py"
                }
            ],
            galleryImages: [
                "/profile.png"
            ]
        },
        {
            id: "p15-codeuppath",
            slug: "codeuppath-tech-opportunity-career-platform",
            title: "CodeUpPath – Tech Opportunity & Career Platform",
            description: "Student-focused technology opportunity platform helping developers discover internships, hackathons, certifications and real-world project experience. Includes opportunity aggregation, user dashboards, community integration and digital service offerings.",
            longDescription: "CodeUpPath is a student-focused technology career and opportunity platform built to bridge the gap between aspiring developers and the tech industry. It aggregates verified internships, national hackathons, global open-source programs, and industry certifications into a unified interactive portal. Built with Next.js, TypeScript, Node.js, and Supabase, it includes customizable developer profile showcases and curated engineering roadmaps.",
            image: "/CodeUpPathbanner1.png",
            techStack: [
                "Next.js",
                "TypeScript",
                "Node.js",
                "Supabase",
                "Tailwind CSS",
                "REST APIs",
                "Vercel"
            ],
            tools: [
                "VS Code",
                "Postman",
                "Supabase",
                "Vercel",
                "Git"
            ],
            status: "completed",
            demoUrl: "https://codeuppath.com",
            repoUrl: "https://github.com/KartikSharma4448",
            startDate: "2026-03-14",
            endDate: "2026-06-30",
            customTimeline: "Mar 2026 - Present",
            highlights: [
                "Opportunity Discovery Engine",
                "Student Portfolio Builder",
                "Supabase Backend Integration",
                "Live Production Platform"
            ],
            category: "Full Stack & EdTech",
            role: "Founder & Lead Full Stack Architect",
            team: "CodeUpPath Initiative",
            features: [
                {
                    title: "Opportunity Discovery & Curation",
                    items: [
                        "**Opportunity Aggregation:** Search and filter verified software engineering internships, hackathons, and fellowship grants",
                        "**Custom Roadmaps:** Step-by-step curriculum guides for Full Stack, Mobile App Development, and AI Engineering",
                        "**Community Network:** Connect with student builders, hackathon teammates, and peer code reviewers"
                    ]
                },
                {
                    title: "Platform & Infrastructure",
                    items: [
                        "**Next.js App Router:** Server-side rendering delivering fast initial page loads and high SEO rankings",
                        "**Supabase Data Layer:** Managed PostgreSQL database with instant query response times",
                        "**Tailwind CSS UI:** Sleek, accessible design with dynamic search and filtering components"
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Aggregating dynamic opportunity listings from various sources while keeping data fresh and validated.",
                    solution: "Built an automated ingest pipeline in Node.js that validates application deadlines, checks link health, and updates Supabase database records nightly."
                }
            ],
            installation: [
                {
                    title: "1. Live Website",
                    type: "text",
                    code: "Visit live platform at: https://codeuppath.com"
                },
                {
                    title: "2. Local Development",
                    type: "code",
                    cmd: "git clone https://github.com/KartikSharma4448/CodeUpPath.git\ncd CodeUpPath\nnpm install\nnpm run dev"
                }
            ],
            galleryImages: [
                "/CodeUpPathbanner1.png"
            ]
        }
    ],
    experiences: [
    {
        "id": "exp-00-sploink",
        "company": "Sploink (US)",
        "position": "Frontend Developer Intern (Paid • $5/hr)",
        "logo": "/assets/sploinkai.png",
        "description": "Paid Frontend Developer Intern ($5/hr) at Sploink (US Remote Startup led by Timothy Nguyen). Engineered responsive web applications and AI extension UI workflows using React.js. Designed modular UI architectures, developed reusable component systems, integrated backend REST APIs, and optimized client-side application performance within an agile team.",
        "skills": [
            "React.js",
            "JavaScript",
            "TypeScript",
            "UI Architecture",
            "REST API Integration",
            "Reusable Components",
            "Agile Workflow"
        ],
        "startDate": "2026-04-01",
        "endDate": "2026-06-30",
        "isOngoing": true,
        "location": "Remote, United States",
        "type": "freelance",
        "certificateUrl": "/certificate/sploink-offer-letter.pdf",
        "certificateLabel": "View Sploink Offer Letter (PDF)",
        "responsibilities": [
            "Paid international engagement ($5/hr, 14 hrs/week) contributing to core product features.",
            "Developed responsive web applications and interactive UI workflows using React.js.",
            "Designed and implemented modular, reusable UI architecture and component libraries.",
            "Integrated frontend interfaces with cloud REST APIs and backend services.",
            "Collaborated on live product features, sprint deliverables, and frontend performance improvements in an agile environment."
        ],
        "keyLearnings": [
            "Global remote agile engineering workflows & client deliverables",
            "Production React.js design systems and component reusability",
            "Cross-functional product execution with US team leadership"
        ]
    },
    {
        "id": "exp-01",
        "company": "PetsGo and PetsDoor Pvt. Ltd.",
        "position": "Full Stack Developer (Paid Internship • Up to ₹15K/mo)",
        "logo": "/assets/petsgo.png",
        "description": "Paid Full-Stack Developer Internship (up to ₹15K/month performance-based). Developed the complete PRANAG AI web platform end-to-end — built responsive React frontend, designed scalable FastAPI backend with RESTful APIs, and structured PostgreSQL database architecture from scratch. Integrated Prompt Parser, PINN models, and prediction services; connected AI inference pipelines with frontend dashboards; built authentication system and deployment-ready scalable architecture.",
        "skills": [
            "React.js",
            "FastAPI",
            "PostgreSQL",
            "Python",
            "Tailwind CSS",
            "REST API",
            "Docker"
        ],
        "startDate": "2026-04-01",
        "endDate": "2026-05-31",
        "isOngoing": false,
        "location": "Remote, India",
        "type": "internship",
        "certificateUrl": "/certificate/petsgo-fullstack-certificate.jpg",
        "certificateLabel": "View PetsGo Full Stack Certificate",
        "responsibilities": [
            "Paid role (up to ₹15,000/mo performance-based) delivering high-throughput production AI platform.",
            "Architected scalable FastAPI REST APIs and PostgreSQL schema from scratch.",
            "Integrated PINN models, Prompt Parser, and AI prediction services.",
            "Developed reactive frontend dashboards and state management in React.",
            "Implemented secure JWT auth and end-to-end API communication."
        ],
        "keyLearnings": [
            "AI inference integration with production REST APIs",
            "FastAPI microservices architecture",
            "PostgreSQL database indexing and query tuning"
        ]
    },
    {
        "id": "exp-02",
        "company": "PetsGo and PetsDoor Pvt. Ltd.",
        "position": "Application Developer (Paid Internship • Up to ₹15K/mo)",
        "logo": "/assets/petsgo.png",
        "description": "Paid Mobile Application Developer Internship (up to ₹15K/month performance-based). Built complete AI-powered cross-platform livestock diagnostic mobile application from scratch using Flutter, Dart, and Kotlin with biometric muzzle-print identification, CNN-based skin disease diagnosis, and MFCC acoustic health screening. Enabled real-time cattle scanning, automated diagnosis, health records management, report generation, and AI inference synchronization with FastAPI backend.",
        "skills": [
            "Flutter",
            "Dart",
            "Kotlin",
            "OpenCV",
            "Computer Vision",
            "MFCC",
            "FastAPI"
        ],
        "startDate": "2026-02-01",
        "endDate": "2026-03-31",
        "isOngoing": false,
        "location": "Jaipur, India",
        "type": "internship",
        "certificateUrl": "/certificate/petsgo-mobile-certificate.jpg",
        "certificateLabel": "View PetsGo Mobile Dev Certificate",
        "responsibilities": [
            "Paid role (up to ₹15,000/mo performance-based) developing core mobile diagnostic system.",
            "Engineered biometric muzzle-print feature using computer vision algorithms.",
            "Implemented CNN disease classification models on-device using TFLite.",
            "Built acoustic MFCC feature extraction for health diagnostics.",
            "Integrated real-time sync with cloud FastAPI endpoints."
        ],
        "keyLearnings": [
            "Edge AI and on-device machine learning in Flutter",
            "Native Kotlin platform channels",
            "Complex mobile state architecture"
        ]
    },
    {
        "id": "exp-03",
        "company": "Anukriti Prakashan",
        "position": "Lead Web Developer (Paid Part-Time • ₹6,000/mo)",
        "logo": "/assets/anukritiprakashan.png",
        "description": "Paid Part-Time Web Developer (1 hr/day @ ₹6,000/month). Sole technical decision-maker — owned full lifecycle of company website including development, e-commerce functionality, deployment, and system architecture independently. Built Python-based finance management system tracking income, expenses, and multi-account transactions for business operations.",
        "skills": [
            "Full Stack Web",
            "Python",
            "JavaScript",
            "E-commerce",
            "System Architecture",
            "PostgreSQL"
        ],
        "startDate": "2025-03-01",
        "endDate": "2025-12-31",
        "isOngoing": false,
        "location": "Jaipur, India",
        "type": "part-time",
        "responsibilities": [
            "Paid engagement (1 hr/day @ ₹6,000/month) maintaining full business infrastructure.",
            "Designed and deployed the primary company e-commerce platform.",
            "Created automated Python finance tracking and expense calculation tools.",
            "Managed cloud hosting, domain configurations, and database backups."
        ],
        "keyLearnings": [
            "End-to-end business software architecture",
            "E-commerce payment flows",
            "Independent project execution"
        ]
    },
    {
        "id": "exp-04",
        "company": "Zenzaawara AI Travel Pvt. Ltd.",
        "position": "Backend Developer Intern",
        "logo": "/assets/genzaawara.png",
        "description": "Completed two-month Backend Developer Internship at Zenzaawara AI Travel Pvt. Ltd. (June 2025 – August 2025). Designed and optimized RESTful APIs improving server-side logic, performance, and response efficiency; collaborated with frontend team and contributed to backend architecture decisions.",
        "skills": [
            "Node.js",
            "Express.js",
            "REST APIs",
            "MongoDB",
            "Postman"
        ],
        "startDate": "2025-06-01",
        "endDate": "2025-08-31",
        "isOngoing": false,
        "location": "Remote, India",
        "type": "internship",
        "certificateUrl": "/certificate/zenzaawara-internship-certificate.png",
        "certificateLabel": "View Zenzaawara Certificate",
        "responsibilities": [
            "Created high-throughput RESTful endpoints in Express.js.",
            "Optimized database queries and response payload sizes.",
            "Wrote unit tests and automated API validation."
        ],
        "keyLearnings": [
            "Agile sprint development",
            "API contract design with frontend teams"
        ]
    }
],
    education: [
    {
        "id": "edu-01",
        "institution": "AS Public Sr. Sec. School",
        "degree": "Senior Secondary (Class XII)",
        "major": "Science & Mathematics",
        "startDate": "2021-04-01",
        "endDate": "2023-03-31",
        "isOngoing": false,
        "gpa": "First Division",
        "activities": [
            "Mathematics & Science Foundation",
            "Analytical Problem Solving"
        ],
        "achievements": [
            "Senior Secondary Academic Foundation"
        ]
    },
    {
        "id": "edu-02",
        "institution": "Vardhman Mahaveer Open University (VMOU), Kota",
        "degree": "Rajasthan State Certificate in Information Technology (RSCIT)",
        "major": "Information Technology & Digital Systems",
        "startDate": "2023-01-01",
        "endDate": "2023-06-30",
        "isOngoing": false,
        "gpa": "Certified",
        "activities": [
            "Computing Literacy",
            "IT Systems & Tooling"
        ],
        "achievements": [
            "State Certified IT Professional"
        ]
    },
    {
        "id": "edu-03",
        "institution": "Vivekananda Global University (VGU), Jaipur",
        "degree": "Bachelor of Computer Applications (BCA)",
        "major": "Full Stack & Cloud Computing",
        "startDate": "2023-07-01",
        "endDate": "2026-06-30",
        "isOngoing": true,
        "gpa": "9.43 CGPA",
        "activities": [
            "Hackathon Leader (Team Akatsuki)",
            "Captain & Lead – Posture Sense (National Level Project Exhibition)",
            "GDG DevFest 2025 Attendee (Rajasthan International Centre - RIC)",
            "Delegation Member – Indian Air Force (IAF) Station Visit (Dec 2025)",
            "Ethical Hacking & Cybersecurity (HACK-O-SHOP by VGU x tensaX)",
            "AI & Web Development Club",
            "Tech Speaker & Community Builder"
        ],
        "achievements": [
            "9.43 CGPA Academic Distinction",
            "National Level Project Exhibition 2025 – Team Captain (Posture Sense)",
            "AceHack 5.0 Finalist"
        ]
    }
],
    achievements: [
    {
        "id": "cert-microsoft-applied-skills",
        "title": "Microsoft Applied Skills: Streamline business workflows with AI chat",
        "issuer": "Microsoft",
        "date": "2026-08-28",
        "description": "Earned Microsoft Applied Skills credential for streamlining business workflows with AI chat, signed by CEO Satya Nadella. Credential ID: AC109B1B40DE5FB6 (Online Verifiable).",
        "category": "learning",
        "type": "learning",
        "credentialId": "AC109B1B40DE5FB6",
        "credentialUrl": "https://learn.microsoft.com/api/credentials/share/en-us/KartikSharma-6137/AC109B1B40DE5FB6?sharingId",
        "image": "/certificate/microsoft-applied-skills-ai-chat.png",
        "tags": [
            "Microsoft",
            "Applied Skills",
            "AI Chat",
            "Business Workflows",
            "Online Verifiable",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-petsgo-fullstack",
        "title": "Full Stack Developer Internship Certificate",
        "issuer": "PetsGo & PetsDoor Pvt. Ltd.",
        "date": "2026-06-05",
        "description": "Awarded to Kartik Sharma for successfully completing the Full Stack Developer Internship at PetsGo & PetsDoor Pvt Ltd (1st April 2026 to 30th May 2026) with technical excellence, web application development & AI system innovation. Credential ID: INT2026PPPL10006.",
        "category": "learning",
        "type": "learning",
        "credentialId": "INT2026PPPL10006",
        "credentialUrl": "/certificate/petsgo-fullstack-certificate.jpg",
        "image": "/certificate/petsgo-fullstack-certificate.jpg",
        "tags": [
            "PetsGo",
            "Full Stack Developer",
            "React.js",
            "FastAPI",
            "PostgreSQL",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-petsgo-mobile",
        "title": "Application Developer Internship Certificate",
        "issuer": "PetsGo & PetsDoor Pvt. Ltd.",
        "date": "2026-04-05",
        "description": "Awarded to Kartik Sharma for successfully completing the Application Developer Internship at PetsGo & PetsDoor Pvt. Ltd. (1st February 2026 to 31st March 2026), building AI-powered livestock mobile features, machine learning models, and cattle health diagnostics. Credential ID: INT2026PPPL10007.",
        "category": "learning",
        "type": "learning",
        "credentialId": "INT2026PPPL10007",
        "credentialUrl": "/certificate/petsgo-mobile-certificate.jpg",
        "image": "/certificate/petsgo-mobile-certificate.jpg",
        "tags": [
            "PetsGo",
            "Application Developer",
            "Flutter",
            "TFLite",
            "Mobile AI",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-zenzaawara-internship",
        "title": "Backend Developer Internship Certificate",
        "issuer": "Zenzaawara AI Travel Pvt. Ltd.",
        "date": "2025-08-31",
        "description": "Awarded to Kartik Sharma for completing the two-month Backend Developer Internship (June 2025 – August 2025) at Zenzaawara AI Travel Pvt. Ltd., signed by Founder Chhavi Singhal & Co-founder Argam Jain.",
        "category": "learning",
        "type": "learning",
        "credentialId": "ZENZAAWARA-2025-INT",
        "credentialUrl": "/certificate/zenzaawara-internship-certificate.png",
        "image": "/certificate/zenzaawara-internship-certificate.png",
        "tags": [
            "Zenzaawara AI Travel",
            "Backend Developer",
            "Node.js",
            "Express.js",
            "REST APIs",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-sploink-offer",
        "title": "Frontend Developer Offer Letter",
        "issuer": "Sploink AI (United States)",
        "date": "2026-04-01",
        "description": "Official Offer Letter for Frontend Developer Intern (Paid • $5/hr) issued by Timothy Nguyen, Founder & CEO at Sploink AI.",
        "category": "learning",
        "type": "learning",
        "credentialId": "SPLOINK-OFFER-2026",
        "credentialUrl": "/certificate/sploink-offer-letter.pdf",
        "image": "/assets/sploinkai.png",
        "tags": [
            "Sploink AI",
            "React.js",
            "Paid International Engagement",
            "Offer Letter"
        ]
    },
    {
        "id": "cert-01",
        "title": "Introduction to MERN Stack",
        "issuer": "Simplilearn SkillUp",
        "date": "2026-06-14",
        "description": "Certificate of Completion for Introduction to MERN Stack by Simplilearn SkillUp, recognizing foundational mastery in MongoDB, Express.js, React, and Node.js. Credential ID: 10347472.",
        "category": "learning",
        "type": "learning",
        "credentialId": "10347472",
        "credentialUrl": "https://simpli.app.link/ALOy42AmY3b",
        "image": "/certificate/simplilearn-mern-stack-certificate.png",
        "tags": [
            "Simplilearn",
            "SkillUp",
            "MERN Stack",
            "React.js",
            "Node.js",
            "MongoDB",
            "Express.js",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-02",
        "title": "Free Full Stack Developer Course",
        "issuer": "Simplilearn SkillUp",
        "date": "2026-06-14",
        "description": "Certificate of Completion for Free Full Stack Developer Course by Simplilearn SkillUp, demonstrating initiative and advanced skills in full-stack web architectures. Credential ID: 10346470.",
        "category": "learning",
        "type": "learning",
        "credentialId": "10346470",
        "credentialUrl": "https://simpli-web.app.link/e/duPJ59mRX3b",
        "image": "/certificate/simplilearn-full-stack-developer-certificate.png",
        "tags": [
            "Simplilearn",
            "SkillUp",
            "Full Stack Developer",
            "Web Architecture",
            "Frontend",
            "Backend",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-05",
        "title": "Legacy Responsive Web Design V8",
        "issuer": "freeCodeCamp",
        "date": "2026-06-14",
        "description": "Developer Certification representing approximately 300 hours of coursework and projects covering HTML5, CSS3, Flexbox, CSS Grid, and responsive web architectures signed by Quincy Larson, Executive Director at freeCodeCamp.org.",
        "category": "learning",
        "type": "learning",
        "credentialId": "kartiksharma06-rwd",
        "credentialUrl": "https://freecodecamp.org/certification/kartiksharma06/responsive-web-design",
        "image": "/certificate/freecodecamp-responsive-web-design-certificate.png",
        "tags": [
            "freeCodeCamp",
            "HTML5",
            "CSS3",
            "Responsive Design",
            "Frontend",
            "Flexbox & Grid",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-06",
        "title": "Git Training",
        "issuer": "Simplilearn SkillUp",
        "date": "2026-06-13",
        "description": "Certificate of Completion for Git Training by Simplilearn SkillUp, demonstrating expertise in version control, branching, Git workflows, and GitHub collaboration. Credential ID: 10344065.",
        "category": "learning",
        "type": "learning",
        "credentialId": "10344065",
        "credentialUrl": "https://simpli-web.app.link/e/9eCrW1UBd6b",
        "image": "/certificate/simplilearn-git-training-certificate.png",
        "tags": [
            "Simplilearn",
            "SkillUp",
            "Git",
            "GitHub",
            "Version Control",
            "Collaboration",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-07",
        "title": "Deloitte Australia - Data Analytics Job Simulation",
        "issuer": "Deloitte Australia (Forage)",
        "date": "2026-06-06",
        "description": "Certificate of Completion for Data Analytics Job Simulation at Deloitte Australia via Forage. Completed practical tasks in Data Analysis, Telemetry, and Forensic Technology. Enrolment ID: nosn94mJRSRzDCzvJ.",
        "category": "learning",
        "type": "learning",
        "credentialId": "nosn94mJRSRzDCzvJ",
        "credentialUrl": "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a23a4d316ffd376d489ab0a_1780725287420_completion_certificate.pdf",
        "image": "/certificate/deloitte-data-analytics-certificate.png",
        "tags": [
            "Deloitte",
            "Forage",
            "Data Analytics",
            "Forensic Technology",
            "Business Intelligence",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-08",
        "title": "Google Play Academy - Store Listing Certificate",
        "issuer": "Google Play Academy",
        "date": "2025-11-10",
        "description": "Official Google Play Store Listing Certificate verifying expertise in app store optimization (ASO), compliance guidelines, quality listing assets, and organic discoverability. Valid through Nov 2028. Credential ID: 170017325.",
        "category": "learning",
        "type": "learning",
        "credentialId": "170017325",
        "credentialUrl": "https://www.credential.net/bfd4e92b-fe8e-4d7c-baf9-b4b9d1875a80",
        "image": "/certificate/google-play-store-listing-certificate.png",
        "tags": [
            "Google Play",
            "App Publishing",
            "Store Optimization",
            "ASO",
            "Android",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-09",
        "title": "Introduction to Generative AI",
        "issuer": "Google Cloud Skills Boost",
        "date": "2025-08-01",
        "description": "Official Google Cloud completion badge covering fundamentals of Generative AI, Large Language Models (LLMs), prompt engineering principles, and Google Gen AI studio tools. Badge ID: 17290804.",
        "category": "learning",
        "type": "learning",
        "credentialId": "17290804",
        "credentialUrl": "https://www.skills.google/public_profiles/d552dbcd-b304-4cb7-9954-405c9ee403ac/badges/17290804?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        "image": "/certificate/google-cloud-intro-generative-ai-badge.png",
        "tags": [
            "Google Cloud",
            "Generative AI",
            "LLMs",
            "Artificial Intelligence",
            "Google Skills Boost",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-10",
        "title": "Boosting Your Time Management with AI Tools",
        "issuer": "LinkedIn Learning",
        "date": "2025-11-27",
        "description": "Certificate of Completion for Boosting Your Time Management with AI Tools by LinkedIn Learning. Covered AI Productivity, Artificial Intelligence (AI), and Generative AI workflows.",
        "category": "learning",
        "type": "learning",
        "credentialId": "fcaa13083e66623b3ef0153e658d926501ac0172ec678b9a0c1aebd24d60a2a6",
        "credentialUrl": "https://www.linkedin.com/learning/certificates/fcaa13083e66623b3ef0153e658d926501ac0172ec678b9a0c1aebd24d60a2a6?trk=share_certificate",
        "image": "/certificate/linkedin-time-management-ai-tools-certificate.png",
        "tags": [
            "LinkedIn Learning",
            "AI Productivity",
            "Artificial Intelligence",
            "Generative AI",
            "Workflow Automation",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-be10x-ai-tools",
        "title": "AI Tools & Claude Workshop",
        "issuer": "be10x",
        "date": "2026-09-13",
        "description": "Certificate of Completion for AI Tools & Claude Workshop awarded by be10x founders Aditya Goenka & Aditya Kachave. Demonstrates proficiency in AI presentation building, data analysis with AI, and rapid AI coding & debugging.",
        "category": "event",
        "type": "event",
        "credentialId": "0270772f-3809-4400-b29b-1e1c61cd09971751925",
        "credentialUrl": "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971751925",
        "image": "/certificate/be10x-ai-tools-claude-workshop-certificate.png",
        "tags": [
            "be10x",
            "AI Tools",
            "Claude AI",
            "AI Coding",
            "Data Analysis",
            "Workshop",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-11",
        "title": "Certificate of Excellence: Flutter",
        "issuer": "Cisco thingQbator & NASSCOM Foundation",
        "date": "2025-11-15",
        "description": "Certificate of Excellence awarded to Kartik for successfully completing the Flutter track under the Cisco thingQbator Program in partnership with NASSCOM Foundation & ZIKSHAA.",
        "category": "learning",
        "type": "learning",
        "credentialId": "CISCO-TQ-FLUTTER-EXCELLENCE",
        "credentialUrl": "https://thingqbator.s3.ap-south-1.amazonaws.com/1789298293884_Kartik_Course-Excellence.pdf",
        "image": "/certificate/cisco-thingqbator-flutter-certificate.png",
        "tags": [
            "Cisco thingQbator",
            "NASSCOM Foundation",
            "Flutter",
            "Dart",
            "Mobile App Development",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-12",
        "title": "Certificate of Excellence: Full Stack Development with MEAN",
        "issuer": "Cisco thingQbator & NASSCOM Foundation",
        "date": "2025-11-15",
        "description": "Certificate of Excellence awarded to Kartik for successfully completing the Full Stack Development with MEAN track under the Cisco thingQbator Program in partnership with NASSCOM Foundation & ZIKSHAA.",
        "category": "learning",
        "type": "learning",
        "credentialId": "CISCO-TQ-MEAN-EXCELLENCE",
        "credentialUrl": "https://thingqbator.s3.ap-south-1.amazonaws.com/1789298677284_Kartik_Course-Excellence.pdf",
        "image": "/certificate/cisco-thingqbator-mean-stack-certificate.png",
        "tags": [
            "Cisco thingQbator",
            "NASSCOM Foundation",
            "MEAN Stack",
            "Full Stack Development",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-hackathon-rajasthan-ai",
        "title": "AI Hackathon – AI Impact Summit",
        "issuer": "DOIT&C, Government of Rajasthan & JECC Jaipur",
        "date": "2026-01-06",
        "description": "Certificate of Participation proudly presented to Kartik Sharma for actively participating in the state-level AI Hackathon held during AI Impact Summit at JECC Jaipur, organized by Department of Information Technology & Communication (DOIT&C), Government of Rajasthan.",
        "category": "hackathon",
        "type": "hackathon",
        "credentialId": "DOITC-AI-HACKATHON-JECC-2026",
        "credentialUrl": "https://github.com/KartikSharma4448",
        "image": "/certificate/hackathon-rajasthan-ai-hackathon.jpg",
        "tags": [
            "DOIT&C",
            "Government of Rajasthan",
            "AI Hackathon",
            "AI Impact Summit",
            "JECC Jaipur",
            "Himanshu Gupta IAS",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-hackathon-techno-tarang",
        "title": "Techno Tarang Hackathon 3.0",
        "issuer": "Poornima College of Engineering, Jaipur",
        "date": "2026-04-19",
        "description": "Certificate of Participation presented to Kartik Sharma for participating in TECHNO TARANG HACKATHON 3.0 (\"Where Code Builds the Future of Earth\") organized by Poornima College of Engineering, Jaipur.",
        "category": "hackathon",
        "type": "hackathon",
        "credentialId": "TECHNOTARANG-HACKATHON-3.0-PCE",
        "credentialUrl": "https://github.com/KartikSharma4448",
        "image": "/certificate/hackathon-techno-tarang-poornima.jpg",
        "tags": [
            "Poornima College of Engineering",
            "Techno Tarang 3.0",
            "Hackathon",
            "Software Engineering",
            "Competitive Coding",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-hackathon-acehack-5",
        "title": "ACEHACK 5.0 – National Hackathon",
        "issuer": "University of Engineering & Management (UEM) Jaipur & MLH",
        "date": "2026-03-08",
        "description": "Certificate of Participation proudly presented to Kartik Sharma for participating with enthusiasm and dedication in ACEHACK 5.0 (Major League Hacking partner hackathon) at University of Engineering & Management, Jaipur.",
        "category": "hackathon",
        "type": "hackathon",
        "credentialId": "ACEHACK-5.0-UEM-MLH",
        "credentialUrl": "https://github.com/KartikSharma4448",
        "image": "/certificate/hackathon-acehack-5-uem.jpg",
        "tags": [
            "ACEHACK 5.0",
            "Major League Hacking (MLH)",
            "UEM Jaipur",
            "Hackathon",
            "Competitive Coding",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-hackathon-design-a-thon",
        "title": "DESIGN-A-THON – Code Red 4.0 Triathlon",
        "issuer": "ACIC-VCU Foundation & AIM (NITI Aayog)",
        "date": "2024-10-27",
        "description": "Certificate of Participation awarded to Kartik Sharma from team \"Strik Innovators\" for participating in the DESIGN-A-THON event held during Code Red 4.0 Triathlon organized by ACIC-VCU Foundation, supported by AIM (NITI Aayog), DOIT&C, iStart & NextGen Academy.",
        "category": "hackathon",
        "type": "hackathon",
        "credentialId": "DESIGN-A-THON-CODERED-4.0",
        "credentialUrl": "https://github.com/KartikSharma4448",
        "image": "/certificate/hackathon-design-a-thon-code-red.jpg",
        "tags": [
            "ACIC-VCU",
            "NITI Aayog AIM",
            "iStart Rajasthan",
            "DOIT&C",
            "Hackathon",
            "Design-A-Thon",
            "Strik Innovators",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-hackathon-hackindia-spark12",
        "title": "HackIndia Spark-12 Jaipur (North India Region)",
        "issuer": "HackIndia & PIET Jaipur",
        "date": "2026-09-18",
        "description": "Certificate of Participation proudly presented to Kartik Sharma for actively participating in HackIndia Spark-12 Jaipur, Rajasthan (North India Region) as a member of team Falcon Force, held at PIET, Jaipur Rajasthan.",
        "category": "hackathon",
        "type": "hackathon",
        "credentialId": "HI-2026-E0039-U009685-Y6TV",
        "credentialUrl": "https://hackindia.org",
        "image": "/certificate/hackathon-hackindia-spark12-jaipur.png",
        "tags": [
            "HackIndia",
            "Falcon Force",
            "PIET Jaipur",
            "North India Region",
            "Spark-12",
            "Hackathon",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-hackathon-hackindia-autoscientist",
        "title": "HackIndia – Adaption AutoScientist Challenge Part 2 ($60K Prize Pool)",
        "issuer": "HackIndia",
        "date": "2026-06-15",
        "description": "Certificate of Participation proudly presented to Kartik Sharma for actively participating in Adaption AutoScientist Challenge Part 2 - $60,000 Prize Pool as a member of team Falcon Force, held online by HackIndia.",
        "category": "hackathon",
        "type": "hackathon",
        "credentialId": "HI-2026-E0036-U009685-KOHK",
        "credentialUrl": "https://hackindia.org",
        "image": "/certificate/hackathon-hackindia-adaption-autoscientist.png",
        "tags": [
            "HackIndia",
            "Falcon Force",
            "AutoScientist",
            "AI Hackathon",
            "$60,000 Prize Pool",
            "Online Global Challenge",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-hackathon-openai-nxtwave-buildathon",
        "title": "OpenAI Academy x NxtWave Regional Buildathon – Rajasthan",
        "issuer": "OpenAI Academy & NxtWave",
        "date": "2026-01-04",
        "description": "Certificate of Participation awarded to Kartik Sharma as a part of the OpenAI Academy learning community for participating in the 2-day OpenAI Academy x NxtWave Regional Buildathon - Rajasthan, certified by Rahul Attuluri (CEO, NxtWave).",
        "category": "hackathon",
        "type": "hackathon",
        "credentialId": "B9YOJ4CL0U",
        "credentialUrl": "https://cdn1.ccbp.in/misc/openai-rg-c/B9YOJ4CL0U.png",
        "image": "/certificate/hackathon-openai-nxtwave-buildathon-rajasthan.png",
        "tags": [
            "OpenAI Academy",
            "NxtWave",
            "Rahul Attuluri",
            "Regional Buildathon",
            "Rajasthan",
            "Generative AI",
            "AI Hackathon",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-hackathon-snapdragon-multiverse",
        "title": "Snapdragon Multiverse Hackathon (Qualcomm x OnePlus x Sarvam AI)",
        "issuer": "Qualcomm Snapdragon, OnePlus & Sarvam AI",
        "date": "2025-09-13",
        "description": "Selected finalist in the flagship Snapdragon Multiverse Hackathon held at Qualcomm Headquarters. Architected on-device AI innovations and agentic applications with team 'Aton HOME', powered by Snapdragon NPU, OnePlus hardware, and Sarvam AI models.",
        "category": "hackathon",
        "type": "hackathon",
        "credentialId": "SNAPDRAGON-MULTIVERSE-ATON-HOME",
        "credentialUrl": "https://www.qualcomm.com",
        "image": "/gallery/snapdragon-multiverse-hackathon-group.jpg",
        "tags": [
            "Qualcomm Snapdragon",
            "OnePlus",
            "Sarvam AI",
            "Multiverse Hackathon",
            "On-Device AI",
            "Aton HOME",
            "Hackathon Finalist",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-vgu-project-exhibition-posture-sense",
        "title": "National Level Project Exhibition 2025 – Posture Sense",
        "issuer": "Vivekananda Global University (VGU), Jaipur",
        "date": "2025-11-20",
        "description": "Certificate of Participation proudly awarded to Kartik Sharma as Member/Captain of team 'POSTURE SENSE' in the National Level Project Exhibition competition organized by Vivekananda Global University during Academic Session 2025-26.",
        "category": "event",
        "type": "event",
        "credentialId": "VGU-NLPE-2025-POSTURE-SENSE",
        "credentialUrl": "https://vgu.ac.in",
        "image": "/certificate/vgu-national-project-exhibition-posture-sense.jpg",
        "tags": [
            "Vivekananda Global University",
            "VGU Jaipur",
            "National Level Project Exhibition",
            "Posture Sense",
            "Team Captain",
            "Project Exhibition",
            "Competition",
            "Academic Session 2025-26",
            "Verified Certificate"
        ]
    },
    {
        "id": "cert-vgu-hack-o-shop-ethical-hacking",
        "title": "HACK-O-SHOP – Ethical Hacking Workshop",
        "issuer": "CSE Department, VGU Jaipur in collaboration with Ambuja Foundation & tensaX Innovation Lab",
        "date": "2025-04-16",
        "description": "Certificate of Participation awarded to Kartik Sharma for actively participating in HACK-O-SHOP, an intensive 2-day Ethical Hacking Workshop organized by the Department of Computer Science & Engineering (CSE), Vivekananda Global University (VGU Jaipur) in association with Ambuja Foundation and tensaX Innovation Lab.",
        "category": "event",
        "type": "event",
        "credentialId": "VGU-CSE-HACKOSHOP-2025",
        "credentialUrl": "https://vgu.ac.in",
        "image": "/certificate/vgu-hack-o-shop-ethical-hacking-workshop.jpg",
        "tags": [
            "Vivekananda Global University",
            "VGU Jaipur",
            "CSE Department",
            "Ambuja Foundation",
            "tensaX Innovation Lab",
            "HACK-O-SHOP",
            "Ethical Hacking",
            "Cybersecurity Workshop",
            "Verified Certificate"
        ]
    },
    {
        "id": "event-iaf-station-jaipur-visit",
        "title": "Industrial Delegation Visit – Indian Air Force Station, Jaipur",
        "issuer": "Indian Air Force (IAF) & Vivekananda Global University",
        "date": "2025-12-05",
        "description": "Selected as part of the official university delegation on 5th December 2025 to visit the Indian Air Force (IAF) Station, Jaipur, exploring defense communications, radar technology, and aerospace infrastructure.",
        "category": "event",
        "type": "event",
        "image": "/gallery/iaf-station-jaipur-visit.jpg",
        "tags": [
            "Indian Air Force",
            "IAF Station Jaipur",
            "Defense & Aerospace",
            "Industrial Visit",
            "VGU Delegation",
            "Official Event"
        ]
    },
    {
        "id": "event-gdg-devfest-2025-ric-jaipur",
        "title": "Google Developer Groups (GDG) DevFest Jaipur 2025 @ RIC",
        "issuer": "Google Developer Groups (GDG) Jaipur & Google for Developers",
        "date": "2025-12-20",
        "description": "Participated in GDG DevFest Jaipur 2025 hosted at Rajasthan International Centre (RIC), Jaipur. Joined 500+ tech leaders, Google Developer Experts (GDEs), and engineers covering modern AI, Cloud infrastructure, Gemini APIs, and scalable web architectures.",
        "category": "event",
        "type": "event",
        "image": "/gallery/devfest-jaipur-auditorium-crowd.jpg",
        "tags": [
            "Google Developer Groups",
            "GDG Jaipur",
            "DevFest 2025",
            "Rajasthan International Centre",
            "RIC Jaipur",
            "Google for Developers",
            "AI & Cloud Conference",
            "Community Attendee"
        ]
    }
],
    hardSkills: [
    {
        "name": "Python",
        "level": "expert",
        "category": "backend",
        "description": "FastAPI, REST APIs, OpenCV, Automation, Pandas"
    },
    {
        "name": "TypeScript",
        "level": "expert",
        "category": "frontend",
        "description": "Next.js, React, Node.js, TypeScript strict typing"
    },
    {
        "name": "JavaScript",
        "level": "expert",
        "category": "frontend",
        "description": "ESNext, DOM, Asynchronous event loop, Web APIs"
    },
    {
        "name": "Dart / Flutter",
        "level": "expert",
        "category": "mobile",
        "description": "Cross-platform iOS/Android, Riverpod, Hive, Mobile Architecture"
    },
    {
        "name": "React.js",
        "level": "expert",
        "category": "frontend",
        "description": "Hooks, Context, State management, Performance optimization"
    },
    {
        "name": "Next.js",
        "level": "expert",
        "category": "frontend",
        "description": "App Router, Server Actions, SSR/SSG, Turbopack"
    },
    {
        "name": "FastAPI",
        "level": "expert",
        "category": "backend",
        "description": "High-performance async Python APIs, Pydantic, Swagger"
    },
    {
        "name": "Node.js & Express",
        "level": "expert",
        "category": "backend",
        "description": "REST APIs, Middleware, JWT Auth, Microservices"
    },
    {
        "name": "PostgreSQL",
        "level": "expert",
        "category": "database",
        "description": "Relational schema design, Indexing, SQL queries"
    },
    {
        "name": "MongoDB",
        "level": "advanced",
        "category": "database",
        "description": "Document schemas, Aggregation pipelines, Mongoose"
    },
    {
        "name": "Supabase",
        "level": "expert",
        "category": "database",
        "description": "Postgres DB, Realtime subscriptions, Storage, Auth"
    },
    {
        "name": "Tailwind CSS",
        "level": "expert",
        "category": "frontend",
        "description": "Modern responsive UI, custom design tokens, dark mode"
    },
    {
        "name": "Kotlin (Android)",
        "level": "intermediate",
        "category": "mobile",
        "description": "Native Android SDK, Platform Channels, Biometrics"
    },
    {
        "name": "Three.js & 3D",
        "level": "intermediate",
        "category": "frontend",
        "description": "React Three Fiber, 3D WebGL scenes, Spline"
    },
    {
        "name": "Git & GitHub",
        "level": "expert",
        "category": "devops",
        "description": "Version control, Branching, Pull Requests, CI/CD"
    },
    {
        "name": "Docker",
        "level": "intermediate",
        "category": "devops",
        "description": "Containerization, Docker Compose, Deployment"
    }
],
    tools: [
    {
        "name": "VS Code",
        "icon": "Code2",
        "category": "ide"
    },
    {
        "name": "Android Studio",
        "icon": "Smartphone",
        "category": "ide"
    },
    {
        "name": "Postman",
        "icon": "Send",
        "category": "devops"
    },
    {
        "name": "Git",
        "icon": "GitBranch",
        "category": "devops"
    },
    {
        "name": "GitHub",
        "icon": "Github",
        "category": "devops"
    },
    {
        "name": "Figma",
        "icon": "Figma",
        "category": "design"
    },
    {
        "name": "Vercel",
        "icon": "Globe",
        "category": "cloud"
    },
    {
        "name": "Supabase",
        "icon": "Database",
        "category": "cloud"
    },
    {
        "name": "Docker",
        "icon": "Container",
        "category": "devops"
    },
    {
        "name": "Terminal / CLI",
        "icon": "Terminal",
        "category": "productivity"
    }
],
    techStack: [
        { name: 'React.js', icon: 'React', category: 'framework' },
        { name: 'Next.js', icon: 'Next', category: 'framework' },
        { name: 'Flutter', icon: 'Flutter', category: 'framework' },
        { name: 'FastAPI', icon: 'Python', category: 'framework' },
        { name: 'Node.js', icon: 'Node', category: 'framework' },
        { name: 'TypeScript', icon: 'TypeScript', category: 'language' },
        { name: 'Python', icon: 'Python', category: 'language' },
        { name: 'PostgreSQL', icon: 'PostgreSQL', category: 'database' },
        { name: 'MongoDB', icon: 'MongoDB', category: 'database' },
        { name: 'Supabase', icon: 'Supabase', category: 'cloud' },
        { name: 'Docker', icon: 'Docker', category: 'tool' }
    ],
    blogs: [
    {
        "id": "blog-free-portfolio-templates",
        "title": "40+ Free Portfolio Website Templates — Download & Customize in Minutes",
        "slug": "free-portfolio-website-templates-open-source",
        "excerpt": "Looking for a stunning portfolio website but don't want to spend money? I've curated 40+ beautiful, open-source portfolio templates — all completely FREE. Download from GitHub and launch your personal portfolio in minutes.",
        "content": "# 40+ Free Portfolio Website Templates — Download & Customize in Minutes\n\n## Why Every Developer & Designer Needs a Portfolio\n\nIn today's competitive tech industry, having a personal portfolio website is no longer optional — it's essential. Whether you're a developer, designer, freelancer, or student, your portfolio is the first thing recruiters, clients, and collaborators see. But building one from scratch takes time, and buying premium templates costs money.\n\n**That's why I created this free collection.**\n\n## Introducing: 40+ Free Open-Source Portfolio Templates\n\nI've collected and organized **40+ beautiful, production-ready portfolio website templates** in one single GitHub repository — completely **FREE** and **open source**. No signup, no paywall, no catch.\n\n🔗 **[Download All Templates on GitHub →](https://github.com/KartikSharma4448/Publicportfolios)**\n\n## What's Included?\n\nThis collection features a diverse range of portfolio designs:\n\n- 🎨 **Minimalist portfolios** — Clean, typography-focused designs perfect for writers and designers\n- 💻 **Developer portfolios** — Code-themed templates with project showcases and GitHub integration\n- 🌈 **Creative portfolios** — Bold, colorful designs with animations and interactive elements\n- 🌙 **Dark mode portfolios** — Sleek, modern dark-themed templates\n- 📱 **Responsive portfolios** — Mobile-first designs that look amazing on every device\n- 🚀 **Single-page portfolios** — Fast-loading, single-scroll designs\n- 📄 **Multi-page portfolios** — Full websites with dedicated project, about, and contact pages\n\n## Key Features of Every Template\n\n| Feature | Details |\n|---------|---------|\n| **Price** | 100% FREE |\n| **Source Code** | Fully open source on GitHub |\n| **Responsive** | Works on all devices and screen sizes |\n| **Customizable** | Easy to modify colors, content, and layout |\n| **Technologies** | HTML5, CSS3, JavaScript, React, Tailwind CSS |\n| **License** | Open source — use for personal or commercial projects |\n| **No Signup** | Download directly from GitHub, no account needed |\n\n## How to Download & Use\n\n### Step 1: Visit the Repository\nGo to [github.com/KartikSharma4448/Publicportfolios](https://github.com/KartikSharma4448/Publicportfolios)\n\n### Step 2: Clone or Download\n```bash\ngit clone https://github.com/KartikSharma4448/Publicportfolios.git\n```\nOr click the green **Code** button → **Download ZIP**\n\n### Step 3: Pick Your Template\nBrowse through the folders and pick the design you love. Each template is in its own folder with all the files you need.\n\n### Step 4: Customize\nOpen the files in VS Code or any editor. Replace the placeholder content with your own:\n- Update your name, bio, and skills\n- Add your project screenshots\n- Link your social profiles (GitHub, LinkedIn, Twitter)\n- Change colors to match your brand\n\n### Step 5: Deploy for FREE\nDeploy your portfolio for free using:\n- **GitHub Pages** — Free hosting directly from your repository\n- **Vercel** — One-click deploy with a custom domain\n- **Netlify** — Drag-and-drop deployment\n\n## Who Is This For?\n\n✅ **Students** looking to build their first portfolio for campus placements\n✅ **Developers** who want a professional online presence\n✅ **Designers** showcasing their creative work\n✅ **Freelancers** looking to attract clients\n✅ **Job seekers** wanting to stand out from other applicants\n✅ **Anyone** who wants a beautiful personal website — for FREE\n\n## Technologies Used\n\nThe templates in this collection are built with industry-standard technologies:\n\n- **HTML5** — Semantic, accessible markup\n- **CSS3** — Modern layouts with Flexbox, Grid, and animations\n- **JavaScript** — Interactive elements and smooth transitions\n- **React** — Component-based templates for advanced users\n- **Tailwind CSS** — Utility-first styling for rapid customization\n- **Bootstrap** — Classic responsive framework templates\n\n## Why I Built This\n\nAs a full stack developer, I believe that everyone deserves access to great design tools — regardless of budget. I've seen too many talented developers and designers without an online presence simply because they couldn't afford a template or didn't have time to build one from scratch.\n\nThis collection solves that problem. **40+ templates. Zero cost. Unlimited potential.**\n\n## Support This Project\n\nIf you find these templates useful:\n- ⭐ **Star the repository** on GitHub to help others discover it\n- 🔀 **Fork it** and customize your own version\n- 📢 **Share it** with your developer friends and communities\n- 💬 **Open an issue** if you have suggestions or want to contribute\n\n## Download Now\n\n🔗 **[github.com/KartikSharma4448/Publicportfolios](https://github.com/KartikSharma4448/Publicportfolios)**\n\nDon't let the lack of a portfolio hold you back. Pick a template, customize it, deploy it — and start showcasing your work to the world. **It's completely free.**\n\n---\n\n*Built with ❤️ by [Kartik Sharma](https://thekartiksharma.in) — Full Stack Developer from Jaipur, India*",
        "date": "2026-07-27",
        "category": "free portfolio templates",
        "tags": [
            "free portfolio templates",
            "open source portfolio",
            "portfolio website",
            "developer portfolio",
            "free website templates",
            "GitHub",
            "HTML CSS templates",
            "web development"
        ],
        "image": "/image.png",
        "author": {
            "name": "Kartik Sharma",
            "avatar": "/profile.png"
        },
        "readTime": "4 min read"
    },
    {
        "id": "blog-vgu-ai-campus-review",
        "title": "Marketing Excellence vs Student Reality: A Critical Review of VGU's Google AI Campus Initiative",
        "slug": "vgu-google-ai-campus-critical-review",
        "excerpt": "A current student's honest analysis comparing VGU's Google AI Campus promotional claims with the actual student experience — examining digital infrastructure, ERP reliability, and the gap between marketing and reality.",
        "content": "# Marketing Excellence vs Student Reality: A Critical Review of VGU's Google AI Campus Initiative\n\n## By a Current Student (Kartik Sharma)\n\n## Introduction\n\nHigher education institutions play a significant role in shaping students' careers and futures. With increasing competition among universities, marketing has become a powerful tool for attracting admissions. While promoting innovation and new initiatives is expected, those claims must accurately reflect the experience students receive.\n\nRecently, Vivekananda Global University (VGU) launched its Google AI Campus initiative, presenting itself as Rajasthan's first Agentic AI campus in collaboration with Google Cloud.\n\n## The Promise\n\nThe official Google AI Campus webpage highlights several ambitious claims: Rajasthan's First Agentic AI Campus, Industry-designed curriculum, Google Cloud integrated education, Hands-on cloud laboratories, AI-powered learning environment, Multiple Google certification pathways, Career-ready graduates.\n\n## The Reality Experienced by Students\n\nBased on my experience, there is a noticeable gap between the promotional image and everyday academic reality. Students frequently experience problems with ERP portal stability, slow response times, server-side failures, login issues, session timeouts, and inconsistent performance during important academic activities.\n\n## Conclusion\n\nArtificial Intelligence has the potential to transform education. However, technology should enhance classrooms, laboratories, research opportunities, digital infrastructure, and student outcomes — not only university marketing. Credibility is built when institutional claims consistently match the student experience.",
        "date": "2026-06-17",
        "category": "vgu",
        "tags": [
            "vgu",
            "google-ai-campus",
            "student-review",
            "education",
            "critical-analysis",
            "rajasthan"
        ],
        "image": "/image.png",
        "author": {
            "name": "Kartik Sharma",
            "avatar": "/profile.png"
        },
        "readTime": "4 min read"
    },
    {
        "id": "5d4ae291-6e84-4446-bec5-37c631b9e2f9",
        "title": "AceHack 5.0 Hackathon Journey — Day 1",
        "slug": "acehack5-day1-hackathon-journey",
        "excerpt": "Today I started my hackathon journey by participating in AceHack 5.0. This is Day 1 of the event and the beginning of an exciting experience.",
        "content": "AceHack 5.0 Hackathon Journey — Day 1\n\nToday I started an exciting experience in my developer journey by participating in AceHack 5.0. This is a 2-day hackathon, and today marks Day 1 of the event.\n\nI am participating in this hackathon with my team Akatsuki. Our team represents VGU Jaipur, and we are excited to build something innovative during this event.",
        "date": "2026-03-06",
        "category": "hackathon",
        "tags": [
            "hackathon",
            "acehack",
            "coding",
            "developers",
            "student journey",
            "tech events"
        ],
        "image": "/image.png",
        "author": {
            "name": "Kartik Sharma",
            "avatar": "/profile.png"
        },
        "readTime": "4 min read"
    },
    {
        "id": "69a7dd41-d324-4a04-a64c-bc2b3e781bbd",
        "title": "Building a Powerful To-Do App: My Productivity Project",
        "slug": "building-powerful-todo-app-project",
        "excerpt": "A complete overview of my To-Do app project where I aimed to create a productivity application that combines the best features of existing task management apps.",
        "content": "Building a Powerful To-Do App: A Complete Productivity System\n\nThe To-Do App is a productivity project I am building to improve how tasks are organized and managed.",
        "date": "2026-03-05",
        "category": "todo-app",
        "tags": [
            "todo-app",
            "productivity",
            "mobile-app",
            "flutter",
            "project",
            "task-management"
        ],
        "image": "/image.png",
        "author": {
            "name": "Kartik Sharma",
            "avatar": "/profile.png"
        },
        "readTime": "4 min read"
    }
],
    softSkills: [
        { name: "Leadership & Team Management", description: "Hackathon team lead & student community organizer." },
        { name: "System Architecture", description: "Designing end-to-end scalable web and mobile platforms." },
        { name: "Problem Solving", description: "Algorithmic thinking and rapid prototyping under pressure." },
        { name: "Cross-Functional Collaboration", description: "Bridging frontend, backend, and AI pipeline teams." }
    ],
    faqs: [
        {
            question: "What is your primary tech stack?",
            answer: "I specialize in Full Stack & MERN development with React/Next.js, FastAPI, Node.js, PostgreSQL, and Flutter for cross-platform apps."
        },
        {
            question: "Are you available for freelance projects or internships?",
            answer: "Yes, I am actively open to high-impact freelance projects, software engineering internships, and full-stack developer roles."
        }
    ],
    gallery: [
        {
            id: "gal-1",
            title: "DevFest Jaipur – Main Auditorium Keynote & Crowd",
            description: "Over 500+ developers, tech enthusiasts and Googlers gathered at Jaipur DevFest celebrating community and technology.",
            date: "2025-12-20",
            type: "image",
            url: "/gallery/devfest-jaipur-auditorium-crowd.jpg",
            category: "conferences"
        },
        {
            id: "gal-2",
            title: "DevFest Jaipur – Tech Sessions & Deep Dives",
            description: "Attending technical keynotes and developer tracks on AI, Cloud, and Web architectures at DevFest Jaipur.",
            date: "2025-12-20",
            type: "image",
            url: "/gallery/devfest-jaipur-session-hall.jpg",
            category: "conferences"
        },
        {
            id: "gal-3",
            title: "DevFest Jaipur – Speaker & Mentor Networking",
            description: "Connecting with GDG leaders, Google Developer Experts (GDEs) and community speakers.",
            date: "2025-12-20",
            type: "image",
            url: "/gallery/devfest-jaipur-speaker-networking.jpg",
            category: "community"
        },
        {
            id: "gal-4",
            title: "DevFest Jaipur – Community Organizers & Mentors",
            description: "Interacting with GDG Jaipur organizers and tech community leaders.",
            date: "2025-12-20",
            type: "image",
            url: "/gallery/devfest-jaipur-community-mentors.jpg",
            category: "community"
        },
        {
            id: "gal-5",
            title: "DevFest Jaipur – Developer Peer Meetup",
            description: "Collaborating with fellow engineers, open source contributors and tech builders.",
            date: "2025-12-20",
            type: "image",
            url: "/gallery/devfest-jaipur-developer-group.jpg",
            category: "community"
        },
        {
            id: "gal-6",
            title: "Industrial Visit to Indian Air Force Station, Jaipur",
            description: "Official university delegation visit to IAF Station Jaipur exploring aerospace and defense communications infrastructure.",
            date: "2025-12-05",
            type: "image",
            url: "/gallery/iaf-station-jaipur-visit.jpg",
            category: "delegation"
        },
        {
            id: "gal-7",
            title: "Snapdragon Multiverse Hackathon – Official Group Photo",
            description: "Grand group photo with all finalist teams, mentors, and executives at Qualcomm Headquarters during the Snapdragon Multiverse Hackathon.",
            date: "2025-09-13",
            type: "image",
            url: "/gallery/snapdragon-multiverse-hackathon-group.jpg",
            category: "hackathons"
        },
        {
            id: "gal-8",
            title: "Snapdragon Multiverse Hackathon – Stage & Keynote",
            description: "Opening keynote and technical briefing on Snapdragon NPU & on-device AI stacks at Qualcomm stage.",
            date: "2025-09-13",
            type: "image",
            url: "/gallery/snapdragon-multiverse-hackathon-stage.jpg",
            category: "hackathons"
        },
        {
            id: "gal-9",
            title: "Qualcomm Headquarters – Building 7",
            description: "Architecture and exterior of Qualcomm Headquarters Building 7, venue of the Snapdragon Multiverse Hackathon.",
            date: "2025-09-13",
            type: "image",
            url: "/gallery/qualcomm-headquarters-building.jpg",
            category: "venue"
        },
        {
            id: "gal-10",
            title: "Snapdragon Multiverse Hackathon – Official Delegate Pass",
            description: "Official delegate badge for Kartik Sharma (Team Aton HOME) at Snapdragon Multiverse Hackathon with OnePlus & Sarvam AI.",
            date: "2025-09-13",
            type: "image",
            url: "/gallery/snapdragon-multiverse-hackathon-badge.jpg",
            category: "hackathons"
        },
        {
            id: "gal-11",
            title: "DevFest Jaipur 2025 – Event Stage & Venue @ RIC",
            description: "Kartik Sharma at Google Developer Groups (GDG) DevFest Jaipur 2025 held at Rajasthan International Centre (RIC).",
            date: "2025-12-20",
            type: "image",
            url: "/gallery/devfest-jaipur-kartik-backdrop.jpg",
            category: "conferences"
        },
        {
            id: "gal-12",
            title: "DevFest Jaipur 2025 – Official Delegate Pass",
            description: "Official GDG DevFest Jaipur 2025 attendee pass (Kartik Sharma, Vivekananda Global University).",
            date: "2025-12-20",
            type: "image",
            url: "/gallery/devfest-jaipur-delegate-pass.jpg",
            category: "conferences"
        },
        {
            id: "gal-13",
            title: "Techno Tarang Hackathon 3.0 – Team Akatsuki Live Sprint",
            description: "Kartik Sharma and Team Akatsuki in intense 24-hour live coding sprint at Techno Tarang Hackathon 3.0, Poornima College of Engineering.",
            date: "2026-04-19",
            type: "image",
            url: "/gallery/hackathon-techno-tarang-team-coding.jpg",
            category: "hackathons"
        },
        {
            id: "gal-14",
            title: "ACEHACK 5.0 – National Hackathon @ UEM Jaipur",
            description: "Kartik Sharma attending ACEHACK 5.0, a premier MLH-partnered national hackathon held at University of Engineering & Management (UEM), Jaipur.",
            date: "2026-03-08",
            type: "image",
            url: "/gallery/hackathon-acehack-5-kartik-booth.jpg",
            category: "hackathons"
        }
    ]
};
