import { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    emailjs
      .sendForm(
        "service_iywcftp",
        "template_4dcop3m",
        form.current,
        "fu7M-2WNRe-pfb2Tx"
      )
      .then(
        (result) => {
          console.log(result);
          // show the user a success message
        },
        (error) => {
          console.log(error);
          // show the user an error
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default EmailContactForm;
