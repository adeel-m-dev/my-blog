import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useContentFullHook } from "../utils/contentfullHook";
import Spinner from "./Spinner";
import { RenderParagraph } from "./RenderContent";

interface PostsType {
  featured_image: string;
  slug: string;
  title: string;
  content: any[];
  id: string;
}

export default function MainPage() {
  const [posts, setPosts] = useState<PostsType[]>([]);
  const [loading, setLoading] = useState(false);
  const { getPosts } = useContentFullHook();

  useEffect(() => {
    setLoading(true);
    getPosts().then((res) => {
      setPosts(res as PostsType[]);
      setLoading(false);
    });
  }, []);

  const Posts = useMemo(() => {
    return posts.map((item, index) => {
      return (
        <Link
          to={`/${item.slug}/${item.id}`}
          key={index}
          className='flex flex-col bg-white border border-gray-200 rounded-lg shadow lg:flex-row lg:max-w-xl hover:bg-gray-100 hover:shadow-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
        >
          <img
            className='object-cover w-full rounded-t-lg h-[18rem] lg:w-48 lg:rounded-none lg:rounded-s-lg'
            src={item.featured_image}
            alt=''
          />
          <div className='p-4 leading-normal'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {item.title}
            </h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              <RenderParagraph content={item.content} />
            </p>
          </div>
        </Link>
      );
    });
  }, [posts]);

  if (loading) return <Spinner />;

  return (
    <>
      <div className='mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20 mt-20 top-0'>
        <h2 className='mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]'>
          Our Latest Quote
        </h2>
        <p className='text-base text-body-color dark:text-dark-6'>
          Do all the good you can, for all the people you can, in all the ways
          you can, as long as you can.
        </p>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-y-10 gap-x-6 items-start p-8 mt-12'>
        {Posts}
      </div>
    </>
  );
}
