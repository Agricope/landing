import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeroSection } from "./components/HeroSection";
import { OrderGrindSection } from "./components/OrderGrindSection";
import { ManageOrdersSection } from "./components/ManageOrdersSection";
import { OrderingEasierSection } from "./components/OrderingEasierSection";
import { CTASection } from "./components/CTASection";
import { QASection } from "./components/QASection";
import { Footer } from "./components/Footer";
import { LoginSidebar } from "./components/LoginSidebar";
import { ContactUsPage } from "./components/ContactUsPage";

function HomePage({ onOpenLogin }: { onOpenLogin: () => void }) {
  return (
    <div className="bg-[#fafafb] flex flex-col items-center w-full min-h-screen">
      <div className="flex flex-col items-start w-full">
        {/* Hero Section with Header */}
        <HeroSection onOpenLogin={onOpenLogin} />

        {/* Order Grind Section */}
        <OrderGrindSection />

        {/* Manage Orders Section */}
        <ManageOrdersSection />

        {/* Ordering Easier Section */}
        <OrderingEasierSection />

        {/* CTA Section */}
        <CTASection />

        {/* Q&A Section */}
        <QASection />

        {/* Footer */}
        <Footer onOpenLogin={onOpenLogin} />
      </div>
    </div>
  );
}

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage onOpenLogin={openLogin} />} />
        <Route path="/contact" element={<ContactUsPage onOpenLogin={openLogin} />} />
      </Routes>
      <LoginSidebar isOpen={isLoginOpen} onClose={closeLogin} />
    </BrowserRouter>
  );
}

export default App;
