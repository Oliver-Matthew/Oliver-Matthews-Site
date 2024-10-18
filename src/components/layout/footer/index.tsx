import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

import OliverMatthewsLogo from "@/assets/images/oliver-matthews-logo.png";
import PrimaryButton from "@/components/common/buttons/primary-button";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__form__wrapper">
          <h2>Contact</h2>
          <h3>Let us know what you think:</h3>
          <form action="">
            <input type="mail" placeholder="Enter your email" />

            <textarea name="" id="" placeholder="Enter message"></textarea>
            <PrimaryButton type="submit" width="FULL" BUTTON_VARIANT="GREEN">
              Submit
            </PrimaryButton>
          </form>
        </div>

        <div className="footer__top__wrapper">
          <div className="footer__column one">
            <figure>
              <Image
                src={OliverMatthewsLogo}
                alt="oliver matthews"
                loading="lazy"
              />
            </figure>

            <div className="footer__social__links">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>{" "}
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>{" "}
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
            </div>
          </div>

          <div className="footer__column two">
            <h3 className="footer__column__header">Quick Links</h3>

            <div className="footer__links">
              <Link href="/">Contact Us</Link>
              <Link href="/">Blog</Link>
            </div>
          </div>

          <div className="footer__column three">
            <h3 className="footer__column__header">Careers</h3>

            <div className="footer__links">
              <Link href="/">Join Us</Link>
              <Link href="/">Explore</Link>
            </div>
          </div>

          <div className="footer__column four">
            <h3 className="footer__column__header">Contact</h3>

            <div className="footer__links">
              <a href="tel:+">+30 9877 777 00</a>
              <a href="mailto:">info@olivermatthews.org</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom__wrapper">
          <hr />
          <div className="footer__bottom__links">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
