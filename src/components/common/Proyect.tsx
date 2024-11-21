"use client";

import { IProject } from "@/utils/types";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Tag } from "./Tag";
import { ButtonGoTo } from "./ButtonGoTo";

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

export const Proyect = ({
  image,
  title,
  year,
  description,
  designer,
  designerLink,
  dev,
  devLink,
  websiteLink,
  wip,
}: IProject) => {
  return (
    <div className="py-20 lg:py-48">
      <div className="grid grid-cols-12 gap-y-6 md:gap-y-0 md:gap-x-6">
        <div className="col-span-12 md:col-span-5 lg:col-span-6 2xl:col-span-7 self-center">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}>
            <motion.div variants={cardVariants}>
              <img src={image} alt={title} className="img-proyects" />
            </motion.div>
          </motion.div>
        </div>
        <div className="col-span-12 md:col-span-7 lg:col-span-6 2xl:col-span-5">
          <div className="flex lg:justify-end">
            <div className="space-y-4">
              <div className="flex items-center">
                <h2 className="lg:text-[28px]">{title}</h2>
                <Tag year={year} />
              </div>
              {wip && (
                <span className="inline-block border border-violet-700 rounded-md">
                  <p className="text-xs px-2 py-1">En progreso</p>
                </span>
              )}
              <p className="py-4">{description}</p>
              <div className="flex flex-col gap-y-2">
                {designerLink && (
                  <p>
                    Diseñado por{" "}
                    <span>
                      <Link href={designerLink} className="text-design">
                        {designer}
                      </Link>
                    </span>
                  </p>
                )}
                {dev && (
                  <p>
                    Desarrollado junto con{" "}
                    {devLink ? (
                      <span>
                        <Link href={devLink} className="text-design">
                          {dev}
                        </Link>
                      </span>
                    ) : (
                      <span>{dev}</span>
                    )}
                  </p>
                )}
              </div>
              {websiteLink ? (
                <ButtonGoTo content="Ir al sitio" link={websiteLink} />
              ) : (
                <div className="flex items-center gap-x-2">
                  <p>Link al sitio: </p>
                  <span className="inline-block border border-violet-700 rounded-md">
                    <p className="text-xs px-2 py-1 cursor-default">Proximamente</p>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
