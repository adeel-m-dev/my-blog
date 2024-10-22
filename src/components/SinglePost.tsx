import { useEffect, useState } from "react";
import { useContentFullHook } from "../utils/contentfullHook";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import { RenderContent } from "./RenderContent";

interface PostType {
  featured_image: string;
  slug: string;
  title: string;
  content: any[];
  date: string;
}

export default function SinglePost() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostType>({
    title: "",
    content: [],
    slug: "",
    featured_image: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);

  const { getPost } = useContentFullHook();

  useEffect(() => {
    setLoading(true);
    getPost(id!).then((res: any) => {
      if (res?.date) {
        res.date = new Date(res.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });
      }
      setPost(res as PostType);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Spinner />;

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12'>
      <div className='max-w-3xl mx-auto'>
        {/* Blog post header */}
        <div className='py-8'>
          <h1 className='text-3xl font-bold mb-2'>{post.title}</h1>
          <p className='text-gray-500 text-sm'>
            Published on <time dateTime='2022-04-05'>{post.date}</time>
          </p>
        </div>
        {/* Featured image */}
        <img
          src={post.featured_image}
          alt='Featured image'
          className='w-auto h-auto mb-8'
          loading='lazy'
          rel='preload'
        />
        {/* Blog post content */}
        <div className='prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto'>
          <RenderContent content={post.content} />
        </div>
      </div>
    </div>
  );
}
