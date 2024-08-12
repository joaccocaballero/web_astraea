import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { sobreNosotros } from '../../lib/data';
import { HoverEffect } from './ui/card-hover-effect';

export default function Nosotros(){
    const nosotrosRef = useRef(null);
    const { scrollYProgress } = useScroll({
    target: nosotrosRef,
    offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return(
    <div className="sm:h-[210vh] md:h-[200vh] h-[120vh] pb-4 bg-asparagus bg-cover bg-center">
        <motion.div
        ref={nosotrosRef}
        id="nosotros"
        style={{
            scale: scaleProgess,
            opacity: opacityProgess,
        }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        >
            <div className="w-full pt-[3rem] flex flex-col h-fit pl-10 pb-[10rem] sm:pl-[1rem] sm:pb-[2rem] ">
                <h1 className="text-5xl sm:text-4xl font-bold text-start drop-shadow-xl text-white">Sobre Nosotros</h1>

                <div className='flex sm:flex-col mt-2 w-full justify-between gap-[2rem] mb-5'>
                    <p dangerouslySetInnerHTML={{ __html: sobreNosotros.descripcion_1 }} className="text-lg sm:text-md text-white drop-shadow-xl mt-4 text-justify pr-2 mr-2 w-[50%] sm:w-[100%]">
                    </p> 

                    <p dangerouslySetInnerHTML={{ __html: sobreNosotros.descripcion_2 }} className="text-lg sm:text-md text-white drop-shadow-xl mt-4 text-justify pr-2 mr-2 w-[50%] sm:w-[100%]">
                    </p> 
                </div>

                <div className="flex w-full px-8 sm:px-0 mb-2">
                    <HoverEffect items={projects} />
                </div>
            </div>
        </motion.div>
    </div>
    )
}


export const projects = [
  {
    title: "¿Cuál es su propósito?",
    description:
      "Acercar el mundo de la diplomacia y las relaciones internacionales a estudiantes.",
  },
  {
    title: "¿Cuál es su alcance?",
    description:
      "Estudiantes universitarios y recientes egresados.",
  },
  {
    title: "¿Cuáles son sus objetivos?",
    description:
      "Incentivar nuevas ideas en las juventudes, incentivar el estudio de Relaciones Internacionales con salida a la Diplomacia, fomentar la resolución de conflictos y problemáticas tanto nacionales como internacionales de formas creativas e innovadoras.",
  },
  {
    title: "¿Cuáles son sus estrategias?",
    array: [
        "Organizar Modelos de Naciones Unidas",
        "Visitar y entablar relaciones con embajadas y organismos internacionales",
        "Organizar eventos e instancias de intercambio de opiniones",
        "Difundir información y recursos sobre diplomacia y relaciones internacionales",
        "Fomentar la participación en concursos y desafíos relacionados con la diplomacia y las relaciones internacionales",
        "Establecer alianzas con otras organizaciones y proyectos similares"
    ]
  },
  {
    title: "¿Cuáles son sus resultados esperados?",
    array: [
        "Mayor conocimiento y comprensión de las relaciones internacionales",
        "Desarrollo de habilidades esenciales tanto para el mundo universitario como el laboral",
        "Mayor acceso a organizaciones nacionales e internacionales",
        "Fomento de la comprensión mutua y el diálogo"
    ]
  }
];
