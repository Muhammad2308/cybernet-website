export const SOLUTIONS_DATA = {
  shago: {
    id: "shago",
    title: "SHAGO Platform",
    subtitle: "B2B/B2C Metro eCommerce & Supply Chain Ecosystem",
    path: "/solutions/shago",
    category: "Metro Commerce & Logistics",
    badge: "Enterprise Logistics Standard",
    heroImage: "/assets/shago_banner.png",
    accentColor: "from-purple-600 to-indigo-600",
    description: "High-throughput sovereign digital commerce and fulfillment engine connecting wholesale merchants, metropolitan logistics nodes, and retail buyers with real-time financial reconciliation.",
    stats: [
      { label: "Daily Processing Volume", value: "₦2.4B+" },
      { label: "Zone Fulfillment SLA", value: "< 90 Mins" },
      { label: "Active Merchant Nodes", value: "45,000+" },
      { label: "Reconciliation Accuracy", value: "99.999%" }
    ],
    coreModules: [
      {
        id: "autonomous-reorder",
        title: "Autonomous Reordering Engine",
        icon: "RefreshCw",
        desc: "Location-aware predictive supply forecasting automatically triggers wholesale inventory replenishment based on point-of-sale velocity and seasonal demand curves."
      },
      {
        id: "zone-logistics",
        title: "Shared Zone Logistics Network",
        icon: "Truck",
        desc: "Decentralized last-mile fulfillment nodes using algorithmic dynamic dispatch to group shipments into hyper-local zones, driving down freight overhead."
      },
      {
        id: "in-market-processing",
        title: "In-Market Processing & Clearing",
        icon: "DollarSign",
        desc: "Multi-point transactional accountability with sub-second escrow settlements, automated tax splits, and instant vendor liquidity."
      },
      {
        id: "inventory-telemetry",
        title: "Real-Time Stock Telemetry",
        icon: "BarChart3",
        desc: "RFID and barcode level tracking across urban warehouses with automated anomaly detection for shrinkage prevention."
      }
    ],
    architecture: {
      framework: "Event-Driven Microservices (Kafka / Redis Streams)",
      latency: "< 45ms transaction processing",
      security: "AES-256 ledger encryption, PCI-DSS Level 1 compliance",
      database: "Distributed Cassandra & PostgreSQL clusters with read-replicas"
    },
    useCases: [
      "Metropolitan FMCG Wholesale Distribution",
      "Urban Micro-Fulfillment Hub Management",
      "Inter-State Bulk Produce Clearing",
      "Automated Retail Kiosk Inventory Sync"
    ]
  },
  rido: {
    id: "rido",
    title: "Rido Mobility",
    subtitle: "Intelligent Urban Mobility & Fleet Oversight Platform",
    path: "/solutions/rido",
    category: "Smart Transport & Telemetry",
    badge: "Urban Transit OS",
    heroImage: "/assets/rido_banner.png",
    accentColor: "from-amber-500 to-yellow-600",
    description: "Enterprise transit telemetry engine powering dynamic driver dispatch, real-time vehicle tracking, automated route optimization, and multi-asset fleet revenue distribution.",
    stats: [
      { label: "Active Fleet Vehicles", value: "120,000+" },
      { label: "Dispatch Response Time", value: "< 1.2s" },
      { label: "Monthly Commutes", value: "18.5M+" },
      { label: "Safety Alert Latency", value: "< 250ms" }
    ],
    coreModules: [
      {
        id: "dynamic-dispatch",
        title: "Low-Latency Dynamic Dispatch",
        icon: "Zap",
        desc: "Geospatial indexing engine using H3 spatial algorithms to instantly pair commuter requests with optimal nearby drivers based on traffic telemetry."
      },
      {
        id: "live-gps",
        title: "Live Telemetry & Navigation",
        icon: "Navigation",
        desc: "High-precision vector route guidance integrated with vehicle diagnostic sensors for immediate speed, tilt, and route deviation alerts."
      },
      {
        id: "fleet-dashboard",
        title: "Corporate Fleet Command Center",
        icon: "LayoutDashboard",
        desc: "Multi-vehicle telemetry oversight dashboard displaying vehicle health, fuel efficiency, driver performance rating, and automated revenue splits."
      },
      {
        id: "emergency-sos",
        title: "Emergency Response Gateway",
        icon: "ShieldAlert",
        desc: "Direct integration with municipal emergency dispatch centers for one-touch driver/rider distress escalation with live audio stream broadcasting."
      }
    ],
    architecture: {
      framework: "WebSockets + gRPC Streaming Pipeline",
      latency: "Sub-second bidirectional telemetry updates",
      security: "End-to-end trip token encryption & biometric driver verification",
      database: "TimescaleDB geospatial time-series database"
    },
    useCases: [
      "State Transit Authority Taxi & Bus Modernization",
      "Corporate Executive Fleet Monitoring",
      "Inter-City Express Logistics Dispatch",
      "Logistics Dispatch Driver Verification"
    ]
  },
  isms: {
    id: "isms",
    title: "ISMS / SmartSchool",
    subtitle: "Integrated Academic & Administrative Management System",
    path: "/solutions/isms",
    category: "EdTech & Governance",
    badge: "National Academic Registry Standard",
    heroImage: "/assets/isms_banner.png",
    accentColor: "from-blue-600 to-cyan-500",
    description: "Unified digital education governance infrastructure for primary, secondary, and tertiary institutions—streamlining anti-fraud academic grading, paperless fee clearing, and real-time parent engagement.",
    stats: [
      { label: "Enrolled Students", value: "2.8M+" },
      { label: "Partner Institutions", value: "1,450+" },
      { label: "Automated Fee Volume", value: "₦14.2B" },
      { label: "Grade Verification Time", value: "Instant" }
    ],
    coreModules: [
      {
        id: "anti-fraud-records",
        title: "Centralized Academic Registry",
        icon: "FileCheck",
        desc: "Cryptographically verified academic transcript vault preventing mark manipulation and unauthorized grade alterations with immutable audit logs."
      },
      {
        id: "paperless-governance",
        title: "Paperless Financial Governance",
        icon: "CreditCard",
        desc: "Automated tuition clearing payment engine with split settlement capabilities for state educational levies, bursaries, and institutional accounts."
      },
      {
        id: "parent-portal",
        title: "Parent-Teacher Engagement Portal",
        icon: "Users",
        desc: "Real-time SMS and mobile app notifications tracking student attendance, continuous assessment scores, homework submissions, and behavioral alerts."
      },
      {
        id: "cbt-engine",
        title: "Proctored Computer-Based Testing",
        icon: "Laptop",
        desc: "Offline-resilient examination module supporting offline test delivery, automated grading, and AI anti-cheating facial monitoring."
      }
    ],
    architecture: {
      framework: "Micro-frontend Architecture with PWA Support",
      latency: "< 100ms offline exam sync",
      security: "Cryptographic hash chain verification for transcripts",
      database: "PostgreSQL with multi-tenant schema isolation"
    },
    useCases: [
      "State Ministry of Education Unified Portal",
      "Tertiary Institution Transcript Automation",
      "Private School Network Financial Governance",
      "National Standardized Examination Monitoring"
    ]
  },
  "med-x": {
    id: "med-x",
    title: "MED-X Ecosystem",
    subtitle: "Sovereign Healthcare Information & Claims Platform",
    path: "/solutions/med-x",
    category: "Digital Health & EMR",
    badge: "HIPAA / Sovereign Health Compliant",
    heroImage: "/assets/medx_banner.png",
    accentColor: "from-emerald-600 to-teal-500",
    description: "Mission-critical sovereign healthcare operating framework unifying Electronic Medical Records (EMR), automated HMO/State Health Insurance claims vetting, and confidential health analytics.",
    stats: [
      { label: "Patient Records Vault", value: "8.5M+" },
      { label: "Claims Vetting Speed", value: "< 3 Secs" },
      { label: "HMO & Hospital Nodes", value: "820+" },
      { label: "Data Leakage Rate", value: "0.00%" }
    ],
    coreModules: [
      {
        id: "unified-emr",
        title: "Unified Electronic Medical Records",
        icon: "HeartPulse",
        desc: "Interoperable patient history registry allowing authenticated medical personnel to access lifelong medical histories with patient consent key protocols."
      },
      {
        id: "claims-vetting",
        title: "Automated Claims Vetting Engine",
        icon: "ShieldCheck",
        desc: "Algorithmic audit rule engine comparing diagnostic codes against treatments to eliminate fraudulent insurance billing and speed up HMO disbursements."
      },
      {
        id: "data-sovereignty",
        title: "Sovereign Encrypted Storage",
        icon: "Lock",
        desc: "Strict adherence to national health data regulations with local air-gapped encryption key management ensuring zero foreign data leakage."
      },
      {
        id: "telemedicine-node",
        title: "Rural Tele-Health Gateway",
        icon: "Stethoscope",
        desc: "Low-bandwidth video consultation and remote vitals telemetry bridging top specialist care to remote primary healthcare centers."
      }
    ],
    architecture: {
      framework: "HL7 / FHIR compliant RESTful API",
      latency: "Real-time claims validation",
      security: "Zero-Trust Attribute Based Access Control (ABAC)",
      database: "Encrypted PostgreSQL with HSM Hardware Security Modules"
    },
    useCases: [
      "State Universal Health Coverage Schemes",
      "Multi-Specialty Hospital Network EMR",
      "HMO Algorithmic Fraud Prevention",
      "National Disease Telemetry & Epidemic Warning"
    ]
  },
  "sok-ipcrs": {
    id: "sok-ipcrs",
    title: "SOK-IPCRS Registry",
    subtitle: "Intelligent Policing & Crime Record System",
    path: "/solutions/sok-ipcrs",
    category: "National Security & Defense",
    badge: "Mission-Critical Law Enforcement Standard",
    heroImage: "/assets/sok_ipcrs_banner.png",
    accentColor: "from-red-600 to-purple-800",
    description: "Sovereign master criminal database and field tactical intelligence suite enabling rapid biometric identification, law enforcement interoperability, and instant emergency response.",
    stats: [
      { label: "Criminal Profiles Indexed", value: "1.2M+" },
      { label: "Field Query Response", value: "< 400ms" },
      { label: "Biometric Matching Accuracy", value: "99.98%" },
      { label: "Tactical Patrol Units Connected", value: "15,000+" }
    ],
    coreModules: [
      {
        id: "sovereign-crc",
        title: "Sovereign Master Criminal Registry (S-CRC)",
        icon: "Database",
        desc: "High-security centralized repository storing 10-print finger scans, facial vectors, DNA markers, active warrants, and modus operandi profiles."
      },
      {
        id: "tactical-mobile",
        title: "Field Tactical Mobile Application",
        icon: "Smartphone",
        desc: "Low-bandwidth handheld tool allowing patrol officers at highway checkpoints to execute instant facial match or fingerprint lookups in sub-second time."
      },
      {
        id: "citizen-sos",
        title: "Geofenced Citizen SOS Alert System",
        icon: "AlertTriangle",
        desc: "Public safety signaling app enabling distressed citizens to dispatch encrypted location telemetry directly to the nearest active tactical command car."
      },
      {
        id: "forensic-analytics",
        title: "Predictive Crime Mapping",
        icon: "Radar",
        desc: "Spatial pattern analysis engine identifying emerging crime hotspots to optimize police patrol route allocation and tactical resource deployment."
      }
    ],
    architecture: {
      framework: "Tactical Military-Grade Mesh API Gateway",
      latency: "< 400ms mobile field lookup over 3G/4G",
      security: "FIPS 140-3 Encryption, Air-Gapped Master Nodes",
      database: "Distributed Vector Search Engine + Graph Database"
    },
    useCases: [
      "State Police Command Central Database",
      "Border Control & Highway Patrol Checkpoint Verification",
      "Inter-Agency Security Intelligence Sharing",
      "Rapid Incident Emergency Dispatch Operations"
    ]
  }
};
