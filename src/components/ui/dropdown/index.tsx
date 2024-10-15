import { useState, ReactNode } from "react";
import Link from "next/link";

type Props = {
  links: Array<{ link: string; external: boolean; name: string }>;
  children: ReactNode;
};

export function DropDown(props: Props) {
  const { links, children } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown__wrapper" onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        onTouchStart={() => setOpen(true)}
        onTouchEnd={() => setOpen(false)}
      >
        {children}
      </button>

      <div
        className={`dropdown__container ${open ? "open" : ""}`}
        onMouseEnter={() => setOpen(true)}
        // onMouseLeave={() => setOpen(false)}
      >
        {links.map((item) => {
          {
            return item.external ? (
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                key={item.name}
              >
                {item.name}
              </a>
            ) : (
              <Link key={item.name} href={item.link}>
                {item.name}
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
