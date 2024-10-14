import LinkButton from "@/components/common/buttons/link-button";
import AboutUsImg from "@/assets/images/home/about-us-img.jpg";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="who__we__are__section">
      <div className="who__we__are__text">
        <h2 className="who__we__are__header">Who We Are</h2>
        <p className="who__we__are__paragraph">
          <span>Oliver & Matthews</span>, a London-founded firm of seasoned
          consultants, has identified a crucial gap in the industry. We
          integrate pioneering strategies and expert guidance to propel your
          business forward.
          <br />
          <br />
          Our team specialises in understanding your unique challenges and
          providing resources to help you achieve your objectives and
          sustainable growth. Let us assist you in overcoming obstacles and
          reaching new heights of success.
        </p>

        <LinkButton href="/" style={{ minHeight: "4.5rem", minWidth: "12rem" }}>
          {" "}
          Learn More
        </LinkButton>
      </div>

      <figure className="who__we__are__image">
        <Image
          src={AboutUsImg}
          width={400}
          height={400}
          alt="about oliver matthews"
          placeholder="blur"
        />
      </figure>
    </section>
  );
}
