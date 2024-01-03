import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useContentFullHook } from "../utils/contentfullHook";
import Spinner from "./Spinner";

interface PostsType {
  featured_image: string;
  slug: string;
  title: string;
  description: string;
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
              {item.description.slice(0, 220) + "......."}
            </p>
          </div>
        </Link>
      );
    });
  }, [posts]);

  if (loading) return <Spinner />;

  return (
    <ul className='grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-y-10 gap-x-6 items-start p-8 mt-12'>
      {Posts}
    </ul>
  );
}
