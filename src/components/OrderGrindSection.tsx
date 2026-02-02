import { imgFrame18, img2, imgLine13, imgLine14 } from "../assets/images";

export function OrderGrindSection() {
  return (
    <section className="flex flex-col gap-12 items-center overflow-hidden px-4 lg:px-28 py-16 w-full">
      <h2 className="font-['Inter',sans-serif] font-bold text-2xl lg:text-[28px] text-[#010f1c]">
        Tired of the Daily <span className="text-[#d94720]">Order Grind?</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 items-stretch w-full">
        {/* The Old Way */}
        <div className="bg-white flex flex-1 flex-col gap-5 items-start overflow-hidden p-5 rounded-2xl shadow-[0px_4px_8px_0px_rgba(0,0,0,0.04)]">
          <div className="flex gap-3 items-center w-full">
            <div className="bg-[#d94720] flex flex-col items-start overflow-hidden p-2 rounded-full">
              <img alt="" className="w-6 h-6" src={img2} />
            </div>
            <p className="font-['Inter',sans-serif] font-bold text-xl text-[#010f1c]">The Old Way</p>
          </div>
          <div className="w-full h-0 relative">
            <img alt="" className="w-full h-[2px]" src={imgLine13} />
          </div>
          <div className="flex flex-col gap-4 w-full font-['Roboto',sans-serif] font-normal text-base text-[#010f1c]">
            <ul className="list-disc ml-6">
              <li>WhatsApp, calls, and spreadsheets</li>
            </ul>
            <ul className="list-disc ml-6">
              <li>Multiple suppliers, zero visibility</li>
            </ul>
            <ul className="list-disc ml-6">
              <li>Manual stock tracking</li>
            </ul>
            <ul className="list-disc ml-6">
              <li>Price changes and surprises</li>
            </ul>
            <ul className="list-disc ml-6">
              <li>No real control</li>
            </ul>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex-1 min-h-[200px] lg:min-h-auto relative rounded-2xl overflow-hidden">
          <img
            alt="Fresh produce"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            src={imgFrame18}
          />
        </div>

        {/* The Agricope Way */}
        <div className="bg-white flex flex-1 flex-col gap-5 items-start overflow-hidden p-5 rounded-2xl shadow-[0px_4px_8px_0px_rgba(0,0,0,0.04)]">
          <div className="flex gap-3 items-center w-full">
            <div className="bg-[#0a5038] flex flex-col items-start overflow-hidden p-2 rounded-full">
              <img alt="" className="w-6 h-6" src={img2} />
            </div>
            <p className="font-['Inter',sans-serif] font-bold text-xl text-[#010f1c]">The Agricope Way</p>
          </div>
          <div className="w-full h-0 relative">
            <img alt="" className="w-full h-[2px]" src={imgLine14} />
          </div>
          <div className="flex flex-col gap-4 w-full font-['Roboto',sans-serif] font-normal text-base text-[#010f1c]">
            <ul className="list-disc ml-6">
              <li>One connected platform</li>
            </ul>
            <ul className="list-disc ml-6">
              <li>Centralized sourcing & ordering</li>
            </ul>
            <ul className="list-disc ml-6">
              <li>Real-time inventory visibility</li>
            </ul>
            <ul className="list-disc ml-6">
              <li>Integrated warehousing & trade</li>
            </ul>
            <ul className="list-disc ml-6">
              <li>Full control, end to end</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
