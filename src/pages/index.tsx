import Navbar from "../components/AuthNavbar";

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className='relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75'>
          <div
            className='absolute top-0 w-full h-full bg-center bg-cover'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1552985190-626af207368d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <span className='w-full h-full absolute opacity-75 bg-black'></span>
          </div>
          <div className='container relative mx-auto'>
            <div className='items-center flex flex-wrap'>
              <div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
                <div className='pr-12'>
                  <h1 className='text-white font-semibold text-5xl'>
                    Our story starts with you.
                  </h1>
                  <p className='mt-4 text-lg text-blueGray-200'>
                    This is a simple example of a Landing Page you can build
                    using Notus React. It features multiple CSS components based
                    on the Tailwind CSS design system.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px'
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className='absolute bottom-0 overflow-hidden'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
              version='1.1'
              viewBox='0 0 2560 100'
              x='0'
              y='0'
            >
              <polygon
                className='text-blueGray-200 fill-current'
                points='2560 0 2560 100 0 100'
              ></polygon>
            </svg>
          </div>
        </div>
      </main>
    </>
  );
}

export default LandingPage;
