// import { FormEvent } from "react";
import PrimaryButton from "@/components/common/buttons/primary-button";

export default function ContactUs() {
  //   async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  //     e.preventDefault();
  //     const form = e.currentTarget;
  //     const formData = new FormData(form);
  //     const data = Object.fromEntries(formData.entries());
  //     console.log(data);
  //     Email.send({
  //       Host: "smtp.elasticemail.com",
  //       Username: "username",
  //       Password: "password",
  //       To: "them@website.com",
  //       From: "you@isp.com",
  //       Subject: "This is the subject",
  //       Body: "And this is the body",
  //     }).then((message) => alert(message));
  //   }

  return (
    <main className="contact__us__page">
      <h2 className="title">Contact Us</h2>

      <p className="intro__text">
        No matter which side of the Atlantic you are on, feel free to reach out
        to us, and we will be more than happy to provide a detailed explanation
        of how our team can assist you.
      </p>

      <form
        action=""
        //   onSubmit={handleSubmit}
      >
        <input name="name" type="text" placeholder="Full Name" required />
        <input name="email" type="text" placeholder="Email Address" required />
        <input
          name="subject"
          type="text"
          placeholder="Subject of Mail"
          required
        />
        <textarea
          name="content"
          id=""
          placeholder="Write Email Content"
        ></textarea>

        <PrimaryButton type="submit" BUTTON_VARIANT="GREEN">
          Submit
        </PrimaryButton>
      </form>

      <p className="outro__text">
        <span> Oliver & Matthews</span> is committed to protecting and
        respecting your privacy, and we&apos;ll only use your personal
        information to administer your account and to provide the products and
        services you requested from us. From time to time, we would like to
        contact you about our products and services, as well as other content
        that may be of interest to you. If you consent to us contacting you for
        this purpose, please tick below to say how you would like us to contact
        you:
      </p>
    </main>
  );
}
