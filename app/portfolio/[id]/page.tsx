'use client';
import { projects } from '@/app/components/Portfolio/Constans';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

type item = {
  Name: string;
  Concept: string;
  LinkProp: string;
};

const PortfolioPage = ({ params: { id } }: { params: { id: any } }) => {
  const [project, setProject] = useState<item | null>(null);

  useEffect(() => {
    if (project === null) {
      getProjects(id);
    }
  }, [id]);

  function getProjects(currentId: any) {
    for (let i = 0; i < 5; i++) {
      if (currentId === projects[i].id) {
        const { name, concept, link } = projects[i];
        const item = {
          Name: name,
          Concept: concept,
          LinkProp: link,
        };
        return setProject(item);
      }
    }
  }

  return (
    <div className='container mx-auto h-full'>
      <div className='relative w-full'>
        <img
          src={`/images/${project?.Concept}_concept.jpg`}
          alt={`${project?.Name} 컨셉 페이지 이미지`}
        />
      </div>
      <div className='fixed right-20 bottom-12 px-8 py-3 bg-black text-white'>
        <Link href={`${project?.LinkProp}`} target='_blank'>
          홈페이지 가기
        </Link>
      </div>
    </div>
  );
};

export default PortfolioPage;
