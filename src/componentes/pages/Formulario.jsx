import Section, { P } from "../styles/Section";
import H2 from "../styles/Subtitulo";
import Form, { Input } from "../styles/Form";
import { useState } from "react";

//Biblioteca AXIOS para coectar ao API
import axios from "axios";

const Formulario = () => {
  // Declarar uma nova variavel de dados com state e atribuir objetos
  // Este useState cria uma variável chamada data que guarda todos os valores dos campos do formulário como um objeto.
  const [data, setData] = useState({
    name: "",
    email: "",
    telefone: "",
    assunto: "",
    msg: "",
  });

  // Declarar a variavel para receber a mensagem
  const [message, setMessage] = useState("");

  //Receber todos os valores dos campos do formulario
  const valorInput = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });
  // e → é o evento do input (por exemplo, digitar no campo).
  // ...data : copia todos os campos anteriores (para não perder o conteúdo dos outros inputs)
  // e.target.name → acessa o nome do campo (como "email" ou "msg").
  // e.target.value → pega o valor digitado.
  // [e.target.name]: e.target.value → define dinamicamente a propriedade do objeto data com base no nome do campo

  const sendMsg = async (e) => {
    e.preventDefault(); //para bloquear o recarregamento da pagina

    // Manipular os dados recebidos, por exemplo, enviar os dados para API
    // Concatenar e imprimir utilizando Template strings
    console.log(`Nome: ${data.name}`);
    console.log(`E-mail: ${data.email}`);
    console.log(`Telefone: ${data.telefone}`);
    console.log(`Assunto: ${data.assunto}`);
    console.log(`Conteudo: ${data.msg}`);

    // Criar a constante com os dados do cabeçalho
    const headers = {
      headers: {
        // Indicar que sera enviado os dados em formato de objeto
        "Content-Type": "application/json",
      },
    };

    // Fazer a requisição para o servidor utilizando axios, indicando o método da requisição, o endereço, enviar os dados do formulário e o cabeçalho
    await axios
      .post(`${process.env.REACT_APP_API_URL}/message`, data, headers)
      .then((response) => {
        // acessa o then qnd a API retornar status 200
        // Atribuir a msg no state mensage
        setMessage(response.data.message);
      })
      .catch((err) => {
        if (err.response) {
          setMessage(err.response.data.message);
        } else {
          setMessage("Erro de conexão com o servidor");
        }
      });
  };

  return (
    <Section>
      <H2>Entre em contato</H2>

      {/* Imprimir a mensagem retornada da API */}
      {message ? <p>{message}</p> : ""}

      {/* Início do formulário, executar o onSubmit quando usuário clicar no botão submit e chamar a funcao sendMsg */}
      <Form onSubmit={sendMsg}>
        {/* Inputs (coluna esquerda) */}
        <div className="flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder="Seu nome"
            //onChange={(e) => setData({ ...data, name: e.target.value })}
            onChange={valorInput}
            required //campo obrigatório (não permite enviar vazio)
            //Criar o campo, quando o usuário digitar valor no campo, chamar com onChange a funcao valorInput
            // onChange={...} : Esse é um evento quando o valor do input muda (o usuário digita, apaga, cola..)
            // (e) => : Essa é uma função anônima que recebe o evento (geralmente chamado de e ou event)
          />
          <Input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            onChange={valorInput}
            required //campo obrigatório (não permite enviar vazio)
          />
          <Input
            type="text"
            name="telefone"
            placeholder="Seu número"
            onChange={valorInput}
            required //campo obrigatório (não permite enviar vazio)
          />
          <Input
            type="text"
            name="assunto"
            placeholder="Assunto"
            onChange={valorInput}
            required //campo obrigatório (não permite enviar vazio)
          />
        </div>

        {/* Textarea + botão (coluna direita) */}
        <div className="flex flex-col gap-4 justify-between h-full">
          <textarea
            className="p-2 m-1 border rounded-2xl border-[#6ad0ff] bg-slate-950 placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            type="text"
            name="msg"
            rows="7"
            placeholder="Sua mensagem"
            onChange={valorInput}
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
