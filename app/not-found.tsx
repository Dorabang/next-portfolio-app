'use client';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className='container mx-auto py-72 text-center dark:text-white'>
      <h2 className='text-[60px] font-bold'>404</h2>
      <h3>Not Found</h3>
      <p>Could not find requested resource</p>
      <button
        onClick={() => router.push('/')}
        className='px-8 py-3 mt-5 inline-block border border-solid border-gray-500
          hover:bg-gray-200 text-gray-800 dark:border-zinc-500 dark:text-white
          dark:hover:bg-zinc-800 dark:hover:text-white transition duration-100 rounded-lg'
      >
        메인으로
      </button>
    </div>
  );
}
