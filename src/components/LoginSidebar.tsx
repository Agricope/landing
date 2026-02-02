import { useState } from "react";
import { imgEyeIcon } from "../assets/contactImages";

interface LoginSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginSidebar({ isOpen, onClose }: LoginSidebarProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[440px] max-w-full bg-white shadow-[-4px_0px_8px_0px_rgba(0,0,0,0.08)] rounded-l-3xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 z-10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="flex flex-col gap-15 h-full items-start overflow-y-auto p-10">
          <div className="flex flex-col gap-12 items-start w-full">
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-[#0a5038]">
              Nice to see you again!
            </h2>

            <div className="flex flex-col gap-6 items-start w-full">
              {/* Email Field */}
              <div className="flex flex-col gap-4 items-start w-full">
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

              {/* Password Field */}
              <div className="flex flex-col gap-4 items-start w-full">
                <label className="font-['Roboto',sans-serif] font-normal text-base text-[#63726d]">
                  Password
                </label>
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="bg-[#f7f7f8] border border-[#eee] rounded-lg px-4 py-3 w-full font-['Roboto',sans-serif] text-base text-[#010f1c] placeholder:text-[#63726d] outline-none focus:border-[#0a5038] pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6"
                  >
                    <img alt="Toggle password visibility" src={imgEyeIcon} className="w-full h-full" />
                  </button>
                </div>
                <a
                  href="#"
                  className="font-['Roboto',sans-serif] font-normal text-base text-[#0a5038] underline w-full text-right"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex gap-3 items-center w-full">
              <button
                onClick={() => setRememberMe(!rememberMe)}
                className={`w-6 h-6 rounded border ${
                  rememberMe
                    ? "bg-[#0a5038] border-[#0a5038]"
                    : "bg-[#f7f7f8] border-[#eee]"
                } flex items-center justify-center`}
              >
                {rememberMe && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7L5.5 10.5L12 4"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              <span className="font-['Roboto',sans-serif] font-normal text-base text-[#010f1c]">
                Remember me
              </span>
            </div>
          </div>

          {/* Login Button */}
          <div className="flex flex-col gap-4 items-center w-full mt-auto">
            <button className="bg-[#d94720] rounded-lg px-2.5 py-4 w-full flex items-center justify-center hover:bg-[#c13d1b] transition-colors">
              <span className="font-['Inter',sans-serif] font-semibold text-base text-white">
                Login
              </span>
            </button>
            <div className="flex gap-1 items-center text-base">
              <span className="font-['Roboto',sans-serif] font-normal text-[#010f1c]">
                New Customer?
              </span>
              <a
                href="/contact"
                className="font-['Roboto',sans-serif] font-semibold text-[#0a5038] underline"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
