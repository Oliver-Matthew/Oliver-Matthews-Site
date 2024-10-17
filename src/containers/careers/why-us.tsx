"use client";

import { gsap, useGSAP, SplitType } from "@/utils/gsap";

export default function WhyUs() {
  useGSAP(() => {
    const sectionHeader = new SplitType(".why__us__header", {
      types: "chars",
    });

    const itemHeader = new SplitType(".why__us__item > h3", {
      types: "words",
    });

    const longLines = gsap.utils.toArray(
      ".careers__why__us__item > hr"
    ) as HTMLElement[];

    const textsLines = gsap.utils.toArray(
      ".careers__why__us__item > p"
    ) as HTMLElement[];

    sectionHeader?.chars?.forEach((char) => {
      gsap.fromTo(
        char,
        {
          y: "100",
          autoAlpha: 0,
          skewY: 5,
        },
        {
          y: "0",
          skewY: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.1,
          scrollTrigger: {
            trigger: char,
            start: "top bottom",
            // end: "+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    longLines.forEach((item) => {
      gsap.from(item, {
        width: "0",
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.15,
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
    });

    itemHeader?.words?.forEach((word) => {
      gsap.fromTo(
        word,
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
          delay: 0.2,
          ease: "power1.inOut",
          stagger: 0.1,
          scrollTrigger: {
            trigger: word,
            start: "top bottom",
            // end: "+=100",
            toggleActions: "play none none none",
          },
        }
      );
    });

    textsLines?.forEach((line) => {
      gsap.fromTo(
        line,
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
          delay: 0.4,
          ease: "power1.inOut",
          stagger: 0.3,
          scrollTrigger: {
            trigger: line,
            start: "top bottom",
            // end: "+=100",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [".careers__why__us"]);
  return (
    <section className="careers__why__us">
      <h2 className="why__us__header">Why Us?</h2>

      <div className="careers__why__us__items">
        <div className="careers__why__us__item">
          <hr />
          <p>
            Finding the right company is as crucial as finding the right
            candidate. At Oliver & Matthews, we believe that the perfect match
            is mutual: just as you need to be a great fit for us, we must be the
            right fit for you.
            <br />
            <br />
            Our recruitment process is designed to be thorough and transparent,
            ensuring that we find individuals who align with our values and
            culture.
            <br />
            <br />
            From the initial application to the final interview, we focus on
            getting to know you and understanding how your unique skills and
            experiences can contribute to our team.
          </p>
        </div>

        <div className="careers__why__us__item">
          <hr />
          <p>
            Working at Oliver & Matthews means being part of a people-centric
            organisation that values and invests in its people. We understand
            that our success depends on the talent, dedication, and wellbeing of
            our team members.
            <br />
            <br />
            That&apos;s why we foster a supportive and collaborative environment
            where everyone&apos;s contributions are recognised and appreciated.
            You&apos;ll find opportunities for professional growth, a commitment
            to work-life balance, and a culture that celebrates both
            individuality and teamwork.
            <br />
            <br />
            If you&apos;re seeking a workplace where you can make a meaningful
            impact and grow with us, we&apos;re excited to explore the
            possibilities with you.
          </p>
        </div>
      </div>
    </section>
  );
}
