import Section from "../styles/Section";
import H2 from "../styles/Subtitulo";
import Form, { Input } from "../styles/Form";

const Formulario = () => {
  // Declarar uma nova variavel de dados com state e atribuir objetos

  return (
    <Section>
      <H2>Entre em contato</H2>
      <Form>
        {/* Inputs (coluna esquerda) */}
        <div className="flex flex-col gap-4">
          <Input type="text" name="name" placeholder="Seu nome" />
          <Input type="email" name="email" placeholder="Seu email" />
          <Input type="text" name="number" placeholder="Seu número" />
          <Input type="text" name="assunto" placeholder="Assunto" />
        </div>

        {/* Textarea + botão (coluna direita) */}
        <div className="flex flex-col gap-4 justify-between h-full">
          <textarea
            className="p-2 m-1 border rounded-2xl border-[#6ad0ff] bg-slate-950 placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            type="text"
            name="msg"
            rows="7"
            placeholder="Sua mensagem"
          />
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <button
              className="p-2 w-24 text-center border rounded-2xl border-[#6ad0ff] bg-slate-950 hover:bg-[#6ad0ff73] transition "
              type="submit"
            >
              Enviar
            </button>
          </div>
        </div>
      </Form>
    </Section>
  );
};

export default Formulario;
