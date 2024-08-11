import Image from 'next/image'

export default function NavBar(){
    return(
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
    )
}