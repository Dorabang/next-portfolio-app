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
                } px-3 pt-1 mx-1 cursor-pointer rounded hover:bg-zinc-800 hover:text-white transition duration-100 ${
                  selectedFilters && 'bg-black'
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
          <li key={project.id} className='mb-4 w-1/3'>
            <div className='border-2 border-solid border-black mr-4'>
              <Link href={`${project.link}`}>
                <div className='border-b-2 border-black border-solid'>
                  <Image
                    src={project.image}
                    alt={`${project.name} 썸네일 사진`}
                    sizes=''
                    style={{ width: '100%' }}
                  />
                </div>
                <div className='p-2'>
                  <h4 className={`${notoSerifKR.className} font-black`}>
                    {project.name}
                  </h4>
                  <p className={`${notoSerifKR.className} text-sm my-1`}>
                    {project.category}
                  </p>
                  <p className='text-zinc-400'>{project.description}</p>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;
