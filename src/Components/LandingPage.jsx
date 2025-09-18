import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Lottie from "lottie-react";
import yoga from "../Lottie/yoga.json"
// --- MAIN APP FUNCTION ---
export default function LandingPage() {
  const [authMode, setAuthMode] = useState("none");

  // --- SVG Icon Components ---
  const SocialIcon = ({ handle }) => (
    <a
      href="#"
      className="w-8 h-8 border border-gray-300 rounded-full flex justify-center items-center text-sm transition-colors duration-300 hover:bg-[#4a403a] hover:text-white"
    >
      {handle}
    </a>
  );

  const FooterSocialIcon = ({ handle }) => (
    <a
      href="#"
      className="w-9 h-9 bg-white text-[#4a403a] rounded-full flex justify-center items-center font-medium transition-transform duration-300 hover:scale-110"
    >
      {handle}
    </a>
  );

  const GridItem = ({ icon, title, className = "", children }) => (
    <div
      className={`bg-[#f0f2e9] rounded-lg p-5 text-center flex flex-col justify-center items-center ${className}`}
    >
      {children || (
        <>
          <img src={icon} alt={`${title} Icon`} className="h-16 mb-4" />
          <p className="font-medium">{title}</p>
        </>
      )}
    </div>
  );

  // --- AuthForm Component ---
  const AuthForm = ({ mode }) => {
    const isLogin = mode === "login";
    const title = isLogin ? "Welcome Back" : "Create Your Account";
    const buttonText = isLogin ? "Login" : "Sign Up";
    const switchText = isLogin
      ? "Don't have an account?"
      : "Already have an account?";
    const switchActionText = isLogin ? "Sign Up" : "Login";

    return (
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white/10 backdrop-blur-md rounded-lg shadow-2xl p-8 text-center relative">
          <button
            onClick={() => setAuthMode("none")}
            className="absolute top-2 right-3 text-2xl text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Close authentication form"
          >
            &times;
          </button>
          <h2 className="font-serif text-3xl text-dark-brown mb-6">{title}</h2>
          <form>
            <div className="space-y-4">
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-md bg-light-cream border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-green"
                />
              )}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-md bg-light-cream border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-green"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md bg-light-cream border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-green"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-6 py-3 px-5 rounded-md font-medium bg-dark-brown text-white transition-opacity duration-300 hover:opacity-90"
            >
              {buttonText}
            </button>
          </form>
          <p className="mt-6 text-sm text-gray-600">
            {switchText}{" "}
            <button
              onClick={() =>
                setAuthMode(isLogin ? "signup" : "login")
              }
              className="font-medium text-dark-brown hover:underline"
            >
              {switchActionText}
            </button>
          </p>
        </div>
      </div>
    );
  };

  // --- Header Component ---
  const Header = () => (
    <header className="bg-[#f9f8f4] py-5 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className="font-serif font-bold text-2xl text-[#4a403a]"
        >
          AyuAahar
          <span className="block font-sans text-xs font-light tracking-wider -mt-1">
            Discover the Science of Longevity
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                to="/"
                className="text-base font-normal transition-colors duration-300 hover:text-[#4a403a]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/people"
                className="text-base font-normal transition-colors duration-300 hover:text-[#4a403a]"
              >
                For People
              </Link>
            </li>
            <li>
              <Link
                to="/dieticians"
                className="text-base font-normal transition-colors duration-300 hover:text-[#4a403a]"
              >
                For Dieticians
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setAuthMode("login")}
              className="py-2 px-5 rounded-md font-medium border border-[#4a403a] text-[#4a403a] transition-all duration-300 hover:bg-[#4a403a] hover:text-white"
            >
              Login
            </button>
            <button
              onClick={() => setAuthMode("signup")}
              className="py-2 px-5 rounded-md font-medium bg-[#4a403a] text-white transition-opacity duration-300 hover:opacity-90"
            >
              Signup
            </button>
          </div>
        </nav>
        <button className="lg:hidden text-3xl text-[#4a403a]">
          &#9776;
        </button>
      </div>
    </header>
  );

  // --- Hero Section ---
  const Hero = () => (
    <section
      id="hero"
      className="bg-[#f9f8f4] relative overflow-hidden"
      style={{ minHeight: "calc(100vh - 88px)" }}
    >
      <div
        className={`transition-all duration-700 ease-in-out absolute top-0 left-0 w-full h-full flex items-center ${
          authMode !== "none"
            ? "opacity-0 -translate-x-full"
            : "opacity-100 translate-x-0"
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center">
          <div className="flex-1 lg:pr-10 text-center lg:text-left mt-10 lg:mt-0">
            <h1 className="font-serif text-5xl lg:text-6xl font-normal tracking-wide text-[#4a403a] mb-3">
              AyuAahar
            </h1>
            <p className="text-xl font-light text-gray-700 mb-8">
              Discover the Science of Longevity
              <br />
              Integrative Wellness & Medicine Company
            </p>
            <div className="flex flex-col sm:flex-row gap-5 mb-10 justify-center lg:justify-start">
              <a
                href="#"
                className="group cta-box flex-1 flex items-center p-5 bg-[#f0f2e9] rounded-lg font-medium transition-transform duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg"
              >
                <div className="font-serif text-3xl mr-5 text-[#4a403a]">
                  LM
                </div>
                Learn More
              </a>
              <a
                href="#"
                className="group cta-box flex-2 flex items-center p-5 bg-[#f0f2e9] rounded-lg font-medium transition-transform duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg"
              >
                Start Your Wellness Journey Here
                <span className="text-3xl bg-[#4a403a] text-white w-14 h-14 rounded-full flex justify-center items-center ml-auto transition-transform duration-300 group-hover:scale-110">
                  &rarr;
                </span>
              </a>
            </div>
            <div className="flex gap-4 items-center justify-center lg:justify-start">
              <span className="text-sm">Follow us on</span>
              <SocialIcon handle="in" />
              <SocialIcon handle="f" />
              <SocialIcon handle="X" />
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Lottie animationData={yoga} style={{ width: "500px", height: "500px" }} loop={true} />
          </div>
        </div>
      </div>
      <div
        className={`transition-all duration-700 ease-in-out absolute top-0 left-0 w-full h-full ${
          authMode !== "none"
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {authMode !== "none" && <AuthForm mode={authMode} />}
      </div>
    </section>
  );

  // --- Empower Section ---
  const Empower = () => (
    <section id="empower" className="bg-[#4a403a] text-white py-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
        <div className="flex-shrink-0 lg:w-[35%] bg-[#f0f2e9] p-5 rounded-lg">
          <dotlottie-wc
            src="https://lottie.host/4580feef-6111-4882-93d1-da92fd5b3da0/jMMlOCJtSS.lottie"
            style={{ width: "100%", height: "auto" }}
            speed="1"
            autoplay
            loop
          ></dotlottie-wc>
        </div>
        <div className="flex-1">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight text-[#a3b98b] mb-5">
            Empowering Personalized Longevity through Evidence-based Ayurveda
          </h2>
          <p className="text-lg font-light mb-8 max-w-2xl mx-auto lg:mx-0">
            Ayur AI revolutionizes wellness by integrating Ayurveda with modern
            science to provide evidence-based, personalized care for optimal
            health and longevity.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="#"
              className="inline-block py-3 px-6 border border-white rounded-md font-medium transition-all duration-300 hover:bg-white hover:text-[#4a403a]"
            >
              ▶ Watch Video
            </a>
            <a
              href="#"
              className="inline-block py-3 px-6 border border-white rounded-md font-medium transition-all duration-300 hover:bg-white hover:text-[#4a403a]"
            >
              ☰ Reinventing Ayurveda
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  // --- Discover Section ---
  const Discover = () => (
    <section id="discover" className="bg-[#f9f8f4] py-20">
      <div className="container mx-auto px-6 flex flex-col xl:flex-row gap-12 items-center">
        <div className="flex-shrink-0 xl:w-[35%] text-center xl:text-left">
          <h2 className="font-serif text-4xl text-[#a3b98b] leading-snug mb-5">
            Discover the Power of Integrative Wellness: Traditional Meets Modern
            Science
          </h2>
          <p className="text-gray-700">
            As a deeptech company, AyurAI utilizes advanced digital & blood
            biomarkers, genomics, and cutting-edge AI to deliver personalized
            Ayurveda for wellness and chronic disease management.
          </p>
        </div>
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-5">
          <GridItem
            icon="https://www.svgrepo.com/show/488390/intestine-2.svg"
            title="Gut Microbiome"
            className="lg:row-span-2"
          />
          <GridItem
            icon="https://www.svgrepo.com/show/475479/book-open.svg"
            title="Ayurvedic Principles"
          />
          <GridItem
            icon="https://www.svgrepo.com/show/493633/smart-watch-healthcare.svg"
            title="Digital Devices"
          />
          <GridItem className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center justify-center gap-5 md:gap-10">
              <div className="text-center">
                <img
                  src="https://www.svgrepo.com/show/422204/herbal-spa-treatment.svg"
                  alt="Deep Ayurveda Phenotyping Icon"
                  className="h-16 mx-auto mb-4"
                />
                <p className="font-medium">Deep Ayurveda Phenotyping</p>
              </div>
              <div className="text-center">
                <img
                  src="https://www.svgrepo.com/show/509051/artificial-intelligence.svg"
                  alt="AI & ML Icon"
                  className="h-16 mx-auto mb-4"
                />
                <p className="font-medium">AI & ML</p>
              </div>
            </div>
          </GridItem>
        </div>
      </div>
    </section>
  );

  // --- Footer Component ---
  const Footer = () => (
    <footer className="bg-[#4a403a] text-white pt-16 pb-5 text-sm font-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between pb-10 gap-10 text-center md:text-left">
          <div className="flex-1">
            <h3 className="font-sans font-medium text-lg mb-5">Contact us</h3>
            <ul>
              <li className="mb-2.5">
                <a
                  href="tel:9280086997"
                  className="transition-opacity duration-300 hover:opacity-80"
                >
                  📞 9280086997
                </a>
              </li>
              <li className="mb-2.5">
                <a
                  href="mailto:contact@ayurai.io"
                  className="transition-opacity duration-300 hover:opacity-80"
                >
                  ✉️ contact@ayurai.io
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="font-sans font-medium text-lg mb-5">Legal</h3>
            <ul>
              <li className="mb-2.5">
                <a
                  href="#"
                  className="transition-opacity duration-300 hover:opacity-80"
                >
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-2.5">
                <a
                  href="#"
                  className="transition-opacity duration-300 hover:opacity-80"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2.5">
                <a
                  href="#"
                  className="transition-opacity duration-300 hover:opacity-80"
                >
                  Return & Refund policy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="font-sans font-medium text-lg mb-5">Follow us on</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <FooterSocialIcon handle="in" />
              <FooterSocialIcon handle="f" />
              <FooterSocialIcon handle="X" />
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-serif text-xl">
            AYUR AI
            <span className="block font-sans text-[8px] tracking-wider -mt-1">
              Discover the Science of Longevity
            </span>
          </div>
          <div className="text-xs opacity-70">
            &copy; 2025 Ayur AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );

  // --- Page Components ---
  const Home = () => (
    <>
      <Hero />
      <Empower />
      <Discover />
    </>
  );

  const ForPeople = () => (
    <div className="container mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-serif">For People</h1>
      <p className="mt-4">This is the page for people.</p>
    </div>
  );

  const ForDieticians = () => (
    <div className="container mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-serif">For Dieticians</h1>
      <p className="mt-4">This is the page for dieticians.</p>
    </div>
  );

  // --- RENDER APP ---
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<ForPeople />} />
        <Route path="/dieticians" element={<ForDieticians />} />
      </Routes>
      <Footer />
   </>
  );
}
