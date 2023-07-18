'use client';
import React, { useState, useEffect } from 'react';
import { projects } from './Constans';
import Link from 'next/link';
import Image from 'next/image';
import notoSerifKR from '@/app/components/NotoSerif';
import { FiMoreHorizontal } from 'react-icons/fi';

type filtersType = string[];

const Portfolio = () => {
  const [categoryOpen, setCategoryOpen] = useState<boolean>(false);
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

  const CategoryComponent = ({ display }: { display: string }) => {
    return (
      <div className={`justify-between ${display}`}>
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
    );
  };

  useEffect(() => {
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

    filterItems();
  }, [selectedFilters]);

  return (
    <section className='border-solid border-black border-b-2 dark:border-zinc-500'>
      <div className='border-solid border-black border-b-2 dark:border-zinc-500'>
        <div className='flex flex-wrap justify-between container mx-auto py-5 xl:px-0 px-3'>
          <h2
            className={`${notoSerifKR.className} font-bold text-xl dark:text-white md:text-2xl`}
          >
            Portfolio
          </h2>
          <CategoryComponent display='sm:flex hidden' />
          <FiMoreHorizontal
            className='cursor-pointer sm:hidden block dark:text-white'
            size={22}
            onClick={() => setCategoryOpen((prev) => !prev)}
          />
          {categoryOpen && (
            <div className='w-full flex justify-center border-t border-zinc-900 dark:border-zinc-500 mt-4 pt-4'>
              <CategoryComponent display='sm:hidden' />
            </div>
          )}
        </div>
      </div>
      <ul className='container mx-auto py-12 flex flex-wrap xl:px-0 px-3'>
        {filteredItems.map((project) => {
          const { id, image, category, name } = project;
          return (
            <li key={id} className='mb-6 md:mb-5 lg:w-1/3 w-full'>
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
