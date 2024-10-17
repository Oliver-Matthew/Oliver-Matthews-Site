"use client";

import {
  FaMagnifyingGlass,
  FaPersonCircleCheck,
  FaBriefcase,
} from "react-icons/fa6";
import { FaPeopleCarry } from "react-icons/fa";
import { GoLaw } from "react-icons/go";

import { gsap, useGSAP, SplitType } from "@/utils/gsap";

// import CuriousityImg from "@/assets/images/about-us/curiousity.jpg";
// import IndividualityImg from "@/assets/images/about-us/individuality.jpg";
// import TogethernessImg from "@/assets/images/about-us/togetherness.jpg";
// import IntegrityImg from "@/assets/images/about-us/integrity.jpg";
// import OwnershipImg from "@/assets/images/about-us/ownnership.jpg";

export default function OurValues() {
  useGSAP(
    () => {
      const sectionHeader = new SplitType(".our__values__header", {
        types: "words",
      });
      const longLines = gsap.utils.toArray(
        ".value__item__wrapper > hr"
      ) as HTMLElement[];
      const valuesHeaders = gsap.utils.toArray(
        ".value__item__wrapper > h3"
      ) as HTMLElement[];
      const valuesHeadersChar = valuesHeaders?.map((header) => {
        const headerChars = new SplitType(header, {
          types: "chars",
        });
        return headerChars.chars;
      });
      const textsLines = new SplitType(".value__item__text > p", {
        types: "lines",
      });

      sectionHeader?.words?.forEach((word) => {
        gsap.fromTo(
          word,
          {
            y: "100",
            rotate: "30deg",
            autoAlpha: 0,
          },
          {
            y: "0",
            rotate: "0deg",
            autoAlpha: 1,
            duration: 1,
            ease: "power1.inOut",
            stagger: 0.1,
            scrollTrigger: {
              trigger: word,
              start: "100px bottom",
              // end: "+=100",
              toggleActions: "play none none none",
            },
          }
        );
      });

      if (longLines) {
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
      }

      valuesHeadersChar?.forEach((word) => {
        word?.forEach((char) => {
          gsap.fromTo(
            char,
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
                start: "100px bottom",
                // end: "+=100",
                toggleActions: "play none none none",
              },
            }
          );
        });
      });

      textsLines?.lines?.forEach((line) => {
        gsap.fromTo(
          line,
          {
            y: "50",
            skewY: "5",
            autoAlpha: 0,
          },
          {
            y: "0",
            skewY: "0",
            autoAlpha: 1,
            duration: 1,
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
    },
    { scope: ".our__values__section" }
  );

  return (
    <section className="our__values__section" id="our-values">
      <h2 className="our__values__header">Our Values</h2>

      <div className="values__wrapper">
        <div className="value__item__wrapper">
          {/* <figure className="value__item__image">
            <Image
              src={CuriousityImg}
              width={600}
              height={400}
              alt="curiousity"
              placeholder="blur"
            />
          </figure> */}
          <hr />
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
          {/* <figure className="value__item__image">
            <Image
              src={IndividualityImg}
              width={600}
              height={400}
              alt="individuality"
              placeholder="blur"
            />
          </figure> */}
          <hr />
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
          {/* <figure className="value__item__image">
            <Image
              src={TogethernessImg}
              width={600}
              height={400}
              alt="togetherness"
              placeholder="blur"
            />
          </figure> */}
          <hr />
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
          {/* <figure className="value__item__image">
            <Image
              src={IntegrityImg}
              width={600}
              height={400}
              alt="integrity"
              placeholder="blur"
            />
          </figure> */}
          <hr />
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
          {/* <figure className="value__item__image">
            <Image
              src={OwnershipImg}
              width={600}
              height={400}
              alt="ownership"
              placeholder="blur"
            />
          </figure> */}
          <hr />
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
