import bridgeImage from "@/assets/proj-bridge.jpg";
import cityImage from "@/assets/proj-city.jpg";
import damImage from "@/assets/proj-dam.jpg";
import waterImage from "@/assets/proj-water.jpg";
import floodImage from "@/assets/proj-flood.jpg";
import watershedImage from "@/assets/proj-watershed.jpg";

export const profile = {
  name: "Roshan Paudel",
  title: "Civil Engineer · Hydrologist · Lecturer",
  email: "rosh.pdl@gmail.com",
  phone: "+977 9841816239",
  location: "Naya Naikap, Chandragiri-14, Kathmandu, Nepal",
  linkedin: "https://np.linkedin.com/in/roshan-paudel-67926baa",
};

export const experience = [
  {
    role: "Lecturer / Research & International Relations Officer",
    org: "Himalayan WhiteHouse International College (Purbanchal University)",
    period: "May 2022 — Present",
    points: [
      "Teach Engineering Hydrology, Water Supply and Hydropower Engineering.",
      "Lead academic and international partnerships.",
      "Deliver leadership and communication courses.",
    ],
  },
  {
    role: "Deputy Head / Lecturer, Department of Civil Engineering",
    org: "Acme Engineering College (Purbanchal University)",
    period: "Nov 2019 — May 2022",
    points: [
      "Ran departmental operations and faculty mentoring.",
      "Taught Hydrology, Hydropower and GIS.",
      "Coordinated the 'Our Dream City' pilot with British Council Nepal.",
    ],
  },
  {
    role: "Civil Engineer (Part-time)",
    org: "Urban Park, Kathmandu",
    period: "Jul 2019 — Present",
    points: [
      "Water supply and sanitary design for residences and a football stadium.",
      "Demand, source and pressure analysis for distribution networks.",
      "Septic tanks, sewage disposal and drainage network design.",
      "Bills of Quantity and cost-effective delivery.",
    ],
  },
  {
    role: "Assistant Lecturer, Department of Civil Engineering",
    org: "Acme Engineering College",
    period: "Jul 2015 — Apr 2017",
    points: [
      "Undergraduate tutorials and laboratory teaching.",
    ],
  },
];

export const projects = [
  {
    title: "Hydrological Study of Bridges in Nepal",
    tag: "Recent · Modelling",
    image: bridgeImage,
    blurb: "Catchment delineation, design flood estimation and scour hydraulics for bridge crossings.",
    stack: ["HEC-RAS", "GIS", "Design Flood"],
  },
  {
    title: "Our Dream City — Pyangaun, Lalitpur",
    tag: "2022–23 · British Council Nepal",
    image: cityImage,
    blurb: "Participatory planning for a more inclusive, water-sensitive settlement.",
    stack: ["Urban Planning", "Participatory Design"],
  },
  {
    title: "Small Storage Structures, Lower Zambesi",
    tag: "M.Sc. Thesis · IHE Delft",
    image: damImage,
    blurb: "Dam stability checks combined with basin-scale hydrological modelling under extremes.",
    stack: ["HEC-HMS", "CADAM", "SWAT"],
  },
  {
    title: "Water & Sanitary Systems — Stadium & Residences",
    tag: "Practice · Urban Park",
    image: waterImage,
    blurb: "Potable water, drainage and sewage design to national standards, with BoQ.",
    stack: ["AutoCAD", "Sanitary Design", "BoQ"],
  },
  {
    title: "Flood Risk & Inundation Mapping",
    tag: "Research theme",
    image: floodImage,
    blurb: "1D/2D hydrodynamic modelling producing inundation and flood-risk maps.",
    stack: ["SOBEK-Rural", "HEC-RAS 2D", "Python"],
  },
  {
    title: "Payment for Ecosystem Services in Nepal",
    tag: "Publication · 2023",
    image: watershedImage,
    blurb: "Co-authored review of global PES practice with policy recommendations for Nepal.",
    stack: ["Policy Research", "Watersheds"],
  },
];

export const skillGroups = [
  {
    group: "Hydrology & Modelling",
    skills: [
      { name: "HEC-RAS (1D/2D)", level: 92 },
      { name: "HEC-HMS", level: 85 },
      { name: "SWAT", level: 75 },
      { name: "SOBEK-Rural", level: 72 },
    ],
  },
  {
    group: "Geospatial & Drafting",
    skills: [
      { name: "GIS for Water Resources", level: 90 },
      { name: "AutoCAD Drafting & Design", level: 88 },
      { name: "Flood Risk Mapping", level: 86 },
      { name: "Python", level: 70 },
    ],
  },
];

export const skillTags = [
  "Engineering Hydrology",
  "Water Supply Design",
  "Sanitary & Drainage Networks",
  "Hydropower Engineering",
  "Gravity Dam Stability (CADAM)",
  "Asset Management",
  "Life Cycle Cost Analysis",
  "Bill of Quantity",
  "MS Office",
];

export const credentials = [
  {
    label: "M.Sc. Water Science & Engineering",
    detail: "IHE Delft, the Netherlands — Hydrology & Water Resources (7.7/10)",
  },
  {
    label: "B.E. Civil Engineering",
    detail: "Thapathali Engineering Campus, Tribhuvan University",
  },
  {
    label: "Nepal Engineering Council",
    detail: "Registered Civil Engineer, 'A' Category — Reg. No. 10715",
  },
  {
    label: "NAAN Joint Secretary",
    detail: "Netherlands Alumni Association of Nepal, 2022 — Present",
  },
];
