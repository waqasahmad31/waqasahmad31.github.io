export const profile = {
  name: 'Waqas Ahmad',
  title: 'Senior Full-Stack .NET & Angular Developer',
  subtitle: 'Technical Team Lead',
  location: 'Islamabad, Pakistan',
  timezone: 'GMT+5',
  availability: 'Open to onsite, remote and relocation · Contract or full-time',
  email: 'iamwaqas31@gmail.com',
  phone: '+92 336 9498664',
  phoneHref: 'tel:+923369498664',
  linkedin: 'https://linkedin.com/in/waqasahmad-dev',
  linkedinLabel: 'in/waqasahmad-dev',
  github: 'https://github.com/waqasahmad31',
  githubLabel: 'github.com/waqasahmad31',
  summary:
    'Senior full-stack developer with 6+ years shipping production web and desktop platforms end-to-end for international clients across the UK, the Gulf and government, currently technical lead for a team of eight. Comfortable across the whole .NET stack — ASP.NET Core, MVC, Web Forms, Blazor and WPF desktop — plus Angular, TypeScript and React on the frontend, and PostgreSQL, SQL Server, MySQL or MongoDB on the data layer, deployed through Docker, Kubernetes and GitLab or Azure DevOps pipelines.',
  summaryTwo:
    'I have delivered platforms across streaming, telehealth, e-learning, travel booking, NFT/Web3 and e-commerce — and currently a national-scale government biometric identity system where I raised enrolment throughput roughly fourfold, to 23,000 records an hour. I work asynchronously across time zones, own features from database schema through UI, and integrate real-time functionality and third-party APIs as a matter of course.',
};

export const impact = [
  {
    figure: '23K/hour',
    label: 'Enrolment throughput on a national identity system — roughly 4× the 4–6K it started at.',
  },
  {
    figure: '16 nodes',
    label: 'Kubernetes footprint I deliver across, spanning Production and Disaster Recovery.',
  },
  {
    figure: 'Team of 8',
    label: 'Engineers I lead — review, releases, production deployments and technical hiring.',
  },
  {
    figure: '6+ years',
    label: 'Shipping production web and desktop platforms for UK, Gulf and government clients.',
  },
];

export const skillGroups = [
  {
    label: 'Backend',
    items: [
      'ASP.NET Core 8',
      'C# / .NET 8',
      'Entity Framework Core',
      'Dapper',
      'REST APIs / Web API',
      'Microservices',
      'Clean Architecture',
      'CQRS',
      'ASP.NET Core Identity',
      'Background job workers',
    ],
  },
  {
    label: 'Frontend & desktop',
    items: [
      'Angular',
      'NgRx / RxJS',
      'TypeScript',
      'React.js',
      'Blazor Server',
      'Blazor WebAssembly',
      'WPF / XAML / MVVM',
      'HTML5 / CSS / Bootstrap',
    ],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MS SQL Server', 'MySQL', 'MongoDB', 'Redis', 'SQLite'],
  },
  {
    label: 'Real-time & messaging',
    items: ['SignalR', 'RabbitMQ', 'Transactional outbox', 'Jitsi Meet', 'Web3.js'],
  },
  {
    label: 'Biometrics',
    items: [
      'MegaMatcher SDK',
      'MegaMatcher Accelerator cluster',
      '1:N deduplication',
      'EFT / ANSI-NIST records',
      'Fingerprint capture SDKs',
      'OCR',
    ],
  },
  {
    label: 'Serverless & cloud',
    items: [
      'AWS Lambda (.NET)',
      'API Gateway',
      'AWS S3',
      'SSM Parameter Store',
      'SendGrid',
      'Stripe',
    ],
  },
  {
    label: 'Machine learning',
    items: ['Microsoft.ML', 'ONNX Runtime', 'In-process model inference'],
  },
  {
    label: 'Node.js',
    items: ['Node.js', 'Express', 'Sequelize', 'Socket.IO', 'Passport', 'Jenkins'],
  },
  {
    label: 'Platform & DevOps',
    items: [
      'Docker',
      'Kubernetes',
      'GitLab CI/CD',
      'Azure DevOps',
      'nginx',
      'Git',
      'OpenTelemetry',
      'Grafana',
      'Polly',
    ],
  },
  {
    label: 'Security',
    items: [
      'Keycloak SSO / MFA',
      'HashiCorp Vault PKI',
      'JWT / OAuth2',
      'AES-256-GCM envelope encryption',
    ],
  },
  {
    label: 'Quality & practice',
    items: [
      'xUnit / NUnit',
      'TDD',
      'Architecture-rule tests',
      'Cypress',
      'NBomber load testing',
      'SOLID / design patterns',
      'Swagger / OpenAPI / Scalar',
      'Agile / Scrum',
    ],
  },
  {
    label: 'Also worked with',
    items: ['ASP.NET MVC', 'ASP.NET Web Forms', 'Windows Forms', 'Third-party API integration'],
  },
];

