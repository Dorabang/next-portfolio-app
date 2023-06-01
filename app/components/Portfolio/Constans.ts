import { StaticImageData } from 'next/image';
import romand from 'public/images/romand_thumb.jpg';
import romand_concept from 'public/images/romand_concept.jpg';
import movieApp from 'public/images/movieApp_thumb.jpg';
import movieApp_concept from 'public/images/movieApp_concept.jpg';
import todoSomething from 'public/images/todoSomething_thumb.jpg';
import todoSomething_concept from 'public/images/todoSomething_concept.jpg';
import semicolon from 'public/images/semicolon_thumb.jpg';
import semicolon_concept from 'public/images/semicolon_thumb.jpg';
import UndefinedImg from 'public/images/Undefined_thumb.jpg';
import Undefined_webMall_concept from 'public/images/Undefined_webMall_concept.jpg';
export interface projectsType {
  id: number;
  name: string;
  concept: string;
  descImg: StaticImageData;
  image: StaticImageData;
  category: string;
  link: string;
}
export const projects: projectsType[] = [
  {
    id: 0,
    name: 'Undefined',
    concept: 'Undefined_webMall',
    image: UndefinedImg,
    descImg: Undefined_webMall_concept,
    category: 'NextJS',
    link: 'https://web-mall.vercel.app/',
  },
  {
    id: 1,
    name: 'sem;-colon',
    concept: 'semicolon',
    image: semicolon,
    descImg: semicolon_concept,
    category: 'NextJS',
    link: '/',
  },
  {
    id: 2,
    name: 'TodoSomething',
    concept: 'todoSomething',
    image: todoSomething,
    descImg: todoSomething_concept,
    category: 'React',
    link: 'https://dorabang.github.io/wanted-pre-onboarding-frontend/',
  },
  {
    id: 3,
    name: 'movieApp',
    concept: 'movieApp',
    image: movieApp,
    descImg: movieApp_concept,
    category: 'React',
    link: 'https://dorabang.github.io/movieApp/',
  },
  {
    id: 4,
    name: 'rom&nd,',
    concept: 'romand',
    image: romand,
    descImg: romand_concept,
    category: 'HTML&CSS',
    link: 'https://dorabang.github.io/romandRenewalProject/',
  },
];
