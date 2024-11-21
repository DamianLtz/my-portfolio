export const Tag = ({ year }: { year: number }) => {
  return (
    <p className="relative bg-transparent border-transparent px-2 py-1 rounded-lg mx-4 cursor-default shrink-0">
      {year}
      <span className="BorderTopBottom"></span>
      <span className="BorderLeftRight"></span>
    </p>
  );
};
