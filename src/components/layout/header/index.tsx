import Link from "next/link";

import PrimaryButton from "@/components/common/buttons/primary-button";

import OliverMatthewsLogo from "@/assets/images/oliver-matthews-logo.jpeg";
import Image from "next/image";

export default function Header() {
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
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/">Tech</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
            </ul>
          </nav>

          <PrimaryButton showArrow>Join Us</PrimaryButton>
        </div>
      </div>
    </header>
  );
}
