"use client";

import { useRef, createRef } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// import InnovationIcon from "@/assets/images/home/innovation-icon.svg";
// import { CustomCSSType } from "@/types/styles";

import { heroCarousel } from "@/lib";
import Image from "next/image";
// import PrimaryButton from "@/components/common/buttons/primary-button";

export default function Hero() {
  return (
    <section className="hero__section">
      <HeroCarousel />
      <div className="hero__texts">
        <h1>
          Solving Today, <br /> Innovating Tomorrow.
        </h1>
      </div>
    </section>
  );
}

export function HeroCarousel() {
  const heroSlidesRef = useRef(
    heroCarousel.map(() => createRef<HTMLDivElement>())
  );
  const slideContainerRef = useRef<HTMLDivElement | null>(null);
  const heroSectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    (_, contextSafe) => {
      if (!contextSafe) return;
      if (!heroSectionRef.current) return;
      if (!slideContainerRef.current || slideContainerRef.current === null)
        return;
      if (!heroSlidesRef.current) return;
      const single_slide = heroSlidesRef.current[0];
      if (!single_slide.current) return;

      const prevButton = document.querySelector(".hero__slide__previous__btn");
      const nextButton = document.querySelector(".hero__slide__next__btn");
      const slideDelay = 6;
      const slideDuration = 0.5;
      const wrap = true;
      const slides = document.querySelectorAll(".hero__slide__item");
      const progressWrap = gsap.utils.wrap(0, 1);
      const numSlides = slides.length;

      gsap.set(slides, {
        // backgroundColor:
        //   "random([red, blue, green, purple, orange, yellow, lime, pink])",
        xPercent: (i) => i * 100,
      });

      const wrapX = gsap.utils.wrap(-100, (numSlides - 1) * 100);
      const timer = gsap.delayedCall(slideDelay, autoPlay);

      const animation = gsap.to(slides, {
        xPercent: "+=" + numSlides * 100,
        duration: 1,
        ease: "none",
        paused: true,
        repeat: -1,
        modifiers: {
          xPercent: wrapX,
        },
      });

      const proxy = document.createElement("div");
      let slideAnimation = gsap.timeline().to({}, {});
      let slideWidth = 0;
      let wrapWidth = 0;

      function animateSlides(direction: number) {
        timer.restart(true);
        slideAnimation.kill();
        const x = Number(
          snapX(Number(gsap.getProperty(proxy, "x"))) + direction * slideWidth
        );
        slideAnimation = gsap.timeline().to(proxy, {
          x: x,
          duration: slideDuration,
          onUpdate: updateProgress,
        });
      }
      function autoPlay() {
        // if (
        //   draggable.isPressed ||
        //   draggable.isDragging ||
        //   draggable.isThrowing
        // ) {
        //   timer.restart(true);
        // } else {
        //   animateSlides(-1);
        // }
        animateSlides(-1);
        // timer.restart(true);
      }
      function updateProgress() {
        animation.progress(
          progressWrap(Number(gsap.getProperty(proxy, "x")) / wrapWidth)
        );
      }

      function snapX(value: number) {
        const snapped = gsap.utils.snap(slideWidth, value);
        return wrap
          ? snapped
          : gsap.utils.clamp(-slideWidth * (numSlides - 1), 0, snapped);
      }

      function resize() {
        const norm = Number(gsap.getProperty(proxy, "x")) / wrapWidth || 0;
        slideWidth = single_slide.current?.offsetWidth || 0;
        wrapWidth = slideWidth * numSlides;
        // wrap ||
        //   draggable.applyBounds({
        //     minX: -slideWidth * (numSlides - 1),
        //     maxX: 0,
        //   });

        gsap.set(proxy, {
          x: norm * wrapWidth,
        });
        animateSlides(0);
        slideAnimation.progress(1);
      }
      prevButton?.addEventListener("click", function () {
        animateSlides(1);
      });

      nextButton?.addEventListener("click", function () {
        animateSlides(-1);
      });
      resize();
      window.addEventListener("resize", resize);

      return () => {
        window.removeEventListener("resize", resize);
      };
    },
    { scope: heroSectionRef }
  );

  return (
    <div className="hero__carousel" ref={heroSectionRef}>
      <div className="hero__slides__wrapper">
        <div className="hero__slides__inner__wrapper" ref={slideContainerRef}>
          {heroCarousel.map((item, index) => (
            <div
              key={index}
              className="hero__slide__item"
              ref={heroSlidesRef.current[index]}
            >
              <figure>
                <Image
                  src={item.image}
                  width={1440}
                  height={992}
                  alt="image"
                  loading="eager"
                  placeholder="blur"
                />
              </figure>

              {/* <div className="text__wrapper">
                <p>{item.text}</p>

                <PrimaryButton showArrow>{item["button-text"]}</PrimaryButton>
              </div> */}
            </div>
          ))}
        </div>
      </div>
      <div className="hero__slide__navigation">
        <button
          name="left"
          type="button"
          className="hero__slide__previous__btn"
        >
          <MdKeyboardArrowLeft role="button" />
        </button>
        <button name="right" type="button" className="hero__slide__next__btn">
          <MdKeyboardArrowRight role="button" />
        </button>
      </div>
    </div>
  );
}
