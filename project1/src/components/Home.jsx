import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Home() {
  const heroContentRef = useRef(null);
  const heroImageRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);
  const shoppingRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Set initial states
    gsap.set(
      [
        titleRef.current,
        paragraphRef.current,
        buttonsRef.current,
        shoppingRef.current,
      ],
      {
        opacity: 0,
        y: 50,
      }
    );

    gsap.set(heroImageRef.current, {
      opacity: 0,
      x: 100,
      scale: 0.8,
    });

    // Animation sequence
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    })
      .to(
        paragraphRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .to(
        shoppingRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .to(
        heroImageRef.current,
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.8"
      );

    // Add hover animations for buttons
    const shopButton = buttonsRef.current?.querySelector("button:first-child");
    const categoryButton =
      buttonsRef.current?.querySelector("button:last-child");

    if (shopButton) {
      shopButton.addEventListener("mouseenter", () => {
        gsap.to(shopButton, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      });
      shopButton.addEventListener("mouseleave", () => {
        gsap.to(shopButton, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    }

    if (categoryButton) {
      categoryButton.addEventListener("mouseenter", () => {
        gsap.to(categoryButton, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      categoryButton.addEventListener("mouseleave", () => {
        gsap.to(categoryButton, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <main className="hero container flex justify-center items-center ml-[69px] mt-32">
      <div className="hero-content" ref={heroContentRef}>
        <h1
          ref={titleRef}
          className=" w-[595px] h-[306px] font-extrabold text-[108px] line-height leading-[102px] "
        >
          YOUR FEET DESERVE THE BEST
        </h1>
        <p
          ref={paragraphRef}
          className="font-semibold text-[16px] leadin-[100%] w-[404px] h-[91px] mt-10"
        >
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div
          ref={buttonsRef}
          className="hero-btn w-[331px] h-[41px] mt-7 gap-10 flex space-between"
        >
          <button className="py-2 px-4 bg-red-600 gap-2.5 font-semibold text-white">
            Shop Now{" "}
          </button>
          <button className="secondary-btn bg-transparent border py-2 px-4 gap-2.5 font-semibold">
            Category
          </button>
        </div>

        <div ref={shoppingRef} className="shopping mt-3.5 w-[140px] h-[67px] ">
          <p>Also Available On</p>

          <div className="brand-icons w-[80px] h-[32px] flex justify-between items-center">
            <img
              className="w-[32px] h-[32px]"
              src="/images/flipkart.png"
              alt="flipkart-logo"
            />
            <img
              className="w-[32px] h-[32px]"
              src="/images/amazon.png"
              alt="amazon-logo"
            />
          </div>
        </div>
      </div>
      <div ref={heroImageRef} className="hero-image w-[530px] h-[487px] mt-20 ">
        <img
          className="object-fill w-full"
          src="/images/shoes.png"
          alt="hero-image"
        />
      </div>
    </main>
  );
}

export default Home;
