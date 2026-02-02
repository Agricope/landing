import { imgFrame21, imgGroup, imgGroup2, img1, img } from "../assets/images";

interface HeroSectionProps {
  onOpenLogin: () => void;
}

export function HeroSection({ onOpenLogin }: HeroSectionProps) {
  return (
    <section className="relative flex flex-col min-h-[950px] items-center overflow-hidden w-full">
      {/* Background Image */}
      <img
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        src={imgFrame21}
      />

      {/* Header */}
      <header className="relative z-10 flex gap-4 items-center px-4 lg:px-28 py-6 mb-12 w-full">
        {/* Logo */}
        <div className="flex-1">
          <div className="h-12 overflow-hidden w-[134px]">
            <div
              className="h-full w-full"
              style={{
                maskImage: `url('${imgGroup}')`,
                WebkitMaskImage: `url('${imgGroup}')`,
                maskSize: "134px 48px",
                WebkitMaskSize: "134px 48px",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
              }}
            >
              <img alt="Agricope Logo" className="w-full h-full" src={imgGroup2} />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-4 items-center">
          <a href="/" className="flex gap-2 items-center justify-center p-3 rounded-lg">
            <img alt="" className="w-6 h-6" src={img1} />
            <span className="font-['Roboto',sans-serif] font-medium text-base text-[#010f1c]">Home</span>
          </a>
          <a href="/contact" className="flex items-center justify-center px-3 py-3.5 rounded-lg">
            <span className="font-['Roboto',sans-serif] font-medium text-base text-[#010f1c] text-center">Contact Us</span>
          </a>
        </nav>

        {/* Login Button */}
        <div className="flex flex-1 items-center justify-end">
          <button 
            onClick={onOpenLogin}
            className="bg-[#d94720] flex gap-2 items-center px-5 py-2 rounded-lg hover:bg-[#c13d1b] transition-colors"
          >
            <img alt="" className="w-6 h-6" src={img} />
            <span className="font-['Roboto',sans-serif] font-semibold text-base text-white">Login</span>
          </button>
        </div>
      </header>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col gap-6 items-start justify-center flex-grow px-4 lg:px-28 py-8 w-full">
        <div className="flex flex-col gap-4 items-start w-full max-w-[700px]">
          <h1 className="font-['Inter',sans-serif] text-[#0a5038] leading-tight drop-shadow-[0px_4px_8px_rgba(0,0,0,0.08)]">
            <span className="font-extrabold text-4xl lg:text-[44px] block">One Platform.</span>
            <span className="font-semibold text-2xl lg:text-[26px] block mt-2">Your Entire Food Supply Chain.</span>
          </h1>
          <p className="font-['Inter',sans-serif] font-medium text-xl text-[#010f1c] leading-normal max-w-[580px] 2xl:max-w-[580px] xl:max-w-[500px]">
            Agricope digitalizes sourcing, inventory, and supply operations — so everything works together, seamlessly.
          </p>
        </div>
        <button className="bg-[#d94720] flex gap-2 items-center px-4 py-3.5 rounded-lg hover:bg-[#c13d1b] transition-colors">
          <span className="font-['Roboto',sans-serif] font-semibold text-base text-white text-center">
            Explore Agricope
          </span>
        </button>
      </div>
    </section>
  );
}
