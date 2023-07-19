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

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex justify-center flex-wrap mx-auto md:w-96 w-4/5 dark:text-zinc-400'>
      {children}
    </div>
  );
};

const IconsWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-wrap justify-center items-center w-14 h-14 mb-4'>
      {children}
    </div>
  );
};

const NameWrapper = ({ children }: { children: React.ReactNode }) => {
  return <p className='pt-2 w-full text-xs'>{children}</p>;
};

const AboutMain = () => {
  return (
    <section>
      <div className='flex flex-wrap items-center'>
        <div className='text-center py-5 lg:w-1/3 w-full'>
          <h2
            className={`${notoSerifKR.className} font-bold text-2xl pb-2 dark:text-white`}
          >
            About
          </h2>
          <p className='text-zinc-500'>(FrontEnd Developer) Park Su-a</p>
        </div>

        <div
          className='text-center py-10 lg:pl-5 pl-0 lg:w-2/3 w-full
        border-black border-solid lg:border-l lg:border-t-0 border-l-0 border-t
        dark:border-zinc-500'
        >
          <h3
            className={`${notoSerifKR.className} font-bold pb-5 dark:text-white dark:font-normal`}
          >
            - Platforms & Languages -
          </h3>
          <Wrapper>
            <IconsWrapper>
              <FaHtml5 size={28} />
              <NameWrapper>HTML5</NameWrapper>
            </IconsWrapper>
            <IconsWrapper>
              <FaCss3Alt size={28} />
              <NameWrapper>CSS3</NameWrapper>
            </IconsWrapper>
            <IconsWrapper>
              <SiJavascript size={24} />
              <NameWrapper>JS</NameWrapper>
            </IconsWrapper>
            <IconsWrapper>
              <FaReact size={28} />
              <NameWrapper>React</NameWrapper>
            </IconsWrapper>
            <IconsWrapper>
              <SiTypescript size={24} />
              <NameWrapper>TS</NameWrapper>
            </IconsWrapper>
            <IconsWrapper>
              <SiNextdotjs size={24} />
              <NameWrapper>NextJS</NameWrapper>
            </IconsWrapper>
            <IconsWrapper>
              <SiTailwindcss size={24} />
              <NameWrapper>Tailwind</NameWrapper>
            </IconsWrapper>
          </Wrapper>
          <div className='pt-8'>
            <h3
              className={`${notoSerifKR.className} font-bold pb-5 dark:text-zinc-200 dark:font-normal`}
            >
              - Tools -
            </h3>
            <Wrapper>
              <IconsWrapper>
                <SiVisualstudiocode size={24} />
                <NameWrapper>VSCode</NameWrapper>
              </IconsWrapper>
              <IconsWrapper>
                <FaGithub size={24} />
                <NameWrapper>Github</NameWrapper>
              </IconsWrapper>
              <IconsWrapper>
                <SiFigma size={24} />
                <NameWrapper>Figma</NameWrapper>
              </IconsWrapper>
              <IconsWrapper>
                <SiSlack size={24} />
                <NameWrapper>Slack</NameWrapper>
              </IconsWrapper>
              <IconsWrapper>
                <SiNotion size={24} />
                <NameWrapper>Notion</NameWrapper>
              </IconsWrapper>
            </Wrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
