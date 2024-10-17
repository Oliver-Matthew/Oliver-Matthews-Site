import CuriousityImg from "@/assets/images/about-us/curiousity.jpg";
import IndividualityImg from "@/assets/images/about-us/individuality.jpg";
import TogethernessImg from "@/assets/images/about-us/togetherness.jpg";
import IntegrityImg from "@/assets/images/about-us/integrity.jpg";
import OwnershipImg from "@/assets/images/about-us/ownnership.jpg";
import Image from "next/image";

export default function OurTeam() {
  return (
    <section className="our__team__section" id="our-team">
      <h2 className="our__team__header">Meet Our Team</h2>

      <div className="team__members__wrapper">
        <div className="team__member">
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

        <div className="team__member">
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

        <div className="team__member">
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

        <div className="team__member">
          <div className="team__member__text">
            <h3>Team Member</h3>

            <p>Bio</p>
          </div>

          <figure className="team__member__image">
            <Image
              src={IntegrityImg}
              width={600}
              height={400}
              alt="integrity"
              placeholder="blur"
            />
          </figure>
        </div>

        <div className="team__member">
          <figure className="team__member__image">
            <Image
              src={OwnershipImg}
              width={600}
              height={400}
              alt="ownership"
              placeholder="blur"
            />
          </figure>

          <div className="team__member__text">
            <h3>Team Member</h3>

            <p>Bio</p>
          </div>
        </div>
      </div>
    </section>
  );
}
