"use client";
import { gsap, useGSAP, SplitType } from "@/utils/gsap";
export default function Preloader() {
  useGSAP(() => {
    window.addEventListener("DOMContentLoaded", () => {});
    const content = document.querySelector(".content")! as HTMLDivElement;
    const preloaderText = new SplitType(".preloader__text", {
      types: "words",
    });
    const preloaderNumber = document.querySelector(".preloader__number")!;

    let count = 0;
    const images = document.querySelectorAll("img");
    function onImagesLoaded() {
      count += 1;
      const percent = count / images.length;

      preloaderNumber.innerHTML = `${Math.round(percent * 100)}%`;

      if (count === images.length) {
        onLoaded();
      }
    }
    function load() {
      images.forEach((_) => {
        onImagesLoaded();
      });
    }

    function onLoaded() {
      gsap.fromTo(
        preloaderNumber,
        {
          x: "0",
          skewY: 0,
          autoAlpha: 1,
        },
        {
          x: "200",
          skewY: -5,
          autoAlpha: 1,
          duration: 1.5,
          ease: "power1.inOut",
          onComplete: () => {
            preloaderText.words?.forEach((word) => {
              gsap.fromTo(
                word,
                {
                  y: "0",
                  skewY: 0,
                  autoAlpha: 1,
                },
                {
                  y: "100",
                  skewY: 5,
                  autoAlpha: 1,
                  duration: 1.5,
                  ease: "power1.inOut",
                  stagger: 0.1,
                  onComplete: () => {
                    gsap.to(".preloader", {
                      scaleY: 0,
                      transformOrigin: "100% 100%",
                      duration: 2,
                      ease: "expo.out",
                      onComplete: () => {},
                    });
                    content?.style.setProperty("opacity", "1");
                    content?.style.setProperty("height", "auto");
                    content?.style.setProperty("overflow", "unset");
                  },
                }
              );
            });
          },
        }
      );
    }
    load();
  }, [".preloader"]);
  return (
    <div className="preloader">
      {/* <div className="preloader__line left" />
      <div className="preloader__line right" /> */}
      <h3 className="preloader__text">Oliver&apos;s and Matthews</h3>
      <h3 className="preloader__number">0%</h3>
    </div>
  );
}
