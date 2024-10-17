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
    </main>
  );
}
