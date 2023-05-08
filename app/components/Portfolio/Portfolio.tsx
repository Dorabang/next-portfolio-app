'use client';
import React, { useState } from 'react';
import { Noto_Serif_KR } from 'next/font/google';
import Link from 'next/link';
import { projects } from './Constans';
import Image from 'next/image';

const notoSerifKR = Noto_Serif_KR({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

const Portfolio = () => {
  const [selectedFilters, setSelectedFilters] = useState();
  const category = ['HTML&CSS', 'JavaScript', 'React', 'TypeScript', 'NextJS'];

  let filters = category;

  return (
    <section>
      <div className='border-solid border-black border-b-2'>
        <div className='flex justify-between container mx-auto py-5'>
          <div className='sub_title'>
            <h2 className={`${notoSerifKR.className} font-bold text-2xl`}>
              Portfolio
            </h2>
          </div>
          <ul className='category flex justify-between'>
            {category.map((category) => (
              <li
                key={category}
                className={`${
                  notoSerifKR.className
                } px-3 pt-1 mx-1 cursor-pointer hover:bg-black hover:rounded-md hover:text-white ${
                  selectedFilters && 'bg-gray'
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul className='container mx-auto py-12 flex flex-wrap justify-between'>
        {projects.map((project) => (
          <li
            key={project.id}
            className='border-2 border-solid border-black mr-1'
          >
            <Link href={`${project.link}`}>
              <div className='border-b-2 border-black border-solid'>
                <Image
                  src={`/${project.image}`}
                  alt={`${project.name} 썸네일 사진`}
                  width={300}
                  height={300}
                />
              </div>
              <div className='p-2'>
                <h4 className={`${notoSerifKR.className} font-bold`}>
                  {project.name}
                </h4>
                <p className={`${notoSerifKR.className} text-sm py-1`}>
                  {project.category}
                </p>
                <p className='text-gray-500'>{project.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;
