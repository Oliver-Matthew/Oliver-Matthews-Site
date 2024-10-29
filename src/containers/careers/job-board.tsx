"use client";

import { gsap, useGSAP, SplitType } from "@/utils/gsap";

// const roles = [
//   {
//     id: 1,
//     role__name: " Graduate Data Analyst - Cambridge - Cambridge",
//     role_commute: "onsite",
//     role_location: "London, UK",
//     role_type: "Data",
//   },
//   {
//     id: 2,
//     role__name: " Graduate Data Analyst - Cambridge - Cambridge",
//     role_commute: "onsite",
//     role_location: "London, UK",
//     role_type: "Change",
//   },
//   {
//     id: 3,
//     role__name: " Graduate Data Analyst - Cambridge - Cambridge",
//     role_commute: "onsite",
//     role_location: "London, UK",
//     role_type: "Operations",
//   },
//   {
//     id: 4,
//     role__name: " Graduate Data Analyst - Cambridge - Cambridge",
//     role_commute: "onsite",
//     role_location: "London, UK",
//     role_type: "Engineering",
//   },
// ];

export default function JobBoard() {
  useGSAP(() => {
    new SplitType(".career__progress__header", {
      types: "words",
    });
    const longLines = gsap.utils.toArray(
      ".career__progress__item > .horizontal__line"
    ) as HTMLElement[];

    new SplitType(".career__progress__item > h3", {
      types: "words",
    });

    const textsLines = gsap.utils.toArray(
      ".career__item__text > p"
    ) as HTMLElement[];

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

    gsap.fromTo(
      ".career__progress__item > h3 > div",
      {
        y: "50",
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
          trigger: ".career__progress__item > h3",
          start: "top bottom",
          // end: "+=100",
          toggleActions: "play none none none",
        },
      }
    );

    textsLines.forEach((line) => {
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
      {/* <h2 className="job__board__header">Current Job Openings</h2>

      <p>
        We&apos;re always looking for great talent to join our teams. If there
        aren&apos;t currently any open roles suitable for you, please register
        your interest in one of our programmes and we will contact you when
        relevant roles become available.
      </p> */}

      {/* <div className="current__openings__wrapper">
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
      </div> */}

      <div className="career__progress__wrapper">
        <h2 className="career__progress__header">Consultants Journey</h2>
        <div className="career__progress__items">
          <div className="career__progress__item">
            <div className="horizontal__line" />

            <h3>01. Recruitment</h3>

            <div className="career__item__text">
              <p>
                Our recruitment team supports you from the start, we are here to
                answer any preliminary questions and give you a clear
                understanding of what to expect throughout the selection
                process.
              </p>
              <p>
                We&apos;ll provide guidance and resources to help you approach
                assessments with confidence
              </p>
            </div>
          </div>

          <div className="career__progress__item">
            <div className="horizontal__line" />

            <h3>02. Deployment</h3>

            <div className="career__item__text">
              <p>
                We&apos;re committed to assigning you the best project for you
                and your skill set. you feel fully supported in your assignment,
                addressing any concerns and offering upskilling opportunities as
                needed.
              </p>
              <p>
                This way, you can concentrate on what matters most—advancing
                your career.
              </p>
            </div>
          </div>

          <div className="career__progress__item">
            <div className="horizontal__line" />

            <h3>03. Support</h3>
            <div className="career__item__text">
              <p>
                You&apos;ll always remain a valued part of our team. You&apos;ll
                regularly connect with your Engagement Manager and colleagues,
                and we organize social events to foster a strong sense of
                community.
              </p>
              <p>
                We&apos;re here to encourage you in pursuing any new interests,
                supporting you with the training or upskilling you need to
                follow your passions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
