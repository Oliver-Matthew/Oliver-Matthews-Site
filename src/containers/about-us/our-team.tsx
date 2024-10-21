"use client";

import Image from "next/image";
import { useRef, createRef } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import { gsap, useGSAP } from "@/utils/gsap";
// import { CustomCSSType } from "@/types/styles";
import { teamCarousel } from "@/lib";

// import CuriousityImg from "@/assets/images/about-us/curiousity.jpg";
// import IndividualityImg from "@/assets/images/about-us/individuality.jpg";
// import TogethernessImg from "@/assets/images/about-us/togetherness.jpg";

export default function OurTeam() {
  return (
    <section className="our__team__section" id="our-team">
      <h2 className="our__team__header">Meet Our Team</h2>

      {/* <div className="team__members__wrapper">
        <div className="team__member__item">
          <figure className="team__member__image">
            <Image
              src={CuriousityImg}
              width={600}
              height={400}
              alt="curiousity"
              placeholder="blur"
            />
          </figure>

          <div className="team__member__text">
            <h3>Team Member</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              quibusdam quos error officiis? Nisi, at corporis. Sunt asperiores
              sit quod necessitatibus vero expedita dolorem officia error, vitae
              totam explicabo eos.
            </p>
          </div>
        </div>

        <div className="team__member__item">
          <div className="team__member__text">
            <h3>Team Member</h3>

            <p>Bio</p>
          </div>

          <figure className="team__member__image">
            <Image
              src={IndividualityImg}
              width={600}
              height={400}
              alt="individuality"
              placeholder="blur"
            />
          </figure>
        </div>

        <div className="team__member__item">
          <figure className="team__member__image">
            <Image
              src={TogethernessImg}
              width={600}
              height={400}
              alt="togetherness"
              placeholder="blur"
            />
          </figure>

          <div className="team__member__text">
            <h3>Team Member</h3>

            <p>Bio</p>
          </div>
        </div>
      </div> */}

      <TeamCarousel />
    </section>
  );
}

export function TeamCarousel() {
  const teamSlideRef = useRef(
    teamCarousel.map(() => createRef<HTMLDivElement>())
  );
  const slideContainerRef = useRef<HTMLDivElement | null>(null);
  const teamSectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    (_, contextSafe) => {
      if (!contextSafe) return;
      if (!teamSectionRef.current) return;
      if (!slideContainerRef.current || slideContainerRef.current === null)
        return;
      if (!teamSlideRef.current) return;
      const single_slide = teamSlideRef.current[0];
      if (!single_slide.current) return;
      const prevButton = document.querySelector(".team__slide__previous__btn");
      const nextButton = document.querySelector(".team__slide__next__btn");
      const slideDelay = 10;
      const slideDuration = 3;
      const wrap = true;
      const slides = document.querySelectorAll(".team__slide__item");
      const progressWrap = gsap.utils.wrap(0, 1);
      const numSlides = slides.length;
      gsap.set(slides, {
        // backgroundColor:
        //   "random([red, blue, green, purple, orange, yellow, lime, pink])",
        xPercent: (i) => i * 100,
      });
      const wrapX = gsap.utils.wrap(-100, (numSlides - 1) * 100);
      const timer = gsap.delayedCall(slideDelay, autoPlay);
      const animation = gsap.to(slides, {
        xPercent: "+=" + numSlides * 100,
        duration: 1,
        ease: "none",
        paused: true,
        repeat: -1,
        modifiers: {
          xPercent: wrapX,
        },
      });
      const proxy = document.createElement("div");
      let slideAnimation = gsap.timeline().to({}, {});
      let slideWidth = 0;
      let wrapWidth = 0;
      function animateSlides(direction: number) {
        timer.restart(true);
        slideAnimation.kill();
        const x = Number(
          snapX(Number(gsap.getProperty(proxy, "x"))) + direction * slideWidth
        );
        slideAnimation = gsap.timeline().to(proxy, {
          x: x,
          duration: slideDuration,
          onUpdate: updateProgress,
        });
      }
      function autoPlay() {
        // if (
        //   draggable.isPressed ||
        //   draggable.isDragging ||
        //   draggable.isThrowing
        // ) {
        //   timer.restart(true);
        // } else {
        //   animateSlides(-1);
        // }
        animateSlides(-1);
        // timer.restart(true);
      }
      function updateProgress() {
        animation.progress(
          progressWrap(Number(gsap.getProperty(proxy, "x")) / wrapWidth)
        );
      }
      function snapX(value: number) {
        const snapped = gsap.utils.snap(slideWidth, value);
        return wrap
          ? snapped
          : gsap.utils.clamp(-slideWidth * (numSlides - 1), 0, snapped);
      }
      function resize() {
        const norm = Number(gsap.getProperty(proxy, "x")) / wrapWidth || 0;
        slideWidth = single_slide.current?.offsetWidth || 0;
        wrapWidth = slideWidth * numSlides;
        // wrap ||
        //   draggable.applyBounds({
        //     minX: -slideWidth * (numSlides - 1),
        //     maxX: 0,
        //   });
        gsap.set(proxy, {
          x: norm * wrapWidth,
        });
        animateSlides(0);
        slideAnimation.progress(1);
      }
      prevButton?.addEventListener("click", function () {
        animateSlides(1);
      });
      nextButton?.addEventListener("click", function () {
        animateSlides(-1);
      });
      resize();
      window.addEventListener("resize", resize);
      return () => {
        window.removeEventListener("resize", resize);
      };
    },
    { dependencies: [".team__slider__section"], scope: teamSectionRef }
  );

  return (
    <section className="team__slider__section" ref={teamSectionRef}>
      <div className="team__carousel">
        <div className="team__slides__wrapper">
          <div className="team__slides__inner__wrapper" ref={slideContainerRef}>
            {teamCarousel.map((item, index) => (
              <div
                key={index}
                className="team__slide__item"
                ref={teamSlideRef.current[index]}
              >
                <div className="team__member">
                  <div className="bio__text">
                    <span>&ldquo;</span>
                    <p>{item.text}</p>
                    <span>&rdquo;</span>
                  </div>

                  <div className="member__name__picture">
                    <span className="member__name">
                      {item.name} ({item.location})
                    </span>

                    <figure className="member__image">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={200}
                        height={200}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="team__slide__navigation">
          <button
            name="left"
            type="button"
            className="team__slide__previous__btn"
          >
            <MdKeyboardArrowLeft role="button" />
          </button>
          <button name="right" type="button" className="team__slide__next__btn">
            <MdKeyboardArrowRight role="button" />
          </button>
        </div>
      </div>
    </section>
  );
}
