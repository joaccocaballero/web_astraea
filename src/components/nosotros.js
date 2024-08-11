import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { sobreNosotros } from '../../lib/data';


export default function Nosotros(){
    const nosotrosRef = useRef(null);
    const { scrollYProgress } = useScroll({
    target: nosotrosRef,
    offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return(
    <div className="sm:min-h-[150vh] h-screen bg-asparagus bg-cover bg-center">
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
            <div className="w-full pt-[3rem] flex flex-col h-screen pl-10 pb-[10rem] sm:pl-[1rem] sm:pb-[2rem] ">
            <h1 className="text-6xl sm:text-4xl font-bold text-start drop-shadow-xl text-white">Sobre Nosotros</h1>

            <div className='flex sm:flex-col mt-2 w-full justify-between gap-[2rem] mb-5'>
                <p dangerouslySetInnerHTML={{ __html: sobreNosotros.descripcion_1 }} className="text-lg sm:text-md text-white drop-shadow-xl mt-4 text-justify pr-2 mr-2 w-[50%] sm:w-[100%]">
                </p> 

                <p dangerouslySetInnerHTML={{ __html: sobreNosotros.descripcion_1 }} className="text-lg sm:text-md text-white drop-shadow-xl mt-4 text-justify pr-2 mr-2 w-[50%] sm:w-[100%]">
                </p> 
            </div>
            </div>
        </motion.div>
    </div>
    )
}