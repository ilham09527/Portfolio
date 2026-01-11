const config = {
  title: "Ilham nur salam | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Ilham, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Ilham, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Ilham",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "ilham nur salam",
  email: "ilham.m129150@gmail.com",
  site: "https://",

  // for github stars button
  githubUsername: "",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "",
    instagram: "",
    facebook: "",
    github: "",
  },
};
export { config };
