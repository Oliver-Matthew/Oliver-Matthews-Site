"use client";
import { GiPlantRoots, GiRefinery } from "react-icons/gi";
import { AiOutlineBank, AiOutlineFileProtect } from "react-icons/ai";
import { SlEnergy } from "react-icons/sl";
import { FaBalanceScaleLeft } from "react-icons/fa";

import { gsap, useGSAP, SplitType } from "@/utils/gsap";
import { CustomCSSType } from "@/types/styles";

export default function Industries() {
  useGSAP(() => {
    const header = new SplitType(".industries__header", { types: "words" });
    const expertiseItems = gsap.utils.toArray(
      ".industries__items__wrapper > div"
    ) as HTMLElement[];

    header.words?.forEach((word) => {
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

    expertiseItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          y: "100",
          scale: 0.7,
          autoAlpha: 0,
        },
        {
          y: "0",
          scale: 1,
          autoAlpha: 1,
          duration: 1,
          ease: "power1.inOut",
          delay: index * 0.1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            // end: "+=100",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [".industries__section"]);

  return (
    <section className="industries__section">
      <h2 className="industries__header">Industries</h2>
      <div className="industries__items__wrapper">
        <div style={{ "--svgDelay": 1 } as CustomCSSType}>
          <GiPlantRoots />
          <span>Agriculture</span>
        </div>
        <div style={{ "--svgDelay": 1 } as CustomCSSType}>
          <AiOutlineBank />
          <span>Finance</span>
        </div>
        <div style={{ "--svgDelay": 1 } as CustomCSSType}>
          <AiOutlineFileProtect />
          <span>Insurance</span>
        </div>
        <div style={{ "--svgDelay": 1 } as CustomCSSType}>
          <GiRefinery />
          <span>Oil & Gas</span>
        </div>
        <div style={{ "--svgDelay": 1 } as CustomCSSType}>
          <SlEnergy />
          <span>Energy</span>
        </div>
        <div style={{ "--svgDelay": 1 } as CustomCSSType}>
          <FaBalanceScaleLeft />
          <span>Public Sector</span>
        </div>
      </div>
    </section>
  );
}
