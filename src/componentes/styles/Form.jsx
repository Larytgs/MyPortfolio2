function Form(props) {
  return (
    <form
      onSubmit={props.onSubmit} // necessário para funcionar corretamente o envio do formulario, pois ele foi customizado
      className="m-5 text-left grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[1000px] mx-auto"
    >
      {props.children}
    </form>
  );
}

function Input(props) {
  return (
    <input
      className="p-2 m-1 border rounded-2xl border-[#6ad0ff] bg-slate-950 placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      {...props}
    ></input>
  );
}

export default Form;
export { Input };
