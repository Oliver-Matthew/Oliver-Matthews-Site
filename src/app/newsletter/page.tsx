import { FaRegNewspaper } from "react-icons/fa6";
export const metadata = {
  title: "Newsletter",
};
export default function Page() {
  return (
    <main className="newsletter__page">
      <div className="icon__wrapper">
        <FaRegNewspaper />
      </div>
      <h2>Coming Soon!</h2>
    </main>
  );
}
