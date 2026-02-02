import { useState } from "react";
import { imgGroup, imgGroup1, img1 } from "../assets/images";
import {
  imgContactBg,
  imgQatarFlag,
  imgVuesaxBoldLocation,
  imgVuesaxBoldWhatsapp,
  imgVuesaxBoldSms,
  imgArrowDown,
} from "../assets/contactImages";
import { Footer } from "./Footer";

interface ContactUsPageProps {
  onOpenLogin: () => void;
}

export function ContactUsPage({ onOpenLogin }: ContactUsPageProps) {
  const [contactType, setContactType] = useState<"supplier" | "b2b" | "other">("supplier");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      {/* Header */}
      <header className="bg-[#0a5038] flex flex-col items-start overflow-hidden px-4 lg:px-20 py-5 rounded-b-3xl shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] w-full">
        <div className="w-full">
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
        </div>
      </header>

      {/* Sub Nav */}
      <nav className="bg-white border-b border-[#eee] flex gap-4 items-center justify-center px-6 py-2 w-full">
        <a href="/" className="flex gap-2 items-center justify-center p-3 rounded-lg">
          <img alt="" className="w-6 h-6" src={img1} />
          <span className="font-['Roboto',sans-serif] font-normal text-base text-[#010f1c]">Home</span>
        </a>
        <a href="/contact" className="flex items-center justify-center px-3 py-3.5 rounded-lg">
          <span className="font-['Roboto',sans-serif] font-normal text-base text-[#010f1c] text-center">Contact Us</span>
        </a>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-[#f7f7f8] flex gap-2 items-center px-6 py-1 w-full">
        <a href="/" className="font-['Roboto',sans-serif] font-normal text-base text-[#010f1c] text-center py-3.5">
          Home
        </a>
        <span className="font-['Roboto',sans-serif] font-normal text-base text-[#010f1c]">/</span>
        <span className="font-['Roboto',sans-serif] font-semibold text-base text-[#0a5038]">Contact Us</span>
      </div>

      {/* Main Content */}
      <main className="flex flex-col gap-10 items-start px-4 lg:px-20 py-10 w-full">
        <div className="flex flex-col lg:flex-row gap-10 items-center w-full">
          {/* Contact Form */}
          <div className="flex flex-1 flex-col gap-6 items-start justify-end">
            <h1 className="font-['Roboto',sans-serif] font-bold text-[28px] text-[#010f1c]">
              Contact Us
            </h1>

            {/* Contact Type Selection */}
            <div className="flex flex-col gap-6 items-start w-full max-w-[574px]">
              <div className="flex gap-2 items-start w-full">
                <button
                  onClick={() => setContactType("supplier")}
                  className={`flex-1 flex gap-4 items-center px-4 py-3 rounded-lg ${
                    contactType === "supplier" ? "bg-[#f4f1e0]" : "bg-[#f4f1e0]"
                  }`}
                >
                  <span
                    className={`flex-1 font-['Roboto',sans-serif] text-base text-[#010f1c] text-left ${
                      contactType === "supplier" ? "font-semibold" : "font-normal"
                    }`}
                  >
                    Supplier
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full border-2 p-1 ${
                      contactType === "supplier" ? "border-[#d94720] bg-white" : "border-[#f7f7f8] bg-white"
                    }`}
                  >
                    {contactType === "supplier" && (
                      <div className="w-full h-full rounded-full bg-[#d94720]" />
                    )}
                  </div>
                </button>
                <button
                  onClick={() => setContactType("b2b")}
                  className="flex-1 flex gap-4 items-center px-4 py-3 rounded-lg bg-[#f4f1e0]"
                >
                  <span
                    className={`flex-1 font-['Roboto',sans-serif] text-base text-[#010f1c] text-left ${
                      contactType === "b2b" ? "font-semibold" : "font-normal"
                    }`}
                  >
                    B2B Client
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full border-2 p-1 ${
                      contactType === "b2b" ? "border-[#d94720] bg-white" : "border-[#f7f7f8] bg-white"
                    }`}
                  >
                    {contactType === "b2b" && (
                      <div className="w-full h-full rounded-full bg-[#d94720]" />
                    )}
                  </div>
                </button>
                <button
                  onClick={() => setContactType("other")}
                  className="flex-1 flex gap-4 items-center px-4 py-3 rounded-lg bg-[#f4f1e0]"
                >
                  <span
                    className={`flex-1 font-['Roboto',sans-serif] text-base text-[#010f1c] text-left ${
                      contactType === "other" ? "font-semibold" : "font-normal"
                    }`}
                  >
                    Other
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full border-2 p-1 ${
                      contactType === "other" ? "border-[#d94720] bg-white" : "border-[#f7f7f8] bg-white"
                    }`}
                  >
                    {contactType === "other" && (
                      <div className="w-full h-full rounded-full bg-[#d94720]" />
                    )}
                  </div>
                </button>
              </div>

              {/* Form Fields */}
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex flex-col md:flex-row gap-4 items-start w-full">
                  {/* Full Name */}
                  <div className="flex flex-1 flex-col gap-4 items-start">
                    <label className="font-['Roboto',sans-serif] font-normal text-base text-[#63726d]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      className="bg-[#f7f7f8] border border-[#eee] rounded-lg px-4 py-3.5 w-full font-['Roboto',sans-serif] text-base text-[#010f1c] placeholder:text-[#ddd] outline-none focus:border-[#0a5038]"
                    />
                  </div>
                  {/* Email */}
                  <div className="flex flex-1 flex-col gap-4 items-start">
                    <label className="font-['Roboto',sans-serif] font-normal text-base text-[#63726d]">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="bg-[#f7f7f8] border border-[#eee] rounded-lg px-4 py-3.5 w-full font-['Roboto',sans-serif] text-base text-[#010f1c] placeholder:text-[#ddd] outline-none focus:border-[#0a5038]"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-4 items-start w-full">
                  <label className="font-['Roboto',sans-serif] font-normal text-base text-[#63726d]">
                    Phone Number
                  </label>
                  <div className="bg-[#f7f7f8] border border-[#eee] rounded-lg px-4 py-2.5 w-full flex gap-2 items-center">
                    <div className="flex gap-2 items-center">
                      <div className="w-9 h-7 rounded border border-[#eee] overflow-hidden">
                        <img alt="Qatar Flag" src={imgQatarFlag} className="w-full h-full object-cover" />
                      </div>
                      <span className="font-['Roboto',sans-serif] font-normal text-base text-[#010f1c]">+974</span>
                      <img alt="" src={imgArrowDown} className="w-5 h-5" />
                    </div>
                    <div className="h-7 w-px bg-[#eee]" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="000-000-000"
                      className="flex-1 bg-transparent font-['Roboto',sans-serif] text-base text-[#010f1c] placeholder:text-[#ddd] outline-none"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-4 items-start w-full">
                  <label className="font-['Roboto',sans-serif] font-normal text-base text-[#63726d]">
                    Your Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                    rows={3}
                    className="bg-[#f7f7f8] border border-[#eee] rounded-lg px-4 py-3.5 w-full font-['Roboto',sans-serif] text-base text-[#010f1c] placeholder:text-[#ddd] outline-none focus:border-[#0a5038] resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button className="bg-[#d94720] rounded-lg px-2.5 py-3.5 w-full max-w-[574px] flex items-center justify-center hover:bg-[#c13d1b] transition-colors">
              <span className="font-['Inter',sans-serif] font-semibold text-base text-white">
                Submit
              </span>
            </button>
          </div>

          {/* Image */}
          <div className="h-[400px] lg:h-[600px] w-full lg:w-[650px] relative rounded-lg overflow-hidden shrink-0">
            <img
              alt="Fresh vegetables"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              src={imgContactBg}
            />
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="flex flex-col md:flex-row gap-5 items-stretch w-full">
          {/* Email Card */}
          <div className="bg-[rgba(102,187,106,0.12)] flex flex-1 flex-col gap-4 items-center p-4 rounded-lg">
            <img alt="Email" src={imgVuesaxBoldSms} className="w-10 h-10" />
            <div className="flex flex-col gap-1 items-center text-center w-full">
              <p className="font-['Roboto',sans-serif] font-semibold text-base text-[#66bb6a]">Email</p>
              <p className="font-['Roboto',sans-serif] font-normal text-base text-[#010f1c]">support@agricope.com</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:flex items-center justify-center w-0">
            <div className="h-full w-px bg-[#eee]" />
          </div>

          {/* WhatsApp Card */}
          <div className="bg-[rgba(217,71,32,0.08)] flex flex-1 flex-col gap-4 items-center p-4 rounded-lg">
            <img alt="WhatsApp" src={imgVuesaxBoldWhatsapp} className="w-10 h-10" />
            <div className="flex flex-col gap-1 items-center text-center w-full">
              <p className="font-['Roboto',sans-serif] font-semibold text-base text-[#d94720]">WhatsApp Number</p>
              <p className="font-['Roboto',sans-serif] font-normal text-base text-[#010f1c]">+974 5041 1382</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:flex items-center justify-center w-0">
            <div className="h-full w-px bg-[#eee]" />
          </div>

          {/* Location Card */}
          <div className="bg-[rgba(10,80,56,0.08)] flex flex-1 flex-col gap-4 items-center p-4 rounded-lg">
            <img alt="Location" src={imgVuesaxBoldLocation} className="w-10 h-10" />
            <div className="flex flex-col gap-1 items-center text-center w-full">
              <p className="font-['Roboto',sans-serif] font-semibold text-base text-[#0a5038]">Office Location</p>
              <p className="font-['Roboto',sans-serif] font-normal text-base text-[#010f1c]">5th Floor, Al Nasr Tower B, West Bay, Doha, Qatar</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer onOpenLogin={onOpenLogin} />
    </div>
  );
}
