import { imgFrame16, imgLine16 } from "../assets/images";

export function OrderingEasierSection() {
  return (
    <section className="bg-white flex flex-col items-center overflow-hidden px-4 lg:px-28 py-16 w-full">
      <div className="relative flex flex-col gap-12 items-center justify-center overflow-hidden px-4 lg:px-22 py-10 rounded-3xl w-full">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none rounded-3xl">
          <div className="absolute bg-[#f4f1e0] inset-0 rounded-3xl" />
          <img
            alt=""
            className="absolute w-full h-full object-cover opacity-20 rounded-3xl"
            src={imgFrame16}
          />
        </div>

        {/* Content */}
        <h2 className="relative z-10 font-['Inter',sans-serif] font-bold text-2xl lg:text-[28px] text-[#010f1c]">
          Ordering Has Never <span className="text-[#d94720]">Been Easier</span>
        </h2>

        <div className="relative z-10 flex flex-col gap-5 items-center w-full">
          {/* Progress Steps */}
          <div className="flex items-center justify-center pr-1 w-full max-w-[770px]">
            <div className="bg-[#d94720] flex flex-col items-start overflow-hidden px-4 py-2 rounded-full shrink-0">
              <p className="font-['Inter',sans-serif] font-bold text-xl text-white">1</p>
            </div>
            <div className="flex-1 h-0 relative -mx-1">
              <img alt="" className="w-full h-[12px]" src={imgLine16} />
            </div>
            <div className="bg-[#d94720] flex flex-col items-start overflow-hidden px-3.5 py-2 rounded-full shrink-0">
              <p className="font-['Inter',sans-serif] font-bold text-xl text-white">2</p>
            </div>
            <div className="flex-1 h-0 relative -mx-1">
              <img alt="" className="w-full h-[12px]" src={imgLine16} />
            </div>
            <div className="bg-[#d94720] flex flex-col items-start overflow-hidden px-3.5 py-2 rounded-full shrink-0">
              <p className="font-['Inter',sans-serif] font-bold text-xl text-white">3</p>
            </div>
          </div>

          {/* Step Labels */}
          <div className="flex items-center justify-between w-full max-w-[770px] font-['Inter',sans-serif] font-semibold text-lg lg:text-xl text-[#010f1c]">
            <p>Browse & Select</p>
            <p>Order & Pay</p>
            <p>Manage & Relax</p>
          </div>
        </div>
      </div>
    </section>
  );
}
