import dynamic from "next/dynamic";
import { Suspense } from "react";

const OurValues = dynamic(() => import("./our-values"));
const OurTeam = dynamic(() => import("./our-team"));

export default function AboutUs() {
  return (
    <main className="about__us__page">
      <Suspense fallback={<>Loading</>}>
        <OurValues />
      </Suspense>

      <Suspense>
        <OurTeam />
      </Suspense>
    </main>
  );
}
