import gsap from "gsap";
import { Dom } from "../classes/dom";
import { ScrollAnimation } from "../classes/scroll-animation";

export class Home extends Dom {
  timeline: GSAPTimeline;
  animationsImages: ScrollAnimation[] = [];
  animations: ScrollAnimation[] = [];

  constructor() {
    super({
      selector: ".home__page",
      secondarySelectors: {
        animationsImages: '[data-animation="image-reveal"]',
      },
    });

    this.timeline = gsap.timeline();
    this.init();
  }

  init() {
    // this.animations.push(
    //   new ScrollAnimation({
    //     element: this.secondaryElements.dash[0],
    //     context: this.secondaryElements.textWrapper[0],
    //     animationProps: {
    //       pin: true,
    //       trigger: this.secondaryElements.textWrapper[0],
    //       start: "top top",
    //       function: (tl) => {
    //         tl.to(this.secondaryElements.dash[0], {
    //           width: "40vw",
    //         });
    //       },
    //     },
    //   })
    // );
    // Images
    this.animationsImages = this.secondaryElements?.animationsImages.map(
      (element) =>
        new ScrollAnimation({
          element: element,
          context: element?.parentElement,
          animationProps: {
            trigger: element,
            start: "top bottom",
            function: (tl) => {
              tl.to(element, { height: 0 });
            },
          },
          // animation: {
          //   tween: { height: 0, duration: 1.5, ease: "power3.out" },
          // },
        })
    );
    this.animations?.push(...this.animationsImages);
  }
}
