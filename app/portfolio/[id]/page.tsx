'use client';
import { projects, projectsType } from '@/app/components/Portfolio/Constans';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import notoSerifKR from '@/app/components/NotoSerif';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import Head from 'next/head';
import { Metadata, ResolvingMetadata } from 'next';
import NotFound from '@/app/not-found';

interface paramsType {
  params: { id: number };
}

export async function generateMetadata({
  params: id,
}: paramsType): Promise<Metadata> {
  const project = projects.find((item) => item.id === Number(id));
  console.log(project);

  return {
    title: `Sem;Colon || ${project?.name}`,
  };
}

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className='fixed 2xl:right-[9.64%] xl:right-[7.8%] lg:right-3 md:right-[9.6%] right-4
      lg:bottom-28 bottom-[6.5rem] flex justify-center items-center rounded-lg text-center
bg-[#979942] text-white cursor-pointer border border-solid border-zinc-50'
    >
      {children}
    </div>
  );
};

const PortfolioPage = ({ params: { id } }: paramsType) => {
  const [project, setProject] = useState<projectsType | undefined>(undefined);

  useEffect(() => {
    const result = projects.find((item) => item.id === Number(id));
    setProject(result);
  }, [id]);
  if (!project) return <NotFound />;

  return (
    <>
      <Head>
        <title>Sem;Colon || {project.name}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='container mx-auto h-full'>
        <div className='relative w-full'>
          <Image
            src={project.descImg}
            alt={`${project.name} 컨셉 페이지 이미지`}
          />
        </div>
        <Wrapper>
          <Link
            href={`${project.link}`}
            target='_blank'
            className={`${notoSerifKR.className} text-xs lg:p-3 p-2`}
          >
            <BsBoxArrowUpRight size={22} className='scale-[0.82]' />
          </Link>
        </Wrapper>
      </div>
    </>
  );
};
export default PortfolioPage;
