import emailjs from "@emailjs/browser";
import { publicKey, serviseId, templateId } from "../../servises/emailJs";
import { FormEvent, useRef } from "react";

export function ContactForm() {
  
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(serviseId, templateId, form.current, publicKey)
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} id="contact-form" className="flex w-1/2 flex-col gap-3 max-lg:w-4/5 max-lg:justify-center max-md:w-full text-xs">
      <label htmlFor="name">Nome</label>
      <input
        id="name"
        name="user_name"
        placeholder="Jhon Doe"
        className="input input-bordered w-full"
        type="text" />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="user_email"
        placeholder="jhondoe@email.com"
        className="input input-bordered w-full"
        type="email" required/>
      <label htmlFor="message">Mensagem</label>
      <textarea
        id="message"
        placeholder="Vamos trocar ideias?"
        className="textarea textarea-bordered w-full"
        name="message" required></textarea>
      <button
        className="bg-gradient-to-r from-first to-second text-white font-bold py-2 px-4 rounded-md hover:bg-background"
        type="submit">Enviar</button>
    </form>
  );
}
