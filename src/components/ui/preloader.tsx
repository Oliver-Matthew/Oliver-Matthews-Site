"use client";
import { gsap, useGSAP } from "@/utils/gsap";
export default function Preloader() {
  useGSAP(() => {
    const content = document.querySelector(".content")! as HTMLDivElement;

    const preloaderNumber = document.querySelector(".preloader__number > p")!;

    let count = 0;
    const images = document.querySelectorAll("img");
    function onImagesLoaded() {
      count += 1;
      const percent = count / images.length;

      preloaderNumber.innerHTML = `${Math.round(percent * 100)}%`;

      if (count === images.length) {
        setTimeout(() => {
          gsap.fromTo(
            preloaderNumber,
            {
              y: "0",
              skewY: 0,
              autoAlpha: 1,
            },
            {
              y: "-200",
              skewY: 5,
              delay: 1,
              autoAlpha: 0,
              duration: 1.5,
              ease: "power1.inOut",
              onComplete: () => animateOut(),
            }
          );
        }, -500);
      }
    }

    gsap.to(preloaderNumber, {
      y: 0,
      duration: 1,
      ease: "power3.inOut",
      delay: 1,
      onComplete: () => load(),
    });

    function animateOut() {
      gsap.fromTo(
        ".preloader__number",
        {
          autoAlpha: 1,
        },
        {
          autoAlpha: 0,
          duration: 1,
          ease: "power1.inOut",
        }
      );
      gsap.to(".preloader__text > span", {
        // y: "300",
        // skewY: 5,
        autoAlpha: 0,
        duration: 1.5,
        ease: "power1.inOut",
        stagger: 0.1,
        onComplete: () => {
          gsap.to(".preloader", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            delay: 0.5,
            duration: 2,
            ease: "expo.out",
            onComplete: () => {
              gsap.to(".preloader", {
                scaleY: 0,
                transformOrigin: "100% 100%",
                duration: 0.5,
                ease: "expo.out",
              });
            },
          });
          content?.style.setProperty("opacity", "1");
          content?.style.setProperty("height", "auto");
          content?.style.setProperty("overflow", "unset");
        },
      });
    }

    function load() {
      images.forEach(() => {
        onImagesLoaded();
      });
    }
  }, [".preloader"]);
  return (
    <div className="preloader">
      {/* <div className="preloader__line left" />
      <div className="preloader__line right" /> */}
      <h3 className="preloader__text">
        <span>Oliver&apos;s </span> <span>and</span> <span>Matthews</span>
      </h3>
      <h3 className="preloader__number">
        <p>0%</p>
      </h3>
    </div>
  );
}
