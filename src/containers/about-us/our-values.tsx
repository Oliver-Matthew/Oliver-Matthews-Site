import CuriousityImg from "@/assets/images/about-us/curiousity.jpg";
import IndividualityImg from "@/assets/images/about-us/individuality.jpg";
import TogethernessImg from "@/assets/images/about-us/togetherness.jpg";
import IntegrityImg from "@/assets/images/about-us/integrity.jpg";
import OwnershipImg from "@/assets/images/about-us/ownnership.jpg";
import Image from "next/image";

export default function OurValues() {
  return (
    <section className="our__values__section">
      <h2 className="our__values__header">Our Values</h2>

      <div className="value__item__wrapper">
        <figure className="value__item__image">
          <Image
            src={CuriousityImg}
            width={600}
            height={400}
            alt="curiousity"
            placeholder="blur"
          />
        </figure>

        <div className="value__item__text">
          <h3>Curiousity</h3>

          <p>
            At Oliver & Matthews, curiosity drives our innovation. By asking the
            right questions and embracing continuous learning, we push
            boundaries, uncover opportunities, and deliver groundbreaking
            solutions.
            <br />
            <br />
            Our commitment to curiosity ensures that every challenge is met with
            creativity, cutting-edge technologies, and a focus on progress for
            our clients.
          </p>
        </div>
      </div>

      <div className="value__item__wrapper">
        <div className="value__item__text">
          <h3>Individuality</h3>

          <p>
            We believe everyone is unique and celebrate Individuality by
            recognising and valuing each team member’s unique skills,
            perspectives, and experiences.
            <br />
            <br />
            Our diverse backgrounds fuel our creativity and problem-solving,
            allowing us to offer personalised and effective solutions tailored
            to our clients&apos; needs.
          </p>
        </div>

        <figure className="value__item__image">
          <Image
            src={IndividualityImg}
            width={600}
            height={400}
            alt="individuality"
            placeholder="blur"
          />
        </figure>
      </div>

      <div className="value__item__wrapper">
        <figure className="value__item__image">
          <Image
            src={TogethernessImg}
            width={600}
            height={400}
            alt="togetherness"
            placeholder="blur"
          />
        </figure>

        <div className="value__item__text">
          <h3>Togetherness</h3>

          <p>
            Togetherness is at the heart of our collaborative culture. We
            believe in working as one cohesive team, supporting each other and
            fostering a sense of community.
            <br />
            <br />
            By leveraging our collective strengths, we achieve shared goals and
            drive success together.
          </p>
        </div>
      </div>

      <div className="value__item__wrapper">
        <div className="value__item__text">
          <h3>Integrity</h3>

          <p>
            Integrity is the cornerstone of our consultancy. We are committed to
            transparency, honesty, and ethical decision-making in every aspect
            of our work.
            <br />
            <br />
            By fostering trust with our clients and partners, we ensure that our
            solutions are not only effective but are built on a foundation of
            accountability and fairness
          </p>
        </div>

        <figure className="value__item__image">
          <Image
            src={IntegrityImg}
            width={600}
            height={400}
            alt="integrity"
            placeholder="blur"
          />
        </figure>
      </div>

      <div className="value__item__wrapper">
        <figure className="value__item__image">
          <Image
            src={OwnershipImg}
            width={600}
            height={400}
            alt="ownership"
            placeholder="blur"
          />
        </figure>

        <div className="value__item__text">
          <h3>Ownership</h3>

          <p>
            At Oliver & Matthews, Ownership means taking proactive
            responsibility for our work and its impact.
            <br />
            <br />
            We empower our team to take initiative, make informed decisions, and
            drive projects forward, ensuring that we deliver exceptional value
            and achieve our business objectives.
          </p>
        </div>
      </div>
    </section>
  );
}
