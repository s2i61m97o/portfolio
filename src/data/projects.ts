import {spacetourism, photosnap, weather, assembly} from "@/assets/projects";
import {ProjectData} from "@/section/Projects/types";

export const projects = [
  {
    title: "space tourism",
    description:
      "A Frontend Mentors Project to build a mock, multi-page website with information about Space Travel.",
    url: "https://spacetourism-mattsimpson.netlify.app/",
    repo: "https://github.com/s2i61m97o/fm-space-tourism",
    images: {
      src: spacetourism,
      alt: "screen shot of space tourism project",
    },
    tech: ["react", "typescript", "nextjs", "sass"],
    gridSlot: "featured",
  },
  {
    title: "photosnap",
    description:
      "A Frontend Mentors Project to build a multi-page website for 'Photosnap', a visual storytelling site.",
    url: "https://photosnap-mattsimpson.netlify.app/",
    repo: "https://github.com/s2i61m97o/fm-photosnap-multipage",
    images: {
      src: photosnap,
      alt: "screen shot of the homepage of  photosnap website",
    },
    tech: ["nextjs", "typescript", "react", "sass"],
    gridSlot: "secondary",
  },
  {
    title: "weather app",
    description:
      "A Frontend Mentors Project to build a Weather App, using the open-meteo API",
    url: "https://weather-app-s2i61m97o.netlify.app/",
    repo: "https://github.com/s2i61m97o/fm-weather-app",
    images: {
      src: weather,
      alt: "screen shot of weather app project",
    },
    tech: ["react", "typescript", "sass", "api"],
    gridSlot: "standard",
  },
  {
    title: "assembly: endgame",
    description:
      "A hangman style game, where wrong guesses lead to losing a language until only Assembly is left. Includes CSS transitions and animations as well as React State, side effects and refs.",
    url: "https://s2i61m97o.github.io/assembly-endgame/",
    repo: "https://github.com/s2i61m97o/assembly-endgame",
    images: {
      src: assembly,
      alt: "screen shot of assembly endgame project",
    },
    tech: ["react", "css"],
    gridSlot: "standard",
  },
] as ProjectData[];
