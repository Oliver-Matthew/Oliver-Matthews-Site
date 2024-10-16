import gsap from "gsap";
import { Dom } from "../classes/dom";
import { ScrollAnimation } from "../classes/scroll-animation";
import { ObserverAnimation } from "../classes/observer-animation";

export class AboutUs extends Dom {
  timeline: GSAPTimeline;
  animationsImages: ObserverAnimation[] = [];
  animations: ScrollAnimation[] & ObserverAnimation[] = [];

  constructor() {
    super({
      selector: ".about__us__page",
      secondarySelectors: {
        animationsImages: '[data-animation="image-reveal"]',
      },
    });

    this.timeline = gsap.timeline();
    this.init();
  }

  init() {
    // Images
    this.animationsImages = this.secondaryElements?.animationsImages.map(
      (element) =>
        new ObserverAnimation({
          selector: element,
          animation: {
            tween: { height: 0, duration: 1.5, ease: "power3.out" },
          },
        })
    );
    this.animations?.push(...this.animationsImages);
  }
}
