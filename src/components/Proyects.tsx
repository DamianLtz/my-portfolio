"use client";

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { useEffect, useState } from "react";
import { Proyect } from "./common/Proyect";
import { IProject } from "@/utils/types";
import { Spinner } from "./common/Spinner";

import FrontEnd from "@/img/icons/front.png";
import Image from "next/image";

type WithId<T> = T & { id: string };

export const Proyects = () => {
  const [data, setData] = useState<WithId<IProject>[]>([]);


  const fetchData = async (): Promise<WithId<IProject>[]> => {
    try {
      const querySnapshot = await getDocs(collection(db, "proyectos"));
      
      const data: WithId<IProject>[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as IProject,
      }));
  
      console.log("Datos obtenidos:", data);
      return data;
    } catch (error) {
      console.error("Error al obtener los documentos: ", error);
      return [];
    }
  };

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };

    getData();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <h2 className="text-4xl pr-3" id="proyectos">
          Proyectos
        </h2>
        <Image
          src={FrontEnd}
          alt="Icono proyectos front end"
          className="icons-sections"
        />
      </div>
      {data.length > 0 ? (
        data
          .sort((a, b) => b.order! - a.order!)
          .map((proyect) => {
            return <Proyect key={proyect.id} {...proyect} />;
          })
      ) : (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      )}
    </>
  );
};
