import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Dom } from "./classes/dom";
import { Home } from "./pages/home";
import { AboutUs } from "./pages/about-us";

type InteractionsProps = {
  template: string | null;
};

export class Interactions {
  pages: { [x: string]: Dom } = {};
  //@ts-expect-error null page?
  page: Dom;
  content: HTMLElement | null = null;
  template: string | null;

  constructor({ template }: InteractionsProps) {
    this.createContent();
    this.createPages();

    this.template = template;
    gsap.registerPlugin(ScrollTrigger);

    this.onResize();
    this.createSmoothScroll();
    this.createPreloader();

    this.addEventListeners();
  }

  createSmoothScroll() {
    const lenis = new Lenis({
      lerp: 0.1,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }

  createPreloader() {
    this.onPreloaded();
  }

  onPreloaded() {
    this.pages.home = new Home();
    this.pages.about = new AboutUs();
  }

  createContent() {
    // this.content = document.querySelector(".content");
    // const temp = this.content?.getAttribute("data-template");
    // if (!temp) return;
    // this.template = temp;
  }

  createPages() {
    if (!this.template) return;
    console.log(this.template);
    this.pages = {
      home: new Home(),
      about: new AboutUs(),
    };
    this.page = this.pages[this.template];
    if (!this.page) return;
    this.page?.init();
  }

  onResize() {
    /**
     * - recalculate
     * - reinitialise
     * - reset, etc.
     * */
  }

  addEventListeners() {
    window.addEventListener("resize", this.onResize.bind(this));
  }
}
