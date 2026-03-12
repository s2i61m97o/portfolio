import type {StaticImageData} from "next/image";

export interface ProjectData {
  title: string;
  description: string;
  url: string;
  repo: string;
  images: {
    src: {
      m: StaticImageData | string;
      t: StaticImageData | string;
      d: StaticImageData | string;
    };
    alt: string;
  };
  tech: string[];
  gridSlot: "featured" | "secondary" | "standard";
}
