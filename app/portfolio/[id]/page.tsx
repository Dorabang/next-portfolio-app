'use client';
import { projects, projectsType } from '@/app/components/Portfolio/Constans';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import notoSerifKR from '@/app/components/NotoSerif';
import { FiSearch } from 'react-icons/fi';

interface paramsType {
  params: { id: number };
}

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className='fixed right-10 bottom-24 flex justify-center items-center rounded-lg text-center
bg-zinc-900 text-white cursor-pointer border border-zinc-50
dark:bg-white dark:border-zinc-900 dark:text-black'
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
  if (!project) return null;

  return (
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
          className={`${notoSerifKR.className} text-xs p-2`}
        >
          <FiSearch size={18} />
        </Link>
      </Wrapper>
    </div>
  );
};
export default PortfolioPage;