export const experience = [
  {
    period: 'May 2025 — Present',
    title: 'Senior Full-Stack Software Engineer — Technical Team Lead',
    org: 'Techostudios Pvt Ltd · Consult First IM&T (UK)',
    place: 'Islamabad, Pakistan',
    context: 'Client: national government identity programme',
    notes: [
      'Technical lead for a team of 8 engineers — merge-request review, release and production-deployment ownership, client requirement and project-defence sessions, and technical interviewing.',
      'Raised enrolment throughput from ~4,000–6,000 to 23,000 records an hour (roughly 4×) through request batching, query and index optimisation, and table partitioning — verified in Grafana.',
      'Lead full-stack delivery of ABIS: an ASP.NET Core 8 REST API, WPF and Blazor Server clients, and an Angular import client, deployed across 16 nodes on a client-managed Kubernetes cluster via GitLab CI/CD, spanning Production and Disaster Recovery environments.',
      'Set the security baseline — HashiCorp Vault PKI (AppRole), AES-256-GCM/JWE envelope encryption, Keycloak SSO/MFA — and built the resilient ingestion pipeline with a RabbitMQ producer/consumer, transactional outbox dispatch and lease-based job recovery.',
      'Established quality and observability standards: 44 xUnit test suites including end-to-end, idempotency and architecture-rule tests; OpenTelemetry tracing with OTLP export; and Polly retry and circuit-breaker policies.',
      'Architected CoreFlow, an in-progress enterprise ERP platform — Angular frontend on an OpenAPI/NSwag-generated client, ASP.NET Core API with PostgreSQL and Dapper, Clean Architecture layering, CQRS separation, Redis hybrid caching, transactional outbox and ASP.NET Core Identity.',
      'Own the complete delivery lifecycle — architecture, coding, deployment automation and production support — across distributed teams and time zones.',
    ],
  },
  {
    period: 'April 2024 — June 2025',
    title: 'Full-Stack .NET & Angular Developer',
    org: 'Bingeable Technologies Pvt Ltd',
    place: 'Islamabad, Pakistan',
    context: null,
    notes: [
      'Built Bingeable, a full-stack streaming platform on .NET Core, Angular and AWS S3, from data model through UI.',
      'Built Telemed Health, a telehealth platform with embedded Jitsi Meet video consultation plus pharmacy and lab workflows.',
      'Delivered Bit Online (e-learning), Home Haven (smart-home automation dashboard), CUTC (travel and hotel planner), an NFT marketplace on Web3.js, and an e-commerce platform with inventory management — six distinct products shipped in a single engagement.',
    ],
  },
  {
    period: 'January 2023 — August 2024',
    title: 'Full-Stack .NET & Angular Developer',
    org: 'Arhpez Technologies Pvt Ltd',
    place: 'Islamabad, Pakistan',
    context: 'Concurrent engagement with Bingeable Technologies',
    notes: [
      'Built Juris, a legal case-management platform with SignalR-powered real-time collaboration.',
      'Built JobHunt USA, a recruitment platform with integrated background-verification workflows.',
      'Delivered IntelliDelve, a risk-assessment platform covering 100+ countries, using Angular, .NET Core and SignalR for live status updates across legal, recruitment and risk domains.',
    ],
  },
  {
    period: 'June 2020 — December 2022',
    title: '.NET Developer',
    org: 'Netrex Cloud',
    place: 'Dera Ismail Khan, Pakistan',
    context: null,
    notes: [
      'Built Tharwa (tharwa.om), a meat supply-chain platform for an Oman-based client, using ASP.NET and .NET APIs.',
    ],
  },
];

