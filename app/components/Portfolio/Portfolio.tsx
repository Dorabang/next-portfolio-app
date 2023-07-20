'use client';
import React, { useState, useEffect, useRef } from 'react';
import { projects } from './Constans';
import Link from 'next/link';
import Image from 'next/image';
import notoSerifKR from '@/app/components/NotoSerif';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

type filtersType = string[];

const Portfolio = () => {
  const [mouseHover, setMouseHover] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>(0);
  const [categoryOpen, setCategoryOpen] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState<filtersType>([]);
  const [filteredItems, setFilteredItems] = useState(projects);
  const ref = useRef<HTMLDivElement | null>(null);

  let filters: filtersType = ['HTML&CSS', 'React', 'NextJS'];

  const handleFilterButtonClick = (selectedCategory: string) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  const handleHover = (id: number) => {
    setSelectedId(id);
    setMouseHover((prev) => !prev);
  };

  const CategoryComponent = ({
    divStyle,
    buttonStyle,
  }: {
    divStyle: string;
    buttonStyle: string;
  }) => {
    return (
      <div className={`flex justify-between ${divStyle} relative`}>
        {filters.map((filter: string, idx: number) => (
          <button
            onClick={() => handleFilterButtonClick(filter)}
            key={`filters-${idx}`}
            className={`${
              notoSerifKR.className
            } px-3 py-1 cursor-pointer rounded border border-solid border-gray-500
      hover:bg-gray-200 text-gray-800 dark:border-zinc-500
      dark:hover:bg-zinc-800 dark:hover:text-white transition duration-100
      ${
        selectedFilters.includes(filter)
          ? 'bg-gray-200 dark:text-white dark:bg-zinc-800'
          : 'dark:bg-zinc-900 dark:text-white bg-white'
      } ${buttonStyle}`}
          >
            #{filter}
          </button>
        ))}
      </div>
    );
  };

  console.log('categoryOpen', categoryOpen);

  useEffect(() => {
    const handleClose = (event: any) => {
      if (!ref.current || !ref.current.contains(event.target))
        setCategoryOpen(false);
    };

    window.addEventListener('mousedown', handleClose);
    window.addEventListener('touchstart', handleClose);
    return () => {
      window.removeEventListener('mousedown', handleClose);
      window.removeEventListener('touchstart', handleClose);
    };
  }, []);

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
    <section className='border-solid border-black border-b dark:border-zinc-500'>
      <div className='border-solid border-black border-b dark:border-zinc-500 relative'>
        <div className='flex flex-wrap justify-between items-center container mx-auto xl:px-0 px-3'>
          <h2
            className={`${notoSerifKR.className} font-bold dark:text-white md:text-2xl text-lg md:py-12 py-4`}
          >
            Portfolio
          </h2>
          <CategoryComponent divStyle='sm:flex hidden' buttonStyle='mx-1.5' />
          <div className='relative sm:hidden block w-5 h-5'>
            <SlArrowUp
              className={`cursor-pointer dark:text-white ${
                categoryOpen ? 'block' : 'hidden'
              } absolute right-0 top-0 p-0.5`}
              size={18}
              onClick={() => setCategoryOpen(false)}
            />
            <SlArrowDown
              className={`cursor-pointer dark:text-white ${
                categoryOpen ? 'hidden' : 'block'
              } absolute right-0 top-0 p-0.5 mx-none`}
              size={18}
              onClick={() => setCategoryOpen(true)}
            />
          </div>
        </div>
      </div>
      {categoryOpen && (
        <div
          ref={ref}
          className='absolute right-2 mt-2 rounded overflow-hidden border border-solid border-gray-500 z-50'
        >
          <CategoryComponent
            divStyle='sm:hidden flex-col-reverse'
            buttonStyle='rounded-none border-none mx-0 py-2 text-left'
          />
        </div>
      )}
      <ul className='container mx-auto py-12 flex flex-wrap xl:px-0 px-3'>
        {filteredItems.map((project) => {
          const { id, image, image2, category, name } = project;
          return (
            <li key={id} className='mb-9 md:mb-12 lg:w-1/3 w-full'>
              <div className='lg:mx-2.5 mx-0'>
                <Link
                  href={`/portfolio/${id}`}
                  onMouseEnter={() => handleHover(id)}
                  onMouseLeave={() => handleHover(id)}
                >
                  <div className='relative border border-solid border-zinc-700/0 dark:border-zinc-700'>
                    <Image
                      src={image2}
                      alt={`${name} 썸네일 사진`}
                      style={{ objectFit: 'cover' }}
                    />
                    <Image
                      src={image}
                      alt={`${name} 썸네일 사진`}
                      style={{ objectFit: 'cover' }}
                      className={`absolute left-0 top-0 ${
                        mouseHover && id === selectedId
                          ? 'opacity-100'
                          : 'opacity-0'
                      } transition-opacity ease-linear`}
                    />
                  </div>
                  <div className='pt-2 pl-3'>
                    <h4
                      className={`${notoSerifKR.className} font-bold text-xl dark:text-white dark:font-normal`}
                    >
                      {name}
                    </h4>
                    <p
                      className={`${notoSerifKR.className} text-gray-800 text-sm my-2 dark:text-zinc-300`}
                    >
                      #{category}
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
