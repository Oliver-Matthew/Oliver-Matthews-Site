"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Statistics() {
  function formatNumber(value: number, decimals: number) {
    const s = value.toLocaleString("en-US").split(".");
    return decimals
      ? s[0] + "." + ((s[1] || "") + "00000000").substring(0, decimals)
      : s[0];
  }
  useGSAP(() => {
    const allStats = gsap.utils.toArray(
      ".statistics__item__number > span"
    ) as HTMLElement[];

    allStats.forEach((stat) => {
      gsap.from(stat, {
        textContent: "0",
        duration: 1,
        ease: "power1.inOut",
        modifiers: {
          textContent: (value) => formatNumber(value, 0),
        },
        stagger: 0.1,
        scrollTrigger: {
          trigger: stat,
          start: "top bottom",
          end: "+=100",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, ["statistics__section"]);

  return (
    <section className="statistics__section">
      <div className="statistics__items__wrapper">
        <div className="statistics__item">
          <h2 className="statistics__item__number">
            <span>82</span>%
          </h2>
          <span>client retention</span>
        </div>

        <div className="statistics__item">
          <h2 className="statistics__item__number">
            <span>20</span>+
          </h2>
          <span>countries based in</span>
        </div>

        <div className="statistics__item">
          <h2 className="statistics__item__number">
            <span>30</span>+
          </h2>
          <span>active consultants</span>
        </div>

        <div className="statistics__item">
          <h2 className="statistics__item__number">
            <span>67</span>%
          </h2>
          <span>from ethnic backgrounds</span>
        </div>

        <div className="statistics__item">
          <h2 className="statistics__item__number">
            <span>100</span>+
          </h2>
          <span>supported projects</span>
        </div>

        <div className="statistics__item">
          <h2 className="statistics__item__number">
            <span>44</span>%
          </h2>
          <span>identify as female</span>
        </div>
      </div>
    </section>
  );
}
