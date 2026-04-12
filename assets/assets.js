import user_image from "./user-image.jpg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import canva from "./canva.png";
import figma from "./figma.png";
import git from "./git.png";
import davinci_resolve from "./davinci_resolve.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./huhu.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import video_icon from "./video-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import download_white from "./download_white.png";
import right_arrow_dark_contact from "./right-arrow-dark-contact.png";
import web_development from "./web_development.jpg";
import mobile_app from "./mobile_app.jpg";
import ui_ux_design from "./ui_ux_design.avif";
import graphics_design from "./graphics_design.jpg";
import return_black from "./return_black.png";
import return_white from "./return_white.png";
import github from "./github.png";
import linkedin from "./linkedin.png";
import instagram from "./instagram.png";
import facebook from "./facebook.png";
import twitter from "./twitter.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  canva,
  figma,
  git,
  davinci_resolve,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  video_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  download_white,
  right_arrow_dark_contact,
  web_development,
  mobile_app,
  ui_ux_design,
  graphics_design,
  return_black,
  return_white,
  github,
  linkedin,
  instagram,
  facebook,
  twitter,
};

export const workData = [
  {
    title: "FinTrack",
    description: "Finance Tracker",
    bgImage: "/work-1.png",
    bgPos: "center top",
    link: "https://fin-track-next.vercel.app/",
    tag: "Web Development",
  },
  {
    title: "Oasis Watch",
    description: "Movie Site",
    bgImage: "/work-2.png",
    link: "",
    tag: "Web Development",
  },
  {
    title: "Video Projects",
    description: "Video Editing",
    bgImage: "/work-3.png",
    link: "",
    tag: "Video Editing",
  },
  {
    title: "Graphics designing",
    description: "Graphics Design",
    bgImage: "/work-4.png",
    link: "",
    tag: "Graphics Design",
  },
];

export const serviceData = [
  {
    slug: "web-design",
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    detailedDescription: "Transform your ideas into robust, scalable, and visually stunning websites. From single-page applications to complex platforms, I use industry-leading frameworks like Next.js and React to deliver seamless digital experiences.",
    stats: { rating: "5.0", label: "(50+) successful projects", enrolled: "5+ Years Experience" },
    tools: [assets.vscode, assets.git],
    features: [
      { title: "20+ Projects", subtitle: "Live Implementations" },
      { title: "1-2 Months", subtitle: "Average Delivery Time" },
      { title: "Responsive", subtitle: "Mobile-first Approach" }
    ],
    image: assets.web_development,
    tag: "Web Development"
  },
  {
    slug: "video-editing",
    icon: assets.video_icon,
    title: "Video Editing",
    description:
      "Professional video editing services using Premiere Pro and DaVinci Resolve...",
    detailedDescription: "Learn professional video editing from scratch using industry-standard tools like DaVinci Resolve to create cinematic and engaging videos. I offer high-quality editing, color grading, and audio syncing.",
    stats: { rating: "4.9", label: "(30+) reviews", enrolled: "100% Client Satisfaction" },
    tools: [assets.davinci_resolve],
    features: [
      { title: "15+ Videos", subtitle: "Edited & Delivered" },
      { title: "7 Days", subtitle: "Standard Turnaround" },
      { title: "4K Quality", subtitle: "Export Resolution" }
    ],
    image: assets.mobile_app, 
    tag: "Video Editing"
  },
  {
    slug: "ui-ux",
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    detailedDescription: "Creating intuitive interfaces and engaging user experiences. I conduct research, draw wireframes, and design high-fidelity prototypes to ensure your product is logical, beautiful, and user-friendly.",
    stats: { rating: "4.8", label: "(20+) happy clients", enrolled: "3+ Years Experience" },
    tools: [assets.figma],
    features: [
      { title: "10+ Prototypes", subtitle: "Designed from scratch" },
      { title: "1-3 Weeks", subtitle: "Concept Delivery" },
      { title: "User-Centric", subtitle: "Design Process" }
    ],
    image: assets.ui_ux_design,
    tag: "UI/UX Design"
  },
  {
    slug: "graphics-design",
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    detailedDescription: "Elevate your brand with eye-catching graphics. I specialize in designing logos, marketing materials, social media posts, and brand identities that leave a lasting impression.",
    stats: { rating: "5.0", label: "(40+) reviews", enrolled: "Creative Excellence" },
    tools: [assets.canva, assets.figma],
    features: [
      { title: "50+ Designs", subtitle: "Created for clients" },
      { title: "3 Days", subtitle: "Quick Delivery" },
      { title: "Vector / Raster", subtitle: "Multiple Formats delivered" }
    ],
    image: assets.graphics_design,
    tag: "Graphics Design"
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages & Tools",
    description:
      "HTML, CSS, JavaScript, React Js, Next Js, Figma, DaVinci Resolve",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Bachelors in Computer Application(BCA)",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.davinci_resolve,
  assets.figma,
  assets.canva,
  assets.git,
];

export const socialLinks = [
  {
    icon: assets.github,
    link: "https://github.com/parzavel-7",
  },
  {
    icon: assets.linkedin,
    link: "https://www.linkedin.com/in/suraj-ganesh-8313532aa/",
  },
  {
    icon: assets.instagram,
    link: "https://www.facebook.com/suraj.ganesh.50",
  },
  {
    icon: assets.facebook,
    link: "https://www.facebook.com/suraj.ganesh.50",
  },
  {
    icon: assets.twitter,
    link: "https://x.com/Parzavel568",
  },
];
