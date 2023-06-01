'use client';
import React, { useState, useEffect } from 'react';
import { projects } from './Constans';
import Link from 'next/link';
import Image from 'next/image';
import notoSerifKR from '@/app/components/NotoSerif';

type filtersType = string[];

const Portfolio = () => {
  const [selectedFilters, setSelectedFilters] = useState<filtersType>([]);
  const [filteredItems, setFilteredItems] = useState(projects);

  let filters: filtersType = ['HTML&CSS', 'React', 'NextJS'];

  const handleFilterButtonClick = (selectedCategory: string) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory: string) => {
        let temp = projects.filter(
          (project) => project.category === selectedCategory
        );
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...projects]);
    }
  };

  return (
    <section className='border-solid border-black border-b-2 dark:border-zinc-500'>
      <div className='border-solid border-black border-b-2 dark:border-zinc-500'>
        <div className='flex justify-between container mx-auto py-5 lg:px-0 px-3'>
          <h2
            className={`${notoSerifKR.className} font-bold text-2xl dark:text-white`}
          >
            Portfolio
          </h2>
          <div className='flex justify-between'>
            {filters.map((filter: string, idx: number) => (
              <button
                onClick={() => handleFilterButtonClick(filter)}
                key={`filters-${idx}`}
                className={`${
                  notoSerifKR.className
                } px-3 pt-1 mx-1 cursor-pointer rounded border border-solid border-zinc-800
                hover:bg-zinc-800 hover:text-white dark:border-zinc-500 dark:hover:text-black dark:hover:bg-white transition duration-100
                ${
                  selectedFilters.includes(filter)
                    ? 'bg-zinc-800 text-white dark:text-black dark:bg-white'
                    : 'dark:bg-zinc-900 dark:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
      <ul className='container mx-auto py-12 flex flex-wrap lg:px-0 px-3'>
        {filteredItems.map((project) => {
          const { id, image, category, name } = project;
          return (
            <li key={id} className='mb-5 lg:w-1/3 w-full'>
              <div className='lg:mr-5 mr-0'>
                <Link href={`/portfolio/${id}`}>
                  <div className='border border-solid border-zinc-700/0 dark:border-zinc-700'>
                    <Image
                      src={image}
                      alt={`${name} 썸네일 사진`}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className='pt-2'>
                    <h4
                      className={`${notoSerifKR.className} font-bold text-lg dark:text-white dark:font-normal`}
                    >
                      {name}
                    </h4>
                    <p
                      className={`${notoSerifKR.className} text-sm my-0.5 dark:text-white`}
                    >
                      {category}
                    </p>
                  </div>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Portfolio;
