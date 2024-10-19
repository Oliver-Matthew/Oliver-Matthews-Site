"use client";

import {
  FaMagnifyingGlass,
  FaPersonCircleCheck,
  FaBriefcase,
} from "react-icons/fa6";
import { FaPeopleCarry } from "react-icons/fa";
import { GoLaw } from "react-icons/go";

import { gsap, useGSAP, SplitType } from "@/utils/gsap";

export default function OurValues() {
  useGSAP(() => {
    new SplitType(".our__values__header", {
      types: "words",
    });
    const longLines = gsap.utils.toArray(
      ".value__item__wrapper > .horizontal__line"
    ) as HTMLElement[];

    const valuesHeaders = gsap.utils.toArray(
      ".value__item__wrapper > h3"
    ) as HTMLElement[];

    const textsLines = new SplitType(".value__item__text > p", {
      types: "lines",
    });

    gsap.fromTo(
      ".our__values__header > div",
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
          trigger: ".our__values__header",
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

    valuesHeaders?.forEach((word) => {
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

    textsLines?.lines?.forEach((line) => {
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
          ease: "power1.inOut",
          stagger: 0.1,
          scrollTrigger: {
            trigger: line,
            start: "top bottom",
            // end: "+=100",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [".our__values__section"]);

  return (
    <section className="our__values__section" id="our-values">
      <h2 className="our__values__header">Our Values</h2>

      <div className="values__wrapper">
        <div className="value__item__wrapper">
          <div className="horizontal__line" />
          <div className="value__icon__wrapper">
            <FaMagnifyingGlass />
          </div>

          <h3>Curiousity</h3>

          <div className="value__item__text">
            <p>
              At Oliver & Matthews, curiosity drives our innovation. By asking
              the right questions and embracing continuous learning, we push
              boundaries, uncover opportunities, and deliver groundbreaking
              solutions.
            </p>
            <p>
              Our commitment to curiosity ensures that every challenge is met
              with creativity, cutting-edge technologies, and a focus on
              progress for our clients.
            </p>
          </div>
        </div>

        <div className="value__item__wrapper">
          <div className="horizontal__line" />
          <div className="value__icon__wrapper">
            <FaPersonCircleCheck />
          </div>
          <h3>Individuality</h3>
          <div className="value__item__text">
            <p>
              We believe everyone is unique and celebrate Individuality by
              recognising and valuing each team member’s unique skills,
              perspectives, and experiences.
            </p>
            <p>
              Our diverse backgrounds fuel our creativity and problem-solving,
              allowing us to offer personalised and effective solutions tailored
              to our clients&apos; needs.
            </p>
          </div>
        </div>

        <div className="value__item__wrapper">
          <div className="horizontal__line" />
          <div className="value__icon__wrapper">
            <FaPeopleCarry />
          </div>
          <h3>Togetherness</h3>

          <div className="value__item__text">
            <p>
              Togetherness is at the heart of our collaborative culture. We
              believe in working as one cohesive team, supporting each other and
              fostering a sense of community.
            </p>
            <p>
              {" "}
              By leveraging our collective strengths, we achieve shared goals
              and drive success together.
            </p>
          </div>
        </div>

        <div className="value__item__wrapper">
          <div className="horizontal__line" />
          <div className="value__icon__wrapper">
            <GoLaw />
          </div>
          <h3>Integrity</h3>

          <div className="value__item__text">
            <p>
              Integrity is the cornerstone of our consultancy. We are committed
              to transparency, honesty, and ethical decision-making in every
              aspect of our work.
            </p>
            <p>
              By fostering trust with our clients and partners, we ensure that
              our solutions are not only effective but are built on a foundation
              of accountability and fairness
            </p>
          </div>
        </div>

        <div className="value__item__wrapper">
          <div className="horizontal__line" />
          <div className="value__icon__wrapper">
            <FaBriefcase />
          </div>

          <h3>Ownership</h3>

          <div className="value__item__text">
            <p>
              At Oliver & Matthews, Ownership means taking proactive
              responsibility for our work and its impact.
            </p>
            <p>
              We empower our team to take initiative, make informed decisions,
              and drive projects forward, ensuring that we deliver exceptional
              value and achieve our business objectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
