import HomepageCard from "./HomepageCard";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0a0a1f] flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-20 pt-32 lg:pt-0 lg:gap-[10vw] overflow-hidden"
    >
      {/* Left Side Text */}
      <div className="w-full lg:w-[40vw] lg:ml-auto text-white z-10 max-w-[600px]">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Crafting Beautiful Web Experiences
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          I build responsive, immersive, and interactive sites using React &
          Tailwind.
        </p>

        {/* View Work Button links to #projects */}
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 mt-6 px-6 py-4.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-md text-white font-bold transition"
        >
          View Work
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </a>
      </div>

      {/* Desktop View Image */}
      <div className="hidden lg:flex lg:w-[20vw] lg:mr-auto lg:my-0 items-center">
        <HomepageCard />
      </div>

      {/* Mobile View Image */}
      <div className="lg:hidden w-full flex justify-center mt-[4vh]">
        <HomepageCard />
      </div>
    </section>
  );
}
