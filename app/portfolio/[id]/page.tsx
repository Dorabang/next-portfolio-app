'use client';
import { projects, projectsType } from '@/components/Portfolio/Constans';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import notoSerifKR from '@/components/NotoSerif';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import NotFound from '@/not-found';

interface paramsType {
  params: { id: number };
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
