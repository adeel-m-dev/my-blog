import { Chip } from "@material-tailwind/react";

function FirstHeadings() {
  return (
    <div className='flex flex-col items-center xs:text-center sm:text-center'>
      <Chip
        className='text-[#714DFF] mb-6 mt-32 bg-gray-100'
        variant='ghost'
        size='lg'
        value={<h1>LEARN & UPSKILL WITH</h1>}
      />

      <h1 className='text-3xl p-3 font-bold	mb-5'>
        High-Quality, Practical-based, Free Tutorials
      </h1>
      <h1 className='text-xl text-[#475467] font-light'>
        Kickstart effective learning with Tutorials Freak, with new content
        published every day.
      </h1>
    </div>
  );
}

export default FirstHeadings;
