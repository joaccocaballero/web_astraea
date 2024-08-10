

export default function Home() {
  return (
    <main className="flex flex-col">
       <div className="relative h-screen justify-center bg-cover bg-center bg-[url('../../public/main_photo.jpg')] ">
          {/* Capa superpuesta */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          
          <div className="w-[50%] sm:w-full flex flex-col h-screen justify-center pl-20 pb-[10rem] sm:pl-[1rem] sm:pb-[2rem] ">
            <h1 className="text-8xl sm:text-6xl font-bold text-start drop-shadow-xl text-white">Grupo Astraea</h1>
            <p className="text-2xl sm:text-lg text-white drop-shadow-xl mt-2 text-justify pr-2 mr-2 p-1 sm:w-[80vw]">
              Acercando jóvenes al mundo de la diplomacia y las relaciones internacionales
            </p> 
          </div>

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


      <div className="relative h-screen bg-asparagus ">
          {/* Capa superpuesta */}
          <div className="w-[50%] p-4 pt-[6rem] sm:w-full flex flex-col h-screen pl-10 pb-[10rem] sm:pl-[1rem] sm:pb-[2rem] ">
            <h1 className="text-6xl sm:text-4xl font-bold text-start drop-shadow-xl text-white">Sobre Nosotros</h1>

            <h1 className="text-2xl sm:text-xl text-start drop-shadow-xl mt-4 font-light text-white">Nuestra Historia</h1>
            
            <p className="text-2xl sm:text-lg text-white drop-shadow-xl mt-4 text-justify pr-2 mr-2 sm:w-[80vw]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tenetur enim magnam placeat sunt nostrum, at quidem aperiam rem maxime eos consequuntur eius totam reprehenderit quas veritatis. Ipsum, facere quam.
            </p> 
          </div>

      </div>
    </main>
  );
}
