function Subtitulo(props) {
  return (
    <h2
      className={`mb-2 text-2xl text-[#6ad0ff] font-bold sm:text-3xl ${props.className}`}
    >
      {props.children}
    </h2>
  );
}
export default Subtitulo;
