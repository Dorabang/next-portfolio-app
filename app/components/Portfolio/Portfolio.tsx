import React from 'react';
import { Noto_Serif_KR } from 'next/font/google';

const notoSerifKR = Noto_Serif_KR({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

const Portfolio = () => {
  const category = [
    { id: 1, name: 'All', className: 'all' },
    { id: 2, name: 'HTML&CSS', className: 'html_css' },
    { id: 3, name: 'JavaScript', className: 'js' },
    { id: 4, name: 'React', className: 'react' },
    { id: 5, name: 'TypeScript', className: 'ts' },
    { id: 6, name: 'NextJS', className: 'next' },
  ];

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
                key={category.id}
                className={`${notoSerifKR.className} px-3 cursor-pointer`}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul className='container mx-auto py-12 flex flex-wrap justify-between'>
        <li className='w-4/12 bg-black h-96'></li>
      </ul>
    </section>
  );
};

export default Portfolio;
