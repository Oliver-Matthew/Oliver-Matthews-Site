import { clientsLogo } from "@/lib";
import { CustomCSSType } from "@/types/styles";
import Image from "next/image";

export default function Clients() {
  const quantity = clientsLogo.length;
  return (
    <section className="clients__section">
      <h2 className="clients__header">Our Clients</h2>

      <div
        className="clients__slider"
        style={
          {
            "--clientsQuantity": quantity,
            "--clientLogoWidth": "12.5rem",
            "--clientLogoHeight": "6.25rem",
          } as CustomCSSType
        }
      >
        <div className="clients__slider__list">
          {clientsLogo.map((item, index) => {
            return (
              <figure
                key={item.id}
                style={
                  {
                    "--clientLogoPosition": index + 1,
                  } as CustomCSSType
                }
              >
                <Image src={item.image} width={200} height={100} alt="brand" />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
