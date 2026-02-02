import { imgFrame23 } from "../assets/images";

export function CTASection() {
  return (
    <section className="relative flex gap-10 items-end justify-center overflow-hidden px-4 lg:px-28 py-16 w-full">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute w-full h-full object-cover" src={imgFrame23} />
        <div className="absolute bg-[rgba(1,15,28,0.64)] inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-6 items-center justify-between w-full">
        <div className="flex flex-1 flex-col gap-6 items-start">
          <h2 className="font-['Inter',sans-serif] font-bold text-2xl lg:text-[28px] text-white drop-shadow-[0px_4px_8px_rgba(0,0,0,0.08)] w-full">
            Spend Less Time Ordering, More Time Serving
          </h2>
          <p className="font-['Inter',sans-serif] font-medium text-base text-[#eee] w-full">
            See how Agricope can streamline your operations and give you back valuable time. Schedule a free, personalized demo today.
          </p>
        </div>
        <a 
          href="/contact"
          className="bg-[#d94720] flex gap-2 items-center px-4 py-3.5 rounded-lg hover:bg-[#c13d1b] transition-colors shrink-0"
        >
          <span className="font-['Roboto',sans-serif] font-semibold text-base text-white text-center">
            Request Free Demo
          </span>
        </a>
      </div>
    </section>
  );
}
