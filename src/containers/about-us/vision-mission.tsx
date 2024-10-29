"use client";

import { gsap, useGSAP, SplitType } from "@/utils/gsap";

export default function VisionMission() {
  useGSAP(() => {
    new SplitType(".vision__mission__header", {
      types: "words",
    });
    new SplitType(".content__header", {
      types: "words",
    });
    const longLines = gsap.utils.toArray(
      ".content__wrapper > .horizontal__line"
    ) as HTMLElement[];

    gsap.fromTo(
      ".vision__mission__header > div",
      {
        y: "100",
        skewY: 5,
        autoAlpha: 0,
      },
      {
        y: "0",
        skewY: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".vision__mission__header > div",
          start: "100px bottom",
          // end: "+=100",
          toggleActions: "play none none none",
        },
      }
    );

    longLines.forEach((item) => {
      gsap.from(item, {
        width: "0",
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.15,
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "+=100",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.fromTo(
      ".content__header > div",
      {
        y: "100",
        skewY: 5,
        autoAlpha: 0,
      },
      {
        y: "0",
        skewY: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".content__header > div",
          start: "top bottom",
          // end: "+=100",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".content__text > p",
      {
        y: "100",
        skewY: "5",
        autoAlpha: 0,
      },
      {
        y: "0",
        skewY: "0",
        autoAlpha: 1,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".content__wrapper",
          start: "top bottom",
          // end: "+=100",
          toggleActions: "play none none none",
        },
      }
    );
  }, [".vision__mission__section"]);

  return (
    <section className="vision__mission__section" id="vision-mission">
      <h2 className="vision__mission__header">Vision & Mission</h2>
      <div className="vision__mission__wrapper">
        <div className="content__wrapper">
          <div className="horizontal__line" />
          <h3 className="content__header">Our Vision</h3>
          <div className="content__text">
            <p>
              At Oliver & Matthews, we envision a world where the boundaries of
              talent acquisition are limitless, no longer restricted by
              geography or conventional norms. Born out of the transformative
              experience of the COVID-19 pandemic, we recognized that true
              innovation comes from challenging the status quo.
            </p>
            <p>
              Our vision is to redefine the future of work by fostering an
              environment where diverse, undiscovered talent from across the
              globe is empowered to shape the technology landscape. We believe
              that by connecting exceptional minds worldwide, we can drive
              progress, creativity, and inclusion within the tech industry.
            </p>
          </div>
        </div>

        <div className="content__wrapper">
          <div className="horizontal__line" />
          <h3 className="content__header">Our Mission</h3>
          <div className="content__text">
            <p>
              Our mission is to expand the potential of every organization by
              providing access to a rich and diverse global talent pool,
              unlocking new perspectives, skills, and insights that enhance team
              dynamics and performance.
            </p>
            <p>
              We aim to bring a new dimension of diversity to your workforce,
              supporting not just your business growth but also fostering a more
              inclusive and forward-thinking industry. Oliver & Matthews is
              dedicated to uncovering and nurturing talent from all corners of
              the world, helping businesses and individuals reach new heights in
              a rapidly evolving digital age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
