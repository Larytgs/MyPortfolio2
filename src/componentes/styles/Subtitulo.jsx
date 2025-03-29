function Subtitulo(props) {
  return (
    <h2 className={`mb-2 text-3xl text-[#6ad0ff] font-bold ${props.className}`}>
      {props.children}
    </h2>
  );
}
export default Subtitulo;
