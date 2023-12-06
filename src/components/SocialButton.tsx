import { ReactElement } from "react";

export default function SocialButton({ svg }: { svg: ReactElement }) {
  return (
    <button
      type='button'
      data-te-ripple-init
      data-te-ripple-color='light'
      className='mr-2 bg-white inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'
    >
      {svg}
    </button>
  );
}
