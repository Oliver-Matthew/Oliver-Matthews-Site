"use client";
import { useState } from "react";
import Link from "next/link";

import PrimaryButton from "@/components/common/buttons/primary-button";
import { DropDown } from "@/components/ui/dropdown";

import OliverMatthewsLogo from "@/assets/images/oliver-matthews-logo.jpeg";
import Image from "next/image";
import LinkDrawer from "@/components/ui/link-drawer";

const aboutusLinks = [
  { link: "/about-us#our-values", external: false, name: "Our Values" },
  { link: "/about-us#our-team", external: false, name: "Meet Our Team" },
];

const servicesLinks = [
  { link: "/change-service", external: false, name: "Change " },
  { link: "/data-service", external: false, name: "Data " },
  {
    link: "/operations-service",
    external: false,
    name: "Operations ",
  },
  {
    link: "/engineering-service",
    external: false,
    name: "Engineering",
  },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__desktop">
          <Link href="/" className="logo__link">
            <figure>
              <Image
                src={OliverMatthewsLogo}
                width={200}
                height={200}
                alt="oliver matthews"
                loading="lazy"
              />
            </figure>
          </Link>

          <nav className="nav__wrapper">
            <ul>
              <li>
                <DropDown links={aboutusLinks}>About Us</DropDown>
              </li>
              <li>
                <DropDown links={servicesLinks}>Services</DropDown>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/#blog-section">Newsletter</Link>
              </li>
            </ul>
          </nav>

          <PrimaryButton showArrow>Join Us</PrimaryButton>
        </div>

        <div className="header__mobile">
          <Link href="/" className="logo__link">
            <figure>
              <Image
                src={OliverMatthewsLogo}
                width={200}
                height={200}
                alt="oliver matthews"
                loading="lazy"
              />
            </figure>
          </Link>

          <button
            type="button"
            className={`hamburger__btn ${openMenu ? "open" : ""}`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span /> <span /> <span />
          </button>

          <div className={`mobile__menu ${openMenu ? "open" : ""}`}>
            <ul className="mobile__nav__list">
              <li>
                <LinkDrawer
                  links={aboutusLinks}
                  onClick={() => setOpenMenu(false)}
                >
                  About Us
                </LinkDrawer>
              </li>
              <li>
                <LinkDrawer
                  links={servicesLinks}
                  onClick={() => setOpenMenu(false)}
                >
                  Services
                </LinkDrawer>
              </li>
              <li>
                <Link href="/careers" onClick={() => setOpenMenu(false)}>
                  Careers
                </Link>
              </li>

              <li>
                <Link href="/#blog-section" onClick={() => setOpenMenu(false)}>
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
