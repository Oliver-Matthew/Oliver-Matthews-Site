import dynamic from "next/dynamic";

const JoinUs = dynamic(() => import("./join-us"));
const Pathways = dynamic(() => import("./pathways"));
const WhyUs = dynamic(() => import("./why-us"));
const JobBoard = dynamic(() => import("./job-board"));

export default function Careers() {
  return (
    <main className="careers__page">
      <JoinUs />
      <Pathways />
      <WhyUs />
      <JobBoard />
    </main>
  );
}
