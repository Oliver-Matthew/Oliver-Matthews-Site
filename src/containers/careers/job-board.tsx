"use client";

import { gsap, useGSAP, SplitType } from "@/utils/gsap";

const roles = [
  {
    id: 1,
    role__name: " Graduate Data Analyst - Cambridge - Cambridge",
    role_commute: "onsite",
    role_location: "London, UK",
    role_type: "Data",
  },
  {
    id: 2,
    role__name: " Graduate Data Analyst - Cambridge - Cambridge",
    role_commute: "onsite",
    role_location: "London, UK",
    role_type: "Change",
  },
  {
    id: 3,
    role__name: " Graduate Data Analyst - Cambridge - Cambridge",
    role_commute: "onsite",
    role_location: "London, UK",
    role_type: "Operations",
  },
  {
    id: 4,
    role__name: " Graduate Data Analyst - Cambridge - Cambridge",
    role_commute: "onsite",
    role_location: "London, UK",
    role_type: "Engineering",
  },
];

export default function JobBoard() {
  useGSAP(() => {
    new SplitType(".career__progress__header", {
      types: "words",
    });
    const longLines = gsap.utils.toArray(
      ".career__progress__item > .horizontal__line"
    ) as HTMLElement[];

    const valuesHeaders = gsap.utils.toArray(
      ".career__progress__item > h3"
    ) as HTMLElement[];

    const textsLines = new SplitType(".career__item__text > p", {
      types: "lines",
    });

    gsap.fromTo(
      ".career__progress__header > div",
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
          trigger: ".career__progress__header",
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
  }, [".career__progress__wrapper"]);

  return (
    <section className="careers__job__board">
      <h2 className="job__board__header">Current Job Openings</h2>

      <p>
        We&apos;re always looking for great talent to join our teams. If there
        aren&apos;t currently any open roles suitable for you, please register
        your interest in one of our programmes and we will contact you when
        relevant roles become available.
      </p>

      <div className="current__openings__wrapper">
        {roles.map((role) => {
          return (
            <div className="job__item" key={role.id}>
              <div className="role__name">{role.role__name}</div>
              <div className="role__commute">{role.role_commute}</div>
              <div className="role__location">{role.role_location}</div>
              <div className="role__type">{role.role_type}</div>
            </div>
          );
        })}
      </div>

      <div className="career__progress__wrapper">
        <h2 className="career__progress__header">Career Progression</h2>
        <div className="career__progress__items">
          <div className="career__progress__item">
            <div className="horizontal__line" />

            <h3>01. Engagement</h3>

            <div className="career__item__text">
              <p>
                Our friendly Talent Acquisition team will discuss your
                application with you and answer any initial questions.
              </p>
              <p>
                We&apos;ll talk you through the selection process, managing your
                expectations and helping you feel properly prepared for
                assessments.
              </p>
            </div>
          </div>

          <div className="career__progress__item">
            <div className="horizontal__line" />

            <h3>02. Training</h3>
            <div className="career__item__text">
              <p>
                Once assessments have been concluded, you&apos;ll be given your
                training plan.
              </p>
              <p>
                This will enable you to make an impact from day one, with
                ongoing upskilling during the assignment, enabling you to excel
                in your role and strive for new goals.
              </p>
            </div>
          </div>

          <div className="career__progress__item">
            <div className="horizontal__line" />

            <h3>03. Deployment</h3>

            <div className="career__item__text">
              <p>
                We&apos;ll ensure you feel properly supported in your
                assignment, alleviating any concerns you might have and
                providing upskilling support as required.
              </p>
              <p>
                That way you can focus on what&apos;s most important to you your
                career.
              </p>
            </div>
          </div>

          <div className="career__progress__item">
            <div className="horizontal__line" />

            <h3>04. Support </h3>

            <div className="career__item__text">
              <p>
                You&apos;ll always be part of our team. You&apos;ll regularly
                spend time with your Engagement Manager and other colleagues We
                frequently organise social events to help create a sense of
                belonging with Albany Beck while you&apos;re working on-site
                with our clients.
              </p>
            </div>
          </div>

          <div className="career__progress__item">
            <div className="horizontal__line" />

            <h3>05. Progression</h3>

            <div className="career__item__text">
              <p>
                Progression After two years, you choose whether to stay with the
                client you&apos;ve been working with or move to a different
                organisation, potentially in a different industry. set.
              </p>
              <p>
                Each option will allow you to continuously expand your knowledge
                and skill
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
