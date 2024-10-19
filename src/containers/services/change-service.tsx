"use client";
import Image from "next/image";

import { gsap, useGSAP, SplitType } from "@/utils/gsap";
import ChangeImg from "@/assets/images/services/change-service.jpg";

export default function ChangeService() {
  useGSAP(() => {
    const header = new SplitType(".change__service__page__header", {
      types: "chars",
    });
    const textsLines = gsap.utils.toArray(
      ".change__service__content"
    ) as HTMLElement[];

    gsap.from(".change__service__image > img", {
      width: 0,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".change__service__page",
        start: "100px bottom",
        // end: "+=100",
        toggleActions: "play none none none",
      },
    });

    header?.chars?.forEach((word) => {
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
            trigger: ".change__service__page",
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
  }, [".change__service__page"]);

  return (
    <main className="change__service__page">
      <figure className="change__service__image">
        <Image
          src={ChangeImg}
          alt="change"
          placeholder="blur"
          width={1440}
          height={400}
        />
      </figure>
      <h2 className="change__service__page__header ">Change</h2>

      <div className="change__service__content">
        <p>
          At Oliver & Matthews, we specialise in driving successful business
          change and transformation. Our team of experts is dedicated to helping
          organizations navigate through complex transformations, ensuring
          seamless transitions and sustainable growth.
        </p>
        <br />

        <p>
          We focus on understanding your unique business challenges and goals
          comprehensively. We offer a comprehensive suite of services, including{" "}
          <span>Project Management</span>, <span>Business Analysis</span>,
          <span> Service Delivery Management</span>,{" "}
          <span>Risk Management</span>, <span>Product Ownership</span>,{" "}
          <span>Scrum Master Expertise</span>, and more. These capabilities will
          enable your business to excel in strategic planning, process
          optimization, organizational redesign, and change management. We
          leverage industry best practices and innovative solutions to deliver
          measurable results.
        </p>
        <br />

        <p>
          {" "}
          Whether you&apos;re looking to implement new technologies, streamline
          operations, or redefine your organizational structure, our goal is to
          empower your business with the tools and strategies needed to thrive
          in a dynamic market. Partner with us to transform your business and
          achieve lasting success
        </p>
      </div>
    </main>
  );
}
