export function ContactForm() {
  return (
    <form className="flex w-1/2 flex-col gap-3 max-lg:w-4/5 max-lg:justify-center max-md:w-full">
      <label htmlFor="name">Nome</label>
      <input
        id="name"
        placeholder="Jhon Doe"
        className="input input-bordered w-full"
        type="text" />
      <label htmlFor="email">Email</label>
      <input
        id="email"
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
