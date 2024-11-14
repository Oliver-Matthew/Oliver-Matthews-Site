"use client";
import { useState } from "react";
import Link from "next/link";

import OliverMatthewsLogo from "@/assets/images/oliver-matthews-logo.png";
import Image from "next/image";
import LinkButton from "@/components/common/buttons/link-button";

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
								<Link href="/about-us">About Us</Link>
							</li>
							<li>
								<Link href="/services">Services</Link>
							</li>
							<li>
								<Link href="/careers">Careers</Link>
							</li>
							{/* <li>
                <Link href="/newsletter">Newsletter</Link>
              </li> */}
							<li>
								<Link href="/contact-us">Contact Us</Link>
							</li>
						</ul>
					</nav>

					<LinkButton
						href="/careers"
						BUTTON_TYPE="GREEN"
						style={{ paddingInline: "2.5rem" }}
					>
						Join Us
					</LinkButton>
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
								{/* <LinkDrawer
                  links={aboutusLinks}
                  onClick={() => setOpenMenu(false)}
                >
                  About Us
                </LinkDrawer> */}
								<Link href="/about-us" onClick={() => setOpenMenu(false)}>
									About Us
								</Link>
							</li>
							<li>
								{/* <LinkDrawer
                  links={servicesLinks}
                  onClick={() => setOpenMenu(false)}
                >
                  Services
                </LinkDrawer> */}
								<Link href="/services" onClick={() => setOpenMenu(false)}>
									Services
								</Link>
							</li>
							<li>
								<Link href="/careers" onClick={() => setOpenMenu(false)}>
									Careers
								</Link>
							</li>

							<li>
								<Link href="/newsletter" onClick={() => setOpenMenu(false)}>
									Newsletter
								</Link>
							</li>

							<li>
								<Link href="/contact-us" onClick={() => setOpenMenu(false)}>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}

// const aboutusLinks = [
//   { link: "/about-us#our-values", external: false, name: "Our Values" },
//   { link: "/about-us#our-team", external: false, name: "Meet Our Team" },
// ];

// const servicesLinks = [
//   { link: "/change-service", external: false, name: "Change " },
//   { link: "/data-service", external: false, name: "Data " },
//   {
//     link: "/operations-service",
//     external: false,
//     name: "Operations ",
//   },
//   {
//     link: "/engineering-service",
//     external: false,
//     name: "Engineering",
//   },
// ];
