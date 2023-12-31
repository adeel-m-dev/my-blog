export default function SinglePost() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12'>
      <div className='p-20'>
        <a
          className='group text-blue-500 transition-all duration-300 ease-in-out'
          href='#'
        >
          <span className='bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
            This text gets underlined on hover from left
          </span>
        </a>
      </div>
      <div className='max-w-3xl mx-auto'>
        {/* Blog post header */}
        <div className='py-8'>
          <h1 className='text-3xl font-bold mb-2'>Blog post title</h1>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            varius fringilla augue, vel vestibulum nisl mattis vel. Praesent
            porttitor pharetra purus eu tincidunt.
          </p>
          <p>
            Nullam vitae sapien non est suscipit blandit quis sit amet ipsum.
            Aliquam euismod accumsan nunc, in convallis felis luctus in. Sed
            rhoncus metus a elit rutrum aliquam.
          </p>
          <p>
            Integer ullamcorper leo nulla, nec commodo metus vehicula eget. Duis
            vel vestibulum tellus, eget mattis quam. Nullam euismod libero sed
            nibh tristique, vel eleifend risus sagittis. In hac habitasse platea
            dictumst. Sed dapibus magna at arcu euismod, a pulvinar turpis
            tristique. Suspendisse imperdiet velit nec lectus rutrum varius.
          </p>
        </div>
      </div>
    </div>
  );
}
