import React from "react";

export const getImgUrl = (name) => new URL(`./img/${name}`, import.meta.url).href;

export const HERO_SLIDES = [
  {
    id: 1,
    title: <>WELCOME TO <span className="highlight">ONE</span>PAGER</>,
    subtitle: "We design and develop awesome websites and smart applications, impactful identities using the latest technologies.",
    btnText: "LEARN MORE"
  },
  {
    id: 2,
    title: <>WE ARE GREAT <span className="bold">COMPANY</span></>,
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    btnText: "LEARN MORE"
  },
  {
    id: 3,
    title: <> <span className="highlight">ONE</span>PAGER IS VERY SUITABLE</>,
    subtitle: "Duis aute irure dolor in reprehenderit in voluptate velit esse, consectetur adipisicing elit",
    btnText: null
  }
];

export const PORTFOLIO_DATA = [
  { id: 1, category: ["Web Design", "Photography"], image: getImgUrl("1.jpg") },
  { id: 2, category: ["Illustration", "Branding"], image: getImgUrl("2.jpg") },
  { id: 3, category: ["Photography", "Illustration"], image: getImgUrl("3.jpg") },
  { id: 4, category: ["Web Design", "Branding"], image: getImgUrl("4.jpg") },
  { id: 5, category: ["Photography"], image: getImgUrl("5.jpg") },
  { id: 6, category: ["Web Design", "Photography", "Branding"], image: getImgUrl("6.jpg") },
  { id: 7, category: ["Web Design", "Illustration"], image: getImgUrl("7.jpg") },
  { id: 8, category: ["Web Design", "Branding"], image: getImgUrl("8.jpg") },
  { id: 9, category: ["Photography", "Illustration"], image: getImgUrl("9.jpg") },
  { id: 10, category: ["Web Design"], image: getImgUrl("10.jpg") },
  { id: 11, category: ["Web Design", "Photography"], image: getImgUrl("11.jpg") },
];

export const SERVICES_DATA = [
  { id: 1, title: "WEB DESIGN", description: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.", iconClass: "fa-bullhorn" },
  { id: 2, title: "PHOTOGRAPHY", description: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.", iconClass: "fa-plane" },
  { id: 3, title: "HTML5", description: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.", iconClass: "fa-copy" },
  { id: 4, title: "JQUERY", description: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.", iconClass: "fa-thumbs-up" },
  { id: 5, title: "SEO", description: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.", iconClass: "fa-image" },
  { id: 6, title: "CSS3", description: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan.", iconClass: "fa-shield-halved" }
];

export const TEAM_DATA = [
    { id: 1, name: "Owen Miller", role: "developer", image: getImgUrl("team1.jpg") },
    { id: 2, name: "Mike William", role: "developer", image: getImgUrl("team2.jpg") },
    { id: 3, name: "Besim Dauti", role: "developer", image: getImgUrl("team3.jpg") },
    { id: 4, name: "Faton Avdiu", role: "developer", image: getImgUrl("team4.jpg") }
  
];

export const CLIENT_PAGES = [
  [
    { id: 1, name: "OPERA", image: getImgUrl("opera.png") },
    { id: 2, name: "HP", image: getImgUrl("hp.png") },
    { id: 3, name: "WORDPRESS", image: getImgUrl("wordpress.png") },
    { id: 4, name: "CANON", image: getImgUrl("canon.png") }
  ],
  [
    { id: 5, name: "OPERA", image: getImgUrl("opera.png") },
    { id: 6, name: "HP", image: getImgUrl("hp.png") },
    { id: 7, name: "WORDPRESS", image: getImgUrl("wordpress.png") },
    { id: 8, name: "CANON", image: getImgUrl("canon.png") }
  ],
  [
    { id: 9, name: "OPERA", image: getImgUrl("opera.png") },
    { id: 10, name: "HP", image: getImgUrl("hp.png") },
    { id: 11, name: "WORDPRESS", image: getImgUrl("wordpress.png") },
    { id: 12, name: "CANON", image: getImgUrl("canon.png") }
  ],
  [
    { id: 13, name: "OPERA", image: getImgUrl("opera.png") },
    { id: 14, name: "HP", image: getImgUrl("hp.png") },
    { id: 15, name: "WORDPRESS", image: getImgUrl("wordpress.png") },
    { id: 16, name: "CANON", image: getImgUrl("canon.png") }
  ]
];

export const STATS_DATA = [
  { id: 1, number: "956779", label: "Lines of code written", iconClass: "fa-flask" },
  { id: 2, number: "1479", label: "Coffe Drinked", iconClass: "fa-mug-hot" },
  { id: 3, number: "578", label: "Happy Clients", iconClass: "fa-users" },
  { id: 4, number: "2178", label: "Projects Done", iconClass: "fa-briefcase" }
];

export const BLOG_DATA = [
  { id: 1, image: getImgUrl("blog1.jpg"), date: "19 oct", comments: 10, title: "Mobile Friendly Comments Dashboardnow launched!", excerpt: "Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu" },
  { id: 2, image: getImgUrl("blog2.jpg"), date: "19 oct", comments: 10, title: "Mobile Friendly Comments Dashboardnow launched!", excerpt: "Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu" },
  { id: 3, image: getImgUrl("blog3.jpg"), date: "19 oct", comments: 10, title: "Mobile Friendly Comments Dashboardnow launched!", excerpt: "Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu" },
  { id: 4, image: getImgUrl("blog4.jpg"), date: "19 oct", comments: 10, title: "Mobile Friendly Comments Dashboardnow launched!", excerpt: "Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu" }
];
