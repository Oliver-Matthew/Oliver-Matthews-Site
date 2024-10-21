"use client";
import { gsap, useGSAP } from "@/utils/gsap";

import OliverMatthewsLogo from "@/assets/images/oliver-matthews-logo.png";
import Image from "next/image";

export default function Preloader() {
  useGSAP(() => {
    const timeline = gsap.timeline({});
    const content = document.querySelector(".content")! as HTMLDivElement;

    const preloaderNumber = document.querySelector(".preloader__number > p")!;

    let count = 0;
    const images = document.querySelectorAll("img");

    timeline
      .fromTo(
        ".preloader__image > img",
        {
          width: 0,
          ease: "power3.inOut",
          autoAlpha: 0,
        },
        {
          width: "100%",
          autoAlpha: 1,
          duration: 1,
          ease: "power3.inOut",
        }
      )
      .to(preloaderNumber, {
        y: 0,
        duration: 1,
        ease: "power3.inOut",
        delay: 1,
        onComplete: () => load(),
      });

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
              delay: 1.5,
              autoAlpha: 0,
              duration: 1.5,
              ease: "power1.inOut",
              onComplete: () => animateOut(),
            }
          );
        }, -500);
      }
    }

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
      gsap.to(".preloader__image > img", {
        width: 0,
        autoAlpha: 0,
        duration: 1.5,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.to(".preloader", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1.5,
            ease: "expo.out",
            onComplete: () => {
              gsap.to(".preloader", {
                scaleY: 0,
                transformOrigin: "100% 100%",
                duration: 0.2,
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
      {/* <h3 className="preloader__text">
        <span>Oliver&apos;s </span> <span>and</span> <span>Matthews</span>
      </h3> */}

      <figure className="preloader__image">
        <Image
          src={OliverMatthewsLogo}
          width={400}
          height={400}
          alt="oliver matthews"
          loading="lazy"
        />
      </figure>
      <h3 className="preloader__number">
        <p>0%</p>
      </h3>
    </div>
  );
}
