import React, { useState, useRef, useEffect, memo } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Lottie from "lottie-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import yoga from "../Lottie/yoga.json";

// --- Memoized Lottie Component ---
const YogaAnimation = memo(() => (
  <Lottie
    animationData={yoga}
    style={{ width: "500px", height: "500px" }}
    loop={true}
  />
));


// --- AuthForm Component ---
const AuthForm = ({ mode, onClose, onSwitch }) => {
  const isLogin = mode === "login";
  const title = isLogin ? "Welcome Back" : "Create Your Account";
  const buttonText = isLogin ? "Login" : "Sign Up";
  const switchText = isLogin
    ? "Don't have an account?"
    : "Already have an account?";
  const switchActionText = isLogin ? "Sign Up" : "Login";
  const contentRef = useRef(null);

  // Animate content when mode changes (login vs signup)
  useGSAP(() => {
    gsap.fromTo(contentRef.current, 
      { autoAlpha: 0, y: 20 }, 
      { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, { dependencies: [mode], scope: contentRef });


  const handleSwitch = () => {
    gsap.to(contentRef.current, {
      autoAlpha: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        onSwitch(isLogin ? "signup" : "login");
      }
    });
  };

  return (
    <div className="w-full max-w-md bg-[#f9f8f4]/80 backdrop-blur-lg rounded-xl shadow-2xl p-8 text-center relative border border-white/30 overflow-hidden">
      <button
        onClick={onClose}
        className="absolute top-3 right-4 text-2xl text-[#4a403a]/60 hover:text-[#4a403a] transition-colors z-10"
        aria-label="Close authentication form"
      >
        &times;
      </button>
      <div ref={contentRef}>
        <h2 className="font-serif text-3xl text-[#4a403a] mb-6">{title}</h2>
        <form>
          <div className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-md bg-[#f0f2e9] border border-[#e6d3b3] focus:outline-none focus:ring-2 focus:ring-[#a3b98b] placeholder-[#4a403a]/50"
              />
            )}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-md bg-[#f0f2e9] border border-[#e6d3b3] focus:outline-none focus:ring-2 focus:ring-[#a3b98b] placeholder-[#4a403a]/50"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md bg-[#f0f2e9] border border-[#e6d3b3] focus:outline-none focus:ring-2 focus:ring-[#a3b98b] placeholder-[#4a403a]/50"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 py-3 px-5 rounded-md font-medium bg-[#4a403a] text-white transition-opacity duration-300 hover:opacity-90 shadow-md hover:shadow-lg"
          >
            {buttonText}
          </button>
        </form>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-xs text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button className="w-full py-3 px-5 rounded-md font-medium bg-white border border-gray-300 text-gray-700 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md">
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
            <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" />
            <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.222 0-9.519-3.841-11.01-8.75l-6.521 5.023C9.507 39.582 16.221 44 24 44z" />
            <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C44.438 36.338 48 30.651 48 24c0-1.341-.138-2.65-.389-3.917z" />
          </svg>
          Sign in with Google
        </button>
        <p className="mt-6 text-sm text-gray-600">
          {switchText}{" "}
          <button
            onClick={handleSwitch}
            className="font-medium text-[#4a403a] hover:underline"
          >
            {switchActionText}
          </button>
        </p>
      </div>
    </div>
  );
};

// --- Header Component ---
const Header = ({ onAuthChange }) => (
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
            onClick={() => onAuthChange("login")}
            className="py-2 px-5 rounded-md font-medium border border-[#4a403a] text-[#4a403a] transition-all duration-300 hover:bg-[#4a403a] hover:text-white"
          >
            Login
          </button>
          <button
            onClick={() => onAuthChange("signup")}
            className="py-2 px-5 rounded-md font-medium bg-[#4a403a] text-white transition-opacity duration-300 hover:opacity-90"
          >
            Signup
          </button>
        </div>
      </nav>
      <button className="lg:hidden text-3xl text-[#4a403a]">&#9776;</button>
    </div>
  </header>
);

// --- Hero Section Component ---
const Hero = ({ authMode, onAuthChange }) => {
  const container = useRef(null);
  const timeline = useRef(null);

  const handleClose = () => {
    timeline.current.reverse();
  };
  
  useGSAP(() => {
      gsap.set(".auth-form-container", { autoAlpha: 0, y: 50 });
      timeline.current = gsap.timeline({
          paused: true,
          onReverseComplete: () => onAuthChange('none')
      })
          .to(".main-content", {
              duration: 0.8,
              y: -50,
              autoAlpha: 0,
              ease: "expo.inOut",
          })
          .to(".auth-form-container", {
              duration: 0.8,
              y: 0,
              autoAlpha: 1,
              ease: "expo.inOut",
          }, "-=0.5");
  }, { scope: container });

  useEffect(() => {
      if (authMode !== 'none') {
          timeline.current.play();
      }
  }, [authMode]);

  return (
      <section
          id="hero"
          className="bg-[#f9f8f4] relative overflow-hidden pt-10"
          style={{ minHeight: "calc(100vh - 88px)" }}
          ref={container}
      >
          <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center h-full">
              <div className="flex-1 lg:pr-10 text-center lg:text-left mt-10 lg:mt-0">
                  <div className="relative h-[450px]">
                      {/* Main Content */}
                      <div className="absolute inset-0 main-content">
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
                                  onClick={() => onAuthChange("signup")}
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

                      {/* Auth Form */}
                      <div className="absolute inset-0 flex items-center justify-center lg:justify-start auth-form-container">
                          {authMode !== "none" && <AuthForm mode={authMode} onClose={handleClose} onSwitch={onAuthChange} />}
                      </div>
                  </div>
              </div>
              <div className="flex-1 flex justify-center items-center">
                  <YogaAnimation />
              </div>
          </div>
      </section>
  );
};

// --- Page Components ---
const Home = ({ authMode, onAuthChange }) => (
  <>
    <Hero authMode={authMode} onAuthChange={onAuthChange} />
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

// --- MAIN APP FUNCTION ---
export default function LandingPage() {
  const [authMode, setAuthMode] = useState("none");

  return (
    <>
      <Header onAuthChange={setAuthMode} />
      <Routes>
        <Route path="/" element={<Home authMode={authMode} onAuthChange={setAuthMode} />} />
        <Route path="/people" element={<ForPeople />} />
        <Route path="/dieticians" element={<ForDieticians />} />
      </Routes>
      <Footer />
    </>
  );
}

// --- Helper Components (Defined outside main components to prevent re-declaration) ---
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

const Empower = () => (
  <section id="empower" className="bg-[#4a403a] text-white py-20">
    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
      <div className="flex-shrink-0 lg:w-[35%] bg-[#f0f2e9] p-5 rounded-lg">
      <Lottie
        animationData={yoga} // Using yoga as a placeholder
        style={{ width: "100%", height: "auto" }}
        loop={true}
      />
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
