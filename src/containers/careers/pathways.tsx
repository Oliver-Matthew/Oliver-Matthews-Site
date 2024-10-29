"use client";

import LinkButton from "@/components/common/buttons/link-button";

import { gsap, useGSAP, SplitType } from "@/utils/gsap";

export default function Pathways() {
  useGSAP(() => {
    const pageHeader = new SplitType(".pathways__header", {
      types: "words",
    });

    const itemHeader = new SplitType(".careers__pathways__item > h3", {
      types: "words",
    });

    const textsLines = gsap.utils.toArray(
      ".careers__pathways__item > p"
    ) as HTMLElement[];

    pageHeader?.words?.forEach((word) => {
      gsap.fromTo(
        word,
        {
          y: "100",
          autoAlpha: 0,
          skewY: 5,
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

    itemHeader?.words?.forEach((word) => {
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
  }, [".careers__pathways"]);

  return (
    <section className="careers__pathways">
      <h2 className="pathways__header">Pathways</h2>

      <div className="careers__pathways__items">
        <div className="careers__pathways__item">
          <h3>Change</h3>

          <p>
            Are you passionate about driving innovation and making a real
            impact?
            <br />
            <br />
            At Oliver & Matthews, we&apos;re on the lookout for dynamic,
            forward-thinking individuals who are eager to contribute to our
            mission of transforming businesses through Change and
            Transformation, Data Analytics, Software Engineering, and IT
            Operations.
            <br />
            <br />
            We offer a collaborative and supportive environment where your ideas
            and expertise can thrive. Join our team and be part of a company
            that values Innovation, Individuality, Togetherness, Accountability,
            Ownership, and Excellence.
            <br />
            <br />
            If you&apos;re ready to embrace new challenges and help shape the
            future of our clients, we&apos;d love to hear from you. Explore our
            opportunities and start your journey with us today!
          </p>

          <LinkButton
            href="mailto:oliverandmatthers@yahoo.com?subject=Application%20to%20Change%20Pathway"
            width="FULL"
            BUTTON_TYPE="GREEN"
          >
            Apply Now
          </LinkButton>
        </div>

        <div className="careers__pathways__item">
          <h3>Data</h3>
          <p>
            In the Data Analytics pathway, you&apos;ll dive into complex data
            sets to uncover actionable insights that drive strategic
            decision-making.
            <br />
            <br /> As a consultant, you&apos;ll harness advanced analytical
            tools and methodologies to help clients understand market trends,
            optimise operations, and identify growth opportunities.
            <br />
            <br />
            Your analytical acumen will be key in turning data into powerful
            business intelligence.
          </p>

          <LinkButton
            href="mailto:oliverandmatthers@yahoo.com?subject=Application%20to%20Data%20Analytics%20Pathway"
            width="FULL"
            BUTTON_TYPE="GREEN"
          >
            Apply Now
          </LinkButton>
        </div>

        <div className="careers__pathways__item">
          <h3>Engineering</h3>
          <p>
            As a consultant in our Software Engineering pathway, you&apos;ll
            craft innovative software solutions tailored to our clients&apos;
            needs.
            <br />
            <br />
            You&apos;ll be involved in developing custom applications,
            integrating systems, and enhancing digital platforms to support
            business growth.
            <br />
            <br />
            Your expertise in coding, design, and development will ensure that
            our clients&apos; technology infrastructures are robust, scalable,
            and future-ready.
          </p>

          <LinkButton
            href="mailto:oliverandmatthers@yahoo.com?subject=Application%20to%20Engineering%20Pathway"
            width="FULL"
            BUTTON_TYPE="GREEN"
          >
            Apply Now
          </LinkButton>
        </div>

        <div className="careers__pathways__item">
          <h3>Operations</h3>
          <p>
            In the IT Operations pathway, you&apos;ll focus on maintaining and
            optimising clients&apos; IT environments to ensure stability and
            efficiency.
            <br />
            <br />
            As a consultant, you&apos;ll manage system upgrades, enhance
            security measures, and streamline IT processes. Your role will be
            crucial in ensuring that our clients&apos; IT operations are
            reliable, scalable, and aligned with their strategic objectives.
          </p>

          <LinkButton
            href="mailto:oliverandmatthers@yahoo.com?subject=Application%20to%20Operations%20Pathway"
            width="FULL"
            BUTTON_TYPE="GREEN"
          >
            Apply Now
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
