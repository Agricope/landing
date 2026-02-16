export function ComingSoon() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-gradient-to-br from-[#8FDE95] to-[#E8F8E9]">
      {/* Left Side - Coming Soon Content */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center items-center lg:items-start px-8 sm:px-12 lg:px-16 xl:px-24 py-12 lg:py-0 min-h-[50vh] lg:min-h-screen lg:-mt-32">
        {/* Logo */}
        <div className="mb-28 lg:mb-44">
          <img
            src="/logo.svg"
            alt="Agricope Logo"
            className="h-10 sm:h-12 lg:h-14 w-auto"
          />
        </div>

        {/* Heading */}
        <h1 className="font-inter font-extrabold text-primary-green leading-tight mb-6 whitespace-nowrap" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}>
          <span className="block">We're building</span>
          <span className="block">behind the scenes.</span>
        </h1>

        {/* Subtext */}
        <p className="font-roboto text-xl sm:text-2xl lg:text-3xl font-normal text-black text-center lg:text-left leading-relaxed whitespace-nowrap">
          Stay Connected. Coming Soon
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-full lg:w-[55%] h-[50vh] lg:h-screen pl-42 py-0 pr-8">
        <img
          src="/png image coming soon.png"
          alt="Fresh produce"
          className="h-full w-full object-fill rounded-2xl"
        />
      </div>
    </div>
  );
}
