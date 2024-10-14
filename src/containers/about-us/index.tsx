import dynamic from "next/dynamic";

const OurValues = dynamic(() => import("./our-values"));

export default function AboutUs() {
  return (
    <main className="about__us__page">
      <OurValues />
    </main>
  );
}
