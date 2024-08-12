import { motion } from 'framer-motion';
import { intro } from '../../lib/data';
import { useSectionInView } from '../../hooks/hooks';


export default function Inicio(){
    const { ref } = useSectionInView('Inicio');
    
    return(
        <div className="relative h-fit justify-center bg-cover bg-center bg-[url('../../public/main_photo.jpg')]" id='inicio' ref={ref}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-[50%] sm:w-full flex flex-col h-[90vh] justify-center pl-20 pb-[10rem] sm:pl-[1rem] sm:pb-[2rem] ">
                <div
                className="text-8xl sm:text-6xl font-bold text-start drop-shadow-xl text-white">
                    {intro[0].titulo}
                </div>
                <p className="text-2xl sm:text-lg text-white drop-shadow-xl mt-2 text-justify pr-2 mr-2 p-1 sm:w-[80vw]">
                    {intro[0].descripcion}
                </p> 
            </motion.div>

            <div className="flex bottom-7 absolute w-full justify-center items-center">
                <div className="animate-bounce">
                <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
                </div>
            </div>
        </div>
    )
}