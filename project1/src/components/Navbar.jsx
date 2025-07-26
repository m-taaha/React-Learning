import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Navbar() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Set initial states
    gsap.set([logoRef.current, menuRef.current, buttonRef.current], {
      opacity: 0,
      y: -50,
    });

    // Animation sequence
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(
        menuRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );

    // Enhanced hover animations for menu items
    const menuItems = menuRef.current?.querySelectorAll("li");
    menuItems?.forEach((item, index) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          y: -3,
          duration: 0.3,
          ease: "power2.out",
          color: "#dc2626", // red-600 color
        });
      });
      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          color: "#000000", // back to black
        });
      });
    });

    // Enhanced button hover animation
    const loginButton = buttonRef.current;
    if (loginButton) {
      loginButton.addEventListener("mouseenter", () => {
        gsap.to(loginButton, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
          boxShadow: "0 4px 15px rgba(220, 38, 38, 0.4)",
        });
      });
      loginButton.addEventListener("mouseleave", () => {
        gsap.to(loginButton, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          boxShadow: "0 0 0 rgba(220, 38, 38, 0)",
        });
      });
    }

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="navbar px-56 w-[1440] flex justify-between items-center  mt-4 "
    >
      <div ref={logoRef} className="navbar-brand w-[76px] h-[42px]">
        <img
          src="/images/brand_logo.png"
          alt="Brand Logo"
          className="brand-logo"
        />
      </div>
      <ul ref={menuRef} className="flex gap-8 font-medium">
        <li className="hover:border-b-2 hover:border-red-600 pb-1 transition-all duration-300 cursor-pointer">
          HOME
        </li>
        <li className="hover:border-b-2 hover:border-red-600 pb-1 transition-all duration-300 cursor-pointer">
          LOCATION
        </li>
        <li className="hover:border-b-2 hover:border-red-600 pb-1 transition-all duration-300 cursor-pointer">
          ABOUT
        </li>
        <li className="hover:border-b-2 hover:border-red-600 pb-1 transition-all duration-300 cursor-pointer">
          CONTACT
        </li>
      </ul>

      <button
        ref={buttonRef}
        className="bg-red-600 px-8 p-2 text-white font-medium"
      >
        Login
      </button>
    </nav>
  );
}

export default Navbar;
