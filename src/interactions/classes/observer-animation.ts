import gsap from "gsap";

import { ObserverAnimationProps } from "@/interactions/types";
import { Component } from "./component";

export class ObserverAnimation extends Component {
  timeline: gsap.core.Timeline;
  observer: IntersectionObserver = new window.IntersectionObserver(() => {});
  target: ObserverAnimationProps["target"];
  animation: ObserverAnimationProps["animation"];

  constructor({ selector, animation, initialState }: ObserverAnimationProps) {
    super({
      selector,
      secondarySelectors: {},
    });

    this.initialize(initialState!);

    this.timeline = gsap.timeline();
    this.animation = animation;
    // this.target = target;

    this.createObserver();
  }

  createObserver() {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        return entry.isIntersecting ? this.animateIn() : this.animateOut();
      });
    };

    this.observer = new window.IntersectionObserver(callback, {
      threshold: this.animation?.threshold ?? 0.5,
      rootMargin: this.animation?.rootMargin,
      root: this.animation?.root,
    });

    this.observer.observe(this.element ?? this.element);
  }

  initialize(tween: gsap.TweenVars) {
    gsap.set(this.element, {
      ...tween,
    });
  }

  animateIn() {
    return new Promise((resolve) => {
      this.timeline.to(this.element, {
        ...this.animation?.tween,
      });

      this.timeline.call(resolve);
    });
  }

  animateOut() {
    return new Promise((resolve) => {
      if (this.animation?.resetOnExit) {
        this.timeline.reverse();
      }

      this.timeline.call(resolve);
    });
  }

  // animateIn() {}

  // animateOut() {}
}
