"use client";

import Image from "next/image";

import { gsap, useGSAP, SplitType } from "@/utils/gsap";
import DataImg from "@/assets/images/services/data-service.jpg";

export default function DataService() {
  useGSAP(() => {
    const header = new SplitType(".data__service__page__header", {
      types: "chars",
    });
    const textsLines = gsap.utils.toArray(
      ".data__service__content"
    ) as HTMLElement[];

    gsap.from(".data__service__image > img", {
      scale: 1.7,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".data__service__page",
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
            trigger: ".data__service__page",
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
  }, [".data__service__page"]);
  return (
    <main className="data__service__page">
      <figure className="data__service__image">
        <Image
          src={DataImg}
          alt="data"
          placeholder="blur"
          width={1440}
          height={400}
        />
      </figure>
      <h2 className="data__service__page__header ">Data</h2>

      <div className="data__service__content">
        <p>
          At Oliver & Matthews, we harness the power of data to drive informed
          decision-making and business growth. Our Business Data & Analytics
          services are designed to help organizations unlock valuable insights,
          streamline operations, and gain a competitive edge.
        </p>
        <br />

        <p>
          Our team of skilled data scientists and analysts employs advanced
          analytics techniques, machine learning, and artificial intelligence to
          transform raw data into actionable intelligence. We specialize in{" "}
          <span>Business Intelligence</span>, <span>Data Engineering</span>,
          <span> Data Science</span>, <span>Machine Learning</span>,{" "}
          <span>Data Governance</span>,<span> Data Integration</span>,{" "}
          <span>Data Warehousing</span>, <span>Predictive Analytics</span>, and{" "}
          <span>Data Visualization</span>, ensuring your data is accurate,
          accessible, and impactful.
        </p>
        <br />

        <p>
          {" "}
          We offer tailored solutions that meet the unique needs of your
          business, from developing custom dashboards and reports to
          implementing comprehensive analytics platforms. Whether you&apos;re
          looking to enhance customer experiences, optimize business processes,
          or uncover new revenue opportunities, our expertise will guide you
          every step of the way.
        </p>

        <p>
          Partner with Oliver & Matthews to leverage the full potential of your
          data and drive your business forward with confidence.
        </p>
      </div>
    </main>
  );
}
