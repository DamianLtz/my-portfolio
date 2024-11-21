import Link from "next/link";
import Image from "next/image";

import GitHub from "@/img/icons/githubLogoCircle.svg";

export const CardGitHub = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <div className="flex justify-center pb-24 lg:pb-48">
          <Link
            href="https://github.com/DamianLtz"
            className="bg-[#151517] group rounded-lg w-full max-w-[448px] sm:w-[448px] relative transition-colors p-6 sm:p-8 z-10">
            <p>¿Ver más proyectos de frontend?</p>
            <div className="flex items-center pt-2">
              <p className="mr-2 font-semibold text-[#1e50f4]">Ir a GitHub</p>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all text-[#1e50f4] group-hover:ms-1 duration-300">
                <path
                  d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                  fill="currentColor"
                />
                <path
                  d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                  fill="currentColor"
                />
                <path
                  d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <Image
              src={GitHub}
              alt="GitHub Logo"
              className="absolute bottom-0 right-3 z-[-1]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
