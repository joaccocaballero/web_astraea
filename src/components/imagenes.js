
"use client";

import { Carousel } from "flowbite-react";

export default function Imagenes() {
  return (
    <div className="h-[100vh] sm:h-[50vh] w-full p-4 bg-asparagus-900 flex flex-col gap-5">
        <Carousel className="mt-4 h-full">
            <div className="flex justify-center items-center h-full">
            <img src="/galeria/1.jpg" alt="..." className="h-full w-auto object-cover" />
            </div>
            <div className="flex justify-center items-center h-full">
            <img src="/galeria/2.jpg" alt="..." className="h-full w-auto object-cover" />
            </div>
            <div className="flex justify-center items-center h-full">
            <img src="/galeria/3.jpg" alt="..." className="h-full w-auto object-cover" />
            </div>
            <div className="flex justify-center items-center h-full">
            <img src="/galeria/4.jpg" alt="..." className="h-full w-auto object-cover" />
            </div>
            <div className="flex justify-center items-center h-full">
            <img src="/galeria/5.jpg" alt="..." className="h-full w-auto object-cover" />
            </div>
            <div className="flex justify-center items-center h-full">
            <img src="/galeria/6.jpg" alt="..." className="h-full w-auto object-cover" />
            </div>
            <div className="flex justify-center items-center h-full">
            <img src="/galeria/7.jpg" alt="..." className="h-full w-auto object-cover" />
            </div>
            <div className="flex justify-center items-center h-full">
            <img src="/galeria/8.jpg" alt="..." className="h-full w-auto object-cover" />
            </div>
            <div className="flex justify-center items-center h-full">
            <img src="/galeria/9.jpg" alt="..." className="h-full w-auto object-cover" />
            </div>
            <div className="flex justify-center items-center h-full">
            <img src="/galeria/10.jpg" alt="..." className="h-full w-auto object-cover" />
            </div>
            <div className="flex justify-center items-center h-full">
            <img src="/galeria/11.jpg" alt="..." className="h-full w-auto object-cover" />
            </div>
            <div className="flex justify-center items-center h-full">
            <img src="/galeria/12.jpg" alt="..." className="h-full w-auto object-cover" />
            </div>
        </Carousel>
    </div>
  );
}
