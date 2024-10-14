import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./hero"));
const WhoWeAre = dynamic(() => import("./who-we-are"));
const Expertise = dynamic(() => import("./expertise"));
const Statistics = dynamic(() => import("./statistics"));
const Testimonials = dynamic(() => import("./testimonials"));
const Clients = dynamic(() => import("./clients"));

export default function Home() {
  return (
    <main className="home__page">
      <Hero />
      <WhoWeAre />
      <Expertise />
      <Statistics />
      <Testimonials />
      <Clients />
    </main>
  );
}
