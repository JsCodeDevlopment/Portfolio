import emailjs from "@emailjs/browser";
import { publicKey, serviseId, templateId } from "../../servises/emailJs";
import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";

export function ContactForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(serviseId, templateId, form.current, publicKey).then(
        (result) => {
          setNome("");
          setEmail("");
          setDescription("");
          toast.success(`${result.text}! Mensagem enviada com sucesso! ✌`, {autoClose: 1000 * 3})
        },
        (error) => {
          toast.error(`${error.text}! Infelizmente algo deu errado 🤦‍♂️`, {autoClose: 1000 * 3})
        }
      );
    }
  };

  return (
      <form
        ref={form}
        onSubmit={sendEmail}
        id="contact-form"
        className="flex w-1/2 flex-col gap-3 max-lg:w-4/5 max-lg:justify-center max-md:w-full text-xs" >
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          name="user_name"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Jhon Doe"
          className="input input-bordered w-full"
          type="text" />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jhondoe@email.com"
          className="input input-bordered w-full"
          type="email"
          required />
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          placeholder="Vamos trocar ideias?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea textarea-bordered w-full"
          name="message"
          required>
        </textarea>
        <button
          className="bg-gradient-to-r transition-all from-first to-second text-white font-bold py-2 px-4 rounded-md hover:scale-105"
          type="submit">
          Enviar
        </button>
      </form>
  );
}
