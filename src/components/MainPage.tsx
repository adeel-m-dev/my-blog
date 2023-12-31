import { Link } from "react-router-dom";

export default function MainPage() {
  const Posts = [...Array(10)].map((_, index) => {
    return (
      <Link
        to='/single'
        key={index}
        className='flex flex-col bg-white border border-gray-200 rounded-lg shadow lg:flex-row lg:max-w-xl hover:bg-gray-100 hover:shadow-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
      >
        <img
          className='object-cover w-full rounded-t-lg h-[18rem] lg:w-48 lg:rounded-none lg:rounded-s-lg'
          src='https://images.unsplash.com/photo-1613323593608-abc90fec84ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
        />
        <div className='p-4 leading-normal'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Noteworthy technology acquisitions 2021
          </h5>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </Link>
    );
  });
  return (
    <ul className='grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-y-10 gap-x-6 items-start p-8 mt-12'>
      {Posts}
    </ul>
  );
}
