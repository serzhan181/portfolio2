interface ITechnology {
  name: string;
  imgSrc: string;
  altSrc: string;
  link: string;
}

const technologies: ITechnology[] = [
  {
    name: "Astro",
    imgSrc: "https://bestofjs.org/logos/astro.dark.svg",
    altSrc: "Astro Logo",
    link: "https://astro.build/",
  },
  {
    name: "JavaScript",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png",
    altSrc: "JavaScript Logo",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Node.js",
    imgSrc: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
    altSrc: "Node.js Logo",
    link: "https://nodejs.org/en/",
  },
  {
    name: "React",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    altSrc: "React Logo",
    link: "https://reactjs.org/",
  },
  {
    name: "TypeScript",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    altSrc: "TypeScript Logo",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Tailwind CSS",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    altSrc: "Tailwind CSS Logo",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Next.js",
    imgSrc: "https://static.netify.ai/logos/v/e/r/irepry/icon.png?v=1",
    altSrc: "Next.js Logo",
    link: "https://nextjs.org/",
  },
  {
    name: "Create T3 app",
    imgSrc: "https://create.t3.gg/images/t3-light.svg",
    altSrc: "Create T3 app logo",
    link: "https://create.t3.gg/",
  },
];

export interface IProject {
  img: string;
  url: string;
  info: string;
  repo?: string;
  title: string;
  info2: string;
}

const projects: IProject[] = [
  {
    img: "judge-devs.png",
    title: "Place, where devs share projects",
    info: "Website, where developers can share their projects. It is like extended README from github.",
    info2: "Technologies: Next13, trpc, postgres, Chakra UI, react-query",
    url: "https://judge-devs.vercel.app/",
    repo: "https://github.com/serzhan181/judge-devs",
  },

  {
    img: "bearit.png",
    title: "Clone of reddit",
    info: "Clone of reddit",
    info2:
      "Technologies: Next13, app dir, caching, infinite scrolling, shadcn/ui",
    url: "https://bearit.vercel.app/",
    repo: "https://github.com/serzhan181/bearit",
  },
  {
    img: "project-4.png",
    title: "Reclone",
    info: "The app is intented to be a clone of reddit",
    info2:
      "Technologies: Nextjs, Nestjs, typeorm, postgresql, react-query, tailwindcss",
    url: "https://reclone.vercel.app/",
    repo: "https://github.com/serzhan181/reclone/tree/delta", // if no repo, the button will not show up
  },
  {
    img: "codu.png",
    title: "Contributed: Codu",
    info: "Place for developers",
    info2: "Technologies: t3 stack",
    url: "https://www.codu.co/",
    repo: "https://github.com/codu-code/codu",
  },
  {
    img: "coder-racer.png",
    title: "Contributed: Coder Racer",
    info: "Start racing",
    info2: "Technologies: next.js",
    url: "https://code-racer-eight.vercel.app/",
    repo: "https://github.com/webdevcody/code-racer/",
  },
  {
    img: "project-1.png",
    title: "Sound Enjoy",
    info: "Music player.",
    info2: "Technologies: Next, tailwindcss",
    url: "https://soundenjoy.vercel.app",
  },
  {
    img: "project-2.png",
    title: "Movie app",
    info: "Here you can search for primary data about movies, see the ratings, create articles in article section, read and rate them and comment on them.",
    info2:
      "Technologies: React, react-router, mobx, express, typeorm, postgresql.",
    url: "https://movie-opal.vercel.app/",
    repo: "https://github.com/serzhan181/Movie", // if no repo, the button will not show up
  },
];

export { technologies, projects };
