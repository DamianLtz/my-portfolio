import Link from "next/link";

export const ButtonGoTo = ({
  link,
  content,
}: {
  link?: string;
  content: string;
}) => {
  return (
    <Link
      href={`${link}`}
      role="button"
      className="button-proyect text-white rounded-[50rem] px-10 py-2">
      {content}
    </Link>
  );
};
