import { StaticImageData } from 'next/image';

import { v4 as uuidv4 } from 'uuid';

import romand from 'public/images/romand_thumb.jpg';
import movieApp from 'public/images/movieApp_thumb.jpg';
import todoSomething from 'public/images/todoSomething_thumb.jpg';
import semicolon from 'public/images/semicolon_thumb.jpg';
import UndefinedImg from 'public/images/Undefined_thumb.jpg';

export interface projectsType {
  id: any;
  name: string;
  concept: string;
  image: StaticImageData;
  category: string;
  link: string;
}

export const projects: projectsType[] = [
  {
    id: uuidv4(),
    name: 'rom&nd,',
    concept: 'romand',
    image: romand,
    category: 'HTML&CSS',
    link: 'https://dorabang.github.io/romandRenewalProject/',
  },
  {
    id: uuidv4(),
    name: 'movieApp',
    concept: 'movieApp',
    image: movieApp,
    category: 'React',
    link: 'https://dorabang.github.io/movieApp/',
  },
  {
    id: uuidv4(),
    name: 'TodoSomething',
    concept: 'todoSomething',
    image: todoSomething,
    category: 'React',
    link: 'https://dorabang.github.io/wanted-pre-onboarding-frontend/',
  },
  {
    id: uuidv4(),
    name: 'sem;-colon',
    concept: 'semicolon',
    image: semicolon,
    category: 'NextJS TypeScript Tailwind',
    link: '/',
  },
  {
    id: uuidv4(),
    name: 'Undefined',
    concept: 'Undefined_webMall',
    image: UndefinedImg,
    category: 'NextJS TypeScript Tailwind',
    link: 'https://web-mall.vercel.app/',
  },
];
