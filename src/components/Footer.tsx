import {
  imgVuesaxLinearCopyright,
  imgGroup,
  imgGroup1,
  imgInstagramAltSvgrepoCom1,
  img7935Ec95C421Cee6D86Eb22Ecd125Aef,
  imgLine1,
} from "../assets/images";

interface FooterProps {
  onOpenLogin?: () => void;
}

export function Footer({ onOpenLogin }: FooterProps) {
  return (
    <footer className="bg-[#0a5038] flex flex-col gap-6 items-start overflow-hidden px-4 lg:px-28 py-10 rounded-t-3xl shadow-[0px_-4px_8px_0px_rgba(0,0,0,0.08)] w-full">
      <div className="flex flex-col lg:flex-row gap-14 items-start w-full">
        {/* Left Column - Logo, Description, Social */}
        <div className="flex flex-1 flex-col gap-10 items-start justify-center">
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
              <img alt="Agricope Logo" className="w-full h-full" src={imgGroup1} />
            </div>
          </div>
          <p className="font-['Roboto',sans-serif] font-normal text-base text-[#ddd] leading-normal">
            At Agricope, we're building a smarter, more reliable food supply chain that empowers food businesses. We believe that when food businesses thrive, communities flourish.
            <br /><br />
            That's the future we're working toward every day.
          </p>
          <div className="flex gap-2 items-start">
            <a 
              href="https://www.instagram.com/agricope.qa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#ffd85e] rounded-full w-[38px] h-[38px] flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <img alt="Instagram" className="w-5 h-5" src={imgInstagramAltSvgrepoCom1} />
            </a>
            <a 
              href="https://www.linkedin.com/company/agricope/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#ffd85e] rounded-full w-[38px] h-[38px] flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity"
            >
              <img alt="LinkedIn" className="w-[18px] h-[17px]" src={img7935Ec95C421Cee6D86Eb22Ecd125Aef} />
            </a>
          </div>
        </div>

        {/* Right Column - Links */}
        <div className="flex flex-1 flex-col gap-10 items-start justify-center">
          <div className="flex w-full gap-4">
            <p className="flex-1 font-['Roboto',sans-serif] font-bold text-xl text-white">Company</p>
            <p className="flex-1 font-['Roboto',sans-serif] font-bold text-xl text-white">Settings</p>
            <p className="flex-1 font-['Roboto',sans-serif] font-bold text-xl text-white">Contact</p>
          </div>
          <div className="flex flex-col gap-6 w-full text-[#ddd] font-['Roboto',sans-serif] font-normal text-base">
            <div className="flex w-full">
              <p className="flex-1">Blog</p>
              <button 
                onClick={onOpenLogin} 
                className="flex-1 text-left hover:text-white transition-colors cursor-pointer"
              >
                My Account
              </button>
              <p className="flex-1">+974 5041 1382</p>
            </div>
            <div className="flex w-full">
              <p className="flex-1">Privacy Policy</p>
              <button 
                onClick={onOpenLogin} 
                className="flex-1 text-left hover:text-white transition-colors cursor-pointer"
              >
                Order Tracking
              </button>
              <a href="mailto:info@agricope.com" className="flex-1 underline cursor-pointer hover:text-white transition-colors">
                info@agricope.com
              </a>
            </div>
            <div className="flex w-full">
              <p className="flex-1">Terms & Conditions</p>
              <button 
                onClick={onOpenLogin} 
                className="flex-1 text-left hover:text-white transition-colors cursor-pointer"
              >
                Returns
              </button>
              <p className="flex-1">5th Floor, Al Nasr Tower B, West Bay, Doha, Qatar</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-0 relative">
        <img alt="" className="w-full h-[3px]" src={imgLine1} />
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
        <div className="flex gap-2 items-center">
          <img alt="Copyright" className="w-5 h-5" src={imgVuesaxLinearCopyright} />
          <p className="font-['Roboto',sans-serif] font-normal text-base text-[#ddd]">
            2025 <span className="text-[#ffd85e]">Agricope</span>. All Rights Reserved.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <p className="font-['Roboto',sans-serif] font-normal text-base text-[#ddd]">Privacy Policy</p>
          <div className="h-[19px] w-0 border-l border-[#ddd]" />
          <p className="font-['Roboto',sans-serif] font-normal text-base text-[#ddd]">Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
