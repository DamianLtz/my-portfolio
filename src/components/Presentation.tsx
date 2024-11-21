"use client"

import Image from "next/image";
import Arrow from "@/img/icons/arrow.svg";
import { ButtonWithBorders } from "./common/ButtonWithBorders";
import { handleScrollTo } from "@/utils/functions";

export const Presentation = () => {
  return (
    <div className="grid items-center h-screen mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-12 relative">
          <div className="title-presentation">
            <p className="text-2xl md:ps-4 md:pr-4 pb-2 lg:ps-12 lg:pb-10">
              Damian Laterza
            </p>
            <div className="lg:w-3/4 mx-auto">
              <h1 className="flex flex-col md:items-center text-[40px] font-light lg:text-[80px] tracking-[0.15em]">
                Frontend <span className="md:ps-[300px]">Developer</span>
              </h1>
              <div className="effect"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <ButtonWithBorders text={"Mis Proyectos"} onClickFn={handleScrollTo}/>
        <Image
          src={Arrow}
          alt="Ir a Mis Proyectos"
          className="pb-4 lg:pb-0 mt-5 w-16 h-24 lg:w-12 lg:h-16"
        />
      </div>
    </div>
  );
};
