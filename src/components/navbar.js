"use client";
import Image from 'next/image'
import Link from 'next/link';
import { useSectionInView } from '../../hooks/hooks';
import { useContext } from 'react';
import clsx from "clsx";
import {motion} from 'framer-motion';
import { ActiveSectionContext } from '../../context/activeSectionContext';
import { links } from '../../lib/data';

export default function NavBar(){
    const { activeSection, setActiveSection, setTimeOfLastClick } = useContext(ActiveSectionContext)

    return(
        <header>
            <nav className="flex justify-between w-full items-center rounded-b-lg p-1 px-4 bg-pistachio sm:flex-col z-[999] fixed top-0">
                <Image src={'/logo_header.png'} width={70} height={50} alt='logo'>
                </Image>
                <ul className="flex gap-4 sm:p-1 text-sm flex-wrap items-center justify-center">
                    {
                        links.map((link, index) => {
                            return(
                                <motion.li
                                    key={index}
                                >
                                    <Link href={link.hash} className={clsx("drop-shadow-lg", {
                                        "font-bold text-pistachio-900": activeSection === link.nombre,
                                        "text-asparagus-200": activeSection !== link.nombre
                                    }) }
                                    onClick={() => {
                                        setActiveSection(link.nombre);
                                        setTimeOfLastClick(Date.now());
                                    }}>
                                            {link.nombre}
                                    </Link>
                                </motion.li>
                            )
                        })
                    }
                </ul>
            </nav>
      </header>
    )
}