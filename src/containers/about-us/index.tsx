import dynamic from "next/dynamic";

const OurValues = dynamic(() => import("./our-values"));
const OurTeam = dynamic(() => import("./our-team"));

export default function AboutUs() {
  return (
    <main className="about__us__page">
      <OurValues />
      <OurTeam />
    </main>
  );
}
