import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

type P = SVGProps<SVGSVGElement>;

export const IconCAD = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="14" rx="1.5" />
    <path d="M3 8h18M7 12l3 3M10 12l-3 3M14 12h4M14 15h4" />
    <path d="M8 18v2M16 18v2" />
  </svg>
);
export const IconPrint = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 9V4h12v5" />
    <rect x="3" y="9" width="18" height="8" rx="1.5" />
    <rect x="7" y="14" width="10" height="6" rx="1" />
    <circle cx="17" cy="12" r="0.6" fill="currentColor" />
  </svg>
);
export const IconWifi = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 9a15 15 0 0 1 18 0" />
    <path d="M6 12.5a10 10 0 0 1 12 0" />
    <path d="M9 16a5 5 0 0 1 6 0" />
    <circle cx="12" cy="19.5" r="0.8" fill="currentColor" />
  </svg>
);
export const IconCode = (p: P) => (
  <svg {...base} {...p}>
    <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 5l-4 14" />
  </svg>
);
export const IconChip = (p: P) => (
  <svg {...base} {...p}>
    <rect x="6" y="6" width="12" height="12" rx="1.5" />
    <rect x="9" y="9" width="6" height="6" rx="0.5" />
    <path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3" />
  </svg>
);
export const IconBoard = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="1.5" />
    <circle cx="7" cy="7" r="1" />
    <circle cx="17" cy="7" r="1" />
    <circle cx="7" cy="17" r="1" />
    <circle cx="17" cy="17" r="1" />
    <path d="M7 7h6v4H9v6M17 7v4h-4M9 17h8" />
  </svg>
);
export const IconRobot = (p: P) => (
  <svg {...base} {...p}>
    <rect x="6" y="9" width="12" height="9" rx="1.5" />
    <path d="M12 5v4M10 5h4" />
    <circle cx="9.5" cy="13" r="0.8" fill="currentColor" />
    <circle cx="14.5" cy="13" r="0.8" fill="currentColor" />
    <path d="M3 13v3M21 13v3M9 18v2M15 18v2" />
  </svg>
);
export const IconAI = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.5 5.5l2 2M16.5 16.5l2 2M5.5 18.5l2-2M16.5 7.5l2-2" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);
export const IconAir = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 9h11a3 3 0 1 0-3-3" />
    <path d="M3 14h15a3 3 0 1 1-3 3" />
  </svg>
);
export const IconWeb = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </svg>
);

// methodology icons
export const IconLayers = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 13l9 5 9-5M3 17l9 5 9-5" />
  </svg>
);
export const IconChat = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 5h16v11H8l-4 4V5z" />
    <path d="M8 9h8M8 12h5" />
  </svg>
);
export const IconDoc = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4M9 12h6M9 15h6M9 18h4" />
  </svg>
);
export const IconAlert = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 4l10 17H2L12 4z" />
    <path d="M12 10v5M12 18v.5" />
  </svg>
);
export const IconLoop = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 7v5l3 2" />
  </svg>
);

// awards
export const IconMedal = (p: P) => (
  <svg {...base} {...p}>
    <path d="M8 3l2 6M16 3l-2 6" />
    <circle cx="12" cy="15" r="6" />
    <path d="M12 12v6M9.5 15h5" />
  </svg>
);
export const IconTrophy = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 4h10v4a5 5 0 0 1-10 0V4z" />
    <path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3" />
    <path d="M9 18h6M10 21h4M12 13v5" />
  </svg>
);

export const IconArrow = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconCap = (p: P) => (
  <svg {...base} {...p}>
    <path d="M2 9l10-4 10 4-10 4L2 9z" />
    <path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4" />
  </svg>
);

export const IconHandshake = (p: P) => (
  <svg {...base} {...p}>
    <path d="M2 12l4-4 5 4 2-2 4 4-2 2-4-4-2 2-4-2H2z" />
    <path d="M14 8l3-3 5 5-3 3" />
  </svg>
);

export const IconDot = (p: P) => (
  <svg {...base} {...p} fill="currentColor" stroke="none">
    <circle cx="12" cy="12" r="3" />
  </svg>
);


export const IconGear = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
  </svg>
);

export const IconPeople = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" />
    <path d="M14.5 14c2.7.4 4.5 2.3 4.5 5" />
  </svg>
);

export const IconShare = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="6" cy="12" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <circle cx="18" cy="18" r="2.5" />
    <path d="M8.2 11l7.6-3.7M8.2 13l7.6 3.7" />
  </svg>
);
