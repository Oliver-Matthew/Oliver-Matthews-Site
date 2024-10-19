"use client";

import Image from "next/image";

import { gsap, useGSAP, SplitType } from "@/utils/gsap";
import EngImg from "@/assets/images/services/eng-service.jpg";

export default function EngineeringService() {
  useGSAP(() => {
    const header = new SplitType(".engineering__service__page__header", {
      types: "chars",
    });
    const textsLines = gsap.utils.toArray(
      ".engineering__service__content"
    ) as HTMLElement[];

    gsap.from(".engineering__service__image > img", {
      width: 0,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".engineering__service__page",
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
            trigger: ".engineering__service__page",
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
  }, [".engineering__service__page"]);

  return (
    <main className="engineering__service__page">
      <figure className="engineering__service__image">
        <Image
          src={EngImg}
          alt="eng"
          placeholder="blur"
          width={1440}
          height={400}
        />
      </figure>
      <h2 className="engineering__service__page__header ">Engineering</h2>

      <div className="engineering__service__content">
        <p>
          At Oliver & Matthews, we specialize in delivering cutting-edge
          software engineering solutions that drive innovation and operational
          efficiency. Our Business Software Engineering services are designed to
          develop robust, scalable, and secure software systems tailored to meet
          the unique needs of your organization.
        </p>
        <br />

        <p>
          Our team of experienced software engineers excels in a wide range of
          technologies and methodologies, including{" "}
          <span>agile development</span>, <span>software testing</span>,{" "}
          <span>DevOps practices</span>, <span>cloud engineering</span>, and{" "}
          <span>microservices architecture</span>. We offer comprehensive
          services in custom software development, application modernization,
          software integration, and quality assurance.
        </p>
        <br />

        <p>
          From initial concept to final deployment, we work closely with you to
          ensure your software solutions are aligned with your business
          objectives. Our expertise spans various industries, enabling us to
          provide tailored solutions that enhance productivity, streamline
          processes, and deliver exceptional user experiences.
        </p>

        <br />
        <p>
          Whether you need to build a new application from scratch, enhance an
          existing system, or integrate disparate technologies, Oliver &
          Matthews is your trusted partner for all your software engineering
          needs. Let us help you transform your business with innovative
          software solutions that drive success.
        </p>
      </div>
    </main>
  );
}
