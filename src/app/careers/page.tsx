import Image from "next/image";
import React from "react";

import JoinUsImg from "@/assets/images/careers/join-us-img.jpg";
import LinkButton from "@/components/common/buttons/link-button";

export default function Page() {
  return (
    <main className="careers__page">
      <section className="careers__join__us">
        <h2 className="join__us__header">Join Us</h2>
        <div className="join__us__content">
          <div className="join__us__text">
            <h3>Shape the Future with Us</h3>
            <p>
              Are you passionate about driving innovation and making a real
              impact?
              <br />
              <br />
              At Oliver & Matthews, we&apos;re on the lookout for dynamic,
              forward-thinking individuals who are eager to contribute to our
              mission of transforming businesses through Change and
              Transformation, Data Analytics, Software Engineering, and IT
              Operations.
              <br />
              <br />
              We offer a collaborative and supportive environment where your
              ideas and expertise can thrive. Join our team and be part of a
              company that values Innovation, Individuality, Togetherness,
              Accountability, Ownership, and Excellence.
              <br />
              <br />
              If you&apos;re ready to embrace new challenges and help shape the
              future of our clients, we&apos;d love to hear from you. Explore
              our opportunities and start your journey with us today!
            </p>
          </div>

          <figure className="join__us__image">
            <Image
              src={JoinUsImg}
              alt="join us"
              width={400}
              height={400}
              placeholder="blur"
            />
          </figure>
        </div>
      </section>

      <section className="careers__pathways">
        <h2 className="pathways__header">Pathways</h2>

        <div className="careers__pathways__items">
          <div className="careers__pathways__item">
            <h3>
              <span /> Change
            </h3>
            <p>
              Are you passionate about driving innovation and making a real
              impact?
              <br />
              <br />
              At Oliver & Matthews, we&apos;re on the lookout for dynamic,
              forward-thinking individuals who are eager to contribute to our
              mission of transforming businesses through Change and
              Transformation, Data Analytics, Software Engineering, and IT
              Operations.
              <br />
              <br />
              We offer a collaborative and supportive environment where your
              ideas and expertise can thrive. Join our team and be part of a
              company that values Innovation, Individuality, Togetherness,
              Accountability, Ownership, and Excellence.
              <br />
              <br />
              If you&apos;re ready to embrace new challenges and help shape the
              future of our clients, we&apos;d love to hear from you. Explore
              our opportunities and start your journey with us today!
            </p>

            <LinkButton
              href="/careers"
              width="FULL"
              style={{ minHeight: "4.5rem", minWidth: "12rem" }}
            >
              {" "}
              Apply Now
            </LinkButton>
          </div>

          <div className="careers__pathways__item">
            <h3>
              <span /> Data
            </h3>
            <p>
              In the Data Analytics pathway, you&apos;ll dive into complex data
              sets to uncover actionable insights that drive strategic
              decision-making.
              <br />
              <br /> As a consultant, you&apos;ll harness advanced analytical
              tools and methodologies to help clients understand market trends,
              optimise operations, and identify growth opportunities.
              <br />
              <br />
              Your analytical acumen will be key in turning data into powerful
              business intelligence.
            </p>

            <LinkButton
              href="/careers"
              width="FULL"
              style={{ minHeight: "4.5rem", minWidth: "12rem" }}
            >
              Apply Now
            </LinkButton>
          </div>

          <div className="careers__pathways__item">
            <h3>
              <span /> Engineering
            </h3>
            <p>
              As a consultant in our Software Engineering pathway, you&apos;ll
              craft innovative software solutions tailored to our clients&apos;
              needs.
              <br />
              <br />
              You&apos;ll be involved in developing custom applications,
              integrating systems, and enhancing digital platforms to support
              business growth.
              <br />
              <br />
              Your expertise in coding, design, and development will ensure that
              our clients&apos; technology infrastructures are robust, scalable,
              and future-ready.
            </p>

            <LinkButton
              href="/careers"
              width="FULL"
              style={{ minHeight: "4.5rem", minWidth: "12rem" }}
            >
              Apply Now
            </LinkButton>
          </div>

          <div className="careers__pathways__item">
            <h3>
              <span /> Operations
            </h3>
            <p>
              In the IT Operations pathway, you&apos;ll focus on maintaining and
              optimising clients&apos; IT environments to ensure stability and
              efficiency.
              <br />
              <br />
              As a consultant, you&apos;ll manage system upgrades, enhance
              security measures, and streamline IT processes. Your role will be
              crucial in ensuring that our clients&apos; IT operations are
              reliable, scalable, and aligned with their strategic objectives.
            </p>

            <LinkButton
              href="/careers"
              width="FULL"
              style={{ minHeight: "4.5rem", minWidth: "12rem" }}
            >
              Apply Now
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="careers__why__us">
        <h2 className="why__us__header">Why Us?</h2>

        <div className="careers__why__us__items">
          <div className="careers__why__us__item">
            <hr />
            <p>
              Finding the right company is as crucial as finding the right
              candidate. At Oliver & Matthews, we believe that the perfect match
              is mutual: just as you need to be a great fit for us, we must be
              the right fit for you.
              <br />
              <br />
              Our recruitment process is designed to be thorough and
              transparent, ensuring that we find individuals who align with our
              values and culture.
              <br />
              <br />
              From the initial application to the final interview, we focus on
              getting to know you and understanding how your unique skills and
              experiences can contribute to our team.
            </p>
          </div>

          <div className="careers__why__us__item">
            <hr />
            <p>
              Working at Oliver & Matthews means being part of a people-centric
              organisation that values and invests in its people. We understand
              that our success depends on the talent, dedication, and wellbeing
              of our team members.
              <br />
              <br />
              That&apos;s why we foster a supportive and collaborative
              environment where everyone&apos;s contributions are recognised and
              appreciated. You&apos;ll find opportunities for professional
              growth, a commitment to work-life balance, and a culture that
              celebrates both individuality and teamwork.
              <br />
              <br />
              If you&apos;re seeking a workplace where you can make a meaningful
              impact and grow with us, we&apos;re excited to explore the
              possibilities with you.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
