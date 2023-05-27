import notoSerifKR from '@/app/components/NotoSerif';
import React from 'react';

import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from 'react-icons/fa';
import {
  SiFigma,
  SiJavascript,
  SiNextdotjs,
  SiNotion,
  SiSlack,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from 'react-icons/si';

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex mx-auto md:w-96 w-4/5 dark:text-zinc-400'>
      {children}
    </div>
  );
};

export const IconsWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-wrap justify-center items-center px-2'>
      {children}
    </div>
  );
};

const AboutMain = () => {
  return (
    <section>
      <div className='container mx-auto flex flex-wrap items-center'>
        <div className='text-center py-5 lg:w-1/3 w-full'>
          <h2
            className={`${notoSerifKR.className} font-bold text-2xl pb-2 dark:text-white`}
          >
            About
          </h2>
          <p className='text-zinc-500'>(FrontEnd Developer) Park Su-a</p>
        </div>

        <div className='text-center py-10 lg:pl-5 pl-0 lg:w-2/3 w-full border-black border-solid lg:border-l-2 lg:border-t-0 border-l-0 border-t-2 dark:border-zinc-500'>
          <div>
            <h3
              className={`${notoSerifKR.className} font-bold pb-5 dark:text-white dark:font-normal`}
            >
              - Platforms & Languages -
            </h3>
            <Wrapper>
              <IconsWrapper>
                <FaHtml5 size={28} />
                <p className='pt-2 w-full text-sm'>HTML5</p>
              </IconsWrapper>
              <IconsWrapper>
                <FaCss3Alt size={28} />
                <p className='pt-2 w-full text-sm'>CSS3</p>
              </IconsWrapper>
              <IconsWrapper>
                <SiJavascript size={24} />
                <p className='pt-2 w-full text-sm'>JS</p>
              </IconsWrapper>
              <IconsWrapper>
                <FaReact size={28} />
                <p className='pt-2 w-full text-sm'>React</p>
              </IconsWrapper>
              <IconsWrapper>
                <SiTypescript size={24} />
                <p className='pt-2 w-full text-sm'>TS</p>
              </IconsWrapper>
              <IconsWrapper>
                <SiNextdotjs size={24} />
                <p className='pt-2 w-full text-sm'>NextJS</p>
              </IconsWrapper>
              <IconsWrapper>
                <SiTailwindcss size={24} />
                <p className='pt-2 w-full text-sm'>Tailwind</p>
              </IconsWrapper>
            </Wrapper>
          </div>
          <div className='pt-8'>
            <h3
              className={`${notoSerifKR.className} font-bold pb-5 dark:text-zinc-200 dark:font-normal`}
            >
              - Tools -
            </h3>
            <Wrapper>
              <IconsWrapper>
                <SiVisualstudiocode size={24} />
                <p className='pt-2 w-full text-sm'>VSCode</p>
              </IconsWrapper>
              <IconsWrapper>
                <FaGithub size={24} />
                <p className='pt-2 w-full text-sm'>Github</p>
              </IconsWrapper>
              <IconsWrapper>
                <SiFigma size={24} />
                <p className='pt-2 w-full text-sm'>Figma</p>
              </IconsWrapper>
              <IconsWrapper>
                <SiSlack size={24} />
                <p className='pt-2 w-full text-sm'>Slack</p>
              </IconsWrapper>
              <IconsWrapper>
                <SiNotion size={24} />
                <p className='pt-2 w-full text-sm'>Notion</p>
              </IconsWrapper>
            </Wrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
