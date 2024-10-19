"use client";

import Image from "next/image";

import { gsap, useGSAP, SplitType } from "@/utils/gsap";
import OperationsImg from "@/assets/images/services/operations-service.jpg";

export default function OperationsService() {
  useGSAP(() => {
    const header = new SplitType(".operations__service__page__header", {
      types: "chars",
    });
    const textsLines = gsap.utils.toArray(
      ".operations__service__content"
    ) as HTMLElement[];

    gsap.from(".operations__service__image > img", {
      width: 0,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".operations__service__page",
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
            trigger: ".operations__service__page",
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
  }, [".operations__service__page"]);

  return (
    <main className="operations__service__page">
      <figure className="operations__service__image">
        <Image
          src={OperationsImg}
          alt="operations"
          placeholder="blur"
          width={1440}
          height={400}
        />
      </figure>
      <h2 className="operations__service__page__header ">Operations</h2>

      <div className="operations__service__content">
        <p>
          At Oliver & Matthews, we provide comprehensive IT operations services
          designed to optimize your technology infrastructure and ensure
          seamless business continuity. Our Business IT Operations services
          focus on maintaining, managing, and enhancing your IT environment to
          support your organization&apos;s strategic objectives.
        </p>
        <br />

        <p>
          Our team of skilled IT professionals offers a wide range of services,
          including <span>Network Management</span>,{" "}
          <span>Server Administration</span>, <span>IT Support</span>, and
          <span> CyberSecurity</span>. We specialize in{" "}
          <span>Proactive Monitoring</span>,<span> Incident Management</span>,{" "}
          <span>Disaster Recovery</span>, and
          <span> IT Service Management (ITSM)</span>, ensuring your IT systems
          are reliable, secure, and efficient.
        </p>
        <br />

        <p>
          We leverage industry best practices and advanced tools to deliver
          scalable and resilient IT solutions. From routine maintenance and
          technical support to complex infrastructure projects and cloud
          migrations, we tailor our services to meet your unique needs. Our
          expertise in automation, performance optimization, and compliance
          management helps you reduce downtime, increase productivity, and
          mitigate risks.
        </p>

        <br />
        <p>
          Partner with Oliver & Matthew to enhance your IT operations and
          empower your business with a robust and agile IT foundation. Our
          commitment to excellence and customer satisfaction ensures your
          technology environment is always aligned with your business goals.
        </p>
      </div>
    </main>
  );
}
