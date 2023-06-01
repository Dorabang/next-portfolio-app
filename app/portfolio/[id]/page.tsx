'use client';
import { projects, projectsType } from '@/app/components/Portfolio/Constans';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

type paramsType = { params: { id: number } };

const PortfolioPage = ({ params: { id } }: paramsType) => {
  const [project, setProject] = useState<projectsType | undefined>(undefined);

  useEffect(() => {
    const result = projects.find((item) => item.id === Number(id));
    setProject(result);
  }, []);
  if (!project) return null;

  return (
    <div className='container mx-auto h-full'>
      <div className='relative w-full'>
        <Image
          src={project.descImg}
          alt={`${project.name} 컨셉 페이지 이미지`}
        />
      </div>
      <div className='fixed right-20 bottom-12 px-8 py-3 bg-black text-white'>
        <Link href={`${project.link}`} target='_blank'>
          홈페이지 가기
        </Link>
      </div>
    </div>
  );
};
export default PortfolioPage;