export const education = [
  {
    degree: 'Master of Science in Computer Science',
    grade: '3.96 GPA',
    school: 'Gomal University, Dera Ismail Khan',
    year: '2023',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    grade: '3.97 GPA',
    school: 'Qurtuba University of Science & Technology, Dera Ismail Khan',
    year: '2020',
  },
];

export const languages = [
  { name: 'Pashto', level: 'Native' },
  { name: 'Urdu', level: 'Native' },
  { name: 'English', level: 'Professional working proficiency' },
];

export type Project = {
  name: string;
  slug?: string;
  href?: string;
  links?: { href: string; label: string }[];
  org: string;
  period: string;
  domain: string;
  summary: string;
  detail: string[];
  stack: string[];
  featured?: boolean;
};

export const projectGroups: { group: string; blurb: string; projects: Project[] }[] = [
  {
    group: 'Current work',
    blurb: 'Platforms I am delivering now as technical lead at Techostudios.',
    projects: [
      {
        name: 'ABIS — national biometric identity system',
        slug: '/work/abis/',
        org: 'Techostudios · national government programme',
        period: '2025 — present',
        domain: 'Government · identity',
        summary:
          'A national-scale biometric enrolment, deduplication and identity platform — three .NET 8 APIs, three field-deployed desktop applications and a load harness. I lead full-stack delivery and took enrolment throughput from 4–6K to over 23,000 records an hour.',
        detail: [
          'The platform is not one application. Three APIs carry the server side — the core web API, a migration API with a MudBlazor operations UI, and a biometric extraction API running in Docker — and three .NET desktop applications sit in front of them for administration, operator enrolment and bulk EFT import.',
          'Identity deduplication is the function the whole system exists for, and it runs 1:N matching against a MegaMatcher Accelerator cluster, with a dedicated deduplication-policy engine and its own test suite deciding what counts as a match.',
          'Biometric records are exchanged in the EFT interchange format through a shared library used by every service, so the format is parsed in one place rather than reimplemented per application. The operator client also does on-device OCR for document capture.',
          'The three desktop applications each ship with an installer and an auto-updater, because they run on machines spread across a country and cannot be redeployed the way a container can. That constraint is also why every endpoint is versioned: a server release must never break a client somebody has not updated yet.',
          'PostgreSQL is authoritative behind EF Core and Npgsql, with S3-compatible object storage for biometric artefacts, and data and metadata sync services keeping field installations current.',
          'Security is layered rather than single-factor: OpenIddict issues and validates tokens, mutual-TLS certificate authentication secures service-to-service calls, HashiCorp Vault PKI with AppRole manages certificates and secrets, AES-256-GCM/JWE envelope encryption protects data at rest, and Keycloak provides SSO and MFA for operators.',
          'The ingestion pipeline is built to be resilient rather than merely fast — a RabbitMQ producer/consumer for back-pressure, transactional outbox dispatch so no event is lost between commit and publish, lease-based job recovery so work claimed by a dead node is reclaimed, and Polly retry and circuit-breaker policies on every external call.',
          'Everything runs across 16 nodes on a client-managed Kubernetes cluster. GitLab CI/CD drives separate pipelines for Test, Production and Disaster Recovery, and the DR environment has to behave identically to Production rather than approximately.',
          'Quality and observability standards are mine: 44 xUnit suites covering end-to-end flows, idempotency and architecture rules, FluentValidation on the request surface, health checks on the database and downstream dependencies, and OpenTelemetry tracing exported over OTLP into Grafana — which is where the throughput work was measured rather than estimated. A purpose-built NBomber harness reproduces production pressure so a change can be tested against load before it meets it.',
        ],
        stack: [
          'ASP.NET Core 8',
          'C# / .NET 8',
          'PostgreSQL',
          'EF Core / Npgsql',
          'WPF',
          'MudBlazor',
          'MegaMatcher SDK',
          'Kubernetes',
          'RabbitMQ',
          'GitLab CI/CD',
          'OpenIddict',
          'Keycloak',
          'HashiCorp Vault',
          'mTLS',
          'S3 storage',
          'NBomber',
          'OpenTelemetry',
        ],
        featured: true,
      },
      {
        name: 'CoreFlow — enterprise ERP platform',
        slug: '/work/coreflow/',
        links: [
          { href: 'https://coreflow-io.netlify.app', label: 'Visit the live product site' },
          { href: 'https://github.com/waqasahmad31/CoreFlow.Marketing', label: 'Site source on GitHub' },
        ],
        org: 'Own product',
        period: '2025 — present',
        domain: 'ERP · B2B SaaS',
        summary:
          'A business ERP for growing SMEs — 24 feature modules across CRM, inventory, sales, procurement, finance, returns, reporting and governance. My own product, architected and built end-to-end on .NET 10 and Angular 22.',
        detail: [
          'CoreFlow targets small and mid-sized companies that have outgrown spreadsheets and a collection of disconnected tools, replacing the manual handoffs between sales, inventory, procurement and finance with one system.',
          'The backend is a .NET 10 controller-based API over seven projects — Api, Application, Contracts, Domain, Infrastructure, Gateway and a dedicated DatabaseMigrator — with dependencies pointing inward only, so a module can be reasoned about and tested without standing up the rest of the system. PostgreSQL 18 is authoritative.',
          'CQRS separates the two workloads that pull in opposite directions: EF Core handles writes and transaction-required reads through the domain model with its invariants, while Dapper serves lists, lookups, dashboards and reports shaped exactly for the screen. A slow report never forces a compromise in the domain model.',
          'The API surface is designed for clients that cannot be redeployed in lockstep: additive `/api/v1` contracts checked against an immutable baseline, opaque concurrency tokens that return a 409 rather than silently overwriting, an `Idempotency-Key` requirement on high-impact operations, and RFC ProblemDetails errors carrying an error code, trace ID and correlation ID.',
          'Angular 22 on TypeScript 6 is the sole frontend, consuming an NSwag-generated client so a backend contract change breaks the build instead of surfacing at runtime in front of a customer. Its runtime configuration is a deployed asset rather than a build-time constant, so an environment can be repointed without rebuilding.',
          'Infrastructure is production-shaped: HybridCache with a Valkey/Redis L2 that also backs Data Protection and the SignalR backplane, S3-compatible object storage, and a migrator that never touches production automatically — it runs a dry-run first and applies only on an explicit flag.',
          'Six test projects cover unit, domain, architecture, contract, API integration and PostgreSQL integration, with Husky hooks running the gate before a commit lands.',
        ],
        stack: [
          '.NET 10',
          'Angular 22',
          'TypeScript 6',
          'PostgreSQL 18',
          'EF Core',
          'Dapper',
          'Valkey / Redis',
          'CQRS',
          'NSwag / OpenAPI',
          'SignalR',
          'S3 storage',
          'Vitest',
          'Astro',
        ],
        featured: true,
      },
    ],
  },
  {
    group: 'Open source',
    blurb: 'Projects where the code itself is public and you can read how I structure a codebase.',
    projects: [
      {
        name: 'HealthCareMS',
        slug: '/work/healthcarems/',
        links: [{ href: 'https://github.com/waqasahmad31/HealthCareMS', label: 'Read the code on GitHub' }],
        org: 'Personal project',
        period: '2025',
        domain: 'Healthcare',
        summary:
          'An enterprise healthcare management platform on .NET 10 — appointments, consultations, e-prescriptions, pharmacy and labs — deliberately built as a well-layered monolith.',
        detail: [
          'Covers the workflows a clinic actually runs on: appointment booking, confirmation, rescheduling and walk-in queueing with slot-conflict checks and live queue boards.',
          'Consultations carry diagnosis with ICD-10 coding, vitals and trends, a waiting room, and online video consultation; e-prescriptions generate PDFs with QR codes and check drugs against the patient’s recorded allergies.',
          'Pharmacy handles a medicine catalogue with FIFO stock batches, expiry and low-stock alerts, bulk import and barcode support. Lab orders are raised from a consultation with summary PDFs written back to the record.',
          'Notifications run over email, SMS and in-app SignalR, with Hangfire handling scheduled reminders. Identity covers users, roles, permissions and permission middleware on a JWT access and refresh flow.',
          'The architectural decision worth explaining is what it is not: these workflows share one patient record and need consistency across it, so splitting them into services would have turned simple transactions into sagas for scaling a clinic will never need.',
          'Six projects — API, Application, Domain, Infrastructure, Blazor and Shared — with the domain kept persistence-agnostic, and 26 test files behind them. Docker Compose brings the whole stack up, so the project actually runs for someone who clones it.',
        ],
        stack: [
          '.NET 10',
          'Blazor WebAssembly',
          'PostgreSQL',
          'EF Core',
          'SignalR',
          'Hangfire',
          'Serilog',
          'Docker',
        ],
        featured: true,
      },
      {
        name: 'enterprise-ngrx-template',
        links: [{ href: 'https://github.com/waqasahmad31/enterprise-ngrx-template', label: 'View on GitHub' }],
        org: 'Personal project',
        period: '2025',
        domain: 'Frontend architecture',
        summary:
          'A production-shaped Angular 21 starter — the setup I would want on day one of a large frontend, rather than what the CLI gives you.',
        detail: [
          'Standalone APIs with lazy feature routes, Angular Material 3, and a complete NgRx Store/Effects/Entity implementation on a worked Users feature rather than a toy counter.',
          'Module boundaries are enforced in ESLint in the style of Nx but without the Nx dependency: a feature may import core, shared and domain, but never another feature. The rule fails the build rather than relying on discipline.',
          'Ships with a mock API as an in-app HTTP interceptor, so the frontend runs and demos with no backend at all, and switches to a real API through configuration.',
          'Includes SSR via Angular’s server output mode, auth with a refresh flow and token interceptor, Vitest for unit tests and Playwright for end-to-end smoke tests.',
        ],
        stack: ['Angular 21', 'NgRx', 'TypeScript', 'Angular Material', 'SSR', 'Vitest', 'Playwright'],
      },
      {
        name: 'MicroShop',
        links: [{ href: 'https://github.com/waqasahmad31/MicroShop', label: 'View on GitHub' }],
        org: 'Personal project',
        period: '2025 — in progress',
        domain: 'Microservices',
        summary:
          'A .NET 10 microservices reference build, worked through in phases — the counterpart to HealthCareMS, where splitting into services is the point rather than the mistake.',
        detail: [
          'Service-per-database across five services — Identity, Catalog, Inventory, Ordering and Notification — with a YARP gateway in front, a shared BuildingBlocks project for cross-cutting concerns, and a Blazor WebAssembly client.',
          'EF Core handles commands and Dapper handles read projections; HTTP calls and integration events cross service boundaries, while SQL queries and domain entities never do.',
          'Ordering and Inventory exchange integration events over RabbitMQ, with Notification consuming downstream.',
          'Built and documented in phases with an explicit architecture plan, so the reasoning behind each step is on record rather than implied.',
        ],
        stack: ['.NET 10', 'Blazor', 'PostgreSQL', 'YARP', 'RabbitMQ', 'EF Core', 'Dapper', 'Docker'],
      },
      {
        name: 'Ecommerce_Angular_DotNetCore',
        links: [{ href: 'https://github.com/waqasahmad31/Ecommerce_Angular_DotNetCore', label: 'View on GitHub' }],
        org: 'Personal project',
        period: '2023',
        domain: 'E-commerce',
        summary:
          'A full-stack storefront on .NET Core 7 and Angular, built on the Generic Repository and Specification pattern.',
        detail: [
          'Product catalogue with categories and search, shopping cart and order processing, user profile management, and an admin panel for products and orders.',
          'Authentication and authorisation on JWT, with EF Core over SQL Server behind a generic repository and specification layer that keeps query construction out of the controllers.',
          'Payment integration through an external gateway.',
        ],
        stack: ['.NET Core 7', 'Angular', 'EF Core', 'SQL Server', 'JWT', 'Bootstrap'],
      },
    ],
  },
  {
    group: 'Client platforms',
    blurb:
      'Products delivered for clients. The code is client-owned and private, so these are described by what they do and how they were built.',
    projects: [
      {
        name: 'Bingeable',
        org: 'Bingeable Technologies',
        period: '2024 — 2025',
        domain: 'Streaming / media',
        summary:
          'A full-stack streaming platform with subscription payments and social sign-in, built from the data model through to the UI across three separate Angular applications.',
        detail: [
          'A .NET 8 API over SQL Server with JWT, plus OAuth and Twitter authentication so viewers could sign in with an account they already had.',
          'Stripe handles subscription and payment flows on both sides — Stripe.net on the API and Stripe.js in the client.',
          'Three Angular 16 applications rather than one: the viewer-facing site, a separate admin console, and a standalone password-reset app, each with its own deployment.',
          'Containerised behind nginx with separate Azure DevOps pipelines for development and production, and AWS Systems Manager Parameter Store holding configuration.',
        ],
        stack: [
          '.NET 8',
          'Angular 16',
          'Stripe',
          'OAuth',
          'SQL Server',
          'AWS S3',
          'Docker / nginx',
          'Azure DevOps',
        ],
      },
      {
        name: 'Telemed Health',
        org: 'Bingeable Technologies',
        period: '2024 — 2025',
        domain: 'Telehealth',
        summary:
          'A telehealth platform with embedded video consultation, pharmacy and lab workflows — and on-server machine-learning inference suggesting likely conditions from reported symptoms.',
        detail: [
          'The backend is a layered .NET 8 solution — API, data access, models and utilities as separate projects — with EF Core over SQL Server, ASP.NET Core Identity and JWT.',
          'It runs ML inference in-process through Microsoft.ML and the ONNX Runtime, backed by a set of trained symptom and health models, so condition suggestions are served by the API rather than a separate Python service.',
          'FuzzySharp handles approximate matching where clinical input is typed rather than selected — symptom and drug names people spell differently.',
          'Video consultation is embedded through Jitsi Meet rather than bolted on as an external link, so the consultation stays inside the patient record, and SignalR carries live consultation state.',
          'Angular 18 frontend with an NgRx store, deployed as a container behind nginx through Azure DevOps pipelines, with AWS S3 for document and media storage.',
        ],
        stack: [
          '.NET 8',
          'Angular 18',
          'Microsoft.ML',
          'ONNX Runtime',
          'SignalR',
          'Jitsi Meet',
          'EF Core',
          'AWS S3',
          'Docker',
        ],
      },
      {
        name: 'Bit Online',
        org: 'Bingeable Technologies',
        period: '2024 — 2025',
        domain: 'E-learning',
        summary:
          'An online learning platform — course delivery with a separate administration console for authoring and enrolment.',
        detail: [
          'A .NET 8 learning API on EF Core with ASP.NET Core Identity for accounts and roles, running against both MySQL (through Pomelo) and SQL Server.',
          'Two Angular 16 applications: the learner-facing site and a separate admin console, so authoring never shares a deployment with student traffic.',
          'Containerised with its own Dockerfile and shipped through Azure DevOps pipelines, the same delivery pattern used across the engagement.',
        ],
        stack: ['.NET 8', 'Angular 16', 'EF Core', 'ASP.NET Core Identity', 'MySQL', 'Docker'],
      },
      {
        name: 'Home Haven',
        org: 'Bingeable Technologies',
        period: '2024 — 2025',
        domain: 'IoT / smart home',
        summary:
          'A smart-home automation dashboard — live device state over SignalR, with an Angular 19 SSR frontend that keeps working when the connection does not.',
        detail: [
          'Device state is pushed over SignalR rather than polled, because a home dashboard that reports a light as on for thirty seconds after it was switched off is worse than no dashboard.',
          'The .NET 8 API uses EF Core over MySQL and SQL Server, in-memory caching on the hot read path, AWS S3 for media, and SendGrid with MailKit for notification email.',
          'The Angular 19 frontend is server-side rendered and holds an NgRx store, with IndexedDB for local persistence so the dashboard survives a reload or a dropped connection.',
          'Rich editing and media handling through Quill and an image cropper, behind nginx in a container, deployed via Azure DevOps.',
        ],
        stack: [
          '.NET 8',
          'Angular 19 SSR',
          'SignalR',
          'NgRx',
          'IndexedDB',
          'EF Core',
          'AWS S3',
          'SendGrid',
          'Docker / nginx',
        ],
      },
      {
        name: 'CUTC — credit union onboarding &amp; travel',
        org: 'Bingeable Technologies',
        period: '2024 — 2025',
        domain: 'Fintech · serverless',
        summary:
          'A credit union onboarding platform built as thirteen AWS Lambda functions, alongside a hotel and travel planner for member benefits. The most architecturally distinct system I have worked on.',
        detail: [
          'The onboarding backend is serverless rather than a service: thirteen .NET 8 Lambda functions behind API Gateway, each owning one operation — sign-up, credit-union create/edit/get/get-by-id, configuration lookups for documents and states, and mail generation.',
          'Security is its own function suite — authenticate, authorize, auth-bridge, refresh and logout as separate Lambdas — so an auth change deploys without touching business endpoints, and a fault in one is contained to it.',
          'Configuration and secrets come from AWS Systems Manager Parameter Store rather than deployed files, which is what makes a function fleet this size manageable across environments.',
          'Two conventional ASP.NET Core APIs sit alongside the functions for the work that genuinely wanted a long-lived process, over MySQL, with xUnit test projects on the Lambda side.',
          'Angular 16 frontends for both the onboarding flow and the hotel planner, containerised and deployed through Azure DevOps pipelines.',
        ],
        stack: [
          '.NET 8',
          'AWS Lambda',
          'API Gateway',
          'SSM Parameter Store',
          'Angular 16',
          'MySQL',
          'xUnit',
          'Docker',
          'Azure DevOps',
        ],
      },
      {
        name: 'NFT marketplace',
        org: 'Bingeable Technologies',
        period: '2024 — 2025',
        domain: 'Web3',
        summary: 'An NFT marketplace with on-chain interaction through Web3.js.',
        detail: [
          'Angular 18 with server-side rendering, talking to the chain through both web3.js 4 and ethers 6 — two libraries because wallet support and contract ergonomics are not the same problem.',
          'The interesting part of Web3 work is that the chain is a dependency you cannot retry your way out of: a transaction is pending, confirmed or lost, and the UI has to represent all three honestly rather than pretending a spinner will resolve it.',
        ],
        stack: ['Angular 18 SSR', 'web3.js', 'ethers.js', 'TypeScript'],
      },
      {
        name: 'E-commerce platform with inventory management',
        org: 'Bingeable Technologies',
        period: '2024 — 2025',
        domain: 'E-commerce',
        summary: 'An e-commerce platform with integrated inventory management.',
        detail: [
          'Storefront and order flow with inventory management behind it, on .NET Core and Angular.',
        ],
        stack: ['.NET Core', 'Angular', 'SQL'],
      },
      {
        name: 'Juris',
        org: 'Arhpez Technologies',
        period: '2023 — 2024',
        domain: 'Legal tech',
        summary:
          'A legal case-management platform with real-time collaboration, so several people can work a case without stepping on each other.',
        detail: [
          'The platform is an ASP.NET MVC application with ASP.NET Identity, a separate model project and its own database project, built on the .NET Framework stack the client already ran.',
          'SignalR carries the real-time collaboration — case updates propagate to everyone viewing rather than appearing on the next refresh.',
          'Case management in a legal context means an audit trail matters as much as the feature itself: who changed what, and when, is part of the product rather than a logging concern.',
        ],
        stack: ['ASP.NET MVC', 'SignalR', 'ASP.NET Identity', 'SQL Server'],
      },
      {
        name: 'JobHunt USA',
        org: 'Arhpez Technologies',
        period: '2023 — 2024',
        domain: 'Recruitment',
        summary:
          'A recruitment platform with paid placements and background-verification workflows built into the hiring pipeline.',
        detail: [
          'A .NET 6 solution split into six projects — API, business logic, data access, models, utilities and a dedicated JWT auth manager — so authentication and payment concerns each had a boundary rather than living in controllers.',
          'Payments are their own project on Stripe.net, which is what you want when billing rules change independently of the hiring flow.',
          'Background verification is a multi-stage, externally-dependent process, so the pipeline had to model states that can sit pending for days and resume cleanly rather than assuming a response arrives within a request.',
          'Documented with Swagger annotations and filters, with the SPA served through ASP.NET Core SPA services.',
        ],
        stack: ['.NET 6', 'Stripe', 'JWT', 'Swagger / OpenAPI', 'SQL Server', 'SPA services'],
      },
      {
        name: 'IntelliDelve',
        org: 'Arhpez Technologies',
        period: '2023 — 2024',
        domain: 'Risk & compliance',
        summary:
          'A risk-assessment platform covering more than 100 countries, with live status updates across legal, recruitment and risk domains.',
        detail: [
          'Coverage across 100+ countries means jurisdiction-specific rules and data sources, rather than one process with a country field.',
          'A .NET 5 solution layered into API, business logic, data context, data access and shared projects, with Dapper on the read path where assessment queries had to stay fast across large result sets.',
          'BCrypt for credential hashing, JWT for access, and NLog writing structured logs — a compliance product is asked to account for itself, so logging is a feature rather than an afterthought.',
          'An Angular 15 client served from the API host, with live status pushed as checks resolve so a user watching a long-running assessment sees progress instead of polling.',
        ],
        stack: ['.NET 5', 'Angular 15', 'Dapper', 'JWT', 'BCrypt', 'NLog', 'SignalR'],
      },
      {
        name: 'Aqarcoo',
        org: 'Arhpez Technologies',
        period: '2023 — 2024',
        domain: 'Real estate',
        summary:
          'A property listing and search platform, server-side rendered so listings are indexable and load fast on the first visit.',
        detail: [
          'Angular 14 with platform-server SSR. For a listings site that is not a preference — a property nobody can find in search results may as well not be listed, and SSR is what makes each listing a real indexable page.',
          'Media-heavy by nature: embedded video, file upload handling, paginated result sets and progress indication on slow connections.',
          'SSR-aware cookie handling so session state survives the handoff from server render to client hydration.',
        ],
        stack: ['Angular 14', 'SSR', 'TypeScript', 'SEO'],
      },
      {
        name: 'Meggafone',
        org: 'Arhpez Technologies',
        period: '2023 — 2024',
        domain: 'Telecom',
        summary:
          'A telecom platform with a separate .NET administration portal, and the engagement where end-to-end testing was part of the delivery rather than an afterthought.',
        detail: [
          'The admin portal is ASP.NET Core 5 serving an Angular SPA, with JWT authentication and EF Core over SQL Server.',
          'Development and UAT ran as separate tracked environments, so what the client reviewed was never the branch someone was mid-change on.',
          'Cypress covered the end-to-end paths. On a product where a regression means a customer cannot complete an action, a browser-level test catches what a unit test structurally cannot.',
        ],
        stack: ['.NET 5', 'Angular', 'EF Core', 'SQL Server', 'JWT', 'Cypress'],
      },
      {
        name: 'Teamway',
        org: 'Arhpez Technologies',
        period: '2023 — 2024',
        domain: 'Collaboration',
        summary:
          'A Node.js backend with real-time messaging, SMS delivery and push notifications — the engagement where I worked outside the .NET stack.',
        detail: [
          'Express on Node.js with Sequelize over MySQL, rather than EF Core over SQL Server. Worth naming because the architectural instincts transfer but the idioms do not, and knowing where the seams differ is most of what makes a second stack useful.',
          'Socket.IO for real-time messaging, Twilio for SMS, and Firebase Admin for push notifications to devices.',
          'Passport with JWT for authentication, Multer for uploads, and a Jenkins pipeline with scripted database backup steps.',
        ],
        stack: ['Node.js', 'Express', 'Sequelize', 'MySQL', 'Socket.IO', 'Twilio', 'Jenkins'],
      },
      {
        name: 'Aid Alert',
        org: 'Arhpez Technologies',
        period: '2023 — 2024',
        domain: 'Alerting / emergency response',
        summary:
          'An alerting service on Node.js — real-time dispatch with push notification delivery, where late is the same as never.',
        detail: [
          'Express on Node.js in a conventional layered shape: routes, controllers, services, models and validators as separate concerns rather than logic in route handlers.',
          'Socket.IO for live alert dispatch and Firebase Admin for push, because an alert that arrives only when the app is open is not an alert.',
          'Passport with JWT for authentication, and a Jenkins pipeline for delivery.',
        ],
        stack: ['Node.js', 'Express', 'Socket.IO', 'Firebase', 'JWT', 'Jenkins'],
      },
      {
        name: 'Tharwa',
        links: [{ href: 'https://tharwa.om', label: 'tharwa.om' }],
        org: 'Netrex Cloud',
        period: '2020 — 2022',
        domain: 'Supply chain',
        summary:
          'A meat supply-chain platform for an Oman-based client — my first production system for an international client.',
        detail: [
          'Built on ASP.NET and .NET APIs, covering the supply-chain flow for a Gulf-market client.',
          'Live at tharwa.om.',
        ],
        stack: ['ASP.NET', '.NET APIs', 'SQL Server'],
      },
    ],
  },
];

export const allProjects = projectGroups.flatMap((g) => g.projects);
export const featuredProjects = allProjects.filter((p) => p.featured);
