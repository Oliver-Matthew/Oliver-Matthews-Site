import { useState, ReactNode } from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

type Props = {
  links: Array<{ link: string; external: boolean; name: string }>;
  children: ReactNode;
  onClick: () => void;
};

export default function LinkDrawer(props: Props) {
  const { links, children, onClick } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="link__drawer__wrapper">
      <button type="button" onClick={() => setOpen(!open)}>
        {children}
        <span className={`${open ? "open" : ""}`}>
          <FaPlus />
        </span>
      </button>

      <div className={`link__drawer__container ${open ? "open" : ""}`}>
        {links.map((item) => {
          {
            return item.external ? (
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                key={item.name}
                onClick={onClick}
              >
                {item.name}
              </a>
            ) : (
              <Link key={item.name} href={item.link} onClick={onClick}>
                {item.name}
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
