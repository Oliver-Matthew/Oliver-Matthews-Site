import { EventEmitter } from "events";
import { getElements } from "../utils";
import { SecondaryElements, SelectorProps } from "@/interactions/types";
import gsap from "gsap";

export class Dom extends EventEmitter {
  element: HTMLElement;
  secondaryElements: SecondaryElements;
  timeline: GSAPTimeline;

  constructor({ selector, secondarySelectors }: SelectorProps) {
    super();

    const { element, secondaryElements } = getElements({
      selector,
      secondarySelectors,
    });
    this.timeline = gsap.timeline();
    this.element = element;
    this.secondaryElements = secondaryElements;

    this.init();
  }

  init() {}

  show() {
    return new Promise((resolve) => {
      this.timeline.fromTo(
        this.element,
        {
          autoAlpha: 0,
        },
        { autoAlpha: 1 }
      );

      this.timeline.call(resolve);
    });
  }

  hide() {
    return new Promise((resolve) => {
      this.timeline.to(this.element, {
        autoAlpha: 0,
        onComplete: resolve,
      });
    });
  }
}
