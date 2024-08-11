"use client";
import React from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import { intro } from '../../lib/data';
import { sobreNosotros } from '../../lib/data';

export default function Home() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  
  return (
    <main className="flex flex-col relative">
      <header id='inicio'>
        <nav className="flex justify-between w-full items-center rounded-b-lg p-1 px-4 bg-asparagus-400 sm:flex-col z-[999] fixed top-0">
          <Image src={'/logo_header.png'} width={70} height={50}>
          </Image>
          <div className="flex gap-4 sm:p-1">
            <a href="#inicio" className="text-white drop-shadow-lg hover:text-asparagus-200">Inicio</a>
            <a href="#nosotros" className="text-white drop-shadow-lg hover:text-asparagus-200">Nosotros</a>
            <a href="#" className="text-white drop-shadow-lg hover:text-asparagus-200">Contacto</a>
          </div>
        </nav>
      </header>
       <div className="relative h-fit justify-center bg-cover bg-center bg-[url('../../public/main_photo.jpg')] ">
          {/* Capa superpuesta */}
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


    <div className="sm:min-h-[150vh] h-screen bg-asparagus bg-cover bg-center">
        <motion.div
          ref={ref}
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
                <p className="text-xl sm:text-lg text-white drop-shadow-xl mt-4 text-justify pr-2 mr-2 w-[50%] sm:w-[100%]">
                  {sobreNosotros.descripcion_1}
                </p> 

                <p className="text-xl sm:text-lg text-white drop-shadow-xl mt-4 text-justify pr-2 mr-2 w-[50%] sm:w-[100%]">
                  {sobreNosotros.descripcion_2}
                </p> 
              </div>
            </div>

        </motion.div>
    </div>

    </main>
  );
}
