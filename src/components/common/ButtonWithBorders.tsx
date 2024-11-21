export const ButtonWithBorders = ({ text, onClickFn }: { text: string, onClickFn: any }) => {
  return (
    <button className="btn-proyects" onClick={() => onClickFn("proyectos")}>
      {text}
      <span className="BorderTopBottom"></span>
      <span className="BorderLeftRight"></span>
    </button>
  );
};
