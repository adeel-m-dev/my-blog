import SocialButton from "./SocialButton";

export default function Footer() {
  return (
    <>
      <footer className='relative pt-8 pb-6 mt-20'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap text-center lg:text-left'>
            <div className='w-full lg:w-6/12 px-4'>
              <h4 className='text-3xl font-semibold'>Let's keep in touch!</h4>
              <h5 className='text-lg mt-0 mb-2 text-blueGray-600'>
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className='mt-16 lg:mb-0 mb-6'>
                <SocialButton
                  svg={
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='20'
                      width='20'
                      viewBox='0 0 512 512'
                      className='h-5 w-5'
                    >
                      <path
                        fill='#38bdf8'
                        d='M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z'
                      />
                    </svg>
                  }
                />
                <SocialButton
                  svg={
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='20'
                      width='20'
                      viewBox='0 0 448 512'
                      className='h-5 w-5'
                    >
                      <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z' />
                    </svg>
                  }
                />

                <SocialButton
                  svg={
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 496 512'
                      className='h-5 w-5'
                    >
                      <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
                    </svg>
                  }
                />
              </div>
            </div>
            <div className='w-full lg:w-6/12 px-4'>
              <div className='flex flex-wrap items-top mb-6'>
                <div className='w-full lg:w-4/12 px-4 ml-auto'>
                  <span className='block uppercase text-sm font-semibold mb-2'>
                    Useful Links
                  </span>
                  <ul className='list-unstyled'>
                    <li>
                      <a
                        className='text-blueGray-600 dark:hover:text-white hover:text-black  font-semibold block pb-2 text-sm'
                        href='#'
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-blueGray-600 dark:hover:text-white hover:text-black  font-semibold block pb-2 text-sm'
                        href='#'
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-blueGray-600 dark:hover:text-white hover:text-black  font-semibold block pb-2 text-sm'
                        href='https://github.com/adeel-m-dev'
                      >
                        Github
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full lg:w-4/12 px-4'>
                  <span className='block uppercase text-sm font-semibold mb-2'>
                    Other Resources
                  </span>
                  <ul className='list-unstyled'>
                    <li>
                      <a
                        className='text-blueGray-600 dark:hover:text-white hover:text-black  font-semibold block pb-2 text-sm'
                        href='#'
                      >
                        Blog License
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-blueGray-600 dark:hover:text-white hover:text-black  font-semibold block pb-2 text-sm'
                        href='#'
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-blueGray-600 dark:hover:text-white hover:text-black  font-semibold block pb-2 text-sm'
                        href='#'
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-blueGray-600 dark:hover:text-white hover:text-black  font-semibold block pb-2 text-sm'
                        href='#'
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-6 border-blueGray-300' />
          <div className='flex flex-wrap items-center md:justify-between justify-center'>
            <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
              <div className='text-sm text-blueGray-500 font-semibold py-1'>
                Copyright © {new Date().getFullYear()} My Blog by{" "}
                <a
                  href='https://github.com/adeel-m-dev'
                  className='text-blueGray-500 dark:hover:text-white hover:text-black '
                >
                  Adeel Manzoor
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
