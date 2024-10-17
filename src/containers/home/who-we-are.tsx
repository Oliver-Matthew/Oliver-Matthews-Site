"use client";

import Image from "next/image";

import { gsap, useGSAP, SplitType } from "@/utils/gsap";

import LinkButton from "@/components/common/buttons/link-button";
import AboutUsImg from "@/assets/images/home/about-us-img.jpg";

export default function WhoWeAre() {
  useGSAP(
    () => {
      const expertiseImage = document.querySelector(
        ".who__we__are__image > .image__mask"
      );
      const header = new SplitType(".who__we__are__header", { types: "words" });
      const textsLines = new SplitType(".who__we__are__paragraph", {
        types: "lines",
      });

      header?.words?.forEach((word) => {
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
            duration: 0.5,
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

      gsap.to(expertiseImage, {
        duration: 1,
        height: 0,
        delay: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: expertiseImage,
          start: "top bottom",
          // end: "+=100",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ".who__we__are__section" }
  );

  return (
    <section className="who__we__are__section">
      <div className="who__we__are__text">
        <h2 className="who__we__are__header">Who We Are</h2>
        {/* <div className="who__we__are__paragraph__wrapper">
          <p className="who__we__are__paragraph">
            <span>Oliver & Matthews</span>, a London-founded firm of seasoned
            consultants, has identified a crucial gap in the industry. We
            integrate pioneering strategies and expert guidance to propel your
            business forward.
          </p>
          <br />
          <p className="who__we__are__paragraph">
            Our team specialises in understanding your unique challenges and
            providing resources to help you achieve your objectives and
            sustainable growth. Let us assist you in overcoming obstacles and
            reaching new heights of success.
          </p>
        </div> */}
        <p className="who__we__are__paragraph">
          <span>Oliver & Matthews</span>, a London-founded firm of seasoned
          consultants, has identified a crucial gap in the industry. We
          integrate pioneering strategies and expert guidance to propel your
          business forward.
          <br />
          Our team specialises in understanding your unique challenges and
          providing resources to help you achieve your objectives and
          sustainable growth. Let us assist you in overcoming obstacles and
          reaching new heights of success.
        </p>

        <LinkButton
          href="/about-us"
          style={{ minHeight: "4.5rem", minWidth: "12rem" }}
        >
          {" "}
          Learn More
        </LinkButton>
      </div>

      <figure className="who__we__are__image">
        <div className="image__mask" />
        <Image
          src={AboutUsImg}
          width={400}
          height={400}
          alt="about oliver matthews"
          placeholder="blur"
        />
      </figure>
    </section>
  );
}
