"use client";
import Image from "next/image";
import { gsap, useGSAP, SplitType } from "@/utils/gsap";
import JoinUsImg from "@/assets/images/careers/join-us-img.jpg";

export default function JoinUs() {
  useGSAP(
    () => {
      const pageHeader = new SplitType(".join__us__header", {
        types: "chars",
      });

      const sectionHeader = new SplitType(".join__us__text > h3", {
        types: "chars",
      });

      const textsLines = new SplitType(".join__us__text > p", {
        types: "lines",
      });

      const joinusImage = document.querySelector(
        ".join__us__image > .image__mask"
      );

      pageHeader?.chars?.forEach((word) => {
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

      sectionHeader?.chars?.forEach((word) => {
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
            delay: 0.4,
            scrollTrigger: {
              trigger: line,
              start: "top bottom",
              // end: "+=100",
              toggleActions: "play none none none",
            },
          }
        );
      });

      gsap.to(joinusImage, {
        duration: 1,
        height: 0,
        delay: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: joinusImage,
          start: "top bottom",
          // end: "+=100",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ".careers__join__us" }
  );

  return (
    <section className="careers__join__us">
      <h2 className="join__us__header">Join Us</h2>
      <div className="join__us__content">
        <div className="join__us__text">
          <h3>Shape the Future with Us</h3>
          <p>
            Are you passionate about driving innovation and making a real
            impact?
          </p>
          <p>
            At Oliver & Matthews, we&apos;re on the lookout for dynamic,
            forward-thinking individuals who are eager to contribute to our
            mission of transforming businesses through Change and
            Transformation, Data Analytics, Software Engineering, and IT
            Operations.
          </p>
          <p>
            We offer a collaborative and supportive environment where your ideas
            and expertise can thrive. Join our team and be part of a company
            that values Innovation, Individuality, Togetherness, Accountability,
            Ownership, and Excellence.
          </p>
          <p>
            If you&apos;re ready to embrace new challenges and help shape the
            future of our clients, we&apos;d love to hear from you. Explore our
            opportunities and start your journey with us today!
          </p>
        </div>

        <figure className="join__us__image">
          <div className="image__mask" />
          <Image
            src={JoinUsImg}
            alt="join us"
            width={400}
            height={400}
            placeholder="blur"
          />
        </figure>
      </div>
    </section>
  );
}
