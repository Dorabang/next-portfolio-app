import { StaticImageData } from 'next/image';

// thumb image1
import romand from 'public/images/romand_thumb.jpg';
import movieApp from 'public/images/movieApp_thumb.jpg';
import todoSomething from 'public/images/todoSomething_thumb.jpg';
import disney from 'public/images/disney_thumb.jpg';
import semicolon from 'public/images/semicolon_thumb.jpg';
import UndefinedImg from 'public/images/Undefined_thumb.jpg';

// thumb image2
import romand2 from 'public/images/romand_thumb2.jpg';
import movieApp2 from 'public/images/movieApp_thumb2.jpg';
import todoSomething2 from 'public/images/todoSomething_thumb2.jpg';
import disney2 from 'public/images/disney_thumb2.jpg';
import semicolon2 from 'public/images/semicolon_thumb2.jpg';
import UndefinedImg2 from 'public/images/Undefined_thumb2.jpg';

// concept images
import romand_concept from 'public/images/romand_concept.jpg';
import movieApp_concept from 'public/images/movieApp_concept.jpg';
import todoSomething_concept from 'public/images/todoSomething_concept.jpg';
import disney_concept from 'public/images/disney_concept.jpg';
import semicolon_concept from 'public/images/semicolon_concept.jpg';
import Undefined_webMall_concept from 'public/images/Undefined_webMall_concept.jpg';

export interface projectsType {
  id: number;
  name: string;
  descImg: StaticImageData;
  image: StaticImageData;
  image2: StaticImageData;
  category: string;
  link: string;
}

export const projects: projectsType[] = [
  {
    id: 0,
    name: 'Undefined',
    image: UndefinedImg,
    image2: UndefinedImg2,
    descImg: Undefined_webMall_concept,
    category: 'NextJS',
    link: 'https://web-mall.vercel.app/',
  },
  {
    id: 1,
    name: 'sem;-colon',
    image: semicolon,
    image2: semicolon2,
    descImg: semicolon_concept,
    category: 'NextJS',
    link: '/',
  },
  {
    id: 2,
    name: 'DisneyPlus',
    image: disney,
    image2: disney2,
    descImg: disney_concept,
    category: 'React',
    link: 'https://react-disney-plus-app-92536.firebaseapp.com/',
  },
  {
    id: 3,
    name: 'TodoSomething',
    image: todoSomething,
    image2: todoSomething2,
    descImg: todoSomething_concept,
    category: 'React',
    link: 'https://dorabang.github.io/wanted-pre-onboarding-frontend/',
  },
  {
    id: 4,
    name: 'movieList',
    image: movieApp,
    image2: movieApp2,
    descImg: movieApp_concept,
    category: 'React',
    link: 'https://dorabang.github.io/movieApp/',
  },
  {
    id: 5,
    name: 'rom&nd,',
    image: romand,
    image2: romand2,
    descImg: romand_concept,
    category: 'HTML&CSS',
    link: 'https://dorabang.github.io/romandRenewalProject/',
  },
];
