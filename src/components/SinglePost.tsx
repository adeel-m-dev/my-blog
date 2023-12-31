import { useEffect, useState } from "react";
import { useContentFullHook } from "../utils/contentfullHook";
import { useParams } from "react-router-dom";

interface PostType {
  title: string;
  description: string;
  slug: string;
}

export default function SinglePost() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostType>({
    title: "",
    description: "",
    slug: "",
  });
  const { getPost } = useContentFullHook();

  useEffect(() => {
    getPost(id!).then((res) => setPost(res as PostType));
  }, [id]);

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12'>
      <div className='max-w-3xl mx-auto'>
        {/* Blog post header */}
        <div className='py-8'>
          <h1 className='text-3xl font-bold mb-2'>{post.title}</h1>
          <p className='text-gray-500 text-sm'>
            Published on <time dateTime='2022-04-05'>April 5, 2022</time>
          </p>
        </div>
        {/* Featured image */}
        <img
          src='https://images.unsplash.com/photo-1493723843671-1d655e66ac1c'
          alt='Featured image'
          className='w-full h-auto mb-8'
        />
        {/* Blog post content */}
        <div className='prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto'>
          {post.description}
        </div>
      </div>
    </div>
  );
}
