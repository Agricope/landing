import { imgGroup, imgGroup2, img1, img } from "../assets/images";

export function Header() {
  return (
    <header className="backdrop-blur-sm flex gap-4 items-center justify-center px-4 lg:px-28 py-6 w-full max-w-[1280px] mx-auto">
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
      <nav className="hidden md:flex flex-1 gap-4 items-center">
        <a href="#home" className="flex gap-2 items-center justify-center p-3 rounded-lg">
          <img alt="" className="w-6 h-6" src={img1} />
          <span className="font-['Roboto',sans-serif] font-medium text-base text-[#010f1c]">Home</span>
        </a>
        <a href="#about" className="flex items-center justify-center px-3 py-3.5 rounded-lg">
          <span className="font-['Roboto',sans-serif] font-medium text-base text-[#010f1c] text-center">About Us</span>
        </a>
        <a href="#contact" className="flex items-center justify-center px-3 py-3.5 rounded-lg">
          <span className="font-['Roboto',sans-serif] font-medium text-base text-[#010f1c] text-center">Contact Us</span>
        </a>
      </nav>

      {/* Login Button */}
      <div className="flex items-center justify-end w-auto md:w-[362px]">
        <button className="bg-[#d94720] flex gap-2 items-center px-5 py-2 rounded-lg hover:bg-[#c13d1b] transition-colors">
          <img alt="" className="w-6 h-6" src={img} />
          <span className="font-['Roboto',sans-serif] font-semibold text-base text-white">Login</span>
        </button>
      </div>
    </header>
  );
}
