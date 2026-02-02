import { imgFrame29, img3, imgLine15 } from "../assets/images";

export function ManageOrdersSection() {
  return (
    <section className="bg-white flex flex-col items-start justify-center overflow-hidden px-4 lg:px-28 py-16 w-full">
      <div className="flex flex-col lg:flex-row gap-12 items-center w-full">
        {/* Left Image */}
        <div className="h-[300px] lg:h-auto lg:self-stretch w-full lg:w-[397px] relative rounded-2xl overflow-hidden shrink-0">
          <img
            alt="Farmer in field"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            src={imgFrame29}
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-1 flex-col gap-12 items-start">
          <h2 className="font-['Inter',sans-serif] font-bold text-2xl lg:text-[28px] text-[#010f1c] w-full">
            Everything You Need to Manage <span className="text-[#d94720]">Your Orders</span>
          </h2>

          <div className="flex flex-col gap-4 items-start w-full">
            {/* Feature 1 */}
            <div className="flex gap-2 items-start w-full">
              <img alt="" className="w-6 h-6 shrink-0" src={img3} />
              <div className="flex flex-1 flex-col gap-3 items-start">
                <p className="font-['Inter',sans-serif] font-semibold text-base text-[#010f1c] w-full">
                  Streamlined Procurement
                </p>
                <p className="font-['Roboto',sans-serif] font-normal text-base text-[#63726d] w-full">
                  Fast, organized sourcing with fewer steps and better control.
                </p>
              </div>
            </div>

            <div className="w-full h-0 relative">
              <img alt="" className="w-full h-[2px]" src={imgLine15} />
            </div>

            {/* Feature 2 */}
            <div className="flex gap-2 items-start w-full">
              <img alt="" className="w-6 h-6 shrink-0" src={img3} />
              <div className="flex flex-1 flex-col gap-3 items-start">
                <p className="font-['Inter',sans-serif] font-semibold text-base text-[#010f1c] w-full">
                  Smart, Transparent Pricing
                </p>
                <p className="font-['Roboto',sans-serif] font-normal text-base text-[#63726d] w-full">
                  Clear pricing, no surprises — built for smarter decisions.
                </p>
              </div>
            </div>

            <div className="w-full h-0 relative">
              <img alt="" className="w-full h-[2px]" src={imgLine15} />
            </div>

            {/* Feature 3 */}
            <div className="flex gap-2 items-start w-full">
              <img alt="" className="w-6 h-6 shrink-0" src={img3} />
              <div className="flex flex-1 flex-col gap-3 items-start">
                <p className="font-['Inter',sans-serif] font-semibold text-base text-[#010f1c] w-full">
                  Simplified Billing
                </p>
                <p className="font-['Roboto',sans-serif] font-normal text-base text-[#63726d] w-full">
                  One invoice space, less confusion, full visibility across operations.
                </p>
              </div>
            </div>

            <div className="w-full h-0 relative">
              <img alt="" className="w-full h-[2px]" src={imgLine15} />
            </div>

            {/* Feature 4 */}
            <div className="flex gap-2 items-start w-full">
              <img alt="" className="w-6 h-6 shrink-0" src={img3} />
              <div className="flex flex-1 flex-col gap-3 items-start">
                <p className="font-['Inter',sans-serif] font-semibold text-base text-[#010f1c] w-full">
                  Control for Your Whole Team
                </p>
                <p className="font-['Roboto',sans-serif] font-normal text-base text-[#63726d] w-full">
                  Everyone aligned, empowered, and working from one shared system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
